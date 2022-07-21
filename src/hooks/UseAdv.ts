import {useRef,useState,useEffect} from "react";

export function UseAdv(){
    const [activeimage,setactiveimage] = useState<number>(0)
    const Timeout:any = useRef()
    function SpinBlock(butt:string){
        switch (butt){
            case 'right':setactiveimage((x)=>x+1);clearTimeout(Timeout.current); break
            case 'left':setactiveimage((x)=>x-1);clearTimeout(Timeout.current);break
        }
    }
    function Times(CountImages = 1,Delayms = 2000,turn=true){ // CountImages - кол-во картинок, Delayms- задержка интервала, turn - вкл/выкл settimeout
        useEffect(()=>{
            if(turn){
                if(activeimage>CountImages) setactiveimage(0)
                if(activeimage<0) setactiveimage(CountImages)
                Timeout.current=setTimeout(()=>{setactiveimage((x:number)=>x+1)},Delayms)
            }
        },[activeimage])
    }
    return {activeimage,SpinBlock,Times}
}