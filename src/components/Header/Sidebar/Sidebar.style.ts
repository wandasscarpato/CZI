// Sidebar/Sidebar.style.ts

import styled from "styled-components";

export const SidebarContainer = styled.div<{ open?: boolean }>`
  width: ${({ open }) => (open ? "12rem" : "0px")};
  padding: ${({ open }) => (open ? "1rem" : "0px")};
  height: 100%;
  background-color: #2c3e50;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: black;
  overflow-y: auto;
  transition: width 0.3s;
  text-align: start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Ajusta según sea necesario */
  overflow-y: auto; /* Agrega una barra de desplazamiento vertical si es necesario */
  scroll-behavior: smooth; /* Desplazamiento suave */

  @media (max-width: 750px) {
    background-color: rgba(0, 0, 0);
    width: ${({ open }) => (open ? "100%" : "0px")};
    padding: 0;
  }
`;

export const SidebarItem = styled.div`
  color: #ecf0f1;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.2rem;

  &:hover {
    background-color: #8b108978;
  }
`;

export const ContainerItems = styled.div<{ open?: boolean }>`
  margin-top: 1rem;
  > div {
    @media (max-width: 750px) {
      border-top: 1px dotted #ffceef; /* Añade borde punteado arriba para todos los elementos */
      padding: 1rem 1rem;
    }
  }
  &:last-child {
    @media (max-width: 750px) {
      border-bottom: 1px dotted #ffceef; /* Añade borde punteado abajo solo para el último elemento */
    }
  }
`;

export const IconClose = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: end;
  svg {
    color: #ffceefa6;
    font-size: 28px;
    @media (max-width: 750px) {
      margin: 0.5rem;
    }
  }
`;

export const ContainerFaBars = styled.div`
  cursor: pointer;
  svg {
    font-size: 28px;
  }
`;
