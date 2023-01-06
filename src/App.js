import './App.css';
import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header'
import ModuleForm from './Components/ModuleForm';
// import ModuleList from './Components/ModuleList';
// import SearchBar from './Components/SearchBar';

function App() {
  const [synthData, setSynthData] = useState([])
  const [search, setSearch] = useState("")
  const [option, setOption] = useState("module_name")
  const [manufacturers, setManufacturers] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/modules')
      .then(resp => resp.json())
      .then((synthInfo) => setSynthData(synthInfo))
  }, [])

// console.log(`search: ${search}`)
// console.log(`option: ${option}`)


  return (
    <div>
        <Header 
        manufacturers={manufacturers}
        setManufacturers={setManufacturers}
        setSynthData={setSynthData}/>
        <Switch>
          <Route path="/home">
            <Home
            search={search}
            onSearchChange={setSearch}
            option={option}
            onOptionChange={setOption}
            setSynthData={setSynthData}
            synthData={synthData}
            />
          </Route>
          <Route path="/new_module">
            <ModuleForm 
            setSynthData={setSynthData}
            synthData={synthData}
            manufacturers={manufacturers}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
