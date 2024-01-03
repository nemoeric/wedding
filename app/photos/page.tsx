import Container from "@/components/Container";
import CldImage from "./cloudImage";

const ComingSoon = () => {
  return (
    <Container>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-serif">Photos coming Soon...</h1>
        <CldImage
          width="600"
          height="600"
          alt="Picture of the author"
          src="bridesgettingready/E_EDay2-21_paz3ou"
        />
      </div>
    </Container>
  );
};
export default ComingSoon;
