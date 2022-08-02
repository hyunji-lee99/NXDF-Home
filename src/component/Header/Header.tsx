import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LangState } from "../../atoms";
import { selectLang } from "../../lib/selectLang";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.headerColor};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const HeaderLayout = styled.div`
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
const Nav = styled.ul`
  max-width: 1920px;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: bold;
`;

const Button = styled.div`
  width: 140px;
  height: 80px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.2);
  span {
    line-height: 1.11;
    letter-spacing: -0.54px;
    text-align: left;
    font-weight: bold;
  }
`;

const LangContainer = styled.div`
  height: 0px;
  width: 0px;
`;

const LangBox = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderContainer = styled.div`
  width: 18.75%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const [Lang, setLang] = useRecoilState(LangState);
  const { HeaderLang } = selectLang(Lang);
  // const ChangeLang = () => {
  //   setLang((prev) => !prev);
  // };

  return (
    <SHeader>
      <HeaderContainer></HeaderContainer>
      <HeaderLayout>
        <Wrapper>
          <img
            width='255px'
            height='28px'
            src={`${process.env.PUBLIC_URL}/image/header/NXDF_logo.png`}
          />
        </Wrapper>
        <Nav>
          <a href='#'>
            <li>{HeaderLang[0]}</li>
          </a>
          <a href=' https://docs.google.com/document/d/1GxDwnL90k_kOBrEfe_RVfXp1lincXCR5Gt6JCfwyFoc/edit?usp=sharing'>
            <li>{HeaderLang[1]}</li>
          </a>
          <a href='#'>
            <li>{HeaderLang[2]}</li>
          </a>
          <a href='https://github.com/DAIOSFoundation'>
            <li>{HeaderLang[3]}</li>
          </a>
          <a href='https://medium.com/@NXDF'>
            <li>{HeaderLang[4]}</li>
          </a>
          <a href='#'>
            <li>{HeaderLang[5]}</li>
          </a>
          <a href='https://metaaxel.online'>
            <li>{HeaderLang[6]}</li>
          </a>
        </Nav>
      </HeaderLayout>
      <HeaderContainer>
        <Button>
          <span>{Lang ? "English" : "한국어"}</span>
          <img
            src={`${process.env.PUBLIC_URL}/image/common/nav-select-down.png`}
          />
        </Button>
      </HeaderContainer>
    </SHeader>
  );
}
export default Header;
