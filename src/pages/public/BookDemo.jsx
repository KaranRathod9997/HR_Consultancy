import React from "react";

const BookDemo = () => {
  return (
    <>
      <div className="bg-gray-100">

        {/* ================= HERO ================= */}
        <section className="pt-32 pb-16 text-center">
          <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Book a Demo
          </span>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            See HRPro in Action
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Schedule a personalized demo and discover how we can transform your
            HR operations.
          </p>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* LEFT CONTENT */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  What to Expect
                </h4>

                <ul className="space-y-3 text-gray-800">
                  <li>🔵 Personalized walkthrough of our services</li>
                  <li>🔵 Assessment of your current HR needs</li>
                  <li>🔵 Custom solution recommendations</li>
                  <li>🔵 Pricing and implementation timeline</li>
                  <li>🔵 Q&amp;A with our HR experts</li>
                </ul>

                {/* INFO BOX */}
                <div className="bg-white rounded-2xl p-6 mt-8 shadow-sm space-y-4">
                  <div className="flex items-start gap-3">
                    <span>📹</span>
                    <div>
                      <h6 className="font-semibold text-gray-900">
                        Virtual Meeting
                      </h6>
                      <p className="text-sm text-gray-500">
                        Via Zoom or Google Meet
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span>⏱️</span>
                    <div>
                      <h6 className="font-semibold text-gray-900">
                        30–45 Minutes
                      </h6>
                      <p className="text-sm text-gray-500">
                        Tailored to your needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span>📅</span>
                    <div>
                      <h6 className="font-semibold text-gray-900">
                        Flexible Scheduling
                      </h6>
                      <p className="text-sm text-gray-500">
                        Pick a time that works for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h5 className="text-xl font-bold text-gray-900 mb-6">
                    Request Your Demo
                  </h5>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="+1 (555) 000-0000"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        Number of Employees
                      </label>
                      <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option>Select...</option>
                        <option>1–10</option>
                        <option>11–50</option>
                        <option>51–200</option>
                        <option>201–500</option>
                        <option>500+</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        What are you looking for?
                      </label>
                      <textarea
                        rows="4"
                        placeholder="Tell us about your HR needs..."
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      ></textarea>
                    </div>

                    <div className="md:col-span-2">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-md">
                        Request Demo →
                      </button>
                    </div>

                    <div className="md:col-span-2 text-center">
                      <p className="text-xs text-gray-500">
                        By submitting, you agree to our Privacy Policy and Terms
                        of Service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookDemo;
