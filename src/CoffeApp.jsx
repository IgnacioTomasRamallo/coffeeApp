import { Cards } from "./components/cards/Cards"

function App() {



  return (
    <div className='bg-[#1B1D1F] flex justify-items-center'>
      <div className="bg-white w-96">
        <h2>Our Collection</h2>
          <p className='text-information'>
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
          </p>
        <Cards/>

      </div>
    </div>
  )
}

export default App
