import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import "./Testimonials.css";

import student1 from "../../assets/student1.jpg";
import student2 from "../../assets/student2.png";
import student3 from "../../assets/student3.png";

const testimonials = [
  {
    image: student1,
    name: "Ananya Sharma",
    role: "Law Student",
    review:
      "The drafting exercises completely changed my understanding of contracts. I now feel confident working on real legal documents.",
  },
  {
    image: student2,
    name: "Rahul Verma",
    role: "Corporate Associate",
    review:
      "The freelancing module helped me land my first international drafting project. Every session was practical and engaging.",
  },
  {
    image: student3,
    name: "Sneha Kapoor",
    role: "Legal Consultant",
    review:
      "The mentors explained every clause with real examples. The feedback on assignments was incredibly valuable.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">

      <SectionTitle
        tag="SUCCESS STORIES"
        title="What Our Learners Say"
        subtitle="Thousands of learners have improved their legal careers through practical contract drafting training."
      />

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (

          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >

            <FaQuoteLeft className="quote" />

            <p className="review">
              {item.review}
            </p>

            <div className="stars">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

            <div className="student">

              <img src={item.image} alt={item.name} />

              <div>

                <h3>{item.name}</h3>

                <span>{item.role}</span>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}