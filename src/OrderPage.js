import React from "react";
import {Button, Paper} from "@material-ui/core";
import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";
import Grid from "@material-ui/core/Grid";

const styles = {
  paper: {
    margin: '10px',
    padding: '10px'
  },
};

class OrderPage extends React.Component {

  render() {
    console.log(this.state);

    return <Grid container>

      <h2>Заказы покупателя</h2>
      <Grid item xs={12}>
        <Paper style={styles.paper}>
          <OrderFilter/>
          <Button
            variant={"contained"}
            color={"primary"}>
            Новый заказ
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <OrderTable
        />
      </Grid>
    </Grid>
  }
}

export default OrderPage