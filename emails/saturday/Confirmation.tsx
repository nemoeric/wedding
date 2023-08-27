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

export const SaturdayConfirmation = ({
  user = {
    firstName: "Eric"
  },
  plateChoice = ""
}:{
  user: any
  plateChoice: string
}) => {

  return (
    <Html>
      <Head />
      <Preview>{`Votre réponse a été prise en compte`}</Preview>
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
              Votre réponse
            </Heading>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Bonjour {user.firstName},
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Nous avons bien reçu votre réponse pour le plat du samedi midi.
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Vous avez choisi : {plateChoice}
            </Text>

            <Text className="text-black text-center font-sans text-xs leading-[24px]">
              Coded with ❤️ by Nemo
            </Text>
          </Container>

        </Body>
      </Tailwind>
    </Html>
  );
};
export default SaturdayConfirmation;