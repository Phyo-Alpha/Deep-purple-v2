import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const ApexChartStackedBar: React.FC = () => {
    const series = [
        {
            name: 'Positive Comments',
            type: 'column',
            data: [44, 55, 41, 17, 15] // Replace with your data
        },
        {
            name: 'Negative Comments',
            type: 'column',
            data: [30, 40, 35, 50, 49] // Replace with your data
        },
        {
            name: 'Overall Sentiment',
            type: 'line',
            data: [3, 4, 3.5, 5, 4.9] // Replace with your data
        }
    ];
    const options: ApexOptions = {
        chart: {
            stacked: true,
            toolbar: {
                show: true
            },
            stackType: "normal",
        },
        stroke: {
            width: [0, 0, 4]
        },
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        xaxis: {
            categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Replace with your data
        },
        yaxis: [
            {
                seriesName: 'Comments',

                show: true,
                title: {
                    text: 'Percentage of Total Comments',
                },
                min: 0,
                max: 100,
            },
            {
                seriesName: 'Sentiment',
                show: true,
                opposite: true,
                title: {
                    text: 'Overall Sentiment',
                },
                min: 0,
                max: 5,
            }
        ],
        colors: ['#008FFB', '#FF4560', '#775DD0'], // Colors for Positive, Negative, and Overall sentiment respectively
        legend: {
            show: true
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                }
            }
        }]
    };

    return (
        <Chart options={options} series={series} type="line"
            height={'250%'} />
    );
};

export default ApexChartStackedBar;