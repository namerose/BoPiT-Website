import { database, getDevices } from '../firebase';
import React from 'react'
import { BsTrashFill } from "react-icons/bs";
import { ref, remove } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const handleDelete = (id) => {
    const confirm = window.confirm('Apakah anda yakin ingin menghapus perangkat ini?');
    if (confirm) {
        remove(ref(database, 'Devices/' + id));
    }
}

const Item = ({ id, name, status }) => (
    <div className='border-t-2 border-gray-500 flex justify-between items-center text-white py-1'>
        <div className='text-white text-lg ml-7'>
            {name}
        </div>
        <div className='text-white mr-6'>
            <div className='flex items-center'>
                <div className='my-2 mr-10 flex items-center px-2'>
                    <div className='text-white text-xs font-light mx-3'>
                        {status ? 'Aktif' : 'Tidak Aktif'}
                    </div>
                    <div className={`${status ? ' bg-status-true' : 'bg-status-false'} rounded-full w-4 h-4 ml-1`}></div>
                </div>
                <BsTrashFill size={20} onClick={() => handleDelete(id)} />
            </div>
        </div>
    </div>
);

export default function Device() {
    const [devices, setDevices] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        setDevices(getDevices());;
    }, [navigate]);

    return (
        <div className="overflow-hidden divide-y shadow-sm">
            {devices.map((item, key) => <Item name={item.name} status={item.status} id={item.id} key={key} />)}
        </div>
    );
}