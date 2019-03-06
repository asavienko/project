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


  render() {
    return <Grid item xs={12}>
      <form style={styles.root}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
          <DatePicker
            label="С выбранного периода"
            value={this.props.selectedFromDate}
            onChange={this.props.handleFromDateChange}
          />
          <DatePicker
            label="По выбранный период"
            value={this.props.selectedTillDate}
            onChange={this.props.handleTillDateChange}
          />
        </MuiPickersUtilsProvider>
        <FormControl style={styles.formControl}>
          <InputLabel htmlFor="select-multiple">
            Контрагент
          </InputLabel>
          <Select
            multiple
            value={this.props.contractor}
            onChange={this.props.handleContractorSelect}
            input={<Input id="select-multiple"/>}
          >
            {ORDERS && ORDERS.map(({contractor}) => (
              <MenuItem key={contractor} value={contractor}>
                {contractor}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={styles.formControl}>
          <InputLabel htmlFor="select-multiple">
            Статус заказа
          </InputLabel>
          <Select
            multiple
            value={this.props.orderStatus}
            onChange={this.props.handleOrderStatusSelect}
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
      <Button variant={"outlined"} onClick={this.props.applyFilter}>Фильтровать</Button>
    </Grid>
  }
}

export default OrderFilter