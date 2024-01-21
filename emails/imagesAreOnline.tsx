import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const ImagesAreOnline = ({
  user = {
    firstName: "Eric",
  },
  url = "https://www.nemo-stanton.fr",
}: {
  user: any;
  url: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>{`Les photos sont en ligne!`}</Preview>
      <Tailwind>
        <Body className=" bg-slate-50 my-auto mx-auto font-sans">
          <Container className="bg-[#f4f0ec] border border-solid border-[#eaeaea] bg-red rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section>
              <Img
                src={`https://www.nemo-stanton.fr/_next/image?url=%2Flogo.png&w=128&q=75`}
                width="50"
                height="50"
                alt="Mariage Nemo Stanton"
                className="mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-serif p-0 mt-6 mb-0 text-center">
              Les photos sont en ligne !
            </Heading>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Bonjour {user.firstName},
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Les photos sont enfin en ligne, et quel plaisir de les partager
              avec vous.
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              On en profite pour vous souhaiter à tous une belle année 2024, et
              on espère {`qu'une petite dose de soleil par image`} vous fera
              autant de bien {`qu'à`} nous !
            </Text>

            <Text className="text-black font-sans text-[14px] leading-[24px]">
              {`On espère vous revoir très vite`}
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                // className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                className="rounded-sm bg-slate-300 font-sans uppercase text-sm text-black"
                href={url}
              >
                Accéder
              </Button>
            </Section>
            <Text className="text-black text-center font-sans text-xs leading-[24px]">
              Coded with ❤️ by Nemo
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default ImagesAreOnline;
