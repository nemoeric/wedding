import resend from "@/libs/resend";
import prisma from "@/prisma/prisma";
import { User } from "@prisma/client";
var jwt = require("jsonwebtoken");
import { ImagesAreOnline } from "@/emails/imagesAreOnline";
import { NextApiResponse } from "next";

export async function GET() {
  const users = await prisma.user.findMany({});
  return Response.json({ users });
}
