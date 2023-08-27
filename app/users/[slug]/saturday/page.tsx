import Section from '@/components/Section';
import Card from '@/components/daisyui/card';
import { getUserBySlug } from '@/prisma/user';

const Page = async ({
  params
}:{
  params: any
}) => {

  const user          = await getUserBySlug(params.slug)

  return (
    <Section>
      <Card title="Beach day" imageUrl='/indigo.jpeg'>
        <div>
          De 12h à 00h. 
        </div>

        {user?.saturdayWillAttend ? (
          <div>
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