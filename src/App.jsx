import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <div className='w-full h-screen duration-200 transition-colors' style={{backgroundColor:color}}>
      <div className='fixed bottom-10 inset-x-5 rounded-xl flex flex-wrap justify-center gap-3 items-center py-2'>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className='w-20 h-10 rounded-xl text-black border' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
        <button className='w-20 h-10 rounded-xl text-black border' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"teal"}} onClick={()=>setColor("teal")}>Teal</button>
        <button className='w-20 h-10 rounded-xl text-black border' style={{backgroundColor:"cyan"}} onClick={()=>setColor("cyan")}>Cyan</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"magenta"}} onClick={()=>setColor("magenta")}>Magenta</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"indigo"}} onClick={()=>setColor("indigo")}>Indigo</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"maroon"}} onClick={()=>setColor("maroon")}>Maroon</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
        <button className='w-20 h-10 rounded-xl text-white border' style={{backgroundColor:"navy"}} onClick={()=>setColor("navy")}>Navy</button>
      </div>
    </div>
  )
}

export default App
