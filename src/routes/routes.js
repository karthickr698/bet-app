import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Signmain from "../Components/Sign/signMain";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Auth from "./Auth";
import MyBets from "../Components/Dashboard/MyBets";
import Dashboardmain from "../Components/Dashboard/Dashboardmain";
import Profile from "../Components/Profile/Profile";
import MyWallet from "../Components/Wallet/Walletmain";
import SetBet from "../Components/Bets/SetBet";
import Bets from "../Components/Bets/Bets";
import Loading from "../Components/Loading/Loading";
import BetsEnum from "../Components/Bets/BetsEnum";
import { AuthContext } from "./Auth";
import Forgot from "../Components/Sign/ForgotPassword";
import Otp from "../Components/Sign/Otp";
import Match from "../Components/Bets/Match";

const Routes = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <Auth>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isAuthenticated ? <Home /> : null}
          <Switch>
            <ProtectedRoute exact path="/" component={Dashboardmain} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/my-bets" component={MyBets} />
            <ProtectedRoute exact path="/my-wallet" component={MyWallet} />
            <ProtectedRoute exact path="/set-bet/:id" component={SetBet} />
            <ProtectedRoute exact path="/bets/:id" component={Match} />
            <ProtectedRoute exact path="/bets/:id/enum" component={BetsEnum} />
            <Route exact path="/auth/forgot" component={Forgot} />
            <Route exact path="/auth/otp" component={Otp} />
            <Route exact path="/auth" component={Signmain} />
            <Route component={PageNotFound} />
          </Switch>
        </>
      )}
    </Auth>
  );
};

export default Routes;
