import React from "react";

const Careers = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Build Your Career{" "}
            <span className="text-blue-600">With Us</span>
          </h1>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4 text-lg">
            Join a growing HR consultancy where people, process, and performance
            matter.
          </p>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md font-medium">
              View Open Positions
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 transition px-6 py-3 rounded-md font-medium">
              Submit Resume
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Why Work With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Growth-Oriented Culture",
                desc: "Clear growth paths with mentorship and career progression.",
                icon: "📈",
              },
              {
                title: "Learning & Development",
                desc: "Certifications, training programs, and continuous learning.",
                icon: "📚",
              },
              {
                title: "Client Exposure",
                desc: "Work with clients across multiple industries.",
                icon: "🌍",
              },
              {
                title: "Flexible Work Environment",
                desc: "Remote options and work-life balance.",
                icon: "⏰",
              },
              {
                title: "Performance-Based Growth",
                desc: "Rewards, recognition, and competitive incentives.",
                icon: "🏆",
              },
              {
                title: "Ethical HR Practices",
                desc: "Transparent, fair, employee-first policies.",
                icon: "❤️",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border bg-gray-50 hover:shadow-md transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <h6 className="font-semibold mt-4">{item.title}</h6>
                <p className="text-gray-500 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase text-sm">
              Opportunities
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Open Positions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                role: "HR Executive",
                info: "Human Resources • Mumbai (Hybrid) • 2–4 Years",
                type: "Full-time",
              },
              {
                role: "Talent Acquisition Specialist",
                info: "Recruitment • Remote • 3–5 Years",
                type: "Full-time",
              },
              {
                role: "HR Business Partner",
                info: "HR Operations • Delhi (On-site) • 5–8 Years",
                type: "Full-time",
              },
              {
                role: "Payroll Executive",
                info: "Payroll & Compliance • Bangalore (Hybrid) • 2–3 Years",
                type: "Full-time",
              },
              {
                role: "HR Intern",
                info: "Human Resources • Mumbai (On-site) • Fresher",
                type: "Internship",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white border rounded-2xl"
              >
                <div>
                  <h6 className="font-semibold">{job.role}</h6>
                  <p className="text-gray-500 text-sm">
                    {job.info}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      job.type === "Internship"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {job.type}
                  </span>

                  <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md text-sm font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="text-5xl mb-4">📄</div>
          <h3 className="text-2xl font-bold">
            Didn&apos;t Find the Right Role?
          </h3>
          <p className="text-blue-100 mt-3">
            Send us your resume and we’ll reach out when a matching opportunity
            arises.
          </p>

          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 transition text-gray-900 px-6 py-3 rounded-md font-semibold">
            Submit Your Resume
          </button>
        </div>
      </section>
    </>
  );
};

export default Careers;
