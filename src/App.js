import './App.css';

function App() {
  const planets=[
{name:"Earth" ,isGasPlanet:false},
{name:"Mars" ,isGasPlanet:true},
{name:"Jupiter" ,isGasPlanet:true},
{name:"Mercury" ,isGasPlanet:false},
{name:"Pluto" ,isGasPlanet:false},
  ]

  return (
    <div className="App">
      
          {/* // <Planet name="Earth" isGasPlanet={true} />
          // <Planet props={planet}/> */}
        {/* <DisplayAllPlanets props={planets}/> */}
      <Child name="Arjun" dept="CSE"/>
      <Student name="Deva" dept="CSBS"/>
</div>
  )
}
function DisplayAllPlanets({ props }) {
  console.log("Prps",props)
  return props.map((prop) => (
    <Planet name={prop.name} isGasPlanet={prop.isGasPlanet} />
  ));
}

function Child({name,dept}){
console.log(name,dept);
}

function Student({name}){
  console.log(name);

}


function Planet(props){
  console.log(props);
  return (
    props.isGasPlanet &&
    <div>
      <h1 style={{color:props.name=="Mars" && "red"}}>{props.name}</h1>
    </div>
  )

}

export default App;
