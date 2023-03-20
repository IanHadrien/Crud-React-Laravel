import { useForm } from '@inertiajs/react';
import React from 'react';

export default function Show(props) {
    const {developer, skills} = props;

    const { data, setData, post, processing, errors, reset } = useForm({
        content: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        post(`/developers/${developer.id}/skills`);
        reset();
    };

  return (
    <div className='w-3/4 m-auto py-10'>
        <div className='flex items-center justify-between'>
            <h2 className='text-4xl'>{developer.name}</h2>

            <a href="/developers"className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Voltar
            </a>
        </div>

        <div className='py-4'>
            <div className='flex items-center justify-between border-2 border-sky-500 p-2 bg-blue-50 font-bold rounded my-4'>
                <div>{developer.id}</div>
                <div>{developer.name}</div>
                <div>{developer.positions}</div>
            </div>
        </div>

        <div className='pb-6'>
            <h2>Nova Habilidade</h2>

            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 rounded-l-md">
                    Teste
                </span>
                <input
                    type="text"
                    value={data.content} onChange={e => setData('content', e.target.value)}
                    className="rounded-none rounded-r-lg border block flex-1 min-w-0 w-full text-sm p-2.5"
                    placeholder="Habilidade"
                />
            </div>

            <div className='flex pt-2'>
                <a onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Adicionar
                </a>
            </div>
        </div>

        <div>
            <h2>Lista de Habilidades:</h2>

            {skills.map((skill) => (
                <div key={skill.id} className='flex items-center justify-between border-2 border-sky-500 p-2 bg-blue-50 font-bold rounded'>
                    <div>{skill.id}</div>
                    <div>{skill.content}</div>
                </div>
            ))}
        </div>

    </div>
  )
}
