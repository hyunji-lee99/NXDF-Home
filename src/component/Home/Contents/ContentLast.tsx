import styled from "styled-components";
import media from "../../../lib/media";
import {
  CommonDesDiv,
  DesH1,
  DesImg,
  Despan,
  ImgIconSm,
  DesContent,
} from "../../Common/Elements";
import { DesContentLayout } from "../../Common/Layout";

const ContentLast: React.FC = () => {
  return (
    <LastContentLayout>
      <LastDesContent>
        <LastContentdiv>
          <DesH1>
            The beginning <br /> of the first-person view Metaverse
          </DesH1>
          <Despan>
            The term “metaverse” originated in the 1992 science fiction
            novel Snow Crash as a portmanteau of “meta” and “universe.”
            Meta-Axel expands our universe to multiple realities in the multiple
            universes according to the informational Cosmology. As if you
            experience the reality with your bare eyes, Meta-Axel offers users
            virtual reality in the first-person view. Users can easily access to
            the metaverse with a mobile phone and enjoy many different programs
            such as hunting monsters, collecting treasures, killing enemies,
            dating, meeting, having a pool party etc.
          </Despan>
          <LastReadMore>Read more</LastReadMore>
          <div>
            <a href='https://discord.gg/UxAYWbkXyS'>
              <ImgIconSm
                src={`${process.env.PUBLIC_URL}/image/common/icon-discode.png`}
              />
            </a>
            <a href='https://t.me/nxdfarmy'>
              <ImgIconSm
                src={`${process.env.PUBLIC_URL}/image/common/icon-telegram.png`}
              />
            </a>
            <a href='https://medium.com/@METAAXEL'>
              <ImgIconSm
                src={`${process.env.PUBLIC_URL}/image/common/icon-medium.png`}
              />
            </a>
          </div>
        </LastContentdiv>
        <LastBox>
          <Metaaxel
            src={`${process.env.PUBLIC_URL}/image/home/description/meta-axel.png`}
          />
        </LastBox>
      </LastDesContent>
    </LastContentLayout>
  );
};

const LastContentLayout = styled(DesContentLayout)`
  margin: 5rem 0;
  background-image: url("/image/home/description/sec06-img.png");
  background-repeat: no-repeat;
  background-position: right;
  ${media.small} {
    background-image: url("/image/home/description/sec06-img.png");
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

const LastDesContent = styled(DesContent)`
  padding: 3rem 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.small} {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const LastContentdiv = styled(CommonDesDiv)`
  width: 60%;
  align-items: center;
  justify-content: center;
  ${media.small} {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const LastReadMore = styled.span`
  margin-bottom: 2rem;
  font-size: 21px;
  color: ${(props) => props.theme.btnColor};
  font-weight: bold;
  display: inline-block;
`;

const LastBox = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  display: flex;
  ${media.small} {
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-start;
  }
`;

const Metaaxel = styled.img`
  width: 10vh;
  object-fit: contain;
  position: absolute;
  z-index: 1;
  left: 5vh;
  bottom: 5vh;
  ${media.small} {
    position: absolute;
    width: auto;
    left: 60%;
    bottom: 80%;
  }
`;
export default ContentLast;
