import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import ModuleList from './Components/ModuleList';
import SearchBar from './Components/SearchBar';

function App() {
  const [synthData, setSynthData] = useState([])
  const [search, setSearch] = useState("")
  const [option, setOption] = useState("module_name")

  useEffect(() => {
      fetch('http://localhost:9292/modules')
      .then(resp => resp.json())
      .then((synthInfo) => setSynthData(synthInfo))
  }, [])

console.log(`search: ${search}`)
console.log(`option: ${option}`)


  return (
    <div>
        <Header setSynthData={setSynthData}/>
        <SearchBar 
        search={search}
        onSearchChange={setSearch}
        option={option}
        onOptionChange={setOption}
        setSynthData={setSynthData}
        />
        <ModuleList synthData={synthData}/>
    </div>
  );
}

export default App;
