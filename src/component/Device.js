import React from 'react'
import { BsTrashFill } from "react-icons/bs";

const Item = ({ name, status }) => (
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
                    <div className={`${status ?' bg-status-true' : 'bg-status-false'} rounded-full w-4 h-4 ml-1`}></div>
                </div>
                <BsTrashFill size={20} />
            </div>
        </div>
    </div>
);

export default function Device() {
    const faqs = [
        {
            name: 'Kebun',
            status: true,
        },
        {
            name: 'Halaman Belakang',
            status: false,
        },
        {
            name: 'Halaman Depan',
            status: true,
        },
        {
            name: 'Halaman Depan',
            status: true,
        },
    ];
    return (
            <div className="overflow-hidden divide-y shadow-sm">
                {faqs.map((item, key) => <Item name={item.name} status={item.status} key={key} />)}
            </div>
    );
}