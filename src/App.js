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
        globalStore.platformService.publish("PUBLISH", {count:platformCount+1});
        break;
      case "ACCOUNT":
        globalStore.accountService.publish("PUBLISH", {count:accountCount+1});
        break;
      default:
        break;
    }
  }

  useEffect(()=>{
    globalStore.accountService.subscribe("SUBSCRIBE", data => {
       setAccountCount(data.count)
    });
    globalStore.platformService.subscribe("SUBSCRIBE", data => {
      setPlatformCount(data.count)
    });
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
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
