import React from 'react'

function Techno() {
  return (
    <div className=" border-t border-black dark:border-gray-100">
      <h1 className=" mt-12 mb-10 text-3xl font-bold text-center uppercase dark:text-white">
        Mes technos
      </h1>
      <div className="flex">
        <div className="w-1/2">
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/html.png" alt="logo html" />
          </div>
          <div className=" mx-auto  w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-orange-600 h-2.5 rounded-full"
              style={{ width: '97%' }}
            ></div>
          </div>
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/css.png" alt="logo css" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: '97%' }}
            ></div>
          </div>
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/sass.png" alt="logo scss" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-pink-500 h-2.5 rounded-full"
              style={{ width: '85%' }}
            ></div>
          </div>
          <div className="mb-2 mt-4 mx-auto  flex justify-evenly w-1/3">
            <img src="../assets/tailwindCss.png" alt="logo tailwind css" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-cyan-500 h-2.5 rounded-full"
              style={{ width: '80%' }}
            ></div>
          </div>
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/figma.png" alt="logo figma" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-violet-600 h-2.5 rounded-full"
              style={{ width: '80%' }}
            ></div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/javascript.png" alt="logo javascript" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-yellow-400 h-2.5 rounded-full"
              style={{ width: '75%' }}
            ></div>
          </div>
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/react.png" alt="logo react" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-cyan-500 h-2.5 rounded-full"
              style={{ width: '55%' }}
            ></div>
          </div>
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/nodejs.png" alt="logo node js" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-green-700 h-2.5 rounded-full"
              style={{ width: '40%' }}
            ></div>
          </div>
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/wordpress.png" alt="logo wordpress" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-sky-800 h-2.5 rounded-full"
              style={{ width: '98%' }}
            ></div>
          </div>
          <div className="mb-2 mt-4 mx-auto flex justify-evenly w-1/3">
            <img src="../assets/seo.png" alt="logo seo" />
          </div>
          <div className=" mx-auto w-1/3 bg-gray-200 rounded-full h-2.5 mb-10 dark:bg-gray-700">
            <div
              className="bg-cyan-500 h-2.5 rounded-full"
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Techno
