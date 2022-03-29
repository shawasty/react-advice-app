import { randomAdvice } from "../services/constants";
import { useEffect , useState } from "react";

const Random = () => {

    const [counsel,setCounsel] = useState ("");
    
    async function handleClick() {
       const answer = await randomAdvice();
       console.log(answer)
       setCounsel(answer.data.slip.advice)
    }

    useEffect(()=>{
        handleClick()
    },[])

    return (
        <div>
            <h1>Random Advice</h1>
            <button onClick={handleClick}>Click For Random Advice</button>
            <p>{counsel}</p>
        </div>
    );
};

export default Random;