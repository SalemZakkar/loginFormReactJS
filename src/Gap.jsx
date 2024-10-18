/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Gap extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return <div style={{ height: this.props.height , width: this.props.width }}></div>;
  }
}
