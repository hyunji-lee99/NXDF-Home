import styled from "styled-components";
import { LinearBg } from "../Common/Linear";

const Content: React.FC = () => {
  return (
    <>
      <DesLayout>
        <LinearBg />
        <DesContentLayout>
          <DesContent>
            <P2EDiv>
              <DesH1>
                Accelerate
                <br /> User Experience of P2E
              </DesH1>
              <Despan>
                The user’s P2E (Play To Earn) experience is the key feature in
                the NXDF ecosystem. In order to offer a proper P2E environment,
                it should start with a decentralized financial service that is
                close to the user’s hand. For this purpose, NXDF has developed a
                mobile wallet and based on it, provides users with a much more
                sophisticated decentralized financial service experience. This
                mobile wallet can store or monetize the assets of the game or
                metaverse that the user has signed up for, even if the user does
                not have access to the game or metaverse. Of course, you can
                also use a mobile wallet integrated with the game by using a
                plugin or SDK. If you would like to know more about this, please
                contact our development team.
              </Despan>
              <div>
                <ImgIcon
                  src={`${process.env.PUBLIC_URL}/image/common/icon-discode.png`}
                />
                <ImgIcon
                  src={`${process.env.PUBLIC_URL}/image/common/icon-telegram.png`}
                />
              </div>
            </P2EDiv>
            <DesImgDiv>
              <img
                src={`${process.env.PUBLIC_URL}/image/home/description/sec02-image.png`}
              />
            </DesImgDiv>
          </DesContent>
        </DesContentLayout>
        <LinearBg right={true} reverse={true} />
        <DesContentLightLayout>
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
                During the COVID period, it has become more common for <br />{" "}
                many people to do their work and leisure activities on the{" "}
                <br /> Internet. Through voice chat, while looking at each
                other’s <br />
                faces, we are able to perform activities that are more realistic{" "}
                <br />
                than before. Not only conferences but also presentations, social{" "}
                <br />
                parties, dating, shopping, gaming and more can be easily held{" "}
                <br /> online. <SentenceP></SentenceP> You can use the video
                conferencing service just by depositing <br /> NXDF or GNXD in
                your wallet. NXDF-Meet You can be with your <br /> friends in
                real-time no matter which metaverse you are <br /> connected to.
                NXDF-Meet We open source and API to become <br /> a service for
                all metaverses around the world, not just for the <br /> NXDF
                ecosystem.
              </Despan>
              <Imgbtn>Start Meeting</Imgbtn>
            </NXDFmeetDiv>
          </DesContent>
        </DesContentLightLayout>
        <LinearBg right={false} reverse={true} />
        <DesContentLayout>
          <DesContent>
            <MetavserseDiv>
              <DesH1>A DEX for P2E & Metaverse</DesH1>
              <Despan>
                Game items such as weapons, clothes, and shoes should be easily
                exchangeable in the game itself. NFT assets such as land,
                houses, and paintings should also be easily exchangeable on the
                metaverse. To this end, we support a decentralized exchange
                exclusively for games and metaverses in the NXDF ecosystems.
                NXDF’s infrastructure makes it easy for anyone to buy and sell
                in-game tokens and items at any desired price. In addition, NXDF
                DAO directly supports promising NFT and P2E projects for the
                expansion of a healthy De-Fi ecosystem. LuciDEX has newly joined
                the NXDF ecosystem to take charge of the decentralized exchange
                technology of the NXDF mobile environment.
              </Despan>
            </MetavserseDiv>
            <DesImg
              src={`${process.env.PUBLIC_URL}/image/home/description/sec04-img.png`}
            />
          </DesContent>
        </DesContentLayout>
      </DesLayout>
    </>
  );
};

const DesLayout = styled.div`
  width: 100%;
`;

const DesContentLayout = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgDarkColor};
`;

const DesContentLightLayout = styled(DesContentLayout)`
  width: 100%;
  background: ${(props) => props.theme.bgColor};
`;

const DesContent = styled.div`
  width: 62.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
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

const SentenceP = styled.p`
  margin-top: 18px;
`;

export default Content;
