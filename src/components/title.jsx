import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import GroovePaper from "../assets/GroovePaper.png"; // 참조용 유지
import Backgroundphoto from "../assets/Backgroundphoto.jpg";

// Styled components
const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    height: auto;
    aspect-ratio: 16 / 9; /* 이미지 비율에 맞게 조정 */
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 15%;
  position: relative;
  z-index: 1;
  color: white;

  @media (min-width: 768px) {
    padding-top: 5%;
  }
`;

const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  @media (min-width: 768px) {
    object-fit: contain;
    height: auto;
    max-height: 100vh;
  }
`;

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 16px;
  font-weight: 600;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
`;

const Schedule = styled.p`
  font-size: 1rem; /* 타이포 수정 */
  color: white;
  text-align: center;
  position: absolute;
  bottom: 5%;
  width: 100%;
  z-index: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  font-weight: 600;
`;

const CenterText = styled.p`
  font-size: 3rem;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 20%;
  width: 100%;
  z-index: 1;
  font-family: "Ephesis-Regular";
  font-weight: 500;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); /* 가독성 위해 적용 */
`;

// Title component
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
      </TitleWrapper>
      <ImageBackground src={Backgroundphoto} alt="Background Photo" />
      <CenterText>
        We are getting married!
      </CenterText>
      <Schedule>
        {WEDDING_DATE} <br />
        {WEDDING_LOCATION}
      </Schedule>
    </Layout>
  );
};

export default Title;
