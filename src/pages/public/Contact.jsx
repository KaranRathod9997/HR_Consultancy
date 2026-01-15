import React from "react";

const Contact = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="uppercase font-semibold tracking-widest text-sm text-blue-600">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Let&apos;s Start a{" "}
            <span className="text-blue-600">Conversation</span>
          </h1>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4 text-lg">
            Have questions? We&apos;re here to help. Reach out to us and let&apos;s
            discuss how we can transform your HR operations.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* LEFT INFO */}
            <div>
              <h5 className="text-xl font-bold mb-6">Get in Touch</h5>

              <div className="flex gap-3 mb-4">
                <span className="text-blue-600 text-xl">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-500 text-sm">+91 97263 40011</p>
                  <p className="text-gray-500 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <span className="text-blue-600 text-xl">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-500 text-sm">info@consultpro.com</p>
                  <p className="text-gray-500 text-sm">hr@consultpro.com</p>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <span className="text-blue-600 text-xl">📍</span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-500 text-sm">
                    123 Business Park, Corporate Avenue,<br />
                    Mumbai - 400001, India
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <span className="text-blue-600 text-xl">⏰</span>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-gray-500 text-sm">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-green-100">
                <h6 className="font-bold text-green-700">
                  Quick Response via WhatsApp
                </h6>
                <p className="text-gray-600 text-sm mt-1">
                  Get instant responses on WhatsApp
                </p>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-md font-medium">
                  💬 Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
                <h5 className="text-xl font-bold mb-6">
                  Send Us a Message
                </h5>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="+91 98765 43210"
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about your HR requirements..."
                      required
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md font-medium">
                      Send Message →
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="w-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Mumbai&output=embed"
          className="w-full h-[350px] border-0"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
