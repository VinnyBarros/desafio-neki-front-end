//Others
import React, { useState, useEffect, createContext } from "react"
import useStorage from "../utils/useStorage"
// import { useNavigate } from "react-router-dom"
// import { api } from "../services/api"

export const AuthContext = createContext({
  token: null,
  setToken: () => {},
});

// export const AuthProvider = ({ children }) => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const recoveredUser = localStorage.getItem("user");
//       if (recoveredUser) {
//         setUser(JSON.parse(recoveredUser));
//         console.log(`UsuarioLogado: ${recoveredUser}`);
//       }
//       setLoading(false);
//     }, []);
  
//     const login = async (email, password) => {
//       console.log(`###_001_login auth ${email} ${password}`);
//       var ok = 1;
//       var id = 0;
//       try {
//         const { data } = await api.get(`/user/${email}/${password}`);
//         id = data;
//         console.log("###_Dados_Usuario_Recuperados");
//       } catch (err) {
//         console.log("###_Falha_Recuperacao_Dados_Usuario");
//         ok = 0;
//       }
//       if (ok === 1 && id > 0) {
//         console.log("###_Usuario_autenticado");
//         const loggedUser = {
//           id,
//           email,
//         };
//         localStorage.setItem("user", JSON.stringify(loggedUser));
//         setUser(loggedUser);
//         navigate("/controlpanel");
//       } else {
//         console.log("###_Dados_Usuario_incorreto");
//         localStorage.setItem("user", null);
//         alert("Dados incorretos. Por favor, tente novamente.");
//       }
//     };
  
//     const logout = () => {
//       console.log("logout");
//       localStorage.removeItem("user");
//       setUser(null);
//       navigate("/login");
//     };

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useStorage('token')

    return (
      // <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
      //  {children}
      // </AuthContext.Provider>
      <AuthContext.Provider value={{ token, setToken }}>
        {children}
      </AuthContext.Provider>
    );
  };