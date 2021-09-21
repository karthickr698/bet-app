import { Route, Switch } from "react-router-dom";
import Live from "./Live";
import ScoreCard from "./ScoreCard";
import Bets from "../Bets/Bets";

const MatchDetails = (props) => {
  return (
    <div>
      <div>
        <div>
          <Link to="/match/live">Live</Link>
        </div>
        <div>
          <Link to="/match/score-card">Score Card</Link>
        </div>
        <div>
          <Link to="/match/bets">Bets</Link>
        </div>
      </div>
      <div>
        <Switch>
          <Route exacr path="/match/live" component={Live} />
          <Route exacr path="/match/score-card" component={ScoreCard} />
          <Route exacr path="/match/bets" component={Bets} />
        </Switch>
      </div>
    </div>
  );
};

export default MatchDetails;
