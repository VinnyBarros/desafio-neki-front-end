import styled from "styled-components";
import spacing from "../../config/spacing";
import colors from "../../themes/colors"

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 75vh;
  width: 35vw;
  background-color: ${colors.secondary};
  margin: ${spacing.small};
  border-radius: ${spacing.small};
  padding: ${spacing.small};
  shadow-color: ${colors.shadow};
  box-shadow: 5px 4px 3px 2px #05211e;
`;

export const ContainerTittle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Form = styled.form`
display: flex;
flex-direction: column; 
align-items: flex-start;
justify-content: center;
padding: ${spacing.medium};
padding-left: 5rem;
`;

export const ContainerLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 28rem;
  padding-top: ${spacing.small};
  padding-bottom: 0.5rem;
`;

export const Label = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 1.6rem;
  font-weight: bold;
  font-family: "Roboto";
  color: ${colors.letters};
`;

export const InputEmail = styled.input`
  border-radius: ${spacing.small};
  width: 26rem;
  height: 2.4rem;
  font-size: 1.5rem;
  padding: 0.15rem;
  padding-left: 1rem;
  outline-width: 0;
  color: ${colors.secondary};
`;

export const InputPassword = styled.input`
  border-radius: ${spacing.small};
  width: 26rem;
  height: 2.4rem;
  font-size: 1.5rem;
  padding: 0.15rem;
  padding-left: 1rem;
  outline-width: 0;
  color: ${colors.secondary};
`;

export const Button = styled.button`
  border: none;
  transition: 1s;
  background-color: ${colors.background};
  border-radius: ${spacing.small};
  font-size: 1.6rem;
  font-weight: bold;
  color: ${colors.letters};
  height: ${spacing.medium};
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: ${spacing.medium};
  shadow-color: ${colors.shadow};
  box-shadow: 2px 4px 3px 2px #05211e;

  &:hover {
    cursor: pointer;
    transition: 0.35s;
    background-color: ${colors.letters};
    color: ${colors.background};
  }
`;

export const ContainerInputPassword = styled.div`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
`;

export const ButtonImg = styled.button`
  display: flex;
  border: none;
  background-color: ${colors.secondary};
  margin-left: 0.8rem;
  cursor: pointer;

`;

export const Link = styled.a`
  color: ${colors.letters};
  font-size: 1.65rem;
  font-weight: bold;
  font-family: "Roboto";
  text-decoration: none;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
    transition: 0.35s;
    color: ${colors.primary};
  }
`;