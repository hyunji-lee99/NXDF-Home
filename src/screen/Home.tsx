import styled from "styled-components";
import Main from "../component/Home/Main";
import { LinearBg } from "../component/Common/Linear";
import Content from "../component/Home/Content";
import { DesLayout, HomeLayout } from "../component/Common/Layout";
import { DesContent } from "../component/Common/Content";
import Separator from "../component/Common/Separator";

const RoadmapContent = styled(DesContent)`
  flex-direction: column;
`;

const RoadmapGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 40px 60px;
`;

const RoadmapCard = styled.div`
  height: 200px;
`;

const RoadmapBar = styled.div`
  background-color: red;
  padding-bottom: "1rem";
  border-radius: 10px 10px 0px 0px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <HomeLayout>
      <Main />
      <Content />
      <DesLayout>
        <RoadmapContent>
          <h1>Road Map</h1>
          <Separator value={"2022"} />
          <RoadmapGrid>
            <RoadmapCard>
              <RoadmapBar>1Q</RoadmapBar>
              <div>
                <li>· Listing NXDF to Dexlab</li>
                <li>· Listing NXDF to RAYDIUM</li>
                <li>· Listing NXDF to Aldrin</li>
                <li>· Launching a NXDF Discord community web app</li>
              </div>
            </RoadmapCard>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
          </RoadmapGrid>
          <Separator value={"2023"} />
        </RoadmapContent>
      </DesLayout>
    </HomeLayout>
  );
}
export default Home;
