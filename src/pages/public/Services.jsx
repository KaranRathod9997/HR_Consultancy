import React from "react";

const services = [
  {
    title: "Recruitment Solutions",
    desc: "Find the perfect talent for your organization with our comprehensive recruitment services.",
    points: [
      "Executive Search",
      "Bulk Hiring",
      "Campus Recruitment",
      "Contract Staffing",
      "Background Verification",
    ],
  },
  {
    title: "Strategic HR Consulting",
    desc: "Expert guidance to align your HR strategy with business objectives.",
    points: [
      "HR Strategy Development",
      "Organizational Design",
      "Change Management",
      "HR Audit",
      "Process Optimization",
    ],
  },
  {
    title: "One Time HR Setup",
    desc: "Establish a strong HR foundation with comprehensive policies and documentation.",
    points: [
      "HR Policy Creation",
      "Employee Handbook",
      "Job Descriptions",
      "Offer Letters & Contracts",
      "Compliance Setup",
    ],
  },
  {
    title: "Monthly HR Management",
    desc: "Complete HR outsourcing solution for hassle-free workforce management.",
    points: [
      "Employee Onboarding",
      "Attendance Management",
      "Leave Administration",
      "Exit Management",
      "HR Reporting",
    ],
    highlight: true,
  },
  {
    title: "Training & Development",
    desc: "Upskill your workforce with customized training programs.",
    points: [
      "Leadership Training",
      "Soft Skills Development",
      "Technical Training",
      "Team Building",
      "Compliance Training",
    ],
  },
  {
    title: "Payroll & Compliance",
    desc: "Accurate payroll processing with 100% statutory compliance.",
    points: [
      "Salary Processing",
      "Tax Computation",
      "PF / ESI Management",
      "Statutory Returns",
      "Compliance Audit",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-blue-600 font-semibold text-sm block mb-2">
            OUR SERVICES
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Smart HR Solutions for{" "}
            <span className="text-blue-600">Growing Businesses</span>
          </h1>

          <p className="text-gray-500 max-w-3xl mx-auto">
            We provide scalable, compliant, and people-first HR services that
            help businesses grow faster with confidence.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(37,99,235,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                {/* ICON */}
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                    service.highlight
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <span className="text-xl font-bold">HR</span>
                </div>

                <h4 className="font-semibold text-lg mb-2">
                  {service.title}
                </h4>

                <p className="text-gray-500 mb-4">
                  {service.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition rounded-full py-2 font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why Businesses Choose{" "}
                <span className="text-yellow-400">ConsultPro</span>
              </h2>

              <p className="opacity-80 mb-6">
                We combine HR expertise, compliance knowledge, and business
                understanding to deliver real impact — not just paperwork.
              </p>

              <ul className="space-y-3">
                {[
                  "Experienced HR professionals",
                  "100% compliance-driven approach",
                  "Scalable solutions for startups & enterprises",
                  "Transparent pricing & fast turnaround",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-yellow-400">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="HR Services"
                className="rounded-2xl shadow-lg max-h-[420px] mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-semibold text-sm block mb-2">
            HOW WE WORK
          </span>

          <h2 className="text-3xl font-bold mb-14">
            Our Simple Process
          </h2>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* LINE */}
            <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-4/5 h-1 bg-blue-200"></div>

            {[
              ["01", "Consultation", "We understand your HR challenges"],
              ["02", "Planning", "Custom solutions designed for you"],
              ["03", "Implementation", "Seamless execution by experts"],
              ["04", "Support", "Ongoing assistance & optimization"],
            ].map(([no, title, desc], i) => (
              <div key={i} className="relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">
                    {no}
                  </div>
                  <h6 className="font-semibold">{title}</h6>
                  <p className="text-gray-500 text-sm mt-1">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-blue-600 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>

          <p className="opacity-80 mb-6">
            Let’s discuss your specific requirements and create a tailored HR
            solution for your business.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-8 py-4 rounded-full">
            Get Free Consultation →
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
