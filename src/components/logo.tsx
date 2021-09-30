import { useHistory } from "react-router";

import LogoSVG from "../assets/logo.svg";

const Logo: React.FC = () => {
  const history = useHistory();

  return (
    <img onClick={() => history.push("/search")} src={LogoSVG} alt="Logo" />
  );
};

export default Logo;
