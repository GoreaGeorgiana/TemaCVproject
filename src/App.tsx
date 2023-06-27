import './App.css';
import './Description.css';
import './Profile.css';
import Description from './components/Description';
import Profile from './components/Profile';


function App() {
  const description = [
    { title: "Skills:", text: "Teamwork , Flexibility , Creativity, Punctuality " },
    { title: "Education:", text: "University of Economics and Law" },
    { title: "Known Languages:", text: "English: Intermediate" },
    { title: "Hobbies:", text: " Painting , Cycling , Outdoor walks , Reading" } 
  ]
  return (
    <div>
      <div className="App">
        <div className="Profile"><Profile /></div>
        <div className="Description">
          <Description
            title={description[0].title}
            text={description[0].text}></Description>
          <Description
            title={description[1].title}
            text={description[1].text}></Description>
          <Description
            title={description[2].title}
            text={description[2].text}></Description>
          <Description
            title={description[3].title}
            text={description[3].text}></Description>
        </div>
      </div>
    </div>
  );
}

export default App;
