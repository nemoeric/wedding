import Container from "@/components/Container";
import CldImage from "./cloudImage";
import cloudinary from "cloudinary";
import { redirect } from "next/navigation";

const ComingSoon = async () => {
  redirect("/photos/day1");

  return (
    <Container>
      <div className="h-screen flex justify-center items-center">
        <div className=""></div>
      </div>
    </Container>
  );
};
export default ComingSoon;
