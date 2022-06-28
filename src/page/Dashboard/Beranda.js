import React, { useEffect, useState } from 'react'
import Sidebar from 'component/Sidebar';
import AirHumidity from '../../assets/image/AirHumidity.png';
import LandHumidity from '../../assets/image/LandHumidity.png';
import AirTemperature from '../../assets/image/AirTemperature.png';
import importLandTemperature from '../../assets/image/LandTemperature.png';
import { auth, getChartData, getSensorData } from '../../firebase';
import Chart from '../../component/Chart';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function Beranda() {
    const [sensor, setSensor] = useState({});
    const [label, setLabel] = useState([]);
    const [dataLabel, setDataLabel] = useState([]);
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Dashboard";

        if (loading) {
            return;
        }

        if (!user) navigate("/login");

        configureData();
    }, [navigate, user, loading, sensor, label, dataLabel]);

    const configureData = () => {
        const label = [];
        const dataLabel = [];
        const chartData = getChartData();

        chartData.forEach(item => {
            label.push(item.label);
            dataLabel.push(item.data);
        })

        setSensor(getSensorData());
        setLabel(label);
        setDataLabel(dataLabel);
    }

    const data = {
        labels: label,
        datasets: [
            {
                label: 'Total Penyiraman',
                data: dataLabel,
                backgroundColor: 'rgb(80, 201, 255)',
                borderWidth: 2,
                borderColor: 'rgb(80, 201, 255)',
            }
        ],
    }

    return (
        <>
            <Sidebar>
                <div className='grid grid-cols-4 place-items-center'>
                    <div className='bg-green-dashboard rounded-md flex p-8 w-11/12 mt-10'>
                        <img src={AirHumidity} alt='' className='h-20' />
                        <div className='text-white ml-5'>
                            <p className='text-lg font-semibold'>Kelembaban Udara</p>
                            <p className='text-2xl font-extrabold mt-4'>{sensor.kelembabanUdara}%</p>
                        </div>
                    </div>
                    <div className='bg-green-dashboard rounded-md flex p-8 w-11/12 mt-10'>
                        <img src={LandHumidity} alt='' className='h-20' />
                        <div className='text-white ml-5'>
                            <p className='text-lg font-semibold'>Kelembaban Tanah</p>
                            <p className='text-2xl font-extrabold mt-4'>{sensor.kelembabanTanah}%</p>
                        </div>
                    </div>
                    <div className='bg-green-dashboard rounded-md flex p-8 w-11/12 mt-10'>
                        <img src={AirTemperature} alt='' className='h-24' />
                        <div className='text-white ml-5'>
                            <p className='text-lg font-semibold'>Suhu Udara</p>
                            <p className='text-2xl font-extrabold mt-4'>{sensor.suhuUdara}°C</p>
                        </div>
                    </div>
                    <div className='bg-green-dashboard rounded-md flex p-8 w-11/12 mt-10'>
                        <img src={importLandTemperature} alt='' className='h-24' />
                        <div className='text-white ml-5'>
                            <p className='text-lg font-semibold'>Suhu Tanah</p>
                            <p className='text-2xl font-extrabold mt-4'>{sensor.suhuTanah}°C</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='bg-content-status rounded-md flex flex-col justify-center items-center p-8 w-11/12 mt-10 text-white'>
                        <Chart chartData={data} />
                    </div>
                </div>
            </Sidebar>
        </>
    );
}

export default Beranda