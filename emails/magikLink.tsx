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

export const MagicLink = ({
  user = {
    firstName: "Eric"
  },
  url = "https://www.nemo-stanton.fr"
}:{
  user: any
  url: string
}) => {

  return (
    <Html>
      <Head />
      <Preview>{`Votre lien de connexion`}</Preview>
      <Tailwind>
        <Body className=" bg-slate-50 my-auto mx-auto font-sans">
          <Container className="bg-[#f4f0ec] border border-solid border-[#eaeaea] bg-red rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section>
              <Img
                  src={`https://www.nemo-stanton.fr/_next/image?url=%2FlogoTr.png&w=128&q=75`}
                  width="50"
                  height="50"
                  alt="Mariage Nemo Stanton"
                  className="mx-auto"
                />
            </Section>
            {/* <Section className="mt-[32px]">
              <div className='flex'>
                <Img
                  src={`/qbv_palm.jpeg`}
                  width="150"
                  height="150"
                  alt="Mariage Nemo Stanton"
                  className="my-0 mx-auto rounded-full translate-x-10 z-10"
                />
                <Img
                  src={ user.image || "https://www.nemo-stanton.fr/_next/image?url=%2Fqbv_palace_banner.jpg&w=100&q=75"}
                  width="150"
                  height="150"
                  alt="Mariage Nemo Stanton"
                  className="my-0 mx-auto rounded-full z-20"
                />
                <Img
                  src={`https://www.nemo-stanton.fr/_next/image?url=%2Flizandro.jpg&w=100&q=75`}
                  width="150"
                  height="150"
                  alt="Mariage Nemo Stanton"
                  className="my-0 mx-auto rounded-full -translate-x-10 z-30"
                />
              </div>
            </Section> */}
            <Heading className="text-black text-[24px] font-serif p-0 mt-6 mb-0 text-center">
              Votre lien de connexion
            </Heading>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Bonjour {user.firstName},
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              En cliquant sur le lien ci-dessous, vous accéderez à votre espace invité permettant de mettre à jour vos informations de présence au mariage.
            </Text>
            
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              {`Merci d'avance !`}
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                // className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                className="rounded-sm bg-slate-300 font-sans uppercase text-sm text-black"
                href={url}
              >
                Se connecter
              </Button>
            </Section>
            <Text className=" text-center font-sans text-xs leading-[24px]">
              Coded with ❤️ by Nemo
            </Text>
          </Container>

        </Body>
      </Tailwind>
    </Html>
  );
};
export default MagicLink;