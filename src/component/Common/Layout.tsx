import styled from "styled-components";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Content = styled.main`
  margin: 0 auto;
  margin-top: 45px;
  width: 100%;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
