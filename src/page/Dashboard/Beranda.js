import React, { useEffect, useState } from 'react'
import Sidebar from 'component/Sidebar';
import { auth, getChartData, getSensorData } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import Animated from 'component/animation'
import LineChart from '../../component/Chart';
import RadialBar from '../../component/RadialBar';

function Beranda({ sideBarOpen = false }) {
    const [sensor, setSensor] = useState({});
    const [date, setDate] = useState([]);
    const [totalWater, setTotalWater] = useState([]);
    const [user, loading] = useAuthState(auth);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Dashboard";

        if (loading) {
            return;
        }

        if (!user) navigate("/login");
        if (Object.keys(sensor).length === 0) {
            configureSensor();
        } else {
            setShow(true);

            setTimeout(() => {
                configureSensor();
            }, 60000);
        }
    }, [navigate, user, loading, sensor]);

    useEffect(() => {
        if (date.length === 0) {
            configureData();
        }
    }, [navigate, user, date]);

    const configureSensor = () => {
        setSensor(getSensorData());
    }

    async function configureData() {
        const label = [];
        const dataLabel = [];
        const chartData = getChartData();

        chartData.forEach(item => {
            label.push(item.label);
            dataLabel.push(item.data);
        })

        setDate(label);
        setTotalWater(dataLabel);
    }

    const sensorVal = [
        {
            label: 'Humiditas Udara',
            value: sensor.kelembabanUdara,
            type: 'humidity',
        },
        {
            label: 'Suhu Udara',
            value: sensor.suhuUdara,
            type: 'temperature',
            color: '#F61B1B',
        },
        {
            label: 'Humiditas Tanah',
            value: sensor.kelembabanTanah,
            type: 'humidity',
        },
        {
            label: 'Suhu Tanah',
            value: sensor.suhuTanah,
            type: 'temperature',
            color: '#F67A3D',
        },
    ]

    return (
        <Sidebar>
            <div className='text-white text-4xl font-extrabold ml-10 mt-5'>
                Beranda
            </div>
            <div className='duration-900 h-full'>
                <div className={`flex flex-wrap md:flex-cols justify-center md:justify-between place-items-center mx-5 md:mx-10 mt-8 `}>
                    {show && sensorVal.map((items) => {
                        return (
                            <div className={`bg-content-status grid grid-cols-2  duration-300 rounded-md items-center justify-center w-64 md:w-1/4 -mx-4 mt-2 hover:mt-0 hover:shadow-xl hover:shadow-slate-800 hover:p-1 `}>
                                <RadialBar value={items.value} type={items.type} color={items.color} />
                                <div className='text-white mr-4 font-semibold text-xl text-center'>
                                    {items.label}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='w-full h-2/4 flex justify-center items-center mt-8'>
                    <div className='mx-10 w-full h-full'>
                        <LineChart total={totalWater} date={date} />
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

export default Beranda