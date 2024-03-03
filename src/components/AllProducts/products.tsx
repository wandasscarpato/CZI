import React, { useEffect, useState } from "react";
import { fetchProductsByCategoryFromFirestore } from "../../Utils/fetchProductsByCategoryFromFirestore";
import { Product as ProductInterface } from "../Interface";
import {
  BottomProduct,
  ContainerAllProducts,
  ContainerProduct,
  ImageProduct,
} from "./products.style";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  categoryId: number;
  setProductId?: (v: number) => void;
}

const Products: React.FC<ProductProps> = ({ categoryId, setProductId }) => {
  const [product, setProduct] = useState<ProductInterface[] | undefined>();
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productos = await fetchProductsByCategoryFromFirestore(
          categoryId
        );
        setProduct(productos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, [categoryId]);
  const navigate = useNavigate();

  return (
    <ContainerAllProducts>
      {product?.map((p) => {
        return (
          <ContainerProduct
            onClick={() => {
              navigate(`/product?id=${p.id}`);
              setProductId && setProductId(p.id);
            }}
          >
            <ImageProduct>
              <img src={p.image} alt={p.name} />
            </ImageProduct>
            <BottomProduct>
              <span className="title">{p.name}</span>
              {p.price && <span className="price">${p.price}</span>}
            </BottomProduct>
          </ContainerProduct>
        );
      })}
      {/* 
      <ContainerProduct>
        <ContainerImageProduct></ContainerImageProduct>
        <ContainerDataProduct></ContainerDataProduct>
        <ContainerSuggested></ContainerSuggested>
      </ContainerProduct> */}
    </ContainerAllProducts>
  );
};

export default Products;
