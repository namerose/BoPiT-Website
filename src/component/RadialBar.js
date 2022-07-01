import React from 'react';
import ReactApexChart from 'react-apexcharts';

const tempMax = 50
function valueTempToPercent(value) {
    return (value * 100) / tempMax
}

function percentTempToValue(value) {
    return (value * tempMax) / 100
}

const RadialBar = ({ value, type = 'humidity', color = '#209AF6' }) => {
    var state = {
        series: [type === 'humidity' ? value : valueTempToPercent(value)],
        options: {
            chart: {
                height: 150,
                type: 'radialBar',
                parentHeightOffset: 0,
                parentWidthOffset: 0,
                toolbar: {
                    show: false,
                },
            },
            legend: {
                show: false,
                position: 'bottom'
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                }
            },
            fill: {
                type: 'solid',
                colors: [color],
            },
            plotOptions: {
                radialBar: {
                    track: {
                        margin: 5,
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            show: false,
                        },
                        value: {
                            fontSize: '30px',
                            color: 'white',
                            offsetY: 10,
                            formatter: function (val) {
                                return type === 'humidity' ? (val + '%') : (percentTempToValue(val) + '°C')
                            }
                        },
                    }
                }
            },
            stroke: {
                lineCap: 'round',
                width: 1,
            },
        },
    }
    return (
        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={150} />
    )
}
export default RadialBar