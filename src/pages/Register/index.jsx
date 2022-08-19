//Components
import { MainContainer } from "../../components/MainContainer/styles"
import { Tittle } from "../../components/Tittle"

//Styles
import { ContainerRegister, 
         ContainerTittle,
         Form, 
         ContainerLabel, 
         Label,
         InputEmail,
         InputPassword,
         Button,  
         ContainerInputPassword,
         ButtonImg,
         Link, } from "./styles"

//Others
import React, { useState } from "react"
import colors from "../../themes/colors"
import { MdEmail, MdLock, MdOutlineAppRegistration } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const Register = () => {

  //LÓGICA BOTÃO MOSTRAR/OCULTAR SENHA
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  //LÓGICA CADASTRAR-SE
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (event) => {
    event.preventDefault()
    if (password1 === password2) {
      return(
        alert("Cadastro realizado com sucesso")
      ) 
    }
    return (
      alert("As senhas não correspondem")
    )
    
  }

    return (
      <MainContainer>
        <ContainerRegister>
        <ContainerTittle>
          <MdOutlineAppRegistration style={{width: "2.8rem", height: "2.8rem", margin: "0.2rem", color: `${colors.letters}`, }} />
          <Tittle valueText="Cadastro" />
        </ContainerTittle>   
            <Form>
            <ContainerLabel>
              <MdEmail style={{width: "2.4rem", height: "2.4rem", margin: "0.2rem", color: `${colors.letters}` }} />
              <Label htmlFor="user">Email</Label>
            </ContainerLabel>
            <InputEmail type="email" name="email" id="email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <ContainerLabel>
              <MdLock style={{width: "2.4rem", height: "2.4rem", margin: "0.15rem", color: `${colors.letters}` }} />
              <Label htmlFor="password">Senha</Label>
            </ContainerLabel>
            <InputPassword type={show ? "text" : "password"} name="password1" id="password1" placeholder="digite sua senha" value={password1} onChange={(e) => setPassword1(e.target.value)} />
            <ContainerLabel>
              <MdLock style={{width: "2.4rem", height: "2.4rem", margin: "0.15rem", color: `${colors.letters}` }} />
              <Label htmlFor="password">Confirmar Senha</Label>
            </ContainerLabel>
            <ContainerInputPassword>
              <InputPassword type={show ? "text" : "password"} name="password2" id="password2" placeholder="confirme sua senha" value={password2} onChange={(e) => setPassword2(e.target.value)} />
              <ButtonImg>
                {show ? (
                  <HiEye style={{width: "2.4rem", height: "2.4rem", margin: "0.2rem", color: `${colors.letters}` }} onClick={handleClick} />
                  ) : (
                  <HiEyeOff style={{width: "2.4rem", height: "2.4rem", margin: "0.2rem", color: `${colors.letters}` }} onClick={handleClick} />
                  )}
              </ButtonImg>
            </ContainerInputPassword>
            </Form>
            <Button type="submit" onClick={onSubmit}>Cadastrar-se</Button>
            <Link href="/login">Login</Link>
          </ContainerRegister>
      </MainContainer>
    );
  };
  