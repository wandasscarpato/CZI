import React, { useEffect, useState } from "react";
import { Product as ProductInterface } from "../Interface";
import {
  ButtonWpp,
  ContainerAllProducts,
  ContainerDataProduct,
  ContainerDetail,
  ContainerImageProduct,
  ContainerProduct,
  ContainerSuggested,
  DataGuideSize,
  DataProductName,
  DataProductPrice,
  DataSize,
} from "./products.style";
import { fetchProductByIdFromFirestore } from "../../Utils/fetchProductByIdFromFirestore";
import { FaWhatsapp } from "react-icons/fa";

interface ProductProps {
  setProductId?: (v: number) => void;
  productId?: number;
}

const Product: React.FC<ProductProps> = ({ productId, setProductId }) => {
  const [product, setProduct] = useState<ProductInterface | undefined>();
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productos = await fetchProductByIdFromFirestore(productId || 0);
        setProduct(productos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    obtenerProductos();
  }, [productId]);
  const sendEmail = (prod: string) => {
    // Número de teléfono (debe incluir el código de país)
    const telefono = "1234567890";
    // Mensaje (opcional)
    const mensaje =
      "Hola, ¿cómo estás? Quería hacer una consulta sobre el producto " + prod;

    // Construir la URL de WhatsApp
    const url =
      "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    // Abrir la URL en una nueva pestaña
    window.open(url);
  };

  return (
    <ContainerAllProducts>
      <ContainerProduct>
        <ContainerImageProduct>
          <img src={product?.image} alt={product?.name} />
        </ContainerImageProduct>
        <ContainerDataProduct>
          <DataProductName>{product?.name}</DataProductName>
          {product?.price && (
            <DataProductPrice>${product.price}</DataProductPrice>
          )}
          <DataSize>
            <span>Talles: S | M | L | XL</span>
          </DataSize>

          <DataGuideSize>
            <span>Guía de talles</span>
          </DataGuideSize>

          <ButtonWpp
            onClick={() => {
              sendEmail(product?.name || "");
            }}
          >
            Consultar por wpp
            <FaWhatsapp />
          </ButtonWpp>
        </ContainerDataProduct>
        <ContainerSuggested></ContainerSuggested>
      </ContainerProduct>
      {product?.description && (
        <ContainerDetail>{product.description}</ContainerDetail>
      )}
    </ContainerAllProducts>
  );
};

export default Product;
