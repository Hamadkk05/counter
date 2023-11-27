import React, { useState } from "react"


export default function App() {

  const [count, setCount] = useState(0)



  return (
    <div className="  my-20">
      <div className="text-center  ">
        <div>
          <h1 className="font-bold text-3xl">Counter App</h1>
          <div className="my-5 space-x-2 space-y-36 ">
            <h2 className="text-3xl">{count}</h2>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full " onClick={() => setCount(count + 1)} > Increament</button>
            <button className=" bg-red-700 text-white px-4 py-2 rounded-full " onClick={() => setCount(count - 1)} disabled={count === 0} > Decreament</button>
            <button className=" bg-slate-500 text-white px-4 py-2 rounded-full " onClick={() => setCount(0)} disabled={count === 0} > Reset</button>
            
          </div>

        </div>

      </div>
    </div>
  
  )
}