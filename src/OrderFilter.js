import React from "react";
import {Button} from "@material-ui/core";
import {ORDERS} from "./ordersData";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import {MuiPickersUtilsProvider, DatePicker} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import {OrderStatus} from "./orderStatus";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: 300,
  },
};

class OrderFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contractor: [],
      orderStatus: [],
      selectedFromDate: null,
      selectedTillDate: null,
    }
  }

  handleContractorSelect = event => {
    this.setState({contractor: event.target.value});
    console.log(event.target.value)
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

  render() {
    return <Grid item xs={12}>
    <form style={styles.root}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
          <DatePicker
            margin="normal"
            label="С выбранного периода"
            value={this.state.selectedFromDate}
            onChange={this.handleFromDateChange}
          />
          <DatePicker
            margin="normal"
            label="По выбранный период"
            value={this.state.selectedTillDate}
            onChange={this.handleTillDateChange}
          />
        </MuiPickersUtilsProvider>
        <FormControl style={styles.formControl} margin="normal">
          <InputLabel htmlFor="select-multiple">
            Контрагент
          </InputLabel>
          <Select
            multiple
            value={this.state.contractor}
            onChange={this.handleContractorSelect}
            input={<Input id="select-multiple"/>}
          >
            {ORDERS && ORDERS.map(({contractor}) => (
              <MenuItem key={contractor} value={contractor}>
                {contractor}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={styles.formControl} margin="normal">
          <InputLabel htmlFor="select-multiple">
            Статус заказа
          </InputLabel>
          <Select
            multiple
            value={this.state.orderStatus}
            onChange={this.handleOrderStatusSelect}
            input={<Input id="select-multiple"/>}
          >
            {OrderStatus && OrderStatus.map((status, id) => (
              <MenuItem key={id} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

    </form>
      <Button variant={"outlined"}>Фильтровать</Button>
    </Grid>
  }
}

export default OrderFilter