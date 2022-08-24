import React,{useState,useEffect} from 'react'
import globalStore from '../../globalStore';

export default function ComponentOne() {
    const [data, setData]= useState(0)

    useEffect(()=>{
        globalStore.accountService.subscribe("SUBSCRIBE", data => {
          console.log(data);
           setData(data.count)
        });
        
      //   globalStore.platformService.subscribe("SUBSCRIBE","name", data => {
      //     setData(data.id)
      //  });
    },[])

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:20, border:"0.5px solid white", padding:20, borderRadius:10}}>
        <span>ComponentOne - Account: <span style={{color:"#5DA3FA"}}>{data}</span> </span>
        <button 
        style={{width:"fit-content"}} 
        onClick={()=>globalStore.accountService.publish("PUBLISH", {count:data-1})}>
                Decrement
        </button>
    </div>
  )
}
