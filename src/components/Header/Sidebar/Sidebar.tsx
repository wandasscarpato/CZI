// Sidebar.tsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Importar estilos desde el archivo styles.ts
import {
  ContainerItems,
  IconClose,
  SidebarContainer,
  SidebarItem,
} from "./Sidebar.style";
import { FaTimes } from "react-icons/fa";
import { fetchCategoriesFromFirestore } from "../../../Utils/fetchCategoriesFromFirestore";
import { useNavigate } from "react-router-dom";

// Definir la interfaz de propiedades del componente
interface SidebarProps {
  onItemClick: (item: string) => void;
  openSidebar: boolean;
  setShowSidebar: (v: boolean) => void;
  setCategory?: (v: number) => void;
}
interface Category {
  id: number;
  titulo: string;
  imagen: string;
}
// Componente funcional Sidebar
const Sidebar: React.FC<SidebarProps> = ({
  setShowSidebar,
  openSidebar,
  onItemClick,
  setCategory,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Llamamos a la función para obtener categorías cuando el componente se monta
    fetchCategoriesFromFirestore(setCategories);
  }, []); // El segundo parámetro del useEffect es un array de dependencias, en este caso, está vacío para que se ejecute solo una vez al montar el componente.

  const navigate = useNavigate();

  return (
    <SidebarContainer onClick={() => setShowSidebar(false)} open={openSidebar}>
      <IconClose>
        <FaTimes />
      </IconClose>
      {openSidebar && (
        <ContainerItems open={openSidebar}>
          {categories.map((category) => {
            return (
              <SidebarItem
                onClick={() => {
                  navigate(`/products?id=${category.id}`);
                  setCategory && setCategory(category.id);
                }}
                key={category.id}
              >
                <strong>{category.titulo}</strong>
              </SidebarItem>
            );
          })}
        </ContainerItems>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
