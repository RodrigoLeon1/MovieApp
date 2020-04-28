import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/top" component={TopRated} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:movieId" component={MovieDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
