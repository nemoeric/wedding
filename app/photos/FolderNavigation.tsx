"use client";

import Link from "next/link";
interface Folder {
  title: string;
  handle: string;
}
import { usePathname } from "next/navigation";

export default function FolderNavigation({ folders }: { folders: Folder[] }) {
  const pathname = usePathname();
  return (
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
  );
}
