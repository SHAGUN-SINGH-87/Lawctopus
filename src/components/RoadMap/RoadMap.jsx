import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaBook,
  FaFileContract,
  FaGlobe,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import "./RoadMap.css";

import SectionTitle from "../Common/SectionTitle";

const roadmap = [
  {
    icon: <FaBook />,
    month: "Month 1",
    title: "Contract Drafting Basics",
    desc: "Understand legal language, clauses, formatting and drafting fundamentals.",
  },
  {
    icon: <FaFileContract />,
    month: "Month 2",
    title: "Commercial Contracts",
    desc: "Draft NDAs, Employment Agreements and Service Agreements.",
  },
  {
    icon: <FaBalanceScale />,
    month: "Month 3",
    title: "Advanced Agreements",
    desc: "Learn Shareholder Agreements, Joint Ventures and IP Contracts.",
  },
  {
    icon: <FaLaptopCode />,
    month: "Month 4",
    title: "Website Policies",
    desc: "Draft Privacy Policy, Terms & Conditions and SaaS Agreements.",
  },
  {
    icon: <FaGlobe />,
    month: "Month 5",
    title: "Freelancing",
    desc: "Build your Upwork & LinkedIn profile and start getting clients.",
  },
  {
    icon: <FaRocket />,
    month: "Month 6",
    title: "Career Launch",
    desc: "Portfolio, Certificate, Interview Preparation and Career Support.",
  },
];

export default function Roadmap() {
  return (
    <section className="roadmap section">

      <SectionTitle
        tag="YOUR LEARNING JOURNEY"
        title="Your 6-Month Learning Roadmap"
        subtitle="A structured path from beginner to confident contract drafting professional."
      />

      <div className="timeline">

        {roadmap.map((item, index) => (

          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .6,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="timeline-icon">

              {item.icon}

            </div>

            <div className="timeline-content">

              <span>{item.month}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}