import styled from "styled-components";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Content = styled.main`
  margin: 0 auto;
  margin-top: 45px;
  max-width: 1920px;
  width: 100%;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <FooterL>
        <FooterLayout>
          <Wrapper>
            <img
              width='255px'
              height='28px'
              src={`${process.env.PUBLIC_URL}/image/header/NXDF_logo.png`}
            />
          </Wrapper>
          <Nav>
            <ImgIcon
              src={`${process.env.PUBLIC_URL}/image/common/icon-discode.png`}
            />
            <ImgIcon
              src={`${process.env.PUBLIC_URL}/image/common/icon-reddit.png`}
            />
            <ImgIcon
              src={`${process.env.PUBLIC_URL}/image/common/icon-twitter.png`}
            />
            <ImgIcon
              src={`${process.env.PUBLIC_URL}/image/common/icon-telegram.png`}
            />
          </Nav>
        </FooterLayout>
      </FooterL>
    </>
  );
};

const Nav = styled.ul`
  max-width: 1920px;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  font-weight: bold;
`;

const FooterL = styled.footer`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme.headerColor};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterLayout = styled.div`
  width: 62.5%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1920px;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgIcon = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 15px;
`;

export const DesLayout = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgColor};
`;

export const DesContentLayout = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgDarkColor};
`;

export const CompanyLayout = styled.div`
  width: 100%;
  background: white;
`;

export const HomeLayout = styled.div`
  margin: 0 auto;
  width: 100%;
`;
export default Layout;
