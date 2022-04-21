import styled from "styled-components/macro";
import videoImage from "../video-818.png";

const CardHorizontalImage = ({ src, alt, type = "image" }) => {
  return (
    <Wrapper>{type.match(/image/) ? <Image src={src} alt={alt || "Image Media"} /> : <Image src={videoImage} alt={alt || "Video Media"} />}</Wrapper>
  );
};

const Image = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
`;
const Wrapper = styled.div`
  width: 100%;
  background-color: #02182b;
`;

export default CardHorizontalImage;
