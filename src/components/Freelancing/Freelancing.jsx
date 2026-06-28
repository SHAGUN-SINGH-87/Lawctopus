import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaFileSignature,
  FaLinkedin,
  FaRocket
} from "react-icons/fa";

import { SiUpwork } from "react-icons/si";
import "./Freelancing.css";

import SectionTitle from "../Common/SectionTitle";

const benefits = [
  {
    icon: <SiUpwork />,
    title: "Upwork Success",
    desc: "Build a professional profile and start getting international legal projects.",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn Growth",
    desc: "Use LinkedIn to network with law firms and clients.",
  },
  {
    icon: <FaFileSignature />,
    title: "Legal Portfolio",
    desc: "Showcase your drafted agreements professionally.",
  },
  {
    icon: <FaRocket />,
    title: "Career Growth",
    desc: "Open doors to freelancing, internships and corporate legal roles.",
  },
];

export default function Freelancing() {
  return (
    <section id="freelancing" className="freelancing section">

      <SectionTitle
        tag="FREELANCING"
        title="Turn Your Legal Skills Into Income"
        subtitle="Learn how to build your legal freelancing career with practical training and expert guidance."
      />

      <div className="freelancing-wrapper">

        <motion.div
          className="freelancing-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h2>
            Start Freelancing
            <br />
            With Confidence
          </h2>

          <p>
            This course doesn't just teach contract drafting.
            It teaches you how to convert your legal knowledge
            into a professional freelance career.
          </p>

          <div className="feature-list">

            <div>

              <FaBriefcase />

              Real Client Projects

            </div>

            <div>

              <FaFileSignature />

              24+ Drafted Agreements

            </div>

            <div>

              <FaLinkedin />

              LinkedIn Branding

            </div>

            <div>

              <SiUpwork />

              Upwork Guidance

            </div>

          </div>

          <button>

            Start Learning

            <FaArrowRight />

          </button>

        </motion.div>

        <div className="freelancing-right">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
            >

              <div className="benefit-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}