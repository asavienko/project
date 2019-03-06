import React from "react";
import {Button, Paper} from "@material-ui/core";
import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";
import Grid from "@material-ui/core/Grid";
import {ORDERS} from "./ordersData";

const styles = {
  paper: {
    margin: 10,
    padding: 10,
  },
};

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contractor: [],
      status: [],
      selectedFromDate: null,
      selectedTillDate: null,
      filteredOrdersArray: [],
      currentFilters: {},
    };
  }

  handleContractorSelect = event => {
    const newCurrentFilter = Object.assign(this.state.currentFilters,
      {contractor: event.target.value});
    this.setState({contractor: event.target.value});
    this.setState({currentFilters: newCurrentFilter});
  };
  handleOrderStatusSelect = event => {
    const newCurrentFilter = Object.assign(this.state.currentFilters,
      {status: event.target.value});
    this.setState({status: event.target.value});
    this.setState({currentFilters: newCurrentFilter});
  };
  handleFromDateChange = date => {
    this.setState({selectedFromDate: date});
  };
  handleTillDateChange = date => {
    this.setState({selectedTillDate: date});
  };

  applyFilter = () => {
    const keyArr = Object.keys(this.state.currentFilters);
    const filteredOrdersArray = ORDERS && ORDERS.filter(order => {
      return keyArr.every(eachKey => {
        if (!this.state.currentFilters[eachKey].length) {
          return true
        }

        return this.state.currentFilters[eachKey].includes(order[eachKey])
      });

    });
    this.setState({filteredOrdersArray})
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
            orderStatus={this.state.status}
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
          filteredOrdersArray={this.state.filteredOrdersArray}
        />
      </Grid>
    </Grid>
  }
}

export default OrderPage