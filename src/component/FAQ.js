import React from 'react'

const Item = ({ header, text }) => (
    <div className="relative overflow-hidden text-white">
        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-14 opacity-0 z-10 cursor-pointer flex items-center" defaultChecked={true} />
        <div className="h-14 w-full pl-5 flex items-center peer-unchecked:border-b border-gray-500 ">
            <div className='text-2xl font-bold '>
                {header}
            </div>
        </div>
        <div className="absolute top-3 right-3 transition-transform duration-300 -rotate-90 peer-checked:rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 border-b-2 border-gray-300">
            <div className="p-5 border-t">
                {text}
            </div>
        </div>
    </div>
);

export default function FAQ() {
    const faqs = [
        {
            question: 'Apakah perangkat BoPiT dapat berfungsi secara otomatis ?',
            answered: 'Tentu saja. BoPiT dapat berfungsi secara otomatis setelah Anda mengatur bopit untuk menyiram secara otomatis membuat parameter kekeringan tanah atau waktu yang sudah ditentukan.'
        },
        {
            question: 'Seberapa banyak air yang akan di hemat jika menggunakan BoPiT ?',
            answered: 'Jumlah air yang dapat di hemat bervariasi, tergantung dengan beberapa parameter utama. Yaitu, pada kekeringan tanah yang Anda atur. Jika Anda mengatur kekeringan tanah yang rendah, maka air yang dapat di hemat akan lebih banyak. Jika Anda mengatur kekeringan tanah yang tinggi, maka air yang dapat di hemat akan lebih sedikit. Selain itu, lama penyiraman yang Anda atur. Jika lama penyiraman yang Anda atur lebih cepat, maka air yang dapat di hemat akan lebih banyak. Jika lama penyiraman yang Anda atur lebih lama, maka air yang dapat di hemat akan lebih sedikit.',
        },
        {
            question: 'Mengapa harus memilih BoPiT ?',
            answered: ' Visi kami adalah teknologi jembatan perbaikan alam, dengan begitu jika Anda memilih BoPiT maka anda akan ikut berpartisipasi dalam perbaikan alam yang lebih efektif dan efisien.  ',
        },
    ];
    return (
        <div className="p-10">
            <div className="overflow-hidden divide-y shadow-sm">
                {faqs.map((item, key) => <Item header={item.question} text={item.answered} key={key} />)}
            </div>
        </div>
    );
}