import styled from "styled-components";
import { LinearBg } from "../Common/Linear";
import { DesLayout, DesContentLayout } from "../Common/Layout";

import Contentp2e from "./Contents/ContentP2e";
import ContentMeet from "./Contents/ContentMeet";
import ContentPegasus from "./Contents/ContentPegasus";
import ContentLast from "./Contents/ContentLast";
import ContentMetaverse from "./Contents/ContentMetaverse";

const Content: React.FC = () => {
  return (
    <>
      <DesLayout>
        <LinearBg />
        <Contentp2e />
        <LinearBg right={true} reverse={true} />
        <ContentMeet />
        <LinearBg right={false} reverse={true} />
        <ContentMetaverse />
        <LinearBg right={true} />
        <ContentPegasus />
        <ContentLast />
      </DesLayout>
    </>
  );
};

const LastBox = styled.div`
  height: auto;
  position: relative;
`;

const DesContentLightLayout = styled(DesContentLayout)`
  width: 100%;
  background: ${(props) => props.theme.bgColor};
`;

const LastContentLayout = styled(DesContentLayout)`
  margin: 5rem 0;
`;

const LastDesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CommonDesDiv = styled.div`
  width: 44%;
  max-width: 528px;
`;

const P2EDiv = styled(CommonDesDiv)`
  margin: 26px 48.4px 36px 0;
  position: relative;
  bottom: 20vh;
`;

const NXDFmeetDiv = styled(CommonDesDiv)`
  max-width: 558px;
  width: 47%;
  margin: 20px 9px 20px 71px;
  position: relative;
  top: 10vh;
`;

const MetavserseDiv = styled(CommonDesDiv)`
  padding-top: 5vh;
  margin-right: 80px;
  position: relative;
  top: 5vh;
`;

const PegasusDesDiv = styled(CommonDesDiv)`
  position: relative;
  top: 5vh;
  right: 5vh;
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
  line-height: 24px;
`;

const LastDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Lastimg = styled.img``;

const LastContentdiv = styled.div`
  width: 60%;
  align-items: center;
  justify-content: center;
`;

const DesImgDiv = styled.div`
  width: 10%;
  height: 10%;
  img {
    width: 720%;
    height: 100%;
    position: relative;
    top: 22vh;
    left: 50%;
    object-fit: contain;
  }
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

const Imgbtn = styled.button`
  width: 200px;
  height: 56px;
  padding: 16px 32px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.btnColor};
  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.63px;
  text-align: left;
  margin-right: 15px;
`;
const ImgIcon = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 15px;
`;

const ImgIconSm = styled(ImgIcon)`
  width: 40px;
  height: 40px;
  margin-right: 18px;
`;

const LastReadMore = styled.span`
  margin-bottom: 2rem;
  font-size: 21px;
  color: ${(props) => props.theme.btnColor};
  font-weight: bold;
  display: inline-block;
`;

const SentenceP = styled.p`
  margin-top: 18px;
`;

const Metaaxel = styled.img`
  width: 10vh;
  object-fit: contain;
  position: absolute;
  z-index: 1;
  right: 80vh;
  bottom: 10vh;
`;

export default Content;
