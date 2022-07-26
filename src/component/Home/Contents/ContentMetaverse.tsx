import styled from "styled-components";
import {
  CommonDesDiv,
  DesH1,
  DesImg,
  Despan,
  DesContent,
} from "../../Common/Elements";
import { DesContentLayout } from "../../Common/Layout";

const ContentMetaverse: React.FC = () => {
  return (
    <DesContentLayout>
      <MetaverseContent>
        <MetavserseDiv>
          <DesH1>A DEX for P2E & Metaverse</DesH1>
          <Despan>
            Game items such as weapons, clothes, and shoes should be easily
            exchangeable in the game itself. NFT assets such as land, houses,
            and paintings should also be easily exchangeable on the metaverse.
            To this end, we support a decentralized exchange exclusively for
            games and metaverses in the NXDF ecosystems. NXDF’s infrastructure
            makes it easy for anyone to buy and sell in-game tokens and items at
            any desired price. In addition, NXDF DAO directly supports promising
            NFT and P2E projects for the expansion of a healthy De-Fi ecosystem.
            LuciDEX has newly joined the NXDF ecosystem to take charge of the
            decentralized exchange technology of the NXDF mobile environment.
          </Despan>
        </MetavserseDiv>
        <DesImg
          src={`${process.env.PUBLIC_URL}/image/home/description/sec04-img.png`}
        />
      </MetaverseContent>
    </DesContentLayout>
  );
};

const MetavserseDiv = styled(CommonDesDiv)`
  padding-top: 5vh;
  margin-right: 80px;
  position: relative;
  top: 5vh;
`;

const MetaverseContent = styled(DesContent)``;

export default ContentMetaverse;
