"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Folder {
  title: string;
  handle: string;
}
import { usePathname } from "next/navigation";

export default function FolderNavigation({ folders }: { folders: Folder[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const handleChange = (e: any) => router.push(e.target.value);

  return (
    <div className="sticky top-0 z-50 sm:top-16 sm:mb-4  bg-white flex justify-center">
      <div className=" sm:hidden py-4">
        <div className="text-center italic text-xs my-2">
          Choissez un dossier
        </div>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleChange}
          defaultValue={pathname}
        >
          {folders.map((folder) => (
            <option key={folder.handle} value={"/photos/" + folder.handle}>
              {folder.title}
            </option>
          ))}
          <option>Greedo</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          {folders.map((folder, i) => {
            const className =
              pathname === `/photos/${folder.handle}` ? "active" : "";
            return (
              <li key={i}>
                <Link href={`/photos/${folder.handle}`} className={className}>
                  {folder.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
