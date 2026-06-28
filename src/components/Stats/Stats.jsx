import { motion } from "framer-motion";
import "./Stats.css";

const stats = [
  {
    number: "54+",
    title: "Live Sessions",
    subtitle: "Interactive expert-led classes",
  },
  {
    number: "24+",
    title: "Contracts",
    subtitle: "Industry-ready legal drafts",
  },
  {
    number: "5000+",
    title: "Students",
    subtitle: "Trusted by law learners",
  },
  {
    number: "100+",
    title: "Assignments",
    subtitle: "Hands-on practical exercises",
  },
];

export default function Stats() {
  return (
    <section className="stats">

      <div className="stats-grid">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
            }}
          >

            <h2>{item.number}</h2>

            <h3>{item.title}</h3>

            <p>{item.subtitle}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}