import React, { useContext } from "react";
import ProductCarousel from "./ProductCarousel";
import { ProductData } from "../Store/DataCollection";
import Container from "../Container";

function FeatureProductList() {
  const { products, ourProducts } = useContext(ProductData);

  return (
    <>
      <center>
        <Container>
          {/* First carousel with old products */}
          <ProductCarousel products={products} objectFit="object-cover" />
        </Container>
      </center>

      <hr className="border-t border-gray-300 mt-5 lg:mt-15" />

      <center>
        <Container>
          {/* Second carousel with ourProducts only if it has data */}
          {ourProducts.length > 0 ? (
            <ProductCarousel products={ourProducts} objectFit="object-contain" />
          ) : (
            <p>Loading products...</p>
          )}
        </Container>
      </center>
    </>
  );
}

export default FeatureProductList;
