import styled from "styled-components";
import {
  CommonDesDiv,
  DesH1,
  Despan,
  ImgIcon,
  DesContent,
} from "../../Common/Elements";
import { DesContentLayout } from "../../Common/Layout";

const Contentp2e: React.FC = () => {
  return (
    <DesContentLayout>
      <DesContent>
        <P2EDiv>
          <DesH1>
            Accelerate
            <br /> User Experience of P2E
          </DesH1>
          <Despan>
            The user’s P2E (Play To Earn) experience is the key feature in the
            NXDF ecosystem. In order to offer a proper P2E environment, it
            should start with a decentralized financial service that is close to
            the user’s hand. For this purpose, NXDF has developed a mobile
            wallet and based on it, provides users with a much more
            sophisticated decentralized financial service experience. This
            mobile wallet can store or monetize the assets of the game or
            metaverse that the user has signed up for, even if the user does not
            have access to the game or metaverse. Of course, you can also use a
            mobile wallet integrated with the game by using a plugin or SDK. If
            you would like to know more about this, please contact our
            development team.
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
  );
};

const P2EDiv = styled(CommonDesDiv)`
  margin: 26px 48.4px 36px 0;
  position: relative;
  bottom: 20vh;
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

export default Contentp2e;
