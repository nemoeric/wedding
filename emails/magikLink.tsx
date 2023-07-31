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
  firstName = "John",
  url = "www.nemo-stanton.fr"
}:{
  firstName: string
  url: string
}) => {

  return (
    <Html>
      <Head />
      <Preview>{`Votre lien de connexion`}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://www.nemo-stanton.fr/_next/image?url=%2Fqbv_palace_banner.jpg&w=1920&q=75`}
                width="250"
                height="250"
                alt="Mariage Nemo Stanton"
                className="my-0 mx-auto rounded-full"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Votre lien magique
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Bonjour {firstName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Cliquez sur le bouton ci dessous pour accéder à votre espace invité.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={url}
              >
                Accéder
              </Button>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default MagicLink;