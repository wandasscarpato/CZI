import styled from "styled-components";

// Definir estilos con Styled Components
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(
    270deg,
    rgba(15, 1, 18, 1) 14%,
    rgba(109, 10, 94, 1) 50%,
    rgba(42, 3, 35, 1) 100%
  );
  color: white;
  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const Logo = styled.div`
  img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 600px) {
    img {
      width: 80px;
      height: 80px;
      @media (max-width: 550px) {
        margin-left: 2rem;
      }
    }
  }
`;

export const EstablishmentName = styled.div`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 600px) {
    margin-top: 10px;
    gap: 0.5rem;
  }
`;

export const Icon = styled.a`
  svg {
    width: 30px; /* Ajusta el tamaño según tus necesidades */
    height: 30px; /* Ajusta el tamaño según tus necesidades */
    color: #ffceefa6;
    @media (max-width: 750px) {
      width: 25px; /* Ajusta el tamaño según tus necesidades */
      height: 25px; /* Ajusta el tamaño según tus necesidades */
    }
  }
`;
