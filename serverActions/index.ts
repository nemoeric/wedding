"use server";
import prisma from "@/prisma/prisma";
import {
  getUserByEmail,
  updateUser,
  createUser,
  getUserByID,
} from "@/prisma/user";
import resend from "@/libs/resend";
import { MagicLink } from "@/emails/magikLink";
import { SaturdayConfirmation } from "@/emails/saturday/Confirmation";

import { InviteToWebsite } from "@/emails/InviteToWebsite";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/libs/aws";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

var jwt = require("jsonwebtoken");

export const handleFormLogin = async (formData: FormData) => {
  const email = formData.get("email");
  const user = await getUserByEmail(email);

  if (user != null) {
    try {
      var token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "6h",
      });
      await resend.emails.send({
        from: process.env.RESEND_FROM as string,
        to: [user.email],
        bcc: ["hello@nemo-stanton.fr"],
        subject: "Connexion - Mariage Nemo & Stanton",
        react: MagicLink({
          user,
          url: process.env.NEXT_PUBLIC_URL + "/api/auth/verify?token=" + token,
        }),
      });

      return {
        error: false,
      };
    } catch (error) {
      return {
        error: true,
        errorMessage: error,
      };
    }
  }

  return {
    error: true,
    errorMessage: "L'adresse email n'est pas reconnue",
  };
};
export const logout = async () => {
  cookies().set({
    name: "accessToken",
    value: "",
    expires: new Date("2016-10-05"),
    path: "/",
  });
  revalidatePath("/");
  return {
    error: false,
  };
};
export const handleFormRegister = async (formData: FormData) => {
  const email = formData.get("email");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  const user = await createUser({
    email,
    firstName,
    lastName,
  });

  return {
    error: false,
    user,
  };
};
export const uploadImage = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const userId = formData.get("userId") as string;
  const arrayBuffer = await file.arrayBuffer();

  const params = {
    Bucket: "gondalier", // The name of the bucket. For example, 'sample-bucket-101'.
    Key: `wedding/${userId}.jpg`, // The name of the object. For example, 'sample_upload.txt'.
    Body: arrayBuffer, // The content of the object. For example, 'Hello world!".
    ACL: "public-read",
  };
  let user = await updateUser(userId, {
    image: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/wedding/${userId}.jpg`,
  });

  {
  }
  /* @ts-expect-error Server Component */
  let res = await s3Client.send(new PutObjectCommand(params));
  console.log("Successfully uploaded data to ");

  return {
    error: false,
    user,
  };
};
export const testServerAction = async (formData: FormData) => {
  console.log("testServerAction");
  return {
    error: false,
  };
};
export const inviteUserToWebsite = async (formData: FormData) => {
  const userId = formData.get("userId");
  const user = await getUserByID(userId);
  if (user != null) {
    try {
      var token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      await resend.emails.send({
        from: process.env.RESEND_FROM as string,
        to: [user.email],
        bcc: ["hello@nemo-stanton.fr"],
        subject: "RSVP - Mariage Nemo & Stanton",
        react: InviteToWebsite({
          user,
          url: process.env.NEXT_PUBLIC_URL + "/api/auth/verify?token=" + token,
        }),
      });

      await updateUser(user.id, { hasBeenInvited: true });
      revalidatePath("/users");
      return {
        error: false,
      };
    } catch (error) {
      return {
        error: true,
        errorMessage: error,
      };
    }
  }
  return {
    error: true,
    errorMessage: "Le userId n'est pas reconnu",
  };
};
export const savePlateChoiceForSaturday = async (formData: FormData) => {
  const userId = formData.get("userId") as string;
  const plateChoice = formData.get("choice") as string;
  const user = await getUserByID(userId);

  if (user) {
    console.log("savePlateChoiceForSaturday", plateChoice);
    await updateUser(userId, { saturdayPlateChoice: plateChoice });

    await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: [user.email],
      bcc: ["hello@nemo-stanton.fr"],
      subject: "Samedi - Mariage Nemo & Stanton",
      react: SaturdayConfirmation({ user, plateChoice }),
    });

    revalidatePath(`/users/${user.slug}/saturday`);
  }

  return {
    error: false,
  };
};
