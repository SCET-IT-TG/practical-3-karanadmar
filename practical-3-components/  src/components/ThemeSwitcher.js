import { useEffect, useState } from "react"
const ThemeSwitcher=()=>{
    let [theme,setTheme]=useState("light")
    useEffect(()=>{
       if(theme==='dark'){
        document.body.style.backgroundColor="#1A1A1B";
        document.body.style.color="white";
       }
       if(theme==='light'){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
       }
    },[theme])
    return(
        <button onClick={()=>{setTheme(theme==='light'?'dark':'light')}}>Switch to {theme==='light'?'dark':'light'} mode </button>
    )
}
export default ThemeSwitcher;
