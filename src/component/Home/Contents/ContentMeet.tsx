import styled from "styled-components";
import media from "../../../lib/media";
import { useHistory } from "react-router-dom";
import {
  CommonDesDiv,
  DesH1,
  DesImg,
  Despan,
  ImgIcon,
  DesContent,
} from "../../Common/Elements";
import { DesLayout } from "../../Common/Layout";

const ContentMeet: React.FC = () => {
  const onClick = () => {
    window.location.assign("https://meet.nxdf.io");
  };
  return (
    <DesLayout>
      <DesContent>
        <DesImg
          src={`${process.env.PUBLIC_URL}/image/home/description/sec03-img.png`}
        />
        <NXDFmeetDiv>
          <DesH1>
            NXDF Meet,
            <br /> the entrance of the metaverse <br /> environment
          </DesH1>
          <Despan>
            During the COVID period, it has become more common for <br /> many
            people to do their work and leisure activities on the <br />{" "}
            Internet. Through voice chat, while looking at each other’s <br />
            faces, we are able to perform activities that are more realistic{" "}
            <br />
            than before. Not only conferences but also presentations, social{" "}
            <br />
            parties, dating, shopping, gaming and more can be easily held <br />{" "}
            online. <SentenceP></SentenceP> You can use the video conferencing
            service just by depositing <br /> NXDF or GNXD in your wallet.
            NXDF-Meet You can be with your <br /> friends in real-time no matter
            which metaverse you are <br /> connected to. NXDF-Meet We open
            source and API to become <br /> a service for all metaverses around
            the world, not just for the <br /> NXDF ecosystem.
          </Despan>
          <Imgbtn onClick={onClick}>Start Meeting</Imgbtn>
        </NXDFmeetDiv>
      </DesContent>
    </DesLayout>
  );
};

const SentenceP = styled.p`
  margin-top: 18px;
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

const NXDFmeetDiv = styled(CommonDesDiv)`
  max-width: 558px;
  width: 47%;
  margin: 20px 9px 20px 71px;
  position: relative;
  top: 10vh;
  ${media.small} {
    margin: 20px 0px;
    position: static;
    width: 100%;
  }
`;

export default ContentMeet;
