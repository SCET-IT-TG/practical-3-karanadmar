import { useState } from "react";

const TweetInput=()=>{
    let [text,setText]=useState("");
    let [count,setCount]=useState(0);
    function changebo(e){
        let nval=e.target.value;
        setText(nval)
        setCount(nval.length);
    }
    return(
        <div>
            <textarea  rows={10} onChange={changebo} value={text}>

            </textarea>
            <h4>{count}/50</h4>
            <br />
            <br />
            <button disabled={count===0||count>50?true:false}>Tweet</button>
        </div>
    )
}
export default TweetInput;
