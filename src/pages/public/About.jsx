import React from "react";

const About = () => {
  return (
    <>
      {/* ================= ABOUT HEADER ================= */}
      <section className="pt-36 pb-20 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-blue-600 font-semibold block mb-2">
            ABOUT US
          </span>

          <h1 className="font-bold text-4xl md:text-5xl">
            Your Trusted Partner in{" "}
            <span className="text-blue-600">HR Excellence</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            With over 5 years of experience and 149+ satisfied clients, we've
            established ourselves as a leading HR consultancy committed to
            transforming businesses.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Team Work"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <span className="text-blue-600 font-semibold block mb-2">
                OUR STORY
              </span>

              <h2 className="font-bold text-3xl mb-4">
                Building Success Through People
              </h2>

              <p className="text-gray-500 mb-4">
                Founded with a vision to simplify HR for businesses of all
                sizes, ConsultPro has grown from a small consultancy to a
                trusted partner for companies across India.
              </p>

              <p className="text-gray-500 mb-6">
                Our journey began with a simple belief: great businesses are
                built on great people.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "5+ Years Experience",
                  "149+ Happy Clients",
                  "98% Success Rate",
                  "6+ Expert Team",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-blue-600">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-semibold block mb-2">
            OUR VALUES
          </span>

          <h2 className="font-bold text-3xl mb-12">
            Principles That Guide Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                desc: "We strive for excellence in everything we do.",
                icon: "🎯",
              },
              {
                title: "Integrity",
                desc: "We operate with honesty and transparency.",
                icon: "❤️",
              },
              {
                title: "Collaboration",
                desc: "We work closely with our clients.",
                icon: "🤝",
              },
              {
                title: "Innovation",
                desc: "We embrace new ideas and technology.",
                icon: "🏆",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h5 className="font-semibold mb-2">{value.title}</h5>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-semibold block mb-2">
            OUR TEAM
          </span>

          <h2 className="font-bold text-3xl mb-4">Meet the Experts</h2>

          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Our team of seasoned HR professionals brings decades of experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Rahul Sharma",
                role: "Founder & CEO",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
              },
              {
                name: "Anita Desai",
                role: "Head of Operations",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
              },
              {
                name: "Vikram Patel",
                role: "Senior HR Consultant",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
              },
              {
                name: "Sneha Gupta",
                role: "Recruitment Lead",
                img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
              },
            ].map((member, index) => (
              <div key={index}>
                <div className="relative overflow-hidden rounded-2xl shadow-md group">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/70 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                <h5 className="font-semibold mt-4">{member.name}</h5>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
