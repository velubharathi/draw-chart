import React, { useState, useEffect } from 'react'
import { barChartHelper } from '../helper/barChartHelper';
import { pieChartHelper } from '../helper/pieChartHelper'
import { dragElementHelper } from '../helper/dragElementHelper';
import closeIconPath from '../images/close1.png';
import { Component } from 'react';
class BarChart extends Component  {

  constructor(props) {
    super(props);
      }

componentDidMount(){
  // document.onmouseup = this.alignChartToDraggedPos;
  this.displayItem();
}

render(){
    return (
    //<div id={`chartContainer_${this.props.index}`}>
    <div id={`container_${this.props.index}`} className="mydiv">
    <div id={`mydivheader_${this.props.index}`} className="mydivheader">
     {this.props.name} Click here to move
       <span className='closeIcon'>
      <img src={closeIconPath} id='barChart' alt="Close" height='20' width='20'
            onClick={ ()=> this.props.onCloseChart(this.props.index-1)}/>
            </span> 
            </div>
  
  <canvas id={`canvas_${this.props.index}`} ></canvas>
  </div>
  //</div>
    )
}
    displayItem() {
      const divId = `container_${this.props.index}`;
      const canvasId = `canvas_${this.props.index}`;
        dragElementHelper.dragElement(document.getElementById(divId), this.props.index);
        if (this.props.type === 'bar'){
          barChartHelper.createChart(canvasId);
        } else {
          pieChartHelper.createPieChart(canvasId);
        }
        
                
      }

}

export default BarChart;
