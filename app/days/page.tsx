import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";

const Block = ({
  title ,
  children,
}:{
  title: string,
  children?: any
}) => {
  return (
    <div>
      <div className="font-serif text-xl ">{title}</div>
      {children}
    </div>
  )
}


export default function Page () {
  return (
    <div className="bg-[]">
      <div className="hero min-h-[300px]" style={{backgroundImage: 'url(https://a0.muscache.com/im/pictures/miso/Hosting-731060451412011457/original/42e9eae0-413c-4479-afad-f15004802863.jpeg?im_w=960)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-serif">Agenda</h1>
            {/* <p className="mb-5">Jeudi 31.08, de 17h à 20h.</p> */}
          </div>
        </div>
      </div>
      <Section bgColor="bg-[#cdd1c3]">
        <Container>
          <div className="flex gap-4 w-full">
            <div className="text-right font-serif">
              <h1 className="text-3xl">
                JEUDI
              </h1>   
              <div className="text-5xl text-white	">31.08.23</div>
            </div>
            <div className="divider divider-horizontal after:bg-white before:bg-white"></div>
            <div className="flex-grow">

              <div className="grid gap-6">
                
                <Block title="16H30 | Départ des navettes">
                  <div>
                    Attention : les navettes partiront finalement 
                  </div>
                </Block>

                <Block title="17H00 - 20h00 | Cocktail by the pool">
                  <div>
                    Dresscode : Casual chic, vous pouvez prendre un maillot de bain pour profiter de la piscine.
                  </div>
                </Block>
    
                <Block title="20H00 - 20h30 | Navettes retours">
                  <div>
                    Les navettes vous redéposeront devant le NH Hotel Centro, Sintra.
                  </div>
                </Block>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </div>

  )
}