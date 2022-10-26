import React from "react";

const Blog = () => {
  return (
    <div className="h-screen">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Coming soon!!!!</h1>
            <p className="mb-5">
              <div className="stats shadow ">
                <div className="stat">
                  <div className="stat-title">Total Page Views</div>
                  <div className="stat-value">89,400</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>
              </div>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
