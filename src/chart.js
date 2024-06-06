import React from 'react';
import { Chart } from "react-google-charts";

const PieChart = () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Play", 7],
        ["Pretend I'm hungry", 3],
        ["Annoy my mum", 5],
        ["Annoy my older brothers", 3],
        ["Sleep", 10],
    ];

    const options = {
        colors: ['#ADFF2F', '#FF1493', '#66CDAA', '#4169E1', '#F08080'],
        backgroundColor: '#070F2B',
        is3D: true,
        legend: {
            alignment: 'center',
            textStyle: {
                color: '#9370DB',
                fontSize: 18,
                textAlign: 'center',
            },
        },
        pieSliceTextStyle: {
            color: '#070F2B',
            fontSize: 18,
        },
    };

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"500px"}
        />
    );
};

export default PieChart;
