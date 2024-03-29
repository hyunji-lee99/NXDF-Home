import styled from "styled-components";

function Footer() {
  return (
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
          <a href='https://discord.gg/UxAYWbkXyS'>
            <ImgIcon
              src={`${process.env.PUBLIC_URL}/image/common/icon-discode.png`}
            />
          </a>
          <a href='https://www.reddit.com/r/next_defi_protocol/'>
            <ImgIcon
              src={`${process.env.PUBLIC_URL}/image/common/icon-reddit.png`}
            />
          </a>
          <a href='https://twitter.com/nxdf16'>
            <ImgIcon
              src={`${process.env.PUBLIC_URL}/image/common/icon-twitter.png`}
            />
          </a>
          <a href='https://t.me/nxdfarmy'>
            <ImgIcon
              src={`${process.env.PUBLIC_URL}/image/common/icon-telegram.png`}
            />
          </a>
        </Nav>
      </FooterLayout>
    </FooterL>
  );
}

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
export default Footer;
