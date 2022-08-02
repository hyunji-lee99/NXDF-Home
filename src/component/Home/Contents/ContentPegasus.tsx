import styled from "styled-components";
import media from "../../../lib/media";
import {
  CommonDesDiv,
  DesH1,
  DesImg,
  Despan,
  DesContent,
} from "../../Common/Elements";
import { DesLayout } from "../../Common/Layout";

const ContentPegasus: React.FC = () => {
  return (
    <DesLayout>
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
            blockchains. In addition, there is a need to roll up the existing
            mainnet through a dedicated sidechain for the current metaverse
            world. For this reason, the NXDF team proposes a site chain
            dedicated to the metaverse and P2E games. Like Pegasus traveling
            through space, it acts as a bridge between the metaverses of the
            multiverse world, allowing game items made with NFTs to work on
            other metaverses and blockchains as well. It enables rapid asset
            transfer as well as user experience as it is. We call it Pegasus
            Chain’s NFT Asset Bridge.
          </Despan>
        </PegasusDesDiv>
      </DesContent>
    </DesLayout>
  );
};

const PegasusDesDiv = styled(CommonDesDiv)`
  position: relative;
  top: 5vh;
  right: 5vh;
  ${media.small} {
    position: static;
  }
`;

const PegasusImg = styled(DesImg)`
  bottom: 15vh;
`;
export default ContentPegasus;
