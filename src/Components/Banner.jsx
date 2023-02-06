import React from 'react'
import banner from '../img/banner.png'

const Banner = (props) => {
  return (

    <div className="cardImg flex flex-col items-center bg-black border border-green-200 rounded-lg shadow md:flex-row hover:bg-green-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="carimgH object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={banner} alt="" width="40px" height="40" />
      <div id="cuerpoAlerta" className="flex flex-col justify-between p-4 leading-normal">
        <h3 className="mb-2 font-bold text-6xl text-center tracking-tight text-green-500 dark:text-white">CUARTO DE CHENZ 📚</h3>
        <h5 className="mb-3 text-center text-4xl text-green-400 dark:text-gray-700" > {props.aviso}</h5 >
      </div >
    </div >

  )
}

export default Banner
