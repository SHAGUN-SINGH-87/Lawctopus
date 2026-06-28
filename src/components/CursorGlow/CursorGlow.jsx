import { useEffect } from "react";
import "./CursorGlow.css";

export default function CursorGlow() {

useEffect(()=>{

const glow=document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

},[]);

return <div className="cursor-glow"></div>;

}