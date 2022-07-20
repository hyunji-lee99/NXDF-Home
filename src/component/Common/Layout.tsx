import styled from "styled-components";
import Header from "../Header/Header";
import { LinearBg } from "./Linear";

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
      {/* <LinearBg /> */}
    </>
  );
};

export const DesLayout = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgColor};
`;

export const DesContentLayout = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgDarkColor};
`;

export const HomeLayout = styled.div`
  margin: 0 auto;
  width: 100%;
`;
export default Layout;
