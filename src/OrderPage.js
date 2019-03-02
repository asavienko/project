import React from "react";
import {Button, Paper} from "@material-ui/core";
import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";
import Grid from "@material-ui/core/Grid";
import {ORDERS} from "./ordersData";

const styles = {
  paper: {
    margin: '10px',
    padding: '10px'
  },
};

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contractor: [],
      orderStatus: [],
      selectedFromDate: null,
      selectedTillDate: null,
    };
    this.filteredOrdersArray = null;
  }

  handleContractorSelect = event => {
    this.setState({contractor: event.target.value});
  };
  handleOrderStatusSelect = event => {
    this.setState({orderStatus: event.target.value});
  };
  handleFromDateChange = date => {
    this.setState({selectedFromDate: date});
  };
  handleTillDateChange = date => {
    this.setState({selectedTillDate: date});
  };

  applyFilter = () => {
    this.filteredOrdersArray = ORDERS && ORDERS.filter(value => {
      for (let key of this.state.contractor) {
        if (value.contractor.includes(key)) {
          return true
        }
      }
    });
    if (this.filteredOrdersArray.length === 0) {
      this.filteredOrdersArray = null
    }
    console.log(this.filteredOrdersArray)
  };


  render() {

    return <Grid container>
      <h2>Заказы покупателя</h2>
      <Grid item xs={12}>
        <Paper style={styles.paper}>
          <OrderFilter
            handleContractorSelect={this.handleContractorSelect.bind(this)}
            handleOrderStatusSelect={this.handleOrderStatusSelect.bind(this)}
            handleFromDateChange={this.handleFromDateChange.bind(this)}
            handleTillDateChange={this.handleTillDateChange.bind(this)}
            selectedFromDate={this.state.selectedFromDate}
            selectedTillDate={this.state.selectedTillDate}
            contractor={this.state.contractor}
            orderStatus={this.state.orderStatus}
            applyFilter={this.applyFilter.bind(this)}
          />

          <Button
            variant={"contained"}
            color={"primary"}>
            Новый заказ
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <OrderTable
          filteredOrdersArray={this.filteredOrdersArray}
        />
      </Grid>
    </Grid>
  }
}

export default OrderPage