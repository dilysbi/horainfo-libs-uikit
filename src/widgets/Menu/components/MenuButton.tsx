import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 16px;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
