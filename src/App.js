import React, { useEffect, useState } from 'react';
import barChartPath from './images/bar-chart.png';
import pieChartPath from './images/pie-chart.png';
import './App.css';
import BarChart from './components/barChart';
import { dragElementHelper } from './helper/dragElementHelper'
import Header from './components/Shared/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barCharts: [],
      pieCharts: [],
      totalCharts: [],
      chartIconCurrentPosX: 0,
      chartIconCurrentPosY: 0
    }
     document.addEventListener('mousemove', this.onMouseMove);
      }
  componentDidMount(){
    console.log('app.js -- componentDidMount');
    this.state.barChart = document.getElementById('barChart');
    dragElementHelper.dragElement(document.getElementById('barChart'), 'icon');
    dragElementHelper.dragElement(document.getElementById('pieChart'), 'icon');
    

    }

  triggerChart = (type) => {      
    this.setState(prevState => ({
          barCharts: [...prevState.barCharts, { index: this.state.barCharts.length, name: 'Chart_' + (this.state.barCharts.length + 1), type: type }]
        }))
 }

     alignChartToDraggedPos(e) {
       if(e){
        e.stopPropagation();
        var leftOffset= document.getElementById('barChart').offsetLeft;
        var topOffset= document.getElementById('barChart').offsetTop;
        return { left: leftOffset, top: topOffset };
       }
      } 

  handleCloseChart= (index) => {
    var arrBarCharts = [...this.state.barCharts]; 
    if (index !== -1) {
      arrBarCharts.splice(index, 1);
      this.setState({barCharts: arrBarCharts});
    }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className='bodyContainer'>
        <div className='leftMenu'>
          <div><img src={barChartPath} className="barChart" id='barChart' alt="Bar Chart" height='80' width='80'
            onClick={() => this.triggerChart('bar')} /> </div>
          <div><img src={pieChartPath} className="pieChart" id='pieChart' alt="Pie Chart" height='80' width='80' onClick={() => this.triggerChart('pie')} /></div>
        </div>
        <div className='pageContainer'>
          {this.state.barCharts.map((obj, i) => {
            return <BarChart newPosition={this.alignChartToDraggedPos()} onCloseChart={this.handleCloseChart} key={i} index={i + 1} name={obj.name}
            type={obj.type}></BarChart>
          })}

        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
