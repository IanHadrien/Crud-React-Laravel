import { useForm } from '@inertiajs/react';
import React from 'react';
import { BsFillPersonFill, BsPersonVcard } from 'react-icons/bs';

export default function Edit(props) {
    const { developer } = props;

    const { data, setData, put, processing, errors } = useForm({
        name: developer.name || '',
        positions: developer.positions || '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        put(`/developers/${developer.id}`);
    };

  return (
    <div className='w-3/4 m-auto py-10'>
        <div className='flex pb-6'>
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
