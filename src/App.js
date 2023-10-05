import './App.css';

function App() {
  return (
    <div className="App">
<Job company="Google" position="Senior SDE" salary={200000} />
<Job company="Facebook" position="Junior SDE" salary={90000} />
<Job company="Microsoft" position="Data Scientist" salary={600000} />

  
  
    </div>
  );
}

function Job(props){
return (
  <div>
    <h1>{props.company}</h1>
    <h2>{props.position}</h2>
    <h1>{props.salary}</h1>

  </div>
)
}

export default App;
