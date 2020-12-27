import React from 'react';
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
