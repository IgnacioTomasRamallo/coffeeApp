import { useState } from "react";
import { Button } from "./components/button/Button";
import { Cards } from "./components/cards/Cards";

function App() {
  const [state, setState] = useState();
    //tareas a realizar para el 21
  return (
    <div className="bg-[#111315] flex w-full justify-center sm:py-8 py-5">
      <div className="bg-image"></div>
      <div className="bg-[#1B1D1F] p-10 sm:flex sm:flex-col sm:items-center w-3/5 rounded-lg shadow-xl">
        <div className="text-center sm:w-2/6 ">
          <h2 className="p-3 text-[#FEF7EE] ">Our Collection</h2>
          <p className="text-information text-wrap text-[#6F757C]">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          
          <div className="m-5 flex space-x-4 items-center justify-center">
            {/* falta darle la propiedad cuando este activo el boton  */}

            <Button
              buttonActive={"a"}
              textButton={"All Products"}
              className={"bg-[#6F757C] p-1.5 rounded-lg text-[#FEF7EE]"}
            />
            <Button
              buttonActive={state}
              textButton={"Available Now"}
              className={"text-[#FEF7EE]"}
            />
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
