import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = (props) => {
    const dataObject = {
        labels: props.labels,
        datasets: [{
        label: props.label,
        backgroundColor: 'rgb(0, 255, 0)',
        borderColor: 'rgb(0, 0, 0)',
        data: props.data,
        }]
    }
    return (
      <Line data={dataObject}/>
    )

}

export default LineChart;