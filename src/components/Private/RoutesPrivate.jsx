//Others
import React, { useContext } from "react"
import { Route, Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../contexts/authentication"

export const RoutesPrivate = ({ component: Component, ...rest}) => {
  const { token } = useContext(AuthContext)
  //const navigate = useNavigate()

  // return(
  //   <Route 
  //     render={() => token 
  //       ? <Component {...rest} />
  //       : <Navigate to="/login" />
  //     }
  //   />  
  // )
  return token ? <Outlet /> : <Navigate to="/login"/>
}

