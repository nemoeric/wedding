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
  user = {
    firstName: "Eric"
  },
}:{
  user: any
}) => {

  return (
    <Html>
      <Head />
      <Preview>{`Merci pour votre réponse`}</Preview>
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
                  src={ user.image || "https://www.nemo-stanton.fr/_next/image?url=%2Fqbv_palace_banner.jpg&w=1920&q=75"}
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
            <Heading className="text-black font-serif p-0 mx-0 text-[24px]">
              Votre réponse a été prise en compte !
            </Heading>
            <Section>
              <div className="text-black font-sans text-[14px]">
                Bonjour {user.firstName},
              </div>
              <div className="text-black font-sans text-[14px]">
                Nous avons reçu les réponses suivantes : 
              </div>
            </Section>
            {user.hasFoodRestrictions && (
              <Section>
                <Heading as="h2" className="text-black font-serif">
                  Restrictions alimentaires
                </Heading>
                <Text className='italic'>{user.foodRestrictions}</Text>;
              </Section>
            )}
            {/* JEUDI */}
            <Section>
              <Heading as="h2" className="text-black font-serif">
                Jeudi
              </Heading>
              <div className="text-black font-sans text-[14px]">
                Présence : <span className='text-bold'>{user.thursdayWillAttend ? "Oui" : "Non"}</span> 
              </div>
              <div className="text-black font-sans text-[14px]">
                {`Besoin d'un transport`} : <span className='text-bold'>{user.thursdayWillNeedTransport ? "Oui" : "Non"}</span> 
              </div>
            </Section>
            {/* VENDREDI */}
            <Section>
              <Heading as="h2" className="text-black font-serif">
                Vendredi
              </Heading>
              <div className="text-black font-sans text-[14px]">
                Présence : <span className='text-bold'>{user.fridayWillAttend ? "Oui" : "Non"}</span> 
              </div>
              <div className="text-black font-sans text-[14px]">
                {`Besoin d'un transport`} : <span className='text-bold'>{user.fridayWillNeedTransport ? "Oui" : "Non"}</span> 
              </div>
            </Section>
            {/* SAMEDI */}
            <Section>
              <Heading as="h2" className="text-black font-serif">
                Samedi
              </Heading>

              <div className="text-black font-sans text-[14px]">
                Présence : <span className='text-bold'>{user.saturdayWillAttend ? "Oui" : "Non"}</span> 
              </div>
              <div className="text-black font-sans text-[14px]">
                {`Besoin d'un transport`} : <span className='text-bold'>{user.saturdayWillNeedTransport ? "Oui" : "Non"}</span> 
              </div>

            </Section>
            
            {
              user.fridayWillAttend ?
              <Section className="text-center mt-[32px] mb-[32px]">
                <Text className="text-black font-sans text-[14px] leading-[24px]">
                  Nous sommes ravis de bientôt vous retrouver au Portugal !
                </Text>
              </Section>
              :
              <Section className="text-center mt-[32px] mb-[32px]">
                <Text className="text-black font-sans text-[14px] leading-[24px]">
                  {`Nous sommes tristes d'apprendre que vous ne serez pas parmi nous au mariage mais nous espérons vous revoir bientôt !`}
                </Text>
              </Section>
            }
            
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