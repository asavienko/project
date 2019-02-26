import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import ShowCourse from "./ShowCourse";
import TextField from "@material-ui/core/TextField";


class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleChange(event, value) {
    this.setState({value})
  }

  render() {
    return <NoSsr>
      <AppBar>
        <Tabs centered={false} value={this.state.value} onChange={this.handleChange}>
          <Tab label="ПРОДАЖИ" href="page1"/>
          <Tab label="СКЛАД" href="page2"/>
          <Tab label="ЗАКУПКИ" href="page3"/>
          <Tab label="КОМПАНИЯ" href="page4"/>
          <Tab label="СПРАВОЧНИК" href="page5"/>
          <Tab label="ОТЧЕТЫ" href="page6"/>
          <Tab label="НАСТРОЙКИ" href="page7"/>
          <ShowCourse/>
        </Tabs>

      </AppBar>
    </NoSsr>
  }
}

export default TopMenu