import styled from "styled-components";
import spacing from "../../config/spacing";
import colors from "../../themes/colors"

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 50vh;
  width: 55vw;
  background-color: ${colors.secondary};
  margin: ${spacing.medium};
  border-radius: ${spacing.small};
  padding: ${spacing.medium};
  shadow-color: ${colors.shadow};
  box-shadow: 5px 4px 3px 2px #05211e;
`;

export const ContainerTittle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 1.5rem;
`

