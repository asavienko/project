import React from "react"

class StatusPanel extends React.Component{
  render() {
    return <div>
      <ul>
        <li>Все заказы</li>
        <li>Новый</li>
        <li>На резерве</li>
        <li>В работе</li>
        <li>Завершен</li>
      </ul>
    </div>
  }
}
export default StatusPanel