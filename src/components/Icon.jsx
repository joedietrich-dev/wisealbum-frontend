import styled from "styled-components/macro";

const Icon = ({ url }) => (
  <Wrapper>
    <Image src={url} alt={`Icon ${url}`} />
  </Wrapper>
);
const Wrapper = styled.i`
  display: inline-flex;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 100%;
  width: auto;
`;

export default Icon;
