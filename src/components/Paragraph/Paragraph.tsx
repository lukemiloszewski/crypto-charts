import styled from "styled-components";

interface Props {
  color?: string;
  isBold?: boolean;
  isItalic?: boolean;
}

export const Paragraph = styled.p<Props>`
  color: ${(props) => (props.color ? props.color : "rgba(255, 255, 255, 0.6)")};
  font-weight: ${(props) => (props.isBold ? "bold" : 400)};
  font-style: ${(props) => (props.isItalic ? "italic" : "normal")};
  font-size: 18px;
  letter-spacing: 0.1px;
  line-height: 26px;
`;
