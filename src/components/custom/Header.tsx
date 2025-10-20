import logo from "../../assets/logo.png";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between shadow px-4 py-2">
      <img src={logo} alt="logo" width={100} height={100} />
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
