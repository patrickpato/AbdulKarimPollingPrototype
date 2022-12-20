import React from "react";
import { Header } from "semantic-ui-react";

import DashboardGrid from "./components/dashboardGrid";
import DashboardTable from "./components/dashboardTable";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header as="h2" className="purple">You are now viewing Abdul Karim's Polls Dashboard</Header>
      </header>
      <div className="App-main">
        <DashboardGrid />
        <DashboardTable />
      </div>
    </div>
  );
}

export default App;
