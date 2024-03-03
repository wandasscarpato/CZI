import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1295px) {
    justify-content: center;
  }
`;

export const Category = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.5s ease;
  img:hover {
    filter: grayscale(0);
    transition: transform 0.5s ease;
    transform: scale(1.05);
  }
`;

export const Title = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  -webkit-text-stroke: 2px rgb(109 10 94);
  font-size: 3rem;
`;

export const Imagen = styled.div`
  img {
    width: 25rem;
    height: 25rem;
    padding: 1rem;
    filter: grayscale(1);
    @media (max-width: 550px) {
      width: 20rem;
      height: 20rem;
    }
  }
`;
