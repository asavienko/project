import React from "react"
import StatusPanel from "./StatusPanel";
import {Button} from "@material-ui/core";
import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";
import Grid from "@material-ui/core/Grid";

class OrderPage extends React.Component {
  render() {
    return <Grid item xs={12}>
      <h2>Заказы покупателя</h2>
      <StatusPanel/>
      <Button
        variant={"contained"}
        color={"primary"}>
        Новый заказ
      </Button>
      <OrderFilter/>
      <OrderTable/>
    </Grid>
  }
}

export default OrderPage