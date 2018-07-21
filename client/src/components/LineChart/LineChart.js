import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = (props) => {
    const dataObject = {
        labels: props.labels,
        datasets: [{
        label: props.label,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: props.data,
        }]
    }
    return (
      <Line data={dataObject}/>
    )

}

export default LineChart;