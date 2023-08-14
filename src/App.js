import React from 'react'
import EyebrowInput from './components/EyebrowInput'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <form>
        <h1>Eyebrow Inputs</h1>
        <div className="row">
          <EyebrowInput label="First Name" />
          <EyebrowInput label="Last Name" />
        </div>
        <div className="row">
          <EyebrowInput label="Adress Line 1" />
          <EyebrowInput label="Address Line 2" />
        </div>
      </form>
    </div>
  );
}

export default App;
