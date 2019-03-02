import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";


class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentNav: 0};
  }

  handleChange(event, value) {
    this.setState({value})
  }

  render() {
    return <Grid item lg={12}>
      <NoSsr>
        <AppBar position={"static"}>
          <Tabs variant="fullWidth" value={this.state.currentNav} onChange={this.handleChange}>
            <Tab label="ПРОДАЖИ" href="page1"/>
            <Tab label="СКЛАД" href="page2"/>
            <Tab label="ЗАКУПКИ" href="page3"/>
            <Tab label="КОМПАНИЯ" href="page4"/>
            <Tab label="СПРАВОЧНИК" href="page5"/>
            <Tab label="ОТЧЕТЫ" href="page6"/>
            <Tab label="НАСТРОЙКИ" href="page7"/>

          </Tabs>

        </AppBar>

      </NoSsr>

    </Grid>
  }
}

export default TopMenu