import React,{useState,useEffect,useRef} from 'react'
function Stopwatch(){
    let [isRunning,setIsrunning]=useState(false)
    let [elapsed,setElapsed]=useState(0)
    
    let id=useRef(null)
    let startTimeRef=useRef(0);
    useEffect(()=>{
        if(isRunning){
            id.current=setInterval(()=>{
                setElapsed(Date.now()-startTimeRef.current)
            },10)
        }
        return()=>{
            clearInterval(id.current)
        }
    },[isRunning])
    function start(){
        setIsrunning(true)
        startTimeRef.current=Date.now()-elapsed
    }
    function stop(){
        setIsrunning(false)
    }
    function reset(){
        setElapsed(0)
        setIsrunning(false)
    }
    function formatTime(){
        let h=Math.floor(elapsed/(1000*60*60));
        let m=Math.floor(elapsed/(1000*60)%60);
        let s=Math.floor(elapsed/(1000)%60);
        let ms=Math.floor((elapsed%1000)/10);
        h=(h<=9)?('0'+h):h
        m=(m<=9)?('0'+m):m

        s=(s<=9)?('0'+s):s
        ms=(ms<=9)?('0'+ms):ms


        return ` ${m} : ${s} :${ms} `
    }
    return (
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                 <button onClick={start}className='start-button'>Start</button>
                 <button onClick={stop}className='stop-button'>Stop</button>
                 <button onClick={reset}className='reset-button'>Reset</button>
            </div>
            
        </div>
    )
}
export default Stopwatch;