import React from "react";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {ORDERS} from "./ordersData";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import {MuiPickersUtilsProvider, DatePicker} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";

class OrderFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contractor: [],
      selectedDate: new Date()
    }
  }

  handleContractorSelect = event => {
    this.setState({contractor: event.target.value});
  };
  handleDateChange = date => {
    this.setState({selectedDate: date});
    console.log(date)
  };

  render() {
    console.log(this.state.selectedDate)
    return <form>
      <TextField
        id="datetime-local"
        label="С выбранного периода"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="datetime-local"
        label="По выбранный период"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        <DatePicker
          keyboard
          margin="normal"
          label="С выбранного периода"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          />
      </MuiPickersUtilsProvider>
      <FormControl>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          value={this.state.contractor}
          onChange={this.handleContractorSelect}
          input={<Input id="select-multiple-chip"/>}
        >
          {ORDERS && ORDERS.map(({contractor}) => (
            <MenuItem key={contractor} value={contractor}>
              {contractor}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant={"outlined"}>Фильтровать</Button>
    </form>
  }
}

export default OrderFilter