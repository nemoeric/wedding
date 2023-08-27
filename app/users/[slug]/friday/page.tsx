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
      <Card title="Cérémonie, dîner, soirée" imageUrl='https://a0.muscache.com/im/pictures/miso/Hosting-731060451412011457/original/857ca4e7-4d4a-4f90-8037-341a58d55cb9.jpeg?im_w=1200'>
        <div>
          De 17h à 5h. 
        </div>

        {user?.fridayWillAttend ? (
          <div>
            <div>
              Vous avez indiqué que <span className='underline'>vous serez présent.</span>
            </div>
            <div>
              Vous avez indiqué que <span className='underline'>
                  { user.fridayWillNeedTransport ? (
                    'vous prendrez la navette au départ du NH Hotel Sintra à 16h20.'
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