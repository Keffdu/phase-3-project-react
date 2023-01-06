import './App.css';
import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header'
import ModuleForm from './Components/ModuleForm';
import MfgForm from './Components/MfgForm';
import EditModule from './Components/EditModule';

function App() {
  const [synthData, setSynthData] = useState([])
  const [search, setSearch] = useState("")
  const [option, setOption] = useState("")
  const [manufacturers, setManufacturers] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/modules')
      .then(resp => resp.json())
      .then((synthInfo) => setSynthData(synthInfo))
  }, [])

function handleUpdateModule(editedObj) {
  const updatedModule = synthData.map((mod) => {
    if (mod.id === editedObj.id) {
      return editedObj
    } else {
      return mod
    }
  })
  setSynthData(updatedModule)
}


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
          <Route path="/new_manufacturer">
            <MfgForm
            manufacturers={manufacturers}
            setManufacturers={setManufacturers}
            />
          </Route>
          <Route path="/edit/module/:id">
            <EditModule 
              manufacturers={manufacturers}
              onModuleUpdate={handleUpdateModule}
            />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
