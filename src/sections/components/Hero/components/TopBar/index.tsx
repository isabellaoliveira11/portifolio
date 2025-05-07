import SectionsButton from "./components/SectionsButton";
import { Container } from "./styles";

const TopBar = () => {
  return (
    <Container>
      <div className="nav-wrapper">
        <SectionsButton />
      </div>
    </Container>
  );
};

export default TopBar;
