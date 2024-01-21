import prisma from "@/prisma/prisma";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");
import resend from "@/libs/resend";
import ImagesAreOnline from "@/emails/imagesAreOnline";

// SIGN UP VERIFY TOKEN
export async function GET(request: Request) {
  return NextResponse.json({ message: "ok" });
}
