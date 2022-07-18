import styled from "styled-components";
import Main from "../component/Home/Main";

const HomeLayout = styled.div`
  margin: 0 auto;
  width: 100%;
`;

function Home() {
  return (
    <HomeLayout>
      <Main />
    </HomeLayout>
  );
}
export default Home;
