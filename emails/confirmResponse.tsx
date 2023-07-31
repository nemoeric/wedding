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
    <Html>
      <Head />
      <Preview>{`Merci pour votre réponse`}</Preview>
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
              Merci pour votre réponse
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Bonjour {firstName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Vos données ont été mise à jour. Vous pouvez les consulter à tout moment sur votre espace invité.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Text className="text-black text-[14px] leading-[24px]">
                Le programme reste accesible à tout moment sur le site web.
              </Text>
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={baseUrl}
              >
                Voir le programme
              </Button>
            </Section>
           {/* <Section>
              <Row>
                <Column align="right">
                  <Img className="rounded-full" src={image} width="64" height="64" />
                </Column>
                <Column align="center">
                  <Img
                    src={`${baseUrl}/static/vercel-arrow.png`}
                    width="12"
                    height="9"
                    alt="invited you to"
                  />
                </Column>
                <Column align="left">
                  <Img className="rounded-full" src={image} width="64" height="64" />
                </Column>
              </Row>
            </Section> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default ConfirmResponse;