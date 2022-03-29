import { searchAdvice } from "../services/constants";
import { useState, useEffect } from "react";

function Search() {
    // setting usestates for the called Api(setAdvise) and also for search Input(setValue)
const [advise,setAdvise] = useState([]);
const [value,setValue] = useState('');


// creating an async function for click event
async function handleClick (e){
    // const inputValue = e.target.value
 
   const newadvise = await searchAdvice(value)
        setAdvise(newadvise) 
        console.log('trying..',newadvise)
      
}

useEffect(() => {
  searchAdvice()
}, []);


  useEffect(()=>{
 searchAdvice();
  },[]);

  return(

    <div>

<input type='text' onChange={(e)=>setValue(e.target.value)}/>
<button type = 'submit' onClick={(e)=>handleClick(e)}>Search</button>
    <div>
       {
            advise.map((adv, index)=>{
                const {advice} = adv
               return <p key={adv.id}>{adv.advice}</p>
            })
        }
    </div>
    </div>
  )

}
export default Search