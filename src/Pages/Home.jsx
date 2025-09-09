import React from "react";
import DataCollection from "../components/Store/DataCollection";
import Navbar from "../components/Navbar_Component";
import Container from "../components/Container";
import Banner from "../components/Banner/Banner";
import BannerBar from "../components/banner Bar/BannerBar";
import FeatureCarousel from "../components/FeatureProducts/FeatureCrausel";
import ChooseConatiner from "../components/whychooseuse/ChooseConatiner";
import ProductCarousel from "../components/Our_Products/ProductCarousel";
import FeatureProductList from "../components/Our_Products/OurProductList";
import ShowCaseCard from "@/components/ShowCase/ShowCaseCard";
import DetailCardCollection from "@/components/detailCard/DetailCardCollection";
import Footer from "@/components/footer/Footer";
function Home() {
  return (
    <>
      <DataCollection>
        <center>
          {" "}
          <Container>
            <Banner></Banner>
            <BannerBar></BannerBar>
          </Container>
        </center>
        <center>
          <Container>
            {" "}
            <FeatureCarousel></FeatureCarousel>
          </Container>
        </center>

        <hr className="border-t border-gray-300 mt-5" />

        <center>
          {" "}
          <Container>
            <ChooseConatiner></ChooseConatiner>
          </Container>
        </center>

        <hr className="border-t border-gray-300 lg:mt-15" />
        <FeatureProductList></FeatureProductList>

        <hr className="border-t border-gray-300 lg:mt-20 mb-8" />


<div className="flex justify-center">
  <Container>
    <DetailCardCollection />
  </Container>
</div>
      



        <hr className="border-t border-gray-300 mt-15" />

        <center>
          {" "}
          <Container>
            <ShowCaseCard></ShowCaseCard>
          </Container>
        </center>



<hr className="border-t border-gray-300 mt-15" />
      
  <Footer></Footer>



      </DataCollection>
    </>
  );
}

export default Home;
