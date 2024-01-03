import { getUserBySlug } from "@/prisma/user";
import Rsvp from "@/components/Rsvp";
import getSessionUserFromCookie from "@/utils/getSessionUserFromCookie";
import { redirect } from "next/navigation";
import prisma from "@/prisma/prisma";
import Card from "@/components/daisyui/card";

const User = async ({ params }: { params: any }) => {
  const sessionUser = await getSessionUserFromCookie();
  const user = await getUserBySlug(params.slug);

  if (!user) return redirect("/");

  const room = user?.roomId
    ? await prisma.room.findUnique({
        where: { id: user.roomId },
        include: {
          users: {
            select: {
              id: true,
              firstName: true,
              image: true,
            },
          },
        },
      })
    : null;
  if (room) return redirect(`/users/${params.slug}/hosting`);

  return redirect(`/users/${params.slug}/saturday`);

  // return (
  //   <div className="grid gap-6">
  //     {sessionUser?.isAdmin && (
  //       <Card title="Photo">
  //         <h1>
  //           {user?.firstName} {user?.lastName}
  //         </h1>
  //         <form action={uploadImage}>
  //           <div className="form-control w-full max-w-xs mb-2">
  //             <label className="label">
  //               <span className="label-text">Pick a file</span>
  //             </label>
  //             <input
  //               type="file"
  //               className="file-input file-input-bordered w-full max-w-xs"
  //               name="file"
  //             />
  //           </div>

  //           <InputGroup
  //             hidden
  //             label="id"
  //             name="userId"
  //             type="text"
  //             defaultValue={user?.id}
  //           />
  //           <MyButton title="Save" />
  //         </form>
  //       </Card>
  //     )}
  //     <Rsvp user={user} />
  //   </div>
  // );
};
export default User;
