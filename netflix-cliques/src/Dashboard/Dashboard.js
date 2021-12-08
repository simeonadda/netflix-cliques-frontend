import React, { useState } from "react";
import MyCliques from "./MyCliques";
import WatchingTitles from "./WatchingTitles";
import FavoriteTitles from "./FavoriteTitles";
import QueuedTitles from "./QueuedTitles";
import TitlesWatched from "./TitlesWatched";

function Dashboard() {

  return(
    <div>
      <div>
        <h3>My Cliques</h3>
        <MyCliques />
      </div>
      <div>
      <h3>Currently Watching</h3>
        <WatchingTitles />
      </div>
      <div>
      <h3>Favorites</h3>
        <FavoriteTitles />
      </div>
      <div>
      <h3>Watching Next</h3>
        <QueuedTitles />
      </div>
      <div>
      <h3>Watched</h3>
        <TitlesWatched />
      </div>
    </div>
  )
}

export default Dashboard;
