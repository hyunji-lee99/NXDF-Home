import styled from "styled-components";
import { DesContent } from "../Common/Content";
import { TitleH1 } from "../Common/Title";
import { DesContentLayout, DesLayout } from "../Common/Layout";
import { Bzpartner, Devpartner } from "../../Data/PartnersData";
import PartnerPlate from "./Partners/PartnersPlate";

function Partners() {
  return (
    <>
      <DesContentLayout>
        <PartnerContent>
          <PartnerTitle>Business Team</PartnerTitle>
          <PartnerGrid>
            {Bzpartner.map(({ img, name, position }) => (
              <PartnerPlate img={img} name={name} position={position} />
            ))}
          </PartnerGrid>
        </PartnerContent>
      </DesContentLayout>
      <DesLayout>
        <PartnerContent>
          <PartnerTitle>Development Team</PartnerTitle>
          <PartnerGrid>
            {Devpartner.map(({ img, name, position }) => (
              <PartnerPlate img={img} name={name} position={position} />
            ))}
          </PartnerGrid>
        </PartnerContent>
      </DesLayout>
    </>
  );
}

const PartnerContent = styled(DesContent)`
  flex-direction: column;
`;

const PartnerGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  min-height: 400px;
  justify-content: space-between;
  gap: 1rem 2rem;
  margin-bottom: 5rem;
`;

const PartnerTitle = styled(TitleH1)`
  margin: 3rem;
`;

export default Partners;
