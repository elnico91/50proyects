import { useState } from 'react'
import './App.css'

function App() {
  const [isHidden, setIsHidden] = useState<boolean>(true)

  const toggleHidden = ():void => setIsHidden(!isHidden)

  return (
    <div>
      <div className={isHidden? "container" : "container show-menu"}>
        <div className={isHidden? "circle-menu" : "circle-menu show-menu"}>
          <button className="btn-show-menu" onClick={toggleHidden}>
            <img src="../src/assets/show-menu.svg"/>
          </button>

          <button className="btn-close-menu" onClick={toggleHidden}>
            <img src="../src/assets/close-menu.svg"/>
          </button>
        </div>
        <div className="content">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
          <h3>
            Lorem Ipsum
          </h3>
          <img src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </div>
      </div>
      <nav>
          <ul>
            <li>
              <img src="../src/assets/home.svg"/>
              Home
            </li>
            <li>
              <img src="../src/assets/about.svg"/>
              About
            </li>
            <li>
              <img src="../src/assets/contact.svg"/>
              Contact
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default App
