import  {useState} from 'react';
import './App.css';
import AddToList from './Components/AddToList';
import List from './Components/List'
 export interface IState{
  people:{
    name:string
    age:number
    img:string 
    note?:string 
  }[]
}

function App() {
  const [people,setPeople]=useState<IState["people"]>([
    {
      name: "Ahmed Kobir",
      age: 35,
      img: "https://www.atomicdust.com/wp-content/uploads/2013/10/Steven-Brien-Web-Developer.jpg",
      note: "Full Stack developer",
    },
    {
      name: "Nishat Ahmed",
      age: 30,
      img: "https://th.bing.com/th/id/OIP.an61nk5mRjlPW_rKd5gLMgHaHa?pid=ImgDet&w=620&h=620&rs=1",
      note: "Software Eng."
    }


  ])
  
  
  
  return (
    <div className="App">
    <h1>Developer Added My Team</h1>
    <List people={people}/>
    <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
