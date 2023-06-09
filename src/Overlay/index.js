import styled from "styled-components";

const OverlayWrapper = styled("span")`
  position: absolute;
  display: ${({ show }) => (show ? "block" : "none")};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`;

const Overlay = ({ show }) => {
  return <OverlayWrapper show={show} />;
};

export default Overlay;
