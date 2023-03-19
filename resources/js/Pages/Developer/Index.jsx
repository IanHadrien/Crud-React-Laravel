import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { RxUpdate } from 'react-icons/rx';
import { BiEdit } from 'react-icons/bi';

export default function Index() {
  return (
    <div className='w-3/4 m-auto py-10'>
        <div className='flex items-center'>
            <h2 className='text-4xl'>Developers</h2>

            <a href="developers/create"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
                New Developer
            </a>
        </div>

        <div className='flex justify-around py-8'>
            <div className='border-solid border border-sky-500 rounded'>
                <h2 className='p-2 bg-blue-500 text-white font-bold'>Total developers</h2>

                <p className='p-4'>12 developers</p>
            </div>

            <div className='border-solid border-2 border-sky-500 rounded'>
                <h2 className='px-4 py-2 bg-blue-500 text-white font-bold'>Total projects</h2>

                <p className='p-4'>12 projects</p>
            </div>
        </div>

        <div className='py-4'>
            <div className='flex items-center justify-between border-2 border-sky-500 p-2 bg-blue-50 font-bold rounded my-4'>
                <div>Id</div>
                <div>Nome</div>
                <div>Cargo</div>
                <div className='flex'>
                    <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-4 rounded">
                        <BiEdit size={25} />
                    </a>
                    <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
                        <RxUpdate size={25} />
                    </a>
                    <a href="#" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded">
                        <AiFillDelete size={25} />
                    </a>
                </div>

            </div>

        </div>

    </div>
  )
}
