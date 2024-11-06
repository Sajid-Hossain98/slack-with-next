import { Button } from "@/components/ui/button";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Info, Search } from "lucide-react";

export const Toolbar = () => {
  const workspaceId = useWorkspaceId();
  const { data, isLoading } = useGetWorkspace({ id: workspaceId });

  return (
    <nav className="bg-[#481348] flex items-center justify-between  h-10 p-1.5">
      <div className="flex-1" />
      <div className="min-w-[280px] max-w-[642px] grow-[2] shrink">
        <Button
          size="sm"
          className="justify-start w-full px-2 bg-accent/25 hover:bg-accent/25 h-7"
        >
          <Search className="mr-2 text-white size-4" />
          <span className="text-xs text-white">Search in {data?.name}</span>
        </Button>
      </div>

      <div className="flex items-center justify-end flex-1 ml-auto">
        <Button variant="transparent" size="iconSm">
          <Info className="text-white size-5" />
        </Button>
      </div>
    </nav>
  );
};
