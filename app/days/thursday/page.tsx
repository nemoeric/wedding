import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";

export default function Page () {
  return (
    <div className="bg-lightgreen">
      <div className="hero min-h-[300px]" style={{backgroundImage: 'url(https://a0.muscache.com/im/pictures/miso/Hosting-731060451412011457/original/42e9eae0-413c-4479-afad-f15004802863.jpeg?im_w=960)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-serif">Agenda</h1>
            {/* <p className="mb-5">Jeudi 31.08, de 17h à 20h.</p> */}
          </div>
        </div>
      </div>
      <Section>
        <Container>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-right font-serif">
              <h1 className="text-3xl ">
                JEUDI
              </h1>   
              <div className="text-5xl text-white	">31.08.23</div>

            </div>
            <div className="col-span-2">
              <div>17h</div>
              <div>18h</div>
              <div>19h</div>
            </div>

          </div>
        </Container>
      </Section>
    </div>

  )
}