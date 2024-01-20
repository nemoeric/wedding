import CldImage from "../cloudImage";
import cloudinary from "@/utils/cloudinary";
import Carousel from "./Carousel";
import Lightbox from "./Lightbox";
import { s3Client } from "@/libs/aws";
import { ListObjectsCommand } from "@aws-sdk/client-s3";

const imageFolder = async ({
  params,
}: {
  params: {
    folderName: string;
  };
}) => {
  const folderName = params.folderName;

  let data = await s3Client.send(
    new ListObjectsCommand({
      Bucket: "gondalier",
      Prefix: `wedding/${folderName}`,
    })
  );
  let imageUrls: any = data.Contents?.filter((file) => {
    // console.log("file", file.Key);
    // @ts-ignore
    const fileExtension = file.Key?.split(".").pop().toLowerCase() || "";
    return ["jpg", "jpeg", "png", "gif", "bmp"].includes(fileExtension);
  })
    .sort((a, b) => {
      // Extract the numbers from the file names
      const regex = /(\d+)-?(\d+)?\.(\w+)$/;
      // @ts-ignore
      const [, aMainNum, aSubNum] = a.Key.match(regex) || [];
      // @ts-ignore
      const [, bMainNum, bSubNum] = b.Key.match(regex) || [];

      // Compare the main numbers first
      let diff = parseInt(aMainNum, 10) - parseInt(bMainNum, 10);
      if (diff !== 0) return diff;

      // If main numbers are equal, compare the sub numbers (if they exist)
      if (aSubNum && bSubNum) {
        return parseInt(aSubNum, 10) - parseInt(bSubNum, 10);
      } else if (aSubNum) {
        return 1; // a has a sub number, b doesn't
      } else if (bSubNum) {
        return -1; // b has a sub number, a doesn't
      } else {
        return 0; // both don't have sub numbers
      }
    })
    .map((file) => {
      const fileUrl = `https://gondalier.s3.${process.env.AWS_REGION}.amazonaws.com/${file.Key}`;
      return fileUrl;
    });

  console.log("imageUrls", imageUrls);
  return (
    <div>
      <div className="py-2 sm:py-0">
        <Lightbox imageUrls={imageUrls} />
      </div>
    </div>
  );
};
export default imageFolder;
