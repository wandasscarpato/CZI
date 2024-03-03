import React, { useEffect, useState } from "react";
import { fetchCategoriesFromFirestore } from "../../Utils/fetchCategoriesFromFirestore";
import {
  Category as CategoryStyle,
  Container,
  Imagen,
  Title,
} from "./AllCategories.styles";
import { useNavigate } from "react-router-dom";

interface Category {
  id: number;
  titulo: string;
  imagen: string;
}

interface AllCategoriesProps {
  setCategoryId: (v: number) => void;
}
const AllCategories: React.FC<AllCategoriesProps> = ({ setCategoryId }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategoriesFromFirestore(setCategories);
  }, []);
  return (
    <Container>
      {categories.map((category) => {
        console.log(category);
        return (
          <CategoryStyle
            onClick={() => {
              navigate(`/products?id=${category.id}`);
              setCategoryId(category.id);
            }}
            id={`${category.id}-container`}
          >
            <Imagen>
              <img src={category.imagen} alt={category.titulo} />
            </Imagen>
            <Title>| {category.titulo}</Title>
          </CategoryStyle>
        );
      })}
    </Container>
  );
};
export default AllCategories;
