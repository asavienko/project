import React from "react";

class ShowCourse extends React.Component{

  render() {
    return <span>
      Курс 27.3 на {new Date().toLocaleString()}
    </span>
  }
}

export default ShowCourse