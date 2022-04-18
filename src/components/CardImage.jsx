import styled from "styled-components/macro";

const CardImage = ({ src, alt }) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt}></Image>
    </Wrapper>
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
