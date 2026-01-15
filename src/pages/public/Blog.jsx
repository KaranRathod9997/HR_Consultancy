import React, { useState } from "react";

const Blog = () => {
  const [activeType, setActiveType] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Recruitment",
    "HR Compliance",
    "Payroll & Statutory",
    "Employee Engagement",
    "HR Technology",
    "Company Culture",
    "Labour Law Updates",
    "Government Notifications",
    "Industry HR News",
    "Company Announcements",
    "Events & Webinars",
  ];

  const posts = [
    {
      id: 1,
      type: "Blog",
      category: "Recruitment",
      title: "Top Hiring Trends in 2025",
      desc: "Latest recruitment strategies shaping talent acquisition.",
      author: "Priya Sharma",
      read: "8 min read",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      id: 2,
      type: "Blog",
      category: "HR Compliance",
      title: "How HR Compliance Protects Your Business",
      desc: "Why HR compliance is critical for risk management.",
      author: "Rajesh Kumar",
      read: "10 min read",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
    {
      id: 3,
      type: "Blog",
      category: "Payroll & Statutory",
      title: "Payroll Mistakes Companies Must Avoid",
      desc: "Avoid costly payroll errors and stay compliant.",
      author: "Anil Mehta",
      read: "7 min read",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    },
    {
      id: 4,
      type: "News",
      category: "Labour Law Updates",
      title: "New Labour Code 2025: Key Changes",
      desc: "Important labour law updates effective January 2025.",
      author: "HR News Desk",
      read: "5 min read",
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
    },
    {
      id: 5,
      type: "News",
      category: "Government Notifications",
      title: "PF Contribution Holiday Extended",
      desc: "Government extends PF contribution holiday for new hires.",
      author: "HR News Desk",
      read: "4 min read",
      img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    },
    {
      id: 6,
      type: "News",
      category: "Industry HR News",
      title: "HR Tech Investment Grows 15%",
      desc: "Indian companies increase HR technology spending.",
      author: "HR News Desk",
      read: "4 min read",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const typeMatch = activeType === "All" || post.type === activeType;
    const categoryMatch =
      activeCategory === "All" || post.category === activeCategory;
    return typeMatch && categoryMatch;
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            HR Insights, Blogs &{" "}
            <span className="text-blue-600">Industry News</span>
          </h1>

          <p className="text-gray-500 mt-4">
            Expert articles, HR trends, compliance updates, and announcements.
          </p>

          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <input
              className="w-full sm:w-[420px] px-5 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search by title, tag, keyword..."
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-medium">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">

          {/* TYPE FILTER */}
          <div className="flex gap-2 mb-4">
            {["All", "Blog", "News"].map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                  activeType === type
                    ? "bg-blue-600 text-white"
                    : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ================= POSTS ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      post.type === "Blog"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.type}
                  </span>

                  <h6 className="font-semibold mt-3">
                    {post.title}
                  </h6>

                  <p className="text-gray-500 text-sm mt-1">
                    {post.desc}
                  </p>

                  <div className="flex justify-between text-gray-400 text-xs mt-3">
                    <span>{post.author}</span>
                    <span>{post.read}</span>
                  </div>

                  <button className="mt-3 text-blue-600 font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-600 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h4 className="text-2xl font-bold">
            Want Expert HR Guidance for Your Business?
          </h4>

          <p className="text-blue-100 mt-3">
            Our HR experts are ready to help you navigate workforce challenges.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium">
              Contact Us
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 transition text-gray-900 px-6 py-3 rounded-md font-semibold">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
