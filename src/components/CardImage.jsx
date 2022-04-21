import styled from "styled-components/macro";
import videoImage from "../video-818.png";

const CardImage = ({ src, alt, type = "image" }) => {
  return (
    <Wrapper>{type.match(/image/) ? <Image src={src} alt={alt || "Image Media"} /> : <Image src={videoImage} alt={alt || "Video Media"} />}</Wrapper>
  );
};

const Image = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;
const Wrapper = styled.div`
  width: 100%;
`;

export default CardImage;
