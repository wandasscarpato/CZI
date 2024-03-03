import styled from "styled-components";

export const ContainerImageProduct = styled.div`
  margin: 2rem;
  max-width: 500px;
`;
export const ContainerDataProduct = styled.div``;
export const ContainerSuggested = styled.div``;

export const ContainerAllProducts = styled.div``;
export const ImageProduct = styled.span``;
export const BottomProduct = styled.div``;
export const ContainerProduct = styled.div`
  color: white;
  display: grid;
  grid-template-columns: auto 25%;
  justify-content: center;
  @media (max-width: 650px) {
    display: flex;
    margin: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto;
  }
`;

export const DataProductName = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  font-size: 2.25rem;
  text-transform: uppercase;
  @media (max-width: 650px) {
    margin: 1rem;
    align-items: center;
  }
`;
export const DataProductPrice = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  font-size: 1.25rem;
  @media (max-width: 650px) {
    margin: 1rem;
    align-items: center;
  }
`;
export const DataGuideSize = styled.div`
  color: white;
  display: flex;
  margin: 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: underline;
  span:hover {
    cursor: pointer;
  }
  @media (max-width: 650px) {
    align-items: center;
    margin: 1rem;
  }
`;

export const ButtonWpp = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  gap: 0.5rem;
  justify-content: center;
  svg {
    font-size: 1.5rem;
  }
  @media (max-width: 650px) {
    margin: 1rem;
  }
`;

export const DataSize = styled.div`
  margin: 2rem;
  font-size: 1rem;
  @media (max-width: 650px) {
    margin: 1rem;
  }
`;

export const ContainerDetail = styled.div`
  padding: 4rem 2rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  max-width: 90%;
  @media (max-width: 650px) {
    padding: 2rem;
  }
`;
