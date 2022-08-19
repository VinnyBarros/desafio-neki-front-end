//Components
import { MainContainer } from "../../components/MainContainer/styles";
import { Tittle } from "../../components/Tittle"

//Styles
import { ContainerHome, ContainerTittle } from "./styles"

//Others
import React from "react";
import { HiHome } from "react-icons/hi";
import colors from "../../themes/colors"

export const Home = () => {
  return (
    <MainContainer>
      <ContainerHome>
        <ContainerTittle>
          <HiHome style={{width: "2.8rem", height: "2.8rem", margin: "0.2rem", color: `${colors.letters}`, }} />
          <Tittle valueText="Home" />
        </ContainerTittle>    
      </ContainerHome>
    </MainContainer>
  );
};
