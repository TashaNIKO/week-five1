//data.js//
import { useState } from "react";
import { data } from "./data";

function App () {
  const [filmList, setFilmList] = useState(data);
 
  return(
    <div>
{filmList.map((item=> {
  const {id, film} = item;
  return(
    <div key={id}>
      <p> Номер {id} - {film}</p>
    </div>
  )
}))}
<button onClick = { () => setFilmList ([])}>Delete All</button>
    </div>
  )
}
export default App;
//react-hooks//
/* import { useState } from "react";
function App() {
  const [love, setLove] = useState("I love JavaScript");
  const updateLove=() => {
    if (love==="I love JavaScript") {
  setLove ("I love React")
}
  else {
    setLove ("I love JavaScript")
  }
}
    return(
    <div>
      <h1>{love}</h1>
      <button onClick={updateLove}>Click me</button>
    </div>
    )
}
export default App; */
//react-hooks//
/* import { useState } from "react";

function App() {

  const [count, setCount] =useState (100);

  const updateCount =()=> {
    setCount(count-5);
  }

return (
  <div>
    <h1> {count}</h1>
    <button onClick={updateCount}>Click</button>
  </div>
)
}
export default App; */
//Class components//
/* import { Component } from "react";
export default class App extends Component {
  state = {
    count:100
  }
  render() {
    return(
      <div>
<h1>{this.state.count}</h1>
<button onClick={() => this.setState({count: this.state.count-5})}>Click</button>
      </div>
    )
  }
} */

//react-hooks//
/* import { useState } from "react";

function App() {

  const [ name, setName]= useState("Natalia");
  const [age, setAge] =useState (47);
  const updateData =()=> {
    setName("Anna");
    setAge(28);
  }

return (
  <div>
    <h1>Hello {name}</h1>
    <h2>I am {age} years old</h2>
    <button onClick={updateData}>Click</button>
  </div>
)
}
export default App;
 */

//Class components//
/* import { Component } from 'react';
export default class App extends Component {

  state={
    name: "Natalia"
  }
updateData(){
  this.setState({name: "Anna"})
}
render (){
  return ( 
    <div>
      <h1> Hello {this.state.name}</h1>
      <button onClick={()=>this.updateData()}>Click</button>
    </div>
  )
}
} */
