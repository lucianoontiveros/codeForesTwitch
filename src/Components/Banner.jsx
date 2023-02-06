import React from 'react'
import banner from '../img/banner.png'

const Banner = (props) => {
  return (
    <div>
      <div href="#" className="flex flex-col items-center backBlack border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={banner} alt="" />
        <div id="banner" className="flex flex-col justify-between p-4 leading-normal">
          <h3 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CUARTO DE CHENZ 📚</h3>
          <p className="mb-3 font-normal text-center text-4x1 text-gray-700 dark:text-gray-400" > {props.aviso}</p >
        </div >
      </div >
    </div >
  )
}

export default Banner
