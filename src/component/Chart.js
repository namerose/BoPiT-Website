import React from 'react'
import { Line } from "react-chartjs-2"

function Chart({ chartData }) {
    return (
        <div>
            <Line
                data={chartData}
                width={900}
                height={400}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Data Penyiraman",
                            color: '#FFFFFF'
                        },
                        legend: {
                            display: true,
                            position: "bottom",
                            fontColor: '#FFFFFF'
                        },
                        subtitle: {
                            display: true,
                            text: 'Custom Chart Subtitle'
                        }
                    },
                }}
            />
        </div>
    )
}

export default Chart