import Container from "@/components/Container";
import Login from "@/components/Login";
import getSessionUserFromCookie from "@/utils/getSessionUserFromCookie";
import Link from "next/link";
import FolderNavigation from "./FolderNavigation";

export default async function Layout({
  searchParams,
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const sessionUser = await getSessionUserFromCookie();
  let expired = searchParams?.expired === "true" ? true : false;

  if (!sessionUser)
    return (
      <div className="h-[600px] flex justify-center items-center text-primary">
        <Container>
          <Login expired={expired} title="Espace photo privé" />
        </Container>
      </div>
    );

  const folders = [
    {
      title: "Day 1 - Pool party",
      handle: "day1",
    },
    {
      title: "Day 2 - Brides getting ready",
      handle: "bridesgettingready",
    },
    {
      title: "Day 2 - Grooms getting ready",
      handle: "groomsgettingready",
    },
    {
      title: "Day 2 - Ceremony",
      handle: "ceremony",
    },
    {
      title: "Day 2 - Cocktail",
      handle: "cocktail",
    },
    {
      title: "Day 2 - Couple",
      handle: "couple",
    },
    {
      title: "Day 2 - Decor",
      handle: "decor",
    },
    {
      title: "Day 2 - Diner decor",
      handle: "decordinner",
    },
    {
      title: "Day 2 - Diner",
      handle: "dinner",
    },

    {
      title: "Day 2 - Party",
      handle: "party",
    },
    {
      title: "Day 2 - Photo booth",
      handle: "photobooth",
    },
    {
      title: "Day 2 - Venue",
      handle: "venue",
    },

    {
      title: "Day 3 - Beach party",
      handle: "day3",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center py-10">
        <h1 className="text-5xl font-serif">Photos</h1>
        <div className="italic my-2">
          Hey {sessionUser?.firstName}, we had a great time with you !
        </div>
      </div>
      <div className="pb-10">
        <FolderNavigation folders={folders} />
        <div>{children}</div>
      </div>
    </div>
  );
}
