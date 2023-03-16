import { useState } from 'react'
import './App.css'

function App() {
  const [ blurPercent, setBlurPercent ] = useState<number>(30);
  const [ loading, setLoading ] = useState<number>(0);
  const [ opacity, setOpacity ] = useState<number>(1);
  
  const changeBlur:number = setTimeout(()=> {
    setBlurPercent(blurPercent - 1)
    setLoading(loading + 3.34)
    setOpacity(opacity - 0.034)
  }, 60)

  if (blurPercent === 0) clearInterval(changeBlur)

  return (
    <div>
      <img className="img" src="../src/assets/wallpaper.png" style={{ filter: `blur(${blurPercent}px)` }} />
      <span className="loading" style={{ opacity: `${opacity}` }}>{Math.trunc(loading)}%</span>
    </div>
  )
}

export default App
