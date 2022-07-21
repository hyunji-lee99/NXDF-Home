import styled from "styled-components";

type PartnersProps = {
  img?: string;
  name?: string;
  position?: string;
};

const PartnerPlate: React.FC<PartnersProps> = ({ img, name, position }) => {
  return (
    <PartnerPlateLayout>
      <PartnerImg img={img} />
      <PartnerIntro>
        <PartnerName>{name}</PartnerName>
        <PartnerPosition>{position}</PartnerPosition>
      </PartnerIntro>
    </PartnerPlateLayout>
  );
};

const PartnerPlateLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PartnerImg = styled.div<{ img?: string }>`
  width: 100%;
  height: 60%;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
  margin: 0 23px 30px 23px;
`;

const PartnerIntro = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2rem;
`;

const PartnerName = styled.span`
  font-size: 20px;
  line-height: 52px;
  padding: 0.5rem 0px;
`;
const PartnerPosition = styled.span`
  font-size: 18px;
  color: #b0b0c6;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.54px;
`;

export default PartnerPlate;
