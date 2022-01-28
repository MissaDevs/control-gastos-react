import Gasto from "./Gasto";

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className="listado-gastos contenedor">

        {
          filtro ? (
            <>
              <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos"}</h2>

              {gastosFiltrados.map(g => (
                <Gasto 
                  gasto = {g}
                  key={g.id}
                  setGastoEditar = {setGastoEditar}
                  eliminarGasto = {eliminarGasto}
                />
              ))}
           </>
          ) : (
            <>
              <h2>{gastos.length ? "Gastos" : "No hay gastos"}</h2>

              { gastos.map(g => (
                <Gasto 
                  gasto = {g}
                  key={g.id}
                  setGastoEditar = {setGastoEditar}
                  eliminarGasto = {eliminarGasto}
                />
              ))}
            </>
            
          )
        }
    </div>
  );
};

export default ListadoGastos;
