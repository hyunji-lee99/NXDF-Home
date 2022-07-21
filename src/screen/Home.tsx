import styled from "styled-components";
import { HomeLayout, CompanyLayout } from "../component/Common/Layout";
import Main from "../component/Home/Main";
import Content from "../component/Home/Content";
import RoadMap from "../component/Home/RoadMap";
import Partners from "../component/Home/Partners";
import Company from "../component/Home/Company";

function Home() {
  return (
    <HomeLayout>
      <Main />
      <Content />
      <RoadMap />
      <Partners />
      <Company />
    </HomeLayout>
  );
}
export default Home;
