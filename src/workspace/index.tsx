import { Outlet } from "react-router-dom";
import { SignInButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const Workspace = () => {
  const { user } = useUser();
  if (!user) {
    return (
      <div>
        You are not authorized to access this page
        <div>
          <SignInButton mode="modal">
            <Button>Get Started</Button>
          </SignInButton>
        </div>
      </div>
    );
  }
  return (
    <div>
      Workspace
      <Outlet />
    </div>
  );
};

export default Workspace;
