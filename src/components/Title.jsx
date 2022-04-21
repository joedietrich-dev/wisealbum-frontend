import { useEffect } from "react";
import styled from "styled-components/macro";

const StyledTitle = styled.h1`
  margin: 0;
  margin-block-start: 24px;
  margin-block-end: 12px;
`;

const Title = ({ children }) => {
  useEffect(() => {
    if (typeof children === "string") {
      document.title = "WiseAlbum - " + children;
    } else if (Array.isArray(children)) {
      document.title = children.filter((child) => typeof child === "string").reduce((acc, curr) => acc + curr, "WiseAlbum - ");
    } else {
      document.title = "WiseAlbum";
    }
    return () => {
      document.title = "WiseAlbum";
    };
  }, [children]);
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
