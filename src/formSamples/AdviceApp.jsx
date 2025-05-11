import {useState, useEffect} from 'react'
import "./Advice.css"

export const AdviceApp = () => {
    const [advice, setAdvice] = useState("Please click the button to get advice");
    const [count, setCount] = useState(0);

    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=>c+1)
    }
    // useEffect(function(){
    //     getAdvice();
    // },[])
  return (
    <>
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You have read <b>{count}</b> Advices till now.</p>
    </div>
    <footer>
        <p>Designed By <a href="https://github.com/NaveenSMB">Naveen S M B</a></p>
    </footer>
    </>
  )
}
