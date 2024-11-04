interface WorkSpaceIdProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdPage = ({ params }: WorkSpaceIdProps) => {
  return <div>ID: {params.workspaceId}</div>;
};

export default WorkspaceIdPage;
