import styled from "styled-components";
import { CompanyLayout } from "../Common/Layout";
import { TitleH1 } from "../Common/Title";
import { Companies } from "../../Data/CompanyData";
import { DesContent } from "../Common/Elements";
import media from "../../lib/media";

const Company: React.FC = () => {
  return (
    <CompanyLayout>
      <CompanyContentLayout>
        <CompanyTitle>Partners</CompanyTitle>
        <CompanyGrid>
          {Companies.map((data) => (
            <CompanyImg img={data.img} />
          ))}
        </CompanyGrid>
      </CompanyContentLayout>
    </CompanyLayout>
  );
};

const CompanyTitle = styled(TitleH1)`
  color: black;
  margin-bottom: 3rem;
`;

const CompanyContentLayout = styled(DesContent)`
  flex-direction: column;
  padding: 5rem 0px;
`;

const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 200px;
  justify-content: space-between;
  gap: 1rem 2rem;
  margin-bottom: 5rem;
`;

const CompanyImg = styled.div<{ img?: string }>`
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 100px;
  ${media.small} {
    width: auto;
    height: auto;
  }
`;
export default Company;
