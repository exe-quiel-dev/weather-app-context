// IMGS
import icono from "../assets/Weather-icon.png";
import Formulario from "./Formulario";

const ContenedorInfo = () => {
  return (
    <div
      id="weather-info"
      className="flex flex-col items-center justify-center p-4"
    >
      <Formulario />
      <img src={icono} alt="Icono tiempo" className="w-1/3 self-center" />
      <div>
        <p className="text-white drop-shadow-lg font-black text-4xl text-center">
          26 ºC
        </p>
        <p
          className="text-white drop-shadow-lg text-md font-semibold uppercase text-center"
          id="info"
        >
          Nublado
        </p>
        <div
          className="flex flex-col md:grid md:grid-cols-2 container mx-auto gap-6 pt-4"
          id="container-info"
        >
          <div id="humedad" className="flex items-center">
            <p className="text-white drop-shadow-lg text-md" id="humidity">
              {/* <LuWaves className="text-5xl me-2" /> */}
            </p>
            <div className="flex flex-col justify-center items-start">
              <p className="text-white drop-shadow-lg text-md font-bold">60%</p>
              <p className="text-white drop-shadow-lg text-md">Humedad</p>
            </div>
          </div>
          <div id="humedad" className="flex items-center">
            <p className="text-white drop-shadow-lg text-md" id="humidity">
              {/* <FaWind className="text-5xl me-2" /> */}
            </p>
            <div className="flex flex-col justify-center items-start">
              <p className="text-white drop-shadow-lg text-md font-bold">10 Km/h</p>
              <p className="text-white drop-shadow-lg text-md">Viento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContenedorInfo