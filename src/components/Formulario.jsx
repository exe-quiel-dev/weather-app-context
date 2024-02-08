
const Formulario = () => {
  return (
    <form
            className="flex flex-col justify-center gap-4"
            // onSubmit={}
          >
            <input
              type="text"
              className="p-2 w-full bg-transparent text-white border rounded-full border-white"
              placeholder="Ingresa la ciudad"
              // onChange={e => { setCiudad(e.target.value) }}
            />
            <select 
            className="rounded-full bg-transparent border border-white text-white p-2"
            // onChange={e => { setPais(e.target.value) }}
            >
              <option value={''} className="text-gray-700 font-bold" >Selecciona un pais</option>
              <option value={'US'} className="text-gray-700 font-bold" >Estados Unidos</option>
              <option value={'AR'} className="text-gray-700 font-bold" >Argentina</option>
              <option value={'MX'} className="text-gray-700 font-bold" >Mexico</option>
            </select>
            <input
            type="submit"
            value='Buscar'
            className="cursor-pointer bg-orange-500 rounded-xl font-black uppercase p-2 text-white first-line hover:bg-gray-200 transition-colors text-xl hover:text-gray-600"
            />
          </form> 
  )
}

export default Formulario