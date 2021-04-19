import './App.css';
import { JourneyView } from './components/JourneyView';

function App() {

  const journeySteps = [
    {
      id : 1,
      nodeTitle : 'VM',
      messageTitle : 'Title',
      messageContent : 'Journey Message Description',
      detailsLink : '#'
    },
    {
      id : 2,
      nodeTitle : 'VM',
      messageTitle : 'Title',
      messageContent : 'Journey Message Description',
      detailsLink : '#'
    }
  ]
  
  return (
    <div className="app-wrapper">
        <JourneyView steps={journeySteps}/>
        {"320 px"}
    </div>
  );
}

export default App;
