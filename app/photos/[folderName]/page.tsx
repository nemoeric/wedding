import CldImage from "../cloudImage";
import cloudinary from "@/utils/cloudinary";
import Carousel from "./Carousel";
import Lightbox from "./Lightbox";

const imageFolder = async ({
  params,
}: {
  params: {
    folderName: string;
  };
}) => {
  const folderName = params.folderName;

  const result = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: folderName,
    max_results: 300,
  });
  console.log("result", result);
  return (
    <div className="py-2 sm:py-0">
      <Lightbox result={result} />
    </div>
  );
};
export default imageFolder;
