
import {useEffect,useState} from "react";

function App(){
  const [count, setCount] = useState([]);

useEffect(() =>{
 async function fetchData(){
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data =  await response.json();
    setCount(data.results)

  }

  fetchData()

  
},[])

return(
  <div>
    <h2>rick and morty</h2>
  {
    count.map(counts =>{
      return <div key={counts.id}>
        <h2>{counts.name}</h2>
        <img src={counts.image} alt={counts.name}/>
        <h2>{counts.gender}</h2>
      </div>
    })
  }
  </div>
)

}
export default App


