
import Section from '@/components/Section';
import Card from '@/components/daisyui/card';
import { getUserBySlug } from '@/prisma/user';
import PlateChoiceForm from './PlateChoiceForm';

const Page = async ({
  params
}:{
  params: any
}) => {

  const user          = await getUserBySlug(params.slug)
  const plateDefinition = [
    {
      value: "Angus", label: "Steak Angus", selected: false
    },
    {
      value: "Tuna", label: "Tuna tataki", selected: false
    },
    {
      value: "Nasi", label: "Nasi Goreng (végétarien)", selected: false
    },

  ] 


  return (
    <Section>
      <Card title="Beach day" imageUrl='/indigo.jpeg'>
        <div>
          De 12h à 00h. 
        </div>

        {user?.saturdayWillAttend ? (
          <div>

            <div className='divider'>Participation</div>

            <div>
              Vous avez indiqué que <span className='underline'>vous serez présent.</span>
            </div>
            <div>
              Vous avez indiqué que <span className='underline'>
                  { user.saturdayWillNeedTransport ? (
                    'vous prendrez la navette au départ du NH Hotel Sintra à 12h00.'
                  ) : (
                    'vous viendrez par votre propre moyen'
                  )}
                </span>
            </div>

            <div className='divider'>Menu du midi</div>
            <div>

              {user.saturdayPlateChoice == null ? 
              (
                <div>

                  <div className="bg-warning rounded p-2 text-warning-content text-xs italic">
                    Merci de nous indiquer votre choix de plat pour le samedi midi 
                  </div>
                  <PlateChoiceForm user={user}/>
                </div>
                )
              :
              (
                <div>
                  <div>
                    Vous avez choisi le plat : {plateDefinition.find(plate=>plate.value == user.saturdayPlateChoice)?.label}
                  </div>

                  <div className='italic my-1 text-sm'>
                    Pour toutes modifications, vous pouvez contacter Eric directement.
                  </div>
                </div>
              )}
            </div>


          </div>


        ): (
          <div>
            Vous avez indiqué que <span className='underline'>vous ne seriez pas présent.</span>
          </div>
        )}
      </Card>
    </Section>
  )
}
export default Page