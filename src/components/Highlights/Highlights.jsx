import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCertificate,
  FaFileSignature,
  FaLaptopCode,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import "./Highlights.css";

import SectionTitle from "../Common/SectionTitle";

const highlights = [
  {
    icon: <FaVideo />,
    title: "54 Live Sessions",
    desc: "Interactive live classes led by experienced legal professionals.",
  },
  {
    icon: <FaFileSignature />,
    title: "24+ Contracts",
    desc: "Draft real-world agreements and build a professional portfolio.",
  },
  {
    icon: <FaBriefcase />,
    title: "Freelancing Training",
    desc: "Learn how to earn through Upwork, LinkedIn and global clients.",
  },
  {
    icon: <FaCertificate />,
    title: "Certificate",
    desc: "Receive a professional certificate after successful completion.",
  },
  {
    icon: <FaUsers />,
    title: "Networking",
    desc: "Connect with mentors, lawyers and fellow learners.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Lifetime Access",
    desc: "Watch recordings anytime and revise at your own pace.",
  },
];

export default function Highlights() {
  return (
    <section className="highlights section">

      <SectionTitle
        tag="COURSE HIGHLIGHTS"
        title="Everything You Need To Become Job Ready"
        subtitle="Practical learning, live sessions, portfolio building and freelancing guidance in one complete program."
      />

      <motion.div
        className="highlight-grid"
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
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="highlight-card"
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
              scale: 1.04,
            }}
          >
            <div className="highlight-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}