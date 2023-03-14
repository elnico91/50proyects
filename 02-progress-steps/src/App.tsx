import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [percentBar, setPercentBar] = useState<number>(0);
  const [count, setCount] = useState<number>(3);
  const circles = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
  
  useEffect(()=> {
   if (percentBar == 0) {
    prevRef.current?.toggleAttribute("disabled", true);
    nextRef.current?.toggleAttribute("disabled", false);
   } else if (percentBar == 99) {
    prevRef.current?.toggleAttribute("disabled", false);
    nextRef.current?.toggleAttribute("disabled", true);
   } else {
    prevRef.current?.toggleAttribute("disabled", false);
    nextRef.current?.toggleAttribute("disabled", false);
   }

   if (count > 5 ) setCount(5)
   if (count < 3 ) setCount(3)
  }, [percentBar]);

  const prevButton = ():void => {
    if (percentBar > 0) {
      setPercentBar(percentBar - 33);
      circles.current?.children[count].classList.remove('active');
      setCount(count - 1)
    }
  };

  const nextButton = ():void => {  
    if (percentBar < 99) {
      setPercentBar(percentBar + 33);
      circles.current?.children[count].classList.add('active');
      setCount(count + 1)
    }
  };

  return (
    <div className="container">
      <div ref={circles} className="progress-container">
        <div className="progress-bar" style={{ width: `${percentBar}%` }}></div>
        <div className="progress-bar empty"></div>
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
      </div>

      <button ref={prevRef} className="btn" onClick={prevButton}>Prev</button>
      <button ref={nextRef} className="btn" onClick={nextButton}>Next</button>
    </div>
  );
};

export default App
