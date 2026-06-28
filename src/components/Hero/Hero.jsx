import { motion } from "framer-motion";
import heroImg from "../../assets/hero.png";
import "./Hero.css";

function Hero(){

return(

<section id="home" className="hero section">

<div className="hero-left">

<motion.h1

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:.8}}

>
<>
Become an Expert in
<br/>

<span>Contract Drafting</span>
</>
</motion.h1>

<motion.div
  className="hero-tagline"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  <span>Learn</span>
  <span>Draft</span>
  <span>Earn</span>
</motion.div>

<motion.p

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{delay:.3}}

>

Master 24+ contracts through 54 live sessions,

build your legal portfolio,

and learn freelancing from experts.

</motion.p>

<motion.div

className="buttons"

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.6}}

>

<button>

Enroll Now

</button>

<button className="outline">

Download Brochure

</button>

</motion.div>

</div>

<div className="hero-right">

<motion.img

src={heroImg}

alt="Hero"

initial={{opacity:0,scale:.8}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}

 />

</div>

</section>

)

}

export default Hero;