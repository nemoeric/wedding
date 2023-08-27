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


export const NeedConfirmation = ({
  user = {
    firstName: 'Eric',
  },
  url = 'https://www.nemo-stanton.fr',
}:{
  user: any
  url: string
}) => {

  return (
    <Html className=''>
      <Head />
      <Preview>{`Choisissez votre plat !`}</Preview>
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
              Choisissez votre plat
            </Heading>
            <Text className="text-black font-sans italic underline text-center mt-1">
              Réponse souhaitée avant le 28 Août 2023
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px] mt-6">
              Bonjour {user.firstName},
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Vous recevez cet email car vous serez parmi nous le samedi 2 septembre pour le déjeuner à la plage.
            </Text>
            
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Nous aurions besoin de connaitre votre choix de plat parmis les possibilités suivantes : 
            </Text>
            <Html>
              <ul>
                <li>Tuna Tataki</li>
                <li>Angus steak</li>
                <li>Nasi Goreng ( vegie )</li>
              </ul>
            </Html>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              {`Pour répondre, rendez-vous sur votre profil sur le site.`}
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                // className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                className="rounded-sm bg-slate-300 font-sans uppercase text-sm text-black"
                href={url}
              >
                Répondre
              </Button>
            </Section>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              {`Merci d'avance !`}
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
export default NeedConfirmation;