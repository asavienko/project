import React from "react"
import {ORDERS} from "./ordersData"
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const styles = {
  paper: {
    margin: '10px'
  },
};

class OrderTable extends React.Component{

  render() {
    return<Paper style={styles.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">№</TableCell>
            <TableCell align="right">Дата и время</TableCell>
            <TableCell align="right">Контрагент</TableCell>
            <TableCell align="right">Итого</TableCell>
            <TableCell align="right">Валюта</TableCell>
            <TableCell align="right">Артикул</TableCell>
            <TableCell align="right">Товары</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Коментарии</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ORDERS.map((row, id) => (
            <TableRow key={id}>
              <TableCell align="left">
                {row.orderNumber}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.contractor}</TableCell>
              <TableCell align="right">{row.orderSum}</TableCell>
              <TableCell align="right">{row.currency}</TableCell>
              <TableCell align="right">{row.vendorCode}</TableCell>
              <TableCell align="right">{row.goods}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  }
}

export default OrderTable