import styled from "styled-components";
import Main from "../component/Home/Main";
import { LinearBg } from "../component/Common/Linear";
import Content from "../component/Home/Content";

const HomeLayout = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const DesLayout = styled.div`
  width: 100%;
`;

const DesContentLightLayout = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgColor};
`;
const DesH1 = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 26px;
`;

const Despan = styled.span`
  display: inline-block;
  font-weight: 500;
  margin-bottom: 36px;
`;

const CommonDesDiv = styled.div`
  width: 44%;
  max-width: 528px;
`;

const PegasusDesDiv = styled(CommonDesDiv)`
  position: relative;
  top: 5vh;
  right: 5vh;
`;

const DesContent = styled.div`
  width: 62.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
`;

const DesImg = styled.img`
  width: 48%;
  object-fit: contain;
  position: relative;
  bottom: 10vh;
`;

const PegasusImg = styled(DesImg)`
  bottom: 15vh;
`;
function Home() {
  return (
    <HomeLayout>
      <Main />
      <DesLayout>
        <Content />
        <LinearBg right={true} />
        <DesContentLightLayout>
          <DesContent>
            <PegasusImg
              src={`${process.env.PUBLIC_URL}/image/home/description/pegasus-img.png`}
            />
            <PegasusDesDiv>
              <DesH1>
                NFT Asset Exchange <br /> on Pegasus Blockchain
              </DesH1>
              <Despan>
                NFTs are not free to move between blockchain mainnets. Not only
                tokens, but also images and 3D assets must be usable on other
                blockchains. In addition, there is a need to roll up the
                existing mainnet through a dedicated sidechain for the current
                metaverse world. For this reason, the NXDF team proposes a site
                chain dedicated to the metaverse and P2E games. Like Pegasus
                traveling through space, it acts as a bridge between the
                metaverses of the multiverse world, allowing game items made
                with NFTs to work on other metaverses and blockchains as well.
                It enables rapid asset transfer as well as user experience as it
                is. We call it Pegasus Chain’s NFT Asset Bridge.
              </Despan>
            </PegasusDesDiv>
          </DesContent>
        </DesContentLightLayout>
      </DesLayout>
    </HomeLayout>
  );
}
export default Home;
