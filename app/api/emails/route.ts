import resend from "@/libs/resend";
import prisma from "@/prisma/prisma";
import { User } from "@prisma/client";
var jwt = require("jsonwebtoken");
import { ImagesAreOnline } from "@/emails/imagesAreOnline";
import { NextApiResponse } from "next";

export async function GET(request: Request, NextApiResponse: NextApiResponse) {
  const users = await prisma.user.findMany({});
  const attended = users.filter((user) => {
    return (
      user.thursdayWillAttend ||
      user.fridayWillAttend ||
      user.saturdayWillAttend
    );
  });
  const attendedNot = users.filter((user) => {
    return (
      !user.thursdayWillAttend ||
      !user.fridayWillAttend ||
      !user.saturdayWillAttend
    );
  });
  const hasEmail = users.filter((user) => user.email);

  const eric = users.find((user) => user.email === "eric.nemo123@gmail.com");
  console.log(eric);

  const sendEmail = async (user: User) => {
    var token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });
    await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: [user.email],
      bcc: ["hello@nemo-stanton.fr"],
      subject: "Photos - Mariage Nemo & Stanton",
      react: ImagesAreOnline({
        user,
        url: process.env.NEXT_PUBLIC_URL + "/api/auth/verify?token=" + token,
      }),
    });
  };
  if (eric) await sendEmail(eric);

  return NextApiResponse.json({
    eric,
  });
}
