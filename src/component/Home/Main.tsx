import styled from "styled-components";

const Main: React.FC = () => {
  return (
    <MainLayout>
      <MainTitle>
        Invitation <br />
        to the NXDF Ecosystems
      </MainTitle>
      <MainImage>
        <img
          width='100%'
          height='100%'
          src={`${process.env.PUBLIC_URL}/image/main/main_image.png`}
        />
      </MainImage>
      <MainDesLayout>
        <MainImgBox>
          <ImgBoxTitle>De-Fi Platform</ImgBoxTitle>
          <ImgBox>
            <img
              src={`${process.env.PUBLIC_URL}/image/main/imgbox/icon-dex.png`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/main/imgbox/icon-wallet.png`}
            />
          </ImgBox>
        </MainImgBox>
        <MainImgBoxCenter>
          <ImgBoxTitle>Blockchain Infrastructure</ImgBoxTitle>
          <CenterImgBox>
            <img
              src={`${process.env.PUBLIC_URL}/image/main/imgbox/icon-chain01.png`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/main/imgbox/icon-chain02.png`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/main/imgbox/icon-chain03.png`}
            />
          </CenterImgBox>
        </MainImgBoxCenter>
        <MainImgBox>
          <ImgBoxTitle>P2E Infrastructure</ImgBoxTitle>
          <ImgBox>
            <img
              src={`${process.env.PUBLIC_URL}/image/main/imgbox/icon-bridge.png`}
            />
            <img
              src={`${process.env.PUBLIC_URL}/image/main/imgbox/icon-side.png`}
            />
          </ImgBox>
        </MainImgBox>
      </MainDesLayout>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  margin: 0 auto;
  width: 62.5%;
`;

const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 38px;
`;

const MainImage = styled.div`
  margin: 2rem 0px;
  width: 100%;
  max-width: 1200px;
  max-height: 500px;
`;

const MainDesLayout = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

const MainImgBox = styled.div`
  width: 30%;
  max-width: 320px;
  height: 200px;
  padding: 49px 33px 32px;
  border-radius: 20px;
  border: solid 1px #2b2e6c;
`;

const MainImgBoxCenter = styled(MainImgBox)`
  width: 40%;
  margin: 0px 3rem;
  max-width: 485px;
`;

const ImgBoxTitle = styled.span`
  position: relative;
  bottom: 50%;
  background-color: ${(props) => props.theme.bgColor}; ;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 21px;
  img {
    width: 50%;
    position: relative;
    bottom: 25px;
    margin: 1px 10px;
  }
`;

const CenterImgBox = styled(ImgBox)`
  img {
    width: 33%;
    position: relative;
    bottom: 25px;
    margin: 1px 10px;
  }
`;
export default Main;
