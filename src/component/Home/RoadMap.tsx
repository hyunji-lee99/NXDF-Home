import styled from "styled-components";
import media from "../../lib/media";
import { DesContent } from "../Common/Elements";
import { DesLayout } from "../Common/Layout";
import Separator from "../Common/Separator";
import { TitleH1 } from "../Common/Title";

const RoadMap: React.FC = () => {
  return (
    <DesLayout>
      <RoadmapContent>
        <TitleH1>Road Map</TitleH1>
        <Separator value={"2022"} />
        <RoadmapGrid>
          <RoadmapCard>
            <RoadmapBar>
              <RoadMapBarDes>1Q</RoadMapBarDes>
            </RoadmapBar>
            <RoadmapCardContent>
              <li>· Listing NXDF to Dexlab</li>
              <li>· Listing NXDF to RAYDIUM</li>
              <li>· Listing NXDF to Aldrin</li>
              <li>· Launching a NXDF Discord community web app</li>
            </RoadmapCardContent>
          </RoadmapCard>
          <RoadmapCard>
            <RoadmapBar>
              <RoadMapBarDes>2Q</RoadMapBarDes>
            </RoadmapBar>
            <RoadmapCardContent>
              <li>· Launching mobile staking service ‘NXDF - Staking4U’</li>
              <li>· Launching a DEX - Lucidex for Game-Fi</li>
              <li>· NXDF Landing page renewal</li>
              <li>· Collaboration with famous NFT projects</li>
            </RoadmapCardContent>
          </RoadmapCard>
          <RoadmapCard>
            <RoadmapBar>
              <RoadMapBarDes>3Q</RoadMapBarDes>
            </RoadmapBar>
            <RoadmapCardContent>
              <li>· 1st offering NFTs for the NXDF metaverse development</li>
              <li>· Launching a mobile NFT wallet feature to ‘Staking4U’</li>
              <li>· Start to develop a game-fi ecosystem development SDK</li>
              <li>· Start to develop a mobile metaverse.</li>
              <li>· Launching test-net, Pegasus beta</li>
            </RoadmapCardContent>
          </RoadmapCard>
          <RoadmapCard>
            <RoadmapBar>
              <RoadMapBarDes>4Q</RoadMapBarDes>
            </RoadmapBar>
            <RoadmapCardContent>
              <li>· Start to develop a INO launchpad</li>
              <li>
                · 2nd offering‘the NFTs for the NXDF metaverse development
              </li>
              <li>· Expanding mini-games in the NXDF metaverse worldview.</li>
              <li>· Launching NFT asset bridge features on Pegasus beta</li>
              <li>· Recruiting node validators</li>
            </RoadmapCardContent>
          </RoadmapCard>
        </RoadmapGrid>
        <Separator value={"2023"} />
        <RoadmapGrid>
          <RoadmapCard>
            <RoadmapBar>
              <RoadMapBarDes>1Q</RoadMapBarDes>
            </RoadmapBar>
            <RoadmapCardContent>
              <li>· Expanding NXDF ecosystems to game and entertainments</li>
              <li>· Launching a metaverse, Meta Axel beta service</li>
              <li>· Holding the 1st NXDF world summit.</li>
              <li>· Adding De-Fi features and programs to ‘Staking4U’</li>
            </RoadmapCardContent>
          </RoadmapCard>
          <RoadmapCard>
            <RoadmapBar>
              <RoadMapBarDes>2Q</RoadMapBarDes>
            </RoadmapBar>
            <RoadmapCardContent>
              <li>· Hosting global NXDF hackathon</li>
              <li>· Enhancing the NXDF metaverse features</li>
              <li>· Launching the NXDF metaverse alpha</li>
              <li>
                · Showcase for implementing nft asset bridge on the NXDF
                metaverse
              </li>
            </RoadmapCardContent>
          </RoadmapCard>
        </RoadmapGrid>
      </RoadmapContent>
    </DesLayout>
  );
};

const RoadmapContent = styled(DesContent)`
  flex-direction: column;
  margin-bottom: 3rem;
`;

const RoadmapGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 5rem;
  ${media.small} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const RoadmapCard = styled.div`
  height: 200px;
  ${media.small} {
    height: auto;
  }
`;

const RoadmapBar = styled.div`
  border-radius: 10px 10px 0px 0px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-image: url("/image/home/roadmap/roadmap-bar.png");
  object-fit: contain;
  background-repeat: no-repeat;
`;

const RoadMapBarDes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: black;
`;

const RoadmapCardContent = styled.ul`
  padding: 2rem;
  background-color: ${(props) => props.theme.CardColor};

  li {
    line-height: 34px;
    letter-spacing: -0.54px;
  }
`;

export default RoadMap;
