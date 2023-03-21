import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import { BiEdit } from 'react-icons/bi';
import { router } from '@inertiajs/react';

export default function Index(props) {
    const { developers, skills } = props;
    console.log(props)

    const handleClick = (id) => {
        if (!confirm("Deseja realmente excluir o desenvolvedor")) return;

        router.delete(`developers/${id}`);
    };

  return (
    <div className='w-3/4 m-auto py-10'>
        <div className='flex items-center'>
            <h2 className='text-4xl'>Developers</h2>

            <a href="developers/create"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
                Novo Desenvolvedor
            </a>

            <a href="skills"className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded">
                Acessar PDF
            </a>

            <a href="download"className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded">
                Baixar PDF
            </a>
        </div>

        <div className='flex justify-around py-8'>
            <div className='border-solid border border-sky-500 rounded'>
                <h2 className='p-2 bg-blue-500 text-white font-bold'>Total de Desenvolvedores</h2>

                <p className='p-4'>{developers.length} Desenvolvedores</p>
            </div>

            <div className='border-solid border-2 border-sky-500 rounded'>
                <h2 className='px-4 py-2 bg-blue-500 text-white font-bold'>Total de Habilidades</h2>

                <p className='p-4'>{skills.length} Habilidades</p>
            </div>
        </div>

        <div className='py-4'>
            {developers.map((develope)  => (
                <div key={develope.id} className='flex items-center justify-between border-2 border-sky-500 p-2 bg-blue-50 font-bold rounded my-4'>
                    <div>{develope.id}</div>
                    <div>{develope.name}</div>
                    <div>{develope.positions}</div>
                    <div className='flex'>
                        <a href={`developers/${develope.id}/edit`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-4 rounded">
                            <BiEdit size={25} color="#fff" />
                        </a>
                        <a href={`developers/${develope.id}/`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
                            <GrView size={25} />
                        </a>
                        <a onClick={() => handleClick(develope.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded">
                            <AiFillDelete size={25} />
                        </a>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}
