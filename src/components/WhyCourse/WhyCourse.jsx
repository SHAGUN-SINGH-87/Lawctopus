import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaFolderOpen,
  FaGlobe,
  FaHandshake,
  FaPenNib,
} from "react-icons/fa";
import "./WhyCourse.css";

const cards = [
  {
    icon: <FaPenNib />,
    title: "Practical Drafting",
    text: "Learn by drafting real legal agreements used in the corporate world.",
  },
  {
    icon: <FaFolderOpen />,
    title: "Portfolio Building",
    text: "Build a portfolio of 24+ professional contract drafts.",
  },
  {
    icon: <FaHandshake />,
    title: "Negotiation Skills",
    text: "Understand how to negotiate and review legal agreements confidently.",
  },
  {
    icon: <FaGlobe />,
    title: "Freelancing",
    text: "Learn how to earn through Upwork, LinkedIn and global clients.",
  },
  {
    icon: <FaBriefcase />,
    title: "Career Growth",
    text: "Prepare for law firms, startups and corporate legal teams.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function WhyCourse() {
  return (
    <section id="why" className="why-course section">

      <motion.div
        className="why-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        <span className="tag">
          WHY THIS COURSE
        </span>

        <h2>
          Bridging the Gap Between
          <br />
          Theory & Practice
        </h2>

        <p>
          Most law students graduate with theoretical knowledge but lack
          practical drafting skills.
          This 6-month program transforms you into an industry-ready
          contract drafting professional with freelancing opportunities.
        </p>

        <button>
          Explore Curriculum
        </button>

      </motion.div>

      <motion.div
        className="why-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {cards.map((card, index) => (

          <motion.div
            variants={item}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            className="why-card"
            key={index}
          >

            <div className="icon">

              {card.icon}

            </div>

            <h3>

              {card.title}

            </h3>

            <p>

              {card.text}

            </p>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
}