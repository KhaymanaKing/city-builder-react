import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  // you'll need to track a city name, which starts as the city name of your choice.
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example
  const [cityName, setCityName] = useState('___');
  const [slogans, setSlogans] = useState(['we have people here', 'definitely not full of robots']);
  const [sloganForm, setSloganForm] = useState('');
  // const [cityImage, setCityImage] = useState('1', '1', '1');
  const [skylineId, setskylineId] = useState ('1');
  const [waterfrontId, setwaterfrontId] = useState ('1');
  const [castleId, setcastleId] = useState ('1');
  function handleCityName(e){
    setCityName(e.target.value);
  }



  return (
    <div className="App">
      <City waterfrontId={waterfrontId} skylineId={skylineId} castleId={castleId}/>
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <h1>
        {/* dynamically update the city name here using state */}
        
        Welcome to beautiful {cityName}!
      </h1>
      <div className='bottom'>
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <CityNameInput handleCityName={handleCityName}/>
        <section className='dropdowns'>
          <SkylineDropdown setskylineId={setskylineId}/>          
          <CastleDropdown setcastleId={setcastleId}/>
          <WaterfrontDropdown setwaterfrontId={setwaterfrontId}/>
          
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        <SloganForm sloganForm={sloganForm} setSlogansForm={setSloganForm} setSlogans={setSlogans} slogans={slogans}/>
        {/* here, the SloganList component takes the array of slogans that lives in state */}
        <SloganList slogans={slogans}/> 
      </div>
    </div>
  );
}

export default App;
