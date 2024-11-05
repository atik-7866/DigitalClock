import React,{useState,useEffect} from 'react'
function Dcp(){
const [time,setTime]=useState(new Date())
useEffect(()=>{
    const id=setInterval(()=>{
        setTime(new Date())
    },1000)
    return (()=>{
        clearInterval(id)
    })
},[])

function formatTime(){
    let h=time.getHours()
    let m=time.getMinutes()
    let s=time.getSeconds()
    let ap=h>=12 ? "PM" :"AM"
    h=h%12 || 12;
    h=(h<=9)?('0'+h):h
    m=(m<=9)?('0'+m):m

    s=(s<=9)?('0'+s):s

    return `${h} : ${m} : ${s} ${ap}` 
}



    return(
        <div className="container">
            <span className ="clock">{formatTime()}</span>
        </div>
    )
}
export default Dcp;