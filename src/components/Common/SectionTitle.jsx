import "./SectionTitle.css";

export default function SectionTitle({

tag,

title,

subtitle

}){

return(

<div className="section-title">

<span>

{tag}

</span>

<h2>

{title}

</h2>

<p>

{subtitle}

</p>

</div>

)

}