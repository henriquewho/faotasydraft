import './App.css';
import {useState} from 'react'; 
import goodel from './goodel.png'; 

import Header from './Header';
import Teams from './Teams';
import Button from './Button';
import PickedList from './PickedList';

function App() {

  // teams = list of teams remaining in the draft
  let [teams, setTeams] = useState(['Cougars', 'Chargers', 'Madrugas', 'Monkeys', 'Tenebrosos', 'Tigers', 'Reservas', 'Burkinas', 'Assombrinhos', 'Drew Breeze']); 

  // picked = list of teams that have their positions already defined
  let [picked, setPicked] = useState([]); 

  // Take a random team from the 'teams' list and put it on the 'picked' list, 
  // for each press on the button
  function pick(e){
    const pickedTeam = Math.floor(Math.random() * teams.length);
    const prev = teams.filter((each, index)=>{
      return (index !== pickedTeam);
    });
    setTeams(prev);
    setPicked([...picked, { key:10-picked.length, team:teams[pickedTeam], order: 10-picked.length }]);
    
  }

  return (
    <div className="App">
      <Header />
      <img src={goodel} className='goodel' alt=''></img>
      <Teams teams={teams}/>
      <Button onClick={()=>pick(teams)} text={'Click for next pick'}/> 
      <PickedList picked={picked} />
    </div>
  );
}

export default App;
