import { database } from '../firebase';
import React from 'react'
import { BsTrashFill } from "react-icons/bs";
import { ref, remove } from 'firebase/database';

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
        <div className='text-white mr-4'>
            <div className='flex items-center'>
                <div className='my-2 mr-10 flex flex-cols items-center px-2'>
                    <div className='text-white text-xs font-light mx-3'>
                        {status ? 'Aktif' : 'Tidak Aktif'}
                    </div>
                    <span className='flex'>
                        <span className={`${status ? ' bg-status-true animate-ping' : 'bg-status-false'} absolute rounded-full w-4 h-4`}></span>
                        <span className={`${status && 'bg-status-true'} rounded-full inline-flex relative w-4 h-4`}></span>
                    </span>
                </div>
                <div className='hover:bg-slate-700 duration-300 p-2 rounded-full cursor-pointer'>
                    <BsTrashFill size={19} onClick={() => handleDelete(id)} />
                </div>
            </div>
        </div>
    </div>
);

export default function Device({ devices }) {
    return (
        <div className="overflow-hidden divide-y shadow-sm">
            {devices.map((item, key) => <Item name={item.name} status={item.status} id={item.id} key={key} />)}
        </div>
    );
}