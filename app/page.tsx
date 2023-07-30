import Image from "next/image";
import Animation from "@/components/Animation";
import Link from "next/link";
import { cookies } from 'next/headers'
import {
  findUserById,
} from '@/prisma/user'

import Login from "@/components/Login";
import Rsvp from "@/components/Rsvp";

export default async function Home() {
  
  
  const cookieStore = cookies()
  const userIdCookie = cookieStore.get('uuid')
  let user;
  if(userIdCookie) {
    console.log('userId', userIdCookie)
    user = await findUserById(userIdCookie.value)
  }



  return (
    <div className="bg-white pb-16">

      {/* BANNER */}
      <div className="text-primary bg-slate-200 text-center h-[70vh] flex justify-center items-center">
        <div className="grid gap-6">
          <Animation>
            <div className="text-3xl mb-10 font-adora">
                Elizabeth & Eric
              </div>
            <h1 className='font-serif text-7xl tracking-tight'>
              RENDEZ-VOUS À SINTRA
            </h1>
            <div className="animate-pulse">
              31-08 | 02-09
            </div>
            
          </Animation>



        </div>
      </div>

      {/* ATTENDING CLIENT COMPONENT */}
      {user ?
       <>
        <Rsvp user={user}/>
        {user.canEdit.map((user:any) => (<Rsvp key={user.id} user={user}/>))}
       </>      
      :
      <Login />
      }
      
      {/* PROGRAMME */}
      <div className="px-10 py-10 max-w-screen-xl mx-auto ">
        <div className="rounded-lg shadow-xl grid gap-12 p-6 border border-grey">
          <div className="text-primary text-center">
            <Animation>
              <h1 className="font-serif text-8xl  tracking-tight">
                Programme
              </h1>
            </Animation>
          </div>
          {/* JEUDI */}
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <Animation>
              <Image 
                src="/qbv_palm.jpeg" 
                alt="Picture of the author"
                className="object-cover aspect-square mask mask-hexagon-2	"
                width={1920}
                height={1080}
                />
            </Animation>

            <div className="text-primary">
              
              <h1 className="font-serif text-5xl mb-6  tracking-tight">
                Jeudi 31 Août
              </h1>

              <div className="grid gap-4">
                <Animation>
                  <div className="">
                    <div>
                      16h30 : Navettes aller
                    </div>
                    <div className="italic text-xs">
                      Départ : Devant le NH Hotel, Sintra
                    </div>
                  </div>
                  <div className="">
                    <div>
                      17h - 20h : Cocktail by the pool
                    </div>
                    <div className="italic text-xs">
                      Dresscode : Casual chic
                    </div>
                    <div className="italic text-xs">
                      Lieu : Quinta da Bella Vista
                    </div>
                  </div>
                  <div className="">
                    <div>
                      20h-20h45 : Navettes retour
                    </div>
                    <div className="italic text-xs">
                      Départ : Devant {`l'entrée du bâtiment principal`}<br/>
                      Arrivée : NH Hotel, Sintra
                    </div>
                  </div>
                </Animation>
              </div>

            </div>
          </div>

          {/* VENDREDI */}
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div className="text-primary text-right">

              <h1 className="font-serif text-5xl mb-6 tracking-tight">
                Vendredi 1 Septembre
              </h1>
              <div className="grid gap-4">
                <Animation>
                  <div className="">
                    <div>
                      16h20 : Navettes aller
                    </div>
                    <div className="italic text-xs">
                      Départ : Devant le NH Hotel, Sintra
                    </div>
                  </div>
                  <div className="">
                    <div>
                      17h : Cérémonie laique
                    </div>
                    <div className="italic text-xs">
                      Extérieurs, Quinta da Bella Vista
                    </div>
                  </div>
                  <div className="">
                    <div>
                      18h - 20h : Cocktail
                    </div>
                    <div className="italic text-xs">
                      Jardin, Quinta da Bella Vista
                    </div>
                  </div>
                  <div className="">
                    <div>
                      20h : Diner
                    </div>
                    <div className="italic text-xs">
                      Grande serre, Quinta da Bella Vista
                    </div>
                  </div>
                  <div className="">
                    <div>
                      2h00 - 5H00 : Navettes retour
                    </div>
                    <div className="italic text-xs">
                      Départ : Devant {`l'entrée du bâtiment principal`}<br/>
                      Arrivée : NH Hotel, Sintra<br/>
                    </div>
                    <div className="italic text-xs my-1">
                      Navettes toutes les heures
                    </div>
                  </div>
                </Animation>

              </div>
            </div>
            <Animation>
              {/* center image to left */}
              <Image 
                src="/qbv_palace_banner.jpg" 
                alt="Picture of the author"
                className="object-cover aspect-square mask mask-hexagon	"
                width={1920}
                height={1080}
                />
            </Animation>
          </div>
          {/* SAMEDI */}
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <Animation>
              <Image 
                src="/lizandro.jpeg" 
                alt="lizandro of the author"
                className="object-cover aspect-square	mask mask-hexagon-2"
                width={1920}
                height={1080}
                />
            </Animation>
            <div className="text-primary">
              <Animation>
                <h1 className="font-serif text-5xl mb-6  tracking-tight">
                  Samedi 2 Septembre
                </h1>

                <div className="grid gap-4">
                  <Animation>
                    <div className="">
                      <div>
                        12h15 : Navettes aller
                      </div>
                      <div className="italic text-xs">
                        Départ : Devant le NH Hotel, Sintra. 45min de trajet.
                      </div>
                    </div>
                    <div className="">
                      <div>
                        13h : Déjeuner bar de plage
                      </div>
                      <div className="italic text-xs">
                        Foz do Lizandro
                      </div>
                    </div>
                    <div className="">
                      <div>
                        15h - 20h : Plage privée 
                      </div>
                      <div className="italic text-xs">
                        Foz do Lizandro<br/>
                        Volley ball
                      </div>
                    </div>
                    <div className="">
                      <div>
                        20h : Finger food, Open bar
                      </div>
                      <div className="italic text-xs">
                      Foz do Lizandro
                      </div>
                    </div>
                    <div className="">
                      <div>
                        20h00 - 00h : Navettes retour
                      </div>
                      <div className="italic text-xs">
                        Départ : Devant {`l'entrée du bâtiment principal`}<br/>
                        Arrivée : NH Hotel, Sintra<br/>
                      </div>
                      <div className="italic text-xs my-1">
                        Toutes les heures
                      </div>
                    </div>
                  </Animation>
                </div>
   
               

              </Animation>

            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
