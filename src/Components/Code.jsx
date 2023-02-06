import React from 'react'
import code from '../img/forest.gif'

const Code = (props) => {

  return (
    <div href="#" className="cardImg flex flex-col items-center bg-black border border-green-200 rounded-lg shadow md:flex-row hover:bg-green-100 dark:border-green-700 dark:bg-green-800 dark:hover:bg-green-700">
      <img className="carimgH object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={code} alt="" />
      <div id="cuerpoAlerta" className="flex flex-col justify-between p-4 leading-normal">
        <h3 className="mb-2 font-bold text-4xl text-center tracking-tight text-green-500 dark:text-white">🌳🍃CODIFO FOREST 🍃🌳</h3>
        <h4 className="mb-3 text-center text-6xl text-green-400 dark:text-gray-700"> {props.codigoSala}</h4 >
      </div >
    </div >
  )
}

export default Code
