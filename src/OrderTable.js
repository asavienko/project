import React from "react"
import {ORDERS} from "./ordersData"
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";


class OrderTable extends React.Component{

  render() {
    return<Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Контрагент</TableCell>
            <TableCell align="right">Номер заказа</TableCell>
            <TableCell align="right">Сумма заказа</TableCell>
            <TableCell align="right">Артикул</TableCell>
            <TableCell align="right">Валюта</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ORDERS.map((row, id) => (
            <TableRow key={id}>
              <TableCell align="left">
                {row.contractor}
              </TableCell>
              <TableCell align="right">{row.orderNumber}</TableCell>
              <TableCell align="right">{row.sumOfOrder}</TableCell>
              <TableCell align="right">{row.articul}</TableCell>
              <TableCell align="right">{row.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  }
}

export default OrderTable