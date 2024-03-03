import styled from "styled-components";

export const ContainerImageProduct = styled.div``;
export const ContainerDataProduct = styled.div``;
export const ContainerSuggested = styled.div``;

export const ContainerAllProducts = styled.div`
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 1290px) {
    grid-template-columns: 25% 25% 25% 25%;
  }
  @media (max-width: 1290px) {
    grid-template-columns: 33% 33% 33%;
    align-items: center;
  }
  @media (max-width: 995px) {
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 650px) {
    grid-template-columns: 100%;
    align-items: center;
  }
`;
export const ImageProduct = styled.span`
  display: flex;
  border: 1px solid pink;
`;
export const BottomProduct = styled.div`
  color: white;
  text-align: center;
  span {
    padding: 5px;
    display: block;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    padding-top: 1rem;
  }
  .price {
    font-size: 1rem;
    font-weight: 400;
  }
`;
export const ContainerProduct = styled.div`
  color: white;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  @media (max-width: 650px) {
    margin: 1rem auto 1rem;
  }
`;
