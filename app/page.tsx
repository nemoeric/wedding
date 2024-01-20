import Image from "next/image";
import Animation from "@/components/Animation";
import Login from "@/components/Login";
import Container from "@/components/Container";
import UserCard from "@/components/userCard";
import getSessionUserFromCookie from "@/utils/getSessionUserFromCookie";
import Countdown from "@/components/Countdown";
import Link from "next/link";

export default async function Home() {
  const user = await getSessionUserFromCookie();

  return (
    <div className=" pb-16">
      {/* BANNER */}
      <div className="text-primary bg-slate-200 text-center py-10 flex justify-center items-center relative">
        <div className="grid gap-6 relative z-10">
          <Animation>
            <div className="text-3xl font-adora">Elizabeth & Eric</div>
            <h1 className="font-serif text-7xl tracking-tight">MERCI</h1>
            {user && (
              <Link href="/photos">
                <button className="btn btn-primary">Voir les photos</button>
              </Link>
            )}
            <Image
              src="/homeV1.jpg"
              alt="Picture of the author"
              className="object-cover aspect-square mask mask-hexagon w-full "
              width={500}
              height={500}
            />
          </Animation>
        </div>
      </div>

      {/* USER CARDS */}
      <Container>
        <div className="my-6">
          {user ? (
            <div>
              <h2 className="font-serif mt-12 text-center text-4xl">Hello</h2>
              <Container small>
                <UserCard user={user} />
              </Container>
              {user.canEdit.length && (
                <Container small>
                  <h2 className="font-serif mt-12 text-center text-3xl">
                    Vous venez avec
                  </h2>
                  <div className="grid gap-2">
                    {user.canEdit.map((user: any) => (
                      <UserCard key={user.id} user={user} />
                    ))}
                  </div>
                </Container>
              )}
            </div>
          ) : (
            <Login />
          )}
        </div>
      </Container>

      {/* PROGRAMME */}
      <Container>
        <div className="flex flex-col gap-6 mt-12">
          {/* TITRE */}
          <div className="text-primary text-center">
            <Animation>
              <h1 className="font-serif text-5xl md:text-7xl  tracking-tight">
                Programme
              </h1>
            </Animation>
          </div>

          {/* JEUDI */}
          <div className="rounded-lg shadow-xl border border-grey py-4 md:py-10 px-6 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/5">
              <Animation>
                <Image
                  src="/qbv_palm.jpeg"
                  alt="Picture of the author"
                  className="object-cover aspect-square mask mask-hexagon	w-full"
                  width={1920}
                  height={1080}
                />
              </Animation>
            </div>
            <div className="text-primary w-full md:w-3/5">
              <h1 className="font-serif text-4xl md:text-5xl mb-6  tracking-tight">
                Jeudi 31 Août
              </h1>

              <div className="grid gap-4">
                <Animation>
                  <div className="">
                    <div>16h30 : Départ navettes</div>
                    <div className="italic text-xs">
                      Rendez-vous devant le NH Hotel Centro, Sintra. Les
                      navettes vous amèneront à Quinta da Bella Vista.
                    </div>
                  </div>
                  <div className="">
                    <div>17h - 20h : Cocktail by the pool</div>
                    <div className="italic text-xs">
                      Dresscode : Casual chic, vous pouvez prendre un maillot de
                      bain pour profiter de la piscine.
                    </div>
                  </div>
                  <div className="">
                    <div>20h à 20h30 : Navettes retour</div>
                    <div className="italic text-xs">
                      {`Les navettes vous redéposeront devant le NH Hotel Centro, Sintra.`}
                      <br />
                    </div>
                  </div>
                </Animation>
              </div>
            </div>
          </div>

          {/* VENDREDI */}
          <div className="rounded-lg shadow-xl border border-grey py-4 md:py-10 px-6 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-2/5">
              <Animation>
                {/* center image to left */}
                <Image
                  src="/qbv_palace_banner.jpg"
                  alt="Picture of the author"
                  className="object-cover aspect-square mask mask-squircle	w-full"
                  width={1920}
                  height={1080}
                />
              </Animation>
            </div>
            <div className="text-primary w-full md:w-3/5 md:text-right">
              <h1 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">
                Vendredi 1 Septembre
              </h1>
              <div className="grid gap-4">
                <Animation>
                  <div className="">
                    <div>16h20 : Départ des navettes</div>
                    <div className="italic text-xs">
                      Rendez-vous devant le NH Hotel Centro, Sintra.
                      <br />
                      Les navettes vous amèneront à Quinta da Bella Vista.
                    </div>
                  </div>
                  <div className="">
                    <div>17h : Cérémonie laïque</div>
                    <div className="italic text-xs">
                      Officiée par nos proches.
                    </div>
                  </div>
                  <div className="">
                    <div>18h - 20h : Cocktail</div>
                    <div className="italic text-xs">
                      Jardin, Quinta da Bella Vista.
                    </div>
                  </div>
                  <div className="">
                    <div>20h : Diner</div>
                    <div className="italic text-xs">
                      Grande serre, Quinta da Bella Vista.
                    </div>
                  </div>
                  <div className="">
                    <div>De 2h00 à 5H00 : Navettes retour</div>
                    <div className="italic text-xs">
                      {`Les navettes vous redéposeront devant le NH Hotel Centro, Sintra.`}
                      <br />
                    </div>
                    <div className="italic text-xs my-1">
                      Navettes toutes les heures.
                    </div>
                  </div>
                </Animation>
              </div>
            </div>
          </div>

          {/* SAMEDI */}
          <div className="rounded-lg shadow-xl border border-grey py-4 md:py-10 px-6 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/5">
              <Animation>
                <Image
                  src="/lizandro.jpg"
                  alt="lizandro of the author"
                  className="object-cover aspect-square mask mask-heart	w-full"
                  width={1920}
                  height={1080}
                />
              </Animation>
            </div>
            <div className="text-primary w-full md:w-3/5">
              <Animation>
                <h1 className="font-serif text-4xl md:text-5xl mb-6  tracking-tight">
                  Samedi 2 Septembre
                </h1>

                <div className="grid gap-4">
                  <Animation>
                    <div className="">
                      <div>12h15 : Départ des navettes</div>
                      <div className="italic text-xs">
                        Rendez-vous devant le NH Hotel Centro, Sintra.
                      </div>
                    </div>
                    <div className="">
                      <div>13h : Déjeuner bar de plage</div>
                      <div className="italic text-xs">Foz do Lizandro.</div>
                    </div>
                    <div className="">
                      <div>15h - 20h : Plage privée</div>
                      <div className="italic text-xs">
                        Foz do Lizandro
                        <br />
                        Repos, soleil, et volley-ball pour les plus témeraires !
                      </div>
                    </div>
                    <div className="">
                      <div>20h : Finger food, Open bar</div>
                      <div className="italic text-xs">Foz do Lizandro.</div>
                    </div>
                    <div className="">
                      <div>00h : Départ des navettes</div>
                      <div className="italic text-xs my-1">
                        {`Les navettes vous redéposeront devant le NH Hotel Centro, Sintra.`}
                        <br />
                      </div>
                    </div>
                  </Animation>
                </div>
              </Animation>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
