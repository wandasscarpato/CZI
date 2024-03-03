import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import { fetchDataFromFirestore } from "../../Utils/fetchDataFromFirestore";
import { ContainerAll, ContentComponent } from "./styles.style";
import AllCategories from "../AllCategories/AllCategories";
import Carousel from "./Carousel/Carousel";
import Products from "../AllProducts/products";
import Product from "../Product/product";
const Home: React.FC = () => {
  const [header, setHeader] = useState<any[]>([]);
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const [productId, setProductId] = useState<number | undefined>(undefined);

  useEffect(() => {
    fetchDataFromFirestore(setHeader);
  }, [setHeader]);

  const redirectHome = useCallback(() => {
    setProductId(undefined);
    setCategoryId(undefined);
  }, []);

  useEffect(() => {
    let url = window.location.href;
    if (url.includes("products?id=")) {
      let urlParams = new URLSearchParams(new URL(url).search);
      let id = urlParams.get("id");
      setCategoryId(Number(id));
    } else {
      if (url.includes("product?id=")) {
        console.log(new URLSearchParams(new URL(url).search), "cuack");

        let urlParams = new URLSearchParams(new URL(url).search);
        let id = urlParams.get("id");
        setProductId(Number(id));
      }
    }
  }, []);
  console.log(productId, "-----");
  return (
    <ContainerAll>
      <Header
        onClickLogo={redirectHome}
        logo={header[0]?.URL || ""}
        titulo={header[0]?.titulo.length > 1 ? header[0]?.titulo : undefined}
        setCategory={setCategoryId}
      />

      <ContentComponent>
        {categoryId && !productId ? (
          <Products setProductId={setProductId} categoryId={categoryId} />
        ) : productId ? (
          <Product productId={productId} setProductId={setCategoryId} />
        ) : (
          <>
            <Carousel
              images={[
                "https://lenceriaclose.com/wp-content/uploads/2019/07/Slider-1-LenceriaClose-1.jpg",
                "https://lenceriaclose.com/wp-content/uploads/2019/07/Slider-Mucama-Lenceria-Close.jpg",
              ]}
            />
            <AllCategories setCategoryId={setCategoryId} />
          </>
        )}
      </ContentComponent>
    </ContainerAll>
  );
};

export default Home;
