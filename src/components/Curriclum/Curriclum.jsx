import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaFileContract,
  FaGlobe,
  FaHandshake,
  FaLaptop,
  FaUserTie,
} from "react-icons/fa";
import "./Curriclum.css";

import SectionTitle from "../Common/SectionTitle";

const curriculum = [
  {
    icon: <FaFileContract />,
    title: "Contract Drafting Basics",
    desc: "Understand clauses, legal language, structure, formatting and drafting principles used in professional legal practice.",
  },
  {
    icon: <FaHandshake />,
    title: "Commercial Agreements",
    desc: "Draft NDAs, Service Agreements, Employment Contracts, Vendor Agreements and more.",
  },
  {
    icon: <FaGlobe />,
    title: "International Contracts",
    desc: "Learn cross-border agreements, international commercial contracts and jurisdiction clauses.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Contract Review",
    desc: "Master risk assessment, negotiations, redlining and reviewing legal documents professionally.",
  },
  {
    icon: <FaLaptop />,
    title: "Website Policies",
    desc: "Draft Privacy Policies, Terms & Conditions, SaaS Agreements and Website Contracts.",
  },
  {
    icon: <FaUserTie />,
    title: "Freelancing Masterclass",
    desc: "Build your legal portfolio and learn how to acquire freelance clients from Upwork and LinkedIn.",
  },
];

export default function Curriculum() {
  return (
    <section id="curriclum" className="curriculum section">

      <SectionTitle
        tag="WHAT YOU'LL LEARN"
        title="Master Industry-Ready Legal Skills"
        subtitle="Learn practical drafting techniques through real-world contracts, expert mentorship and hands-on assignments."
      />

      <motion.div
        className="curriculum-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {curriculum.map((course, index) => (
          <motion.div
            key={index}
            className="curriculum-card"
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
          >
            <div className="curriculum-icon">
              {course.icon}
            </div>

            <h3>{course.title}</h3>

            <p>{course.desc}</p>

            <button>Learn More →</button>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}