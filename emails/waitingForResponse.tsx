import * as React from 'react';
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
} from '@react-email/components';

const baseUrl = process.env.NEXT_PUBLIC_URL

export const ConfirmResponse = ({
  firstName = "John",
  image = "https://gondalier.s3.eu-west-3.amazonaws.com/wedding/nemo-eric.webp"
}:{
  firstName: string
  image: string
}) => {

  return (
    <Html className=''>
      <Head />
      <Preview>{`Nous comptons sur votre présence !`}</Preview>
      <Tailwind>
        <Body className=" bg-slate-50 my-auto mx-auto font-sans">
          <Container className="bg-[#f4f0ec] border border-solid border-[#eaeaea] bg-red rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <div className='flex'>
                <Img
                  src={`https://www.nemo-stanton.fr/_next/image?url=%2Fqbv_palm.jpeg&w=3840&q=75`}
                  width="150"
                  height="150"
                  alt="Mariage Nemo Stanton"
                  className="my-0 mx-auto rounded-full translate-x-10 z-10"
                />
                <Img
                  src={`https://www.nemo-stanton.fr/_next/image?url=%2Fqbv_palace_banner.jpg&w=1920&q=75`}
                  width="150"
                  height="150"
                  alt="Mariage Nemo Stanton"
                  className="my-0 mx-auto rounded-full z-20"
                />
                <Img
                  src={`https://www.nemo-stanton.fr/_next/image?url=%2Flizandro.jpeg&w=3840&q=75`}
                  width="150"
                  height="150"
                  alt="Mariage Nemo Stanton"
                  className="my-0 mx-auto rounded-full -translate-x-10 z-30"
                />
              </div>

            </Section>
            <Heading className="text-black text-[24px] font-serif p-0 my-[30px] mx-0">
              Confirmez votre présence
            </Heading>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Bonjour {firstName},
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              On est ravis de vous convier à notre mariage du 31/08 au 02/09 à Sintra, Portugal.
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              On a (enfin) mis à votre disposition un site web avec toutes les informations.
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              On a besoin que vous nous confirmiez votre présence aux différentes journées, et que vous nous précisiez si vous avez des restrictions alimentaires.
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              En cliquant sur le lien, vous arriverez (authentifié) sur votre espace invité.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                // className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                className="rounded-sm bg-slate-300 text-primary font-sans uppercase text-sm"
                href={baseUrl}
              >
                Accéder à mon espace
              </Button>
            </Section>
          </Container>
          <Text className="text-white text-center font-sans text-xs leading-[24px]">
            Coded with ❤️ by Nemo
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default ConfirmResponse;