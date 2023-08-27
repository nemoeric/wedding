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
      <Card title="Cocktail by the pool" imageUrl='https://a0.muscache.com/im/pictures/miso/Hosting-731060451412011457/original/42e9eae0-413c-4479-afad-f15004802863.jpeg?im_w=960'>
        <div>
          De 17h à 20h. 
        </div>

        {user?.thursdayWillAttend ? (
          <div>
            <div>
              Vous avez indiqué que <span className='underline'>vous serez présent.</span> (On à hate de vous voir !)
            </div>
            <div>
              Vous avez indiqué que <span className='underline'>
                  { user.thursdayWillNeedTransport ? (
                    'vous prendrez la navette au départ du NH Hotel Sintra à 16h30.'
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