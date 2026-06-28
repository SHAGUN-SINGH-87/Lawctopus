import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import "./FAQ.css";

const faqs = [
  {
    question: "Is this course live or recorded?",
    answer:
      "The program includes live interactive sessions. Every session is recorded, so you can revisit the content anytime.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. You'll receive a certificate after successfully completing the course.",
  },
  {
    question: "Can beginners join this course?",
    answer:
      "Absolutely. The course starts from fundamentals and gradually moves to advanced drafting techniques.",
  },
  {
    question: "Will I learn freelancing?",
    answer:
      "Yes. You'll learn how to create a portfolio, build your Upwork profile, use LinkedIn effectively and find legal drafting clients.",
  },
  {
    question: "How long do I get access?",
    answer:
      "You'll receive lifetime access to the recordings and learning resources.",
  },
];

export default function FAQ() {

  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (

    <section id="faq" className="faq section">

      <SectionTitle
        tag="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before enrolling in the course."
      />

      <div className="faq-wrapper">

        {faqs.map((faq, index) => (

          <motion.div
            className="faq-card"
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .1 }}
            viewport={{ once: true }}
          >

            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >

              <span>{faq.question}</span>

              {active === index ? <FaMinus /> : <FaPlus />}

            </button>

            <AnimatePresence>

              {active === index && (

                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1
                  }}
                  exit={{
                    height: 0,
                    opacity: 0
                  }}
                  transition={{
                    duration: .3
                  }}
                >

                  <p>{faq.answer}</p>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </section>

  );

}