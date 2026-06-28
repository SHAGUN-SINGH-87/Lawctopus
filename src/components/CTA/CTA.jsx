import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>

      <motion.div
        className="cta-content"
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <span>LIMITED TIME OFFER</span>

        <h2>
          Ready To Become a
          <br />
          Contract Drafting Expert?
        </h2>

        <p>
          Master industry-ready drafting skills, build a professional legal
          portfolio, and learn how to earn through freelancing with expert
          guidance.
        </p>

        <div className="cta-buttons">

          <button className="primary-btn">

            Enroll Now

            <FaArrowRight />

          </button>

          <button className="secondary-btn">

            Download Brochure

            <FaDownload />

          </button>

        </div>

      </motion.div>

    </section>
  );
}