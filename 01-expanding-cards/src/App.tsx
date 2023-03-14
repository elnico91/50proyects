import { useRef } from 'react'
import './App.css'

function App() {
  const panels = useRef<HTMLDivElement>(null);

  const toggleImage = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    for (let i = 0; i < 5; i++) {
      panels.current?.children[i].classList.remove('active')
    }
      
    if (e.target instanceof HTMLElement) { 
      e.target.className = 'panel active'
    };
  };

  return (
    <div ref={panels} className='container'>
      <div  className="panel active" onClick={toggleImage} style={{ backgroundImage: "url(/src/img/image_1.jpg)" }}>
        <h3>Imagen 1</h3>
      </div>
      <div className="panel" onClick={toggleImage} style={{ backgroundImage: "url(/src/img/image_2.jpg)" }}>
        <h3>Imagen 2</h3>
      </div>
      <div className="panel" onClick={toggleImage} style={{ backgroundImage: "url(/src/img/image_3.jpg)" }}>
        <h3>Imagen 3</h3>
      </div>
      <div className="panel" onClick={toggleImage} style={{ backgroundImage: "url(/src/img/image_4.jpg)" }}>
        <h3>Imagen 4</h3>
      </div>
      <div className="panel" onClick={toggleImage} style={{ backgroundImage: "url(/src/img/image_5.jpg)" }}>
        <h3>Imagen 5</h3>
      </div>
    </div>
  );
};

export default App
