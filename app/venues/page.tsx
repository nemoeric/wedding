import Container from "@/components/Container"
import Card from "@/components/daisyui/card"
import Image from "next/image"

const Venues = () => {
  return (
    <Container>
      <div className="py-10">
        <h1 className='font-serif text-4xl text-center'>Lieux</h1>
        <div className="grid gap-4">
          <Card imageUrl="/qbv_palace_banner.jpg">
            <div className="card-body">
              <h2 className="card-title">
                Quinta da Bella Vista
                <div className="badge badge-secondary">Sintra</div>
              </h2>
            </div>
          </Card>

          <Card imageUrl="/indigo.jpeg">
            <div className="card-body">
              <h2 className="card-title">
                Indigo
                <div className="badge badge-secondary">Foz do Lizandro</div>
              </h2>
            </div>
          </Card>
        </div>
      </div>

     
    </Container>
  )
}
export default Venues