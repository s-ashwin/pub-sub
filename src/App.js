import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ComponentOne from './components/componentOne';
import globalStore from './globalStore';
import ComponentTwo from './components/componentTwo';

function App() {
  const [accountCount,setAccountCount]= useState(0)
  const [platformCount,setPlatformCount]= useState(0)

  const onIncrement = (service)=>{
    switch (service) {
      case "PLATFORM":
        globalStore.platformService.publish({count:platformCount+1});
        break;
      case "ACCOUNT":
        globalStore.accountService.publish({count:accountCount+1});
        break;
      default:
        break;
    }
  }

  useEffect(()=>{
    globalStore.accountService.subscribe( data => {
       setAccountCount(data.count)
    },["count"]);
    globalStore.platformService.subscribe( data => {
      setPlatformCount(data.count)
    },["count"]);
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:"flex", gap:20}}>
          <ComponentOne/>
          <ComponentTwo/>
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display:"flex", gap:20}}>
          <div style={{ border:"0.5px solid white", padding:20, borderRadius:10}}>
            <p>Account: {accountCount}</p>
            <button onClick={()=>onIncrement("ACCOUNT")}>Increment</button>
          </div>
          <div style={{ border:"0.5px solid white", padding:20, borderRadius:10}}>
            <p>Platform: {platformCount}</p>
            <button onClick={()=>onIncrement("PLATFORM")}>Increment</button>
            <button 
            style={{width:"fit-content"}} 
            onClick={()=>globalStore.platformService.publish({name:"ash"})}>
                    Change Name
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
