import SectionsButton from "./components/SectionsButton";
import Logo from "../../../../../shared/assets/icons/logo-isa.svg";

import { Container } from "./styles";

const TopBar = () => {
  return (
    <Container>
      <div className="nav-wrapper">
        <img src={Logo} alt="Logo" />
        <SectionsButton />
      </div>
    </Container>
  );
};

export default TopBar;
