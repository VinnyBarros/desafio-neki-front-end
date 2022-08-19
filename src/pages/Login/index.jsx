//Components
import { MainContainer } from "../../components/MainContainer/styles";
import { Tittle } from "../../components/Tittle"
import { Logo } from "../../components/Logo"

//Styles
import { ContainerLogin,
         ContainerTittle, 
         Form, 
         ContainerLabel, 
         Label, 
         InputEmail,
         InputPassword, 
         Button, 
         Link, 
         ContainerInputPassword,
         ButtonImg, } from "./styles";

//Others
import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/authentication"
import { useNavigate } from "react-router-dom"
import colors from "../../themes/colors"
import { MdEmail, MdLock, MdLogin } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";



const initialState = () => {
  return { email: '', password: ''}
}

const UserLogin = ({ email, password }) => {
  

  if (email === 'admin@admin.com' && password === 'admin') {
    return { token: '1234' }
  }
  return(
    alert("Usuário e/ou senha inválido")
  ) 
  //{ error: 'Usuário ou senha inválido' }
}

export const Login = () => {

  //const [email, setEmail] = useState("")
  //const [password, setPassword] = useState("")
  
  //LÓGICA BOTÃO MOSTRAR/OCULTAR SENHA
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
      e.preventDefault()
      setShow(!show)
  }

  //LÓGICA LOGIN
  const [values, setValues] = useState(initialState)
  const { setToken } = useContext(AuthContext)
  const navigate = useNavigate()
  

  const onChange = (event) => {
      const { value, name } = event.target
      setValues({
        ...values,
        [name]: value,
      })
  }

  const onSubmit = (event) => {
      event.preventDefault()
      const { token } = UserLogin(values)

      if (token){
        setToken(token)
        return navigate("/")
      }
      setValues(initialState)
  }

  return (
    <MainContainer>
      <Logo />
      <ContainerLogin>
      <ContainerTittle>
        <MdLogin style={{width: "2.8rem", height: "2.8rem", margin: "0.2rem", color: `${colors.letters}`, }} />
        <Tittle valueText="Login" />
      </ContainerTittle>
        <Form>
        <ContainerLabel>
          <MdEmail style={{width: "2.4rem", height: "2.4rem", margin: "0.2rem", color: `${colors.letters}` }} />
          <Label htmlFor="user">Email</Label>
        </ContainerLabel>
        <InputEmail type="email" name="email" id="email" placeholder="email@email.com" value={values.email} onChange={onChange}/>
        <ContainerLabel>
          <MdLock style={{width: "2.4rem", height: "2.4rem", margin: "0.15rem", color: `${colors.letters}` }} />
          <Label htmlFor="password">Senha</Label>
        </ContainerLabel>
        <ContainerInputPassword>
        <InputPassword type={show ? "text" : "password"} name="password" id="password" placeholder="digite sua senha" value={values.password} onChange={onChange} />
        <ButtonImg>
          {show ? (
              <HiEye style={{width: "2.4rem", height: "2.4rem", margin: "0.2rem", color: `${colors.letters}` }} onClick={handleClick} />
          ) : (
            <HiEyeOff style={{width: "2.4rem", height: "2.4rem", margin: "0.2rem", color: `${colors.letters}` }} onClick={handleClick} />
          )}
        </ButtonImg>
        </ContainerInputPassword>
        </Form>
        <Button type="submit" onClick={onSubmit}>Entrar</Button>
        <Link href="/register">Cadastrar-se</Link>
      </ContainerLogin>
    </MainContainer>
  );
};
