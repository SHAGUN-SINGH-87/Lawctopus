import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCertificate,
  FaCheckCircle,
  FaFileSignature,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import "./Prices.css";

import SectionTitle from "../Common/SectionTitle";

const features = [
  "54 Live Interactive Sessions",
  "24+ Industry Ready Agreements",
  "Lifetime Access to Recordings",
  "Personalized Assignment Feedback",
  "Certificate of Completion",
  "Freelancing Training",
  "Career Guidance",
  "Community Access",
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing section">

      <SectionTitle
        tag="LIMITED TIME OFFER"
        title="Choose Your Learning Journey"
        subtitle="One investment. Lifetime legal drafting skills."
      />

      <motion.div
        className="pricing-card"
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >

        <div className="badge">

          Save 58%

        </div>

        <h3>

          Expert Contract Drafting Course

        </h3>

        <div className="price">

          ₹24,999

        </div>

        <p className="old-price">

          <del>₹60,000</del>

        </p>

        <button>

          Enroll Now

          <FaArrowRight/>

        </button>

        <div className="divider"></div>

        <div className="pricing-features">

          {features.map((item,index)=>(

            <div key={index}>

              <FaCheckCircle/>

              <span>{item}</span>

            </div>

          ))}

        </div>

        <div className="bottom-icons">

          <div>

            <FaVideo/>

            <p>54 Live Classes</p>

          </div>

          <div>

            <FaFileSignature/>

            <p>24+ Drafts</p>

          </div>

          <div>

            <FaCertificate/>

            <p>Certificate</p>

          </div>

          <div>

            <FaUsers/>

            <p>Community</p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}