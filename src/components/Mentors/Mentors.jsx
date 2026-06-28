import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionTitle from "../Common/SectionTitle";
import "./Mentors.css";

import mentor1 from "../../assets/mentor1.png";
import mentor10 from "../../assets/mentor10.png";
import mentor11 from "../../assets/mentor11.png";
import mentor12 from "../../assets/mentor12.png";
import mentor2 from "../../assets/mentor2.png";
import mentor3 from "../../assets/mentor3.png";
import mentor4 from "../../assets/mentor4.png";
import mentor5 from "../../assets/mentor5.png";
import mentor6 from "../../assets/mentor6.png";
import mentor7 from "../../assets/mentor7.png";
import mentor8 from "../../assets/mentor8.png";
import mentor9 from "../../assets/mentor9.png";

const mentors = [
  {
    image: mentor1,
    name: "Shashank Sardesai",
    role: "Independent Litigator & Company Secretary",
    company: "Co-Founder, EverTrust Legal",
    bio: "Formerly with Wadia Ghandy & Co., HSA Advocates and Khaitan Legal Associates. Expert in commercial contracts, NDAs, lease deeds and corporate agreements."
  },
  {
    image: mentor2,
    name: "Akanksha Mishra",
    role: "Head, Lawctopus Law School",
    company: "Bombay High Court Litigator",
    bio: "Independent litigator who has trained 1,500+ learners. Advises startups and companies on commercial contracts and legal documentation."
  },
  {
    image: mentor3,
    name: "Pranjal Doshi",
    role: "Associate, Walker Morris LLP",
    company: "Corporate & M&A Specialist",
    bio: "Cambridge postgraduate with experience at Trilegal and Khaitan & Co. Specializes in mergers, acquisitions and investment agreements."
  },
  {
    image: mentor4,
    name: "Arunima Jha",
    role: "Head Legal Counsel",
    company: "Omnicom Media Group",
    bio: "Legal expert with 10+ years of experience in media, corporate and privacy law. Former Legal Counsel at BookMyShow and K Raheja Corp."
  },
  {
    image: mentor5,
    name: "Adv. Jaibatruka Mohanta",
    role: "Research Associate",
    company: "CEERA, NLSIU",
    bio: "Practicing advocate advising the Government of India on criminal law reforms while teaching advanced contracts and procurement law."
  },
  {
    image: mentor6,
    name: "H. B. Keshava",
    role: "Managing Attorney",
    company: "Baskaran & Associates",
    bio: "IPR practitioner with expertise in intellectual property advisory, cognitive psychology and legal education."
  },
  {
    image: mentor7,
    name: "Gourav Mohanty",
    role: "Independent Advocate",
    company: "Bombay High Court",
    bio: "Former Senior Associate at Shardul Amarchand Mangaldas. Gold medalist specializing in dispute resolution and contract drafting."
  },
  {
    image: mentor8,
    name: "Anup Menon V",
    role: "Senior Legal Counsel",
    company: "C. Mohanram & Associates",
    bio: "Corporate law specialist advising clients across India and the USA on commercial contracts, compliance and startup legal strategy."
  },
  {
    image: mentor9,
    name: "Tanuj Kalia",
    role: "Founder & CEO",
    company: "Lawctopus",
    bio: "Author, TEDx speaker and Business World Legal 40 Under 40 awardee with extensive experience negotiating commercial deals."
  },
  {
    image: mentor10,
    name: "Bhumesh Verma",
    role: "Managing Partner",
    company: "Corp Comm Legal",
    bio: "Corporate lawyer with 25+ years of experience. Former Partner at Khaitan & Co."
  },
  {
    image: mentor11,
    name: "Shayonee Dasgupta",
    role: "Lead Researcher",
    company: "Lawctopus Law School",
    bio: "Former lawyer at Trilegal and Shardul Amarchand Mangaldas. Passionate about legal education."
  },
  {
    image: mentor12,
    name: "Debanshu Khettry",
    role: "Content Developer",
    company: "Lawctopus Law School",
    bio: "Founder of SILC and corporate lawyer with expertise in legal drafting and startups."
  }
];

export default function Mentors() {
  return (
    <section id="mentors" className="mentors section">

      <div className="container">

        <SectionTitle
          tag="LEARN FROM EXPERTS"
          title="Meet Your Mentors"
          subtitle="Learn directly from experienced legal professionals with years of industry experience."
        />

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={4}
          className="mentorSwiper"
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
            1400: {
              slidesPerView: 4
            }
          }}
        >
          {mentors.map((mentor, index) => (
            <SwiperSlide key={index}>

              <motion.div
                className="mentor-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5 }}
                whileHover={{ y: -10 }}
              >

                <img src={mentor.image} alt={mentor.name} />

                <h3>{mentor.name}</h3>

                <h4>{mentor.role}</h4>

                <span>{mentor.company}</span>

                <p>{mentor.bio}</p>

                <div className="mentor-social">
                  <a href="#">
                    <FaLinkedin />
                  </a>

                  <a href="#">
                    <FaTwitter />
                  </a>
                </div>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}