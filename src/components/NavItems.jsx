import styled from "styled-components/macro";

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    margin-top: 24px;
    transition: all 250ms;
    transform-origin: top left;

    &.collapsed {
      transform: scaleY(0);
      height: 0;
      margin: 0;
      a {
        color: transparent !important;
      }
    }
  }
`;

export default NavItems;
