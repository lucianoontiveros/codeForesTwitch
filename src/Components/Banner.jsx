import React from 'react'
import banner from '../img/1.png'


const Banner = (props) => {
  return (

    <div className="cardImg flex flex-col items-center bg-black border border-green-200 rounded-lg shadow md:flex-row hover:bg-green-500 dark:border-green-700 dark:bg-green-800 dark:hover:bg-green-700">
      <img className="carimgH object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={banner} alt="" width="40px" height="40" />
      <div id="cuerpoAlerta" className="flex flex-col justify-between p-4 leading-normal">
        <h3 className="mb-2 font-bold text-6xl text-center tracking-tight text-green-500 dark:text-white">CUARTO DE CHENZ 💻</h3>
        <h5 className="mb-3 text-center text-4xl" > {props.aviso}</h5 >
      </div >
    </div >

  )
}

export default Banner
