"use client";

import { Toolbar } from "./toolbar";

interface WorkSpaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkSpaceLayout = ({ children }: WorkSpaceIdLayoutProps) => {
  return (
    <div className="h-full bg-red-300">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkSpaceLayout;
