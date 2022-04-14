import { useEffect } from "react";
import styled from "styled-components/macro";

const StyledTitle = styled.h1``;

const Title = ({ children }) => {
  useEffect(() => {
    if (typeof children === "string") {
      document.title = "WiseAlbum - " + children;
    } else if (Array.isArray(children)) {
      document.title = children.filter((child) => typeof child === "string").reduce((acc, curr) => acc + curr, "WiseAlbum - ");
    } else {
      console.log(children);
      document.title = "WiseAlbum";
    }
    return () => {
      document.title = "WiseAlbum";
    };
  }, [children]);
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
