import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Loading from "../Components/Loading/Loading";

const ProtectedRoute = ({ component: Component, ...otherProps }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  console.log(isAuthenticated);

  return (
    <Route
      {...otherProps}
      render={(props) =>
        !isLoading ? (
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={otherProps.redirectTo ? otherProps.redirectTo : "/auth"}
            />
          )
        ) : (
          <Loading />
        )
      }
    />
  );
};

export default ProtectedRoute;
