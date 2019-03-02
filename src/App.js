import React, {Component} from 'react';
import './App.css';
import TopMenu from "./TopMenu";
import OrderPage from "./OrderPage"
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <TopMenu/>
        </Grid>
        <OrderPage/>
      </Grid>
    );
  }
}

export default App;
