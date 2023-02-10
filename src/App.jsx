import "./App.css"
import Logo from "./images/logo.svg"
import Dollar from "./images/icon-dollar.svg"
import Person from "./images/icon-person.svg"
import { useEffect, useState } from "react"

function App() {
  const tipSelection = [5, 10, 15, 25, 50]

  const [bill, setBill] = useState(0.0)
  const [tips, setTips] = useState(0)
  const [people, setPeople] = useState(1)
  const [tipAmount, setTipAmount] = useState(0.0)
  const [total, setTotal] = useState(0.0)

  useEffect(() => {
    const tip = bill * (tips/100)
    const finalBill = parseFloat(bill) + parseFloat(tip)
    setTotal((finalBill / people).toFixed(2))
    setTipAmount((tip / people).toFixed(2))    
  })

  const handleReset = () => {
    setBill(0.0)
    setTips(0.0)
    setPeople(1)
    setTipAmount(0.0)
    setTotal(0.0)
  }

  return (
    <div className="App flex flex-col justify-center items-center gap-10 p-10">
      <header>
        <img src={Logo} alt="Splitter Logo" />
      </header>
      <main className="bg-white grid grid-cols-2 max-w-2xl gap-5 p-5 rounded-xl">
        <div id="input" className="text-left text-neutral-500">
          <div className="mb-5 flex flex-col">
            <label htmlFor="bill">Bill</label>
            <div className="relative">
              <img 
                src={Dollar} 
                alt="Dollar logo" 
                width={10}
                className="absolute top-3 left-3"
              />
              <input 
                type="text"
                name="bill"
                id="bill"
                placeholder="0"
                value={bill}
                className="bg-neutral-100 text-right font-bold p-2 rounded-md focus:outline-primary w-full"
                onChange={e => setBill(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="tip">Select Tip %</label>
            <ul className="grid w-full grid-cols-3 gap-3 font-bold">
              {
                tipSelection.map((tip, index) => <li key={index}>
                  <input 
                    type="checkbox" 
                    id={tip + "-percent"}
                    value={tip}
                    className="hidden peer"
                    onChange={(e) => setTips(e.target.value)}
                  />
                  <label htmlFor={tip + "-percent"} className="inline-flex items-center justify-center w-full p-3 text-white bg-neutral-500 rounded-md cursor-pointer peer-checked:bg-primary peer-checked:text-neutral-500 hover:text-neutral-500 hover:bg-neutral-200 transition-all duration-100">
                    <div className="block">
                      {tip}%
                    </div>
                  </label>
                </li>)
              }
              <li>
                <input 
                  type="text"
                  placeholder="Custom" 
                  className="bg-neutral-100 text-center p-3 rounded-md focus:outline-primary w-full"
                  onChange={e => setTips(e.target.value)}
                />
              </li>
            </ul>
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="bill">Number of People</label>
            <div className="relative">
              <img 
                src={Person} 
                alt="Person logo" 
                width={10}
                className="absolute top-3 left-3"
              />
              <input 
                type="text"
                name="person"
                id="person"
                value={people}
                placeholder="0"
                className="bg-neutral-100 text-right font-bold p-2 rounded-md focus:outline-primary w-full"
                onChange={e => setPeople(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div id="result" className="bg-neutral-500 text-primary rounded-lg p-5 flex flex-col justify-between">
          <div>
            <div id="amount" className="inline-flex items-center justify-between w-full">
              <div className="flex flex-col items-center text-left">
                <span className="text-neutral-100 text-sm">Tip Amount</span>
                <span className="text-neutral-300 text-xs">/ person</span>
              </div>
              <span className="text-primary font-bold text-xl text-right">
                $
                {
                  (isNaN(tipAmount)) ?
                  "0.00" :
                  tipAmount
                }
              </span>
            </div>
            <div id="total" className="inline-flex items-center justify-between w-full">
              <div className="flex flex-col items-center text-left">
                <span className="text-neutral-100 text-sm">Total</span>
                <span className="text-neutral-300 text-xs">/ person</span>
              </div>
              <span className="text-primary font-bold text-xl text-right">
                $
                {
                  (isNaN(total)) ?
                  "0.00" :
                  total
                }
              </span>
            </div>
          </div>
          <button 
            className="bg-primary text-neutral-500 font-bold p-2 rounded-md hover:bg-neutral-200 transition-all duration-100"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
