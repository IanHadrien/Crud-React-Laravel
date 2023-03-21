import { useForm } from '@inertiajs/react';
import React from 'react';
import { BsFillPersonFill, BsPersonVcard } from 'react-icons/bs';

export default function Create(props) {
    const { flash } = props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        positions: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        post('/developers');
        reset();
    };

  return (
    <div className='w-3/4 m-auto py-10'>
        {flash.message && (
        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div className="flex">
                <div><p className="font-bold">{flash.message}</p></div>
            </div>
        </div>)}

        <div className='flex pb-6 pt-4'>
            <a href="/developers"className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Voltar
            </a>
        </div>

        <label className="block mb-2 text-xl font-medium text-gray-900">Name</label>
        <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <BsFillPersonFill size={25} />
            </span>
            <input
                type="text"
                value={data.name} onChange={e => setData('name', e.target.value)}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nome"
            />
        </div>

        <label className="block pt-6 mb-2 text-xl font-medium text-gray-900">Cargo</label>
        <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <BsPersonVcard size={25} />
            </span>
            <input
                type="text"
                value={data.positions} onChange={e => setData('positions', e.target.value)}
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cargo"
            />
        </div>

        <div className='flex pt-6'>
            <a onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Salvar
            </a>
        </div>

    </div>
  )
}
