import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ total, date }) => {
    var state = {
        series: [{
            name: "Guests",
            data: total,
        }],
        options: {
            chart: {
                type: 'area',
                stacked: false,
                height: 150,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                },
                toolbar: {
                    show: true,
                    autoSelected: 'zoom'
                },
                animations: {
                    enabled: true,
                    easing: 'linear',
                    speed: 1000,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },

            },
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 4,
            },
            title: {
                text: 'Total penggunaan air',
                align: 'center',
                style: {
                    color: '#FFF',
                    fontSize: '16px',
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#FFF"
                    }
                },
                title: {
                    text: 'ml',
                    style: {
                        color: '#FFF',
                        fontSize: '16px',
                        fontWeight: 'light',
                    },
                },
            },
            xaxis: {
                labels: {
                    style: {
                        colors: "#FFF"
                    }
                },
                title: {
                    text: 'tanggal',
                    style: {
                        color: '#FFF',
                        fontSize: '16px',
                        fontWeight: 'light',
                    },
                },
                categories: date,
            },
            tooltip: {
                enabled: true,
                shared: false,
                intersect: true
            },
            stroke: {
                curve: 'smooth',
            }
        }
    };

    return (
        <ReactApexChart options={state.options} series={state.series} type='line' height='100%' width='100%' />
    )
}
export default LineChart