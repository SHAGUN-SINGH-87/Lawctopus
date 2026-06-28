import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaBriefcase,
  FaBuilding,
  FaGlobe,
  FaLaptopCode,
  FaUserGraduate,
} from "react-icons/fa";
import "./Audience.css";

import SectionTitle from "../Common/SectionTitle";

const audience = [
  {
    icon: <FaUserGraduate />,
    title: "Law Students",
    desc: "Build practical drafting skills before graduation and become industry-ready.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Young Lawyers",
    desc: "Improve legal drafting, contract review and negotiation skills.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Professionals",
    desc: "Understand commercial agreements used in corporate legal practice.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Freelancers",
    desc: "Offer professional contract drafting services to clients worldwide.",
  },
  {
    icon: <FaGlobe />,
    title: "Legal Consultants",
    desc: "Expand your expertise with international drafting practices.",
  },
  {
    icon: <FaBriefcase />,
    title: "Job Seekers",
    desc: "Strengthen your resume with practical contract drafting experience.",
  },
];

export default function Audience() {
  return (
    <section className="audience section">

      <SectionTitle
        tag="WHO SHOULD JOIN?"
        title="Perfect For Every Legal Professional"
        subtitle="Whether you're beginning your legal journey or looking to expand your expertise, this course equips you with practical, industry-ready drafting skills."
      />

      <div className="audience-grid">

        {audience.map((item, index) => (

          <motion.div
            key={index}
            className="audience-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >

            <div className="audience-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}