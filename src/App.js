import './App.css'
import CardItems from './Components/CardItems'
// These are the list used in the application. You can move them to any component needed.
import {Fragment} from 'react'
// Replace your code here
const App = () => (
  <>
    <div className="bg">
      <div className="nav">
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="img"
          />
        </div>
        <div className="search-con">
          <div className="icon-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="icon"
            />
          </div>
          <input type="search" className="input" placeholder="Search History" />
        </div>
      </div>
    </div>
    <ul className="bottom">
      <CardItems />
    </ul>
  </>
)

export default App
