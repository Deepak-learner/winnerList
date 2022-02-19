import React,{useState,useEffect} from 'react';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('http://api.nobelprize.org/v1/prize.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h2> Prize Winner List </h2>
            
                    {data && data.prizes && data.prizes.map((item)=><div style={{border: "2px solid brown"}}><p>Year: {item.year}, Category: {item.category}, Winners: {item && item.laureates && item.laureates.map((e) => <span>{e.firstname} {e.surname},</span>)}</p></div>)}
               
        </div>
  
  );
}

export default App;
