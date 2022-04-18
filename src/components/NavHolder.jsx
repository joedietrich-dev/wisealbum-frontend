import styled from "styled-components/macro";

const NavHolder = styled.div`
  z-index: 1000;
  background-color: #3d7068;
  color: #ffffff;
  --shadow-color: 0deg 0% 54%;
  box-shadow: 0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.68), 0.7px 1.3px 1.4px -1.2px hsl(var(--shadow-color) / 0.57),
    2.1px 4.1px 4.3px -2.5px hsl(var(--shadow-color) / 0.45), 5.6px 11.3px 11.8px -3.7px hsl(var(--shadow-color) / 0.34);
  position: sticky;
  top: 0;
`;

export default NavHolder;
