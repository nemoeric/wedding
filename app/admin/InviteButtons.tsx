"use client";
import { inviteEric, inviteToViewPhotos } from "@/serverActions";

export default function InviteButtons() {
  return (
    <div className="grid gap-2 my-10">
      <button
        className="btn"
        onClick={() => {
          inviteEric();
        }}
      >
        Invite Eric
      </button>
      <button
        className="btn"
        onClick={() => {
          inviteToViewPhotos();
        }}
      >
        Invite all
      </button>
    </div>
  );
}
