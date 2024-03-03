import {
  EstablishmentName,
  HeaderContainer,
  Icon,
  LogoContainer,
  SocialIcons,
  Logo as LogoComponent,
} from "./Header.style";
import { FaBars, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Sidebar from "./Sidebar/Sidebar";
import { ContainerFaBars } from "./Sidebar/Sidebar.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  logo: string;
  titulo?: string;
  onClickLogo: () => void;
  setCategory?: (v: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  titulo,
  onClickLogo,
  setCategory,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Icon>
        <ContainerFaBars onClick={() => setShowSidebar(true)}>
          <FaBars />
        </ContainerFaBars>
        <Sidebar
          setShowSidebar={setShowSidebar}
          openSidebar={showSidebar}
          onItemClick={() => {}}
          setCategory={setCategory}
        />
      </Icon>
      <LogoContainer>
        <LogoComponent
          onClick={() => {
            onClickLogo();
            navigate("/");
          }}
        >
          <img src={logo} alt="Logo" />
        </LogoComponent>
        {titulo && <EstablishmentName>{titulo}</EstablishmentName>}
      </LogoContainer>

      <SocialIcons>
        <Icon>
          <FaWhatsapp />
        </Icon>
        <Icon
          href="https://www.instagram.com/czi.lenceria/?hl=es"
          target="_blank"
        >
          <FaInstagram />
        </Icon>
      </SocialIcons>
    </HeaderContainer>
  );
};
export default Header;
