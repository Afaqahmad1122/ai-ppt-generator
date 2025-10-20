import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between shadow px-4 py-2">
      <img src={logo} alt="logo" width={100} height={100} />

      {!user ? (
        <SignInButton mode="modal">
          <Button>Get Started</Button>
        </SignInButton>
      ) : (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link to="/workspace">
            <Button>Go to Workspace</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
