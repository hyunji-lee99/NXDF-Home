import { prototype } from "events";
import styled from "styled-components";

export const DesH1 = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 26px;
`;

export const Despan = styled.span`
  display: inline-block;
  font-weight: 500;
  margin-bottom: 36px;
  line-height: 24px;
`;

export const CommonDesDiv = styled.div`
  z-index: 10;
  width: 50%;
  max-width: ${(props) => props.theme.maxContentWidth};
`;

export const DesContent = styled.div`
  width: 62.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
`;

//img

export const DesImg = styled.img`
  width: 50%;
  object-fit: contain;
  position: relative;
  bottom: 10vh;
`;

export const ImgIcon = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 15px;
`;

export const ImgIconSm = styled(ImgIcon)`
  width: 40px;
  height: 40px;
  margin-right: 18px;
`;
