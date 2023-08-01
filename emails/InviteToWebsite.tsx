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


export const InviteToWebsite = ({
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
              Bonjour {user.firstName},
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              Nous espérons que vous êtes déjà en vacances et sommes ravis de bientôt vous retrouver au Portugal !
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              {`La date approchant, nous avons mis à votre disposition un site web comprenant toutes les informations essentielles. De notre côté, nous aurions besoin que vous preniez 3 minutes pour nous confirmer votre présence aux différents évènements, besoin d'un moyen de transport et potentielles restrictions alimentaires.`}
            </Text>
            <Text className="text-black font-sans text-[14px] leading-[24px]">
              En cliquant sur le lien ci-dessous, vous accéderez à votre espace invité permettant de mettre à jour ces informations.
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
export default InviteToWebsite;