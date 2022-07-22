import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";

const Main: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const {
    MainLang: { mainTitle, mainBoxTitle },
  } = selectLang(Lang);
  return (
    <MainLayout>
      <MainTitle>{mainTitle}</MainTitle>
      <MainImage>
        <img
          width='100%'
          height='100%'
          src={`${process.env.PUBLIC_URL}/image/home/main_image.png`}
        />
      </MainImage>
      <MainDesLayout>
        <MainImgBox>
          <ImgBoxTitle>{mainBoxTitle[0]}</ImgBoxTitle>
          <ImgBox>
            <img
              src={`${process.env.PUBLIC_URL}/image/home/imgbox/icon-dex.png`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/home/imgbox/icon-wallet.png`}
            />
          </ImgBox>
        </MainImgBox>
        <MainImgBoxCenter>
          <ImgBoxTitle>{mainBoxTitle[1]}</ImgBoxTitle>
          <CenterImgBox>
            <img
              src={`${process.env.PUBLIC_URL}/image/home/imgbox/icon-chain01.png`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/home/imgbox/icon-chain02.png`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/home/imgbox/icon-chain03.png`}
            />
          </CenterImgBox>
        </MainImgBoxCenter>
        <MainImgBox>
          <ImgBoxTitle>{mainBoxTitle[2]}</ImgBoxTitle>
          <ImgBox>
            <img
              src={`${process.env.PUBLIC_URL}/image/home/imgbox/icon-bridge.png`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/home/imgbox/icon-side.png`}
            />
          </ImgBox>
        </MainImgBox>
      </MainDesLayout>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  margin: 0 auto;
  padding-top: 2rem;
  width: 62.5%;
`;

const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 38px;
  line-height: 1.37;
  letter-spacing: -1.14px;
  white-space: pre-wrap;
`;

const MainImage = styled.div`
  margin: 2rem 0px;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  max-height: 500px;
`;

const MainDesLayout = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
  display: flex;
`;

const MainImgBox = styled.div`
  width: 30%;
  max-width: 320px;
  border-radius: 20px;
`;

const MainImgBoxCenter = styled(MainImgBox)`
  width: 40%;
  margin: 0px 3rem;
  max-width: 485px;
`;

const ImgBoxTitle = styled.span`
  display: inline-block;
  margin-left: 2rem;
  position: relative;
  top: 2rem;
  font-size: 24px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: -0.72px;
  background-color: ${(props) => props.theme.bgColor}; ;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px #2b2e6c;
  border-radius: 20px;
  padding: 2rem;
  img {
    width: 50%;
    margin: 1px 10px;
  }
`;

const CenterImgBox = styled(ImgBox)`
  img {
    width: 33%;
    margin: 1px 10px;
  }
`;
export default Main;
