import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiHome, 
  FiGlobe, 
  FiShield 
} from "react-icons/fi";
import {
  FiUsers,
  FiTrendingUp,
  FiFileText,
  FiBriefcase,
} from "react-icons/fi";
import {
  HiUsers,
  HiBadgeCheck,
  HiClock,
  HiTrendingUp,
  HiShieldCheck,
  HiSupport,
} from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";
import { FiTarget, FiEye } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import InDemandCard from "../../components/common/InDemandCard";

/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const slides = [
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Strategic HR Solutions for Growing Businesses",
    desc: "Transform your workforce with our comprehensive HR consultancy services. From recruitment to payroll, we handle it all.",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    title: "Hire Faster. Manage Smarter. Grow Stronger.",
    desc: "End-to-end HR services designed to help companies scale without operational stress.",
  },
  {
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    title: "Your Trusted HR Partner",
    desc: "Compliance, payroll, recruitment, and HR strategy – all under one roof.",
  },
];

const services = [
  {
    id: "01",
    title: "Recruitment",
    desc: "Hire the right talent, faster with our expert recruitment solutions.",
    icon: FiUsers,
  },
  {
    id: "02",
    title: "Strategic HR Consulting",
    desc: "Expert solutions for better HR operations and business growth.",
    icon: FiTrendingUp,
  },
  {
    id: "03",
    title: "One Time HR Setup",
    desc: "Structured policies & processes for your business foundation.",
    icon: FiFileText,
  },
  {
    id: "04",
    title: "Monthly HR Management",
    desc: "Complete HR management with zero hassle and full compliance.",
    icon: FiBriefcase,
  },
];


const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "CEO, TechCorp India",
    text: "ConsultPro transformed our HR operations completely. Their expertise in compliance and recruitment has been invaluable for our growth.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "HR Director, GlobalServe",
    text: "The monthly HR management service has been a game-changer. We now have structured processes and zero compliance worries.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Founder, Startup Hub",
    text: "As a startup, we needed expert HR guidance without breaking the bank. The one-time HR setup delivered exactly that.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const inDemandServices = [
  { no: "01", title: "HR Policies & Documentation", desc: "Structured & compliant workplace policies." },
  { no: "02", title: "Workforce Planning", desc: "Align manpower with business goals." },
  { no: "03", title: "Employee Engagement", desc: "Boost motivation & retention." },
  { no: "04", title: "Performance Management", desc: "KPIs & feedback systems." },
  { no: "05", title: "Training & Development", desc: "Upskilling teams effectively." },
  { no: "06", title: "Payroll & Compliance", desc: "Accurate & statutory payroll." },
];

const advantages = [
  { title: "People First", desc: "We care about people before processes." },
  { title: "Excellence", desc: "Proven results across industries." },
  { title: "Fast Turnaround", desc: "Quick delivery with quality." },
  { title: "Compliance Driven", desc: "100% statutory compliance." },
];
const advantageStats = [
  { value: "91%", label: "Success Projects" },
  { value: "149+", label: "Happy Clients" },
  { value: "28+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
];
const advantageIcons = [
  HiUsers,
  HiBadgeCheck,
  HiClock,
  HiShieldCheck,
];


/* ---------------------------------- */
/* HOME */
/* ---------------------------------- */

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("mission");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
  <section
  className="relative h-screen flex items-center text-white"
  style={{
    backgroundImage: `url(${slides[slideIndex].img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* 🔥 DARK OVERLAY (THIS WAS MISSING) */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      
      {/* LEFT */}
      <div>
        <span className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm mb-4">
          ● Trusted by 500+ Companies
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {slides[slideIndex].title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-xl">
          {slides[slideIndex].desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={() => navigate("/book-demo")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold"
          >
            Book a Free Demo →
          </button>

          <button
            onClick={() => navigate("/services")}
            className="border border-white/60 hover:border-white px-6 py-3 rounded-md font-semibold"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* RIGHT STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4">
        {[
          ["500+", "Happy Clients"],
          ["1000+", "Employees Managed"],
          ["15+", "Years Experience"],
          ["98%", "Success Rate"],
        ].map(([num, label], i) => (
          <div
            key={i}
            className="bg-white/95 text-gray-900 p-5 rounded-xl text-center backdrop-blur"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
              {num}
            </h2>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


      {/* ================= ABOUT SECTION ================= */}
<section className="bg-gray-50 min-h-screen flex items-center py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">
        <div className="relative w-[280px] h-[380px] sm:w-[340px] sm:h-[460px] md:w-[400px] md:h-[520px] rounded-[32px] bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643"
            alt="About HR"
            className="w-[92%] h-[92%] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="text-center lg:text-left">
        <span className="text-blue-600 font-semibold tracking-wide text-sm block mb-4">
          ABOUT US
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold mb-6 leading-tight">
          Navigating The <br />
          <span className="text-blue-600">Human Resource</span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-5">
          Recruitment services, often provided by specialized agencies or firms,
          help organizations identify, attract, and hire the right talent.
        </p>

        <p className="text-gray-600 text-base sm:text-lg mb-8">
          These services are ideal for businesses that lack the time, resources,
          or expertise to manage recruitment efficiently.
        </p>

        <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition">
          About Us →
        </button>
      </div>

    </div>
  </div>
</section>

{/* ================= SERVICES SECTION ================= */}
<section className="py-16 md:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

    {/* Heading */}
    <span className="text-blue-600 font-semibold text-sm tracking-wide">
      OUR SERVICES
    </span>

    <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
      Comprehensive HR Solutions for <br />
      <span className="text-blue-600">Your Business</span>
    </h2>

    <p className="mt-4 mb-12 text-gray-600 max-w-2xl mx-auto">
      We provide end-to-end HR services tailored to meet your unique business
      needs.
    </p>

    {/* Services Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer flex flex-col"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <Icon className="text-blue-600 text-2xl" />
              </div>

              {/* ID */}
              <span className="text-gray-400 font-bold text-lg">
                {item.id}
              </span>
            </div>

            {/* Content */}
            <h5 className="mt-6 font-semibold text-lg">
              {item.title}
            </h5>

            <p className="mt-2 text-gray-600 text-sm flex-grow">
              {item.desc}
            </p>

            {/* Link */}
            <a
              href="/services"
              className="mt-5 inline-flex items-center gap-1 text-blue-600 font-semibold hover:underline"
            >
              Learn more →
            </a>
          </div>
        );
      })}
    </div>

    {/* CTA */}
    <div className="mt-14">
      <a
        href="/services"
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition"
      >
        View All Services →
      </a>
    </div>

  </div>
</section>

{/* ================= TESTIMONIALS SECTION ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
        Testimonials
      </span>

      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
        What Our <span className="text-blue-600">Clients Say</span>
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Don’t just take our word for it. Here’s what our valued clients have to say.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Stars */}
          <div className="flex gap-1 text-yellow-400 mb-5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.378-2.454a1 1 0 00-1.176 0l-3.378 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.967z" />
              </svg>
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-600 leading-relaxed mb-8">
            “{t.text}”
          </p>

          {/* Client */}
          <div className="flex items-center gap-4">
            <img
              src={t.img}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h6 className="font-semibold text-gray-900">
                {t.name}
              </h6>
              <p className="text-sm text-gray-500">
                {t.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

{/* ================= TRUST STATS SECTION ================= */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

      {/* STAT 1 */}
      <div className="flex flex-col items-center">
        <FiHome className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-3xl font-bold text-gray-900">28</h3>
        <p className="text-sm text-gray-500 mt-1">
          Years of Excellence
        </p>
      </div>

      {/* STAT 2 */}
      <div className="flex flex-col items-center">
        <HiOutlineOfficeBuilding className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-3xl font-bold text-gray-900">8</h3>
        <p className="text-sm text-gray-500 mt-1">
          Branch Network Cities
        </p>
      </div>

      {/* STAT 3 */}
      <div className="flex flex-col items-center">
        <FiGlobe className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-3xl font-bold text-gray-900">5000+</h3>
        <p className="text-sm text-gray-500 mt-1">
          Service Locations
        </p>
      </div>

      {/* STAT 4 */}
      <div className="flex flex-col items-center">
        <FiShield className="text-blue-600 text-4xl mb-4" />
        <h3 className="text-3xl font-bold text-gray-900">28</h3>
        <p className="text-sm text-gray-500 mt-1">
          States Compliance Expertise
        </p>
      </div>

    </div>

  </div>
</section>
{/* ================= WHO WE ARE SECTION ================= */}
<section className="py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT IMAGE */}
      <div className="relative flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="HR Team"
          className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg object-cover"
        />

        {/* EXPERIENCE BADGE */}
        <div className="absolute -bottom-8 left-6 bg-blue-600 text-white rounded-2xl shadow-lg w-28 h-28 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">5+</h2>
          <p className="text-xs text-center leading-tight">
            Years of <br /> Experience
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="mt-12 lg:mt-0">
        <span className="text-blue-600 font-semibold text-sm tracking-wide">
          WHO WE ARE
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
          A Trusted Partner for <br />
          <span className="text-blue-600">End-to-End HR Solutions</span>
        </h2>

        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          At ConsultPro, we deliver complete HR solutions that help businesses
          streamline workforce management with confidence. From recruitment to
          monthly HR operations, we’ve got you covered.
        </p>

        {/* CHECK LIST */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {[
            "Service excellence always",
            "Continuous improvement mindset",
            "Experts who never stop learning",
            "Built on trust & integrity",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <FiCheckCircle className="text-blue-600 text-lg mt-0.5" />
              <span className="text-gray-600 text-sm sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => (window.location.href = "/services")}
          className="mt-8 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition"
        >
          Explore Our Solutions →
        </button>
      </div>

    </div>
  </div>
</section>




     {/* ================= MISSION / VISION SECTION ================= */}
<section className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

    {/* Heading */}
    <span className="text-blue-600 font-semibold text-sm tracking-wide block mb-2">
      DISCOVER CONSULTPRO
    </span>

    <h2 className="text-3xl sm:text-4xl font-bold mb-8">
      One Stop Solution for All Your{" "}
      <span className="text-blue-600">HR Needs</span>
    </h2>

    {/* Toggle Buttons */}
    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      <button
        onClick={() => setActiveTab("mission")}
        className={`px-6 py-2 rounded-full font-semibold transition ${
          activeTab === "mission"
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        Our Mission
      </button>

      <button
        onClick={() => setActiveTab("vision")}
        className={`px-6 py-2 rounded-full font-semibold transition ${
          activeTab === "vision"
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        Our Vision
      </button>
    </div>

    {/* Content Card */}
    <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 sm:p-8 text-left shadow-sm">
      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="w-24 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          {activeTab === "mission" ? (
            <FiTarget className="text-2xl" />
          ) : (
            <FiEye className="text-2xl" />
          )}
        </div>

        {/* Text */}
        <div>
          <h4 className="text-lg font-bold mb-2">
            {activeTab === "mission" ? "Our Mission" : "Our Vision"}
          </h4>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {activeTab === "mission"
              ? "To deliver accurate, timely, and legally compliant HR solutions that reduce operational burden for our clients. We strive to add value by ensuring efficiency, compliance, and reliability in every engagement."
              : "To empower organisations with accurate payroll and complete statutory compliance, enabling stress-free operations. We aspire to build compliant, efficient, and growth-oriented workplaces through reliable HR solutions."}
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

{/* ================= IN-DEMAND SERVICES ================= */}
<section className="py-16 md:py-20 bg-white overflow-hidden">

  {/* Heading */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
    <span className="text-blue-600 font-semibold text-sm tracking-wide block mb-2">
      IN-DEMAND SERVICES
    </span>

    <h2 className="text-3xl sm:text-4xl font-bold">
      Our Most{" "}
      <span className="text-blue-600">In-Demand Services</span>
    </h2>
  </div>

  {/* Slider Wrapper */}
  <div className="relative w-full overflow-hidden">
    <div className="flex gap-6 w-max animate-infinite-scroll">

      {[...inDemandServices, ...inDemandServices].map((item, index) => (
        <div
          key={index}
          className="min-w-[260px] sm:min-w-[300px] md:min-w-[320px]"
        >
          <InDemandCard {...item} />
        </div>
      ))}

    </div>
  </div>

</section>



      {/* ================= WHY CHOOSE US ================= */}
  {/* ================= WHY CHOOSE US ================= */}
<section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-12 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="lg:col-span-5">
        <span className="inline-block bg-white text-blue-600 font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
          OUR ADVANTAGE
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
          Why Choose <span className="text-yellow-400">ConsultPro?</span>
        </h2>

        <p className="text-white/80 max-w-md mb-10">
          We deliver tailored HR solutions that streamline operations, reduce
          costs, and improve workforce efficiency.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4">
          {advantageStats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-5 text-center"
            >
              <h3 className="text-3xl font-bold text-yellow-400">
                {stat.value}
              </h3>
              <p className="text-sm text-white/80 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-7">
        <div className="grid sm:grid-cols-2 gap-6">
          {advantages.map((item, i) => {
            const Icon = advantageIcons[i];

            return (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <Icon className="text-yellow-400 text-2xl mb-3" />

                <h6 className="font-semibold text-lg mb-1">
                  {item.title}
                </h6>

                <p className="text-sm text-white/80">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  </div>
</section>


    </>
  );
};

export default Home;
