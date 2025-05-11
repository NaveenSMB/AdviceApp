import './App.css'
import { FunctionSample } from './Components/FunctionSample'

import { OneofSample } from './Components/OneofSample'
import {Student} from './Components/Student'
import {ChildComponent} from './Components/ChildComponent'
import {ArraySample} from './Components/ArraySample'


function App() {
  const items=[
    {id:1,name:"item 1"},
    {id:2,name:"item 2"},
    {id:3,name:"item 3"},
  ];

  const handleClick=()=>{
    alert("button clicked!");
  }

  return (
    <>
      

      <Student name="SMB" age={21} isMarried={false} />
      <Student name="Nav" age={21} isMarried={false} />
      <Student name="een" age={21} isMarried={false} />

      <Student />

      <ChildComponent>
        <p>this is one</p>
        <p>this is two</p>
      </ChildComponent> 
      <ArraySample items={items}/>

       <OneofSample color="red"/>
      <div>
        <h2>NEW</h2>
      <FunctionSample handleclick={handleClick}/>
      </div>
    </>
  )
}

export default App
