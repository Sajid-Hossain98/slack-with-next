"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { useGetWorkspaces } from "@/features/auth/workspaces/use-get-workspaces";
import { useEffect, useMemo } from "react";

export default function Home() {
  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log("Redirect to workspace");
    } else {
      console.log("Open creation modal");
    }
  }, [isLoading, workspaceId]);

  return (
    <div className="bg-black/50 h-screen">
      <UserButton />
    </div>
  );
}
