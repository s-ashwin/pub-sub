import React,{useState,useEffect} from 'react'
import globalStore from '../../globalStore';

export default function ComponentTwo() {
    const [data, setData]= useState(0)

    useEffect(()=>{
        globalStore.platformService.subscribe("SUBSCRIBE",({count}) => {
          console.log(count);
           setData(count)
        });
    },[])

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:20,  border:"0.5px solid white", padding:20, borderRadius:10}}>
    <span>ComponentTwo - Platform: <span style={{color:"#5DA3FA"}}>{data}</span> </span>
    <button 
    style={{width:"fit-content"}} 
    onClick={()=>globalStore.platformService.publish("PUBLISH", {count:data-1})}>
            Decrement
    </button>
    <button 
    style={{width:"fit-content"}} 
    onClick={()=>globalStore.platformService.publish("PUBLISH", {name:"ash"})}>
            Change Name
    </button>
</div>  )
}
