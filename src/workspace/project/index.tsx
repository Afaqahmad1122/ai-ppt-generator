import { Outlet, useParams } from "react-router-dom";

const Project = () => {
  const { projectId } = useParams();
  return (
    <div>
      Project Page
      {projectId}
      <Outlet />
    </div>
  );
};

export default Project;
