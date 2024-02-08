// import { useState } from 'react'
import './App.css'
import ContenedorInfo from './components/ContenedorInfo'

// COMPONENTS
// import Formulario from './components/Formulario'

function App() {

  return (
    <>
      <main>
        <div className="flex items-center justify-center container mx-auto h-screen">
          <div
            className="bg-white/25 blur-bg w-full md:w-1/2 lg:w-1/3 h-3/4 flex flex-col items-center justify-center rounded-2xl border border-white p-4"
            id="weather-box"
          >
            <div
              className="flex items-center justify-center pb-4"
              id="search-box"
            >
              <ContenedorInfo />

            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
