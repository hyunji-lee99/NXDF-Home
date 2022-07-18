import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.headerColor};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Column = styled.div``;

const Icon = styled.span`
  margin-left: 15px;
`;

const Button = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 4px;
  padding: 4px 15px;
  color: white;
  font-weight: 600;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <SHeader>
      <HeaderLayout>
        <Wrapper>
          <img
            width='255px'
            height='28px'
            src={`${process.env.PUBLIC_URL}/image/header/NXDF_logo.png`}
          />
        </Wrapper>
        <Nav>
          <li>NXDF Ecosystems</li>
          <li>White Paper</li>
          <li>Team</li>
          <li>GitHub</li>
          <li>Article</li>
          <li>DEX</li>
          <li>MetaAxel</li>
        </Nav>
      </HeaderLayout>
    </SHeader>
  );
}
export default Header;
