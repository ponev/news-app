import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import NewsList from "./components/NewsList"
import NewsDetail from "./components/NewsDetail"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={NewsList} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route exact path="/:newsId" component={NewsDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
