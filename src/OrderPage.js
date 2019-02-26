import React from "react"
import StatusPanel from "./StatusPanel";
import {Button} from "@material-ui/core";
import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";

class OrderPage extends React.Component {
  render() {
    return <div>
      <h2>Заказы покупателя</h2>
      <StatusPanel/>
      <Button
        variant={"contained"}
        color={"primary"}>
        Новый заказ
      </Button>
      <OrderFilter/>
      <OrderTable/>
    </div>
  }
}

export default OrderPage