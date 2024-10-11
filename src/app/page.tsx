"use client";

import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div className="bg-black flex items-center justify-center flex-col h-screen text-white text-5xl font-bold underline underline-offset-4 italic">
      Home sweet home!
      <p
        onClick={() => signOut()}
        className="text-lg text-blue-400 underline-offset-2 cursor-pointer"
      >
        Leave home :(
      </p>
    </div>
  );
}
