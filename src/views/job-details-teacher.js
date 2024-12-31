import React, { useState } from "react";
import "./JobFinderPage.css";

const JobFinderPage = () => {
  const jobs = [
    { school: "Bright Future Academy", subject: "Math", type: "Full-time", posted: "2 days ago", image: "" },
    { school: "Green Valley High", subject: "Physics", type: "Part-time", posted: "1 week ago", image: "https://via.placeholder.com/60" },
    { school: "Skyline School", subject: "Chemistry", type: "Full-time", posted: "3 weeks ago", image: "" },
  ];

  const recentSearches = ["Math Teacher", "Physics Teacher", "Chemistry Teacher"];
  const savedJobs = ["Green Valley High - Physics Teacher", "Bright Future Academy - Math Teacher"];
  const articles = [
    { title: "Top 5 Teaching Strategies for Math", image: "https://via.placeholder.com/80", posted: "1 day ago", description: "Discover effective teaching strategies for math teachers..." },
    { title: "How to Improve Student Engagement in Science", image: "https://via.placeholder.com/80", posted: "3 days ago", description: "Explore new ways to make science fun and engaging for students..." },
    { title: "Balancing Work and Life as a Teacher", image: "https://via.placeholder.com/80", posted: "1 week ago", description: "Learn how to maintain a healthy work-life balance as a teacher..." },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const allSuggestions = ["Math Teacher", "Physics Teacher", "Chemistry Teacher", "English Teacher", "Art Teacher"];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      const filteredSuggestions = allSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setSuggestions([]);
  };

  const handlePostJob = () => {
    // Handle posting a job
    alert("Post Job button clicked!");
  };

  return (
    <div className="job-finder-page">
      <div className="content-container">
        
      <div className="landing-page-depth2-frame0">
              <a href='/'>
                <img
                  alt="TeachersCabalLogog19019"
                  style={{ width: '100px', height: 'auto' }}
                  src="external/teacherscaballogog13414-vdvl-200h.png"
                  className="landing-page-teachers-cabal-logog1"
                />
              </a>
              <div className="landing-page-depth3-frame1">
                <div className="landing-page-depth4-frame01">
                  <a href='/teacherlogin' className="landing-page-depth5-frame01">
                    <span className="landing-page-text10">Find a Job</span>
                  </a>
                  <a href='/schoollogin' className="landing-page-depth5-frame11">
                    <span className="landing-page-text11">Post a Job</span>
                  </a>
                  <a href='/resuorcespage' className="landing-page-depth5-frame2">
                    <span className="landing-page-text12">Resources</span>
                  </a>
                  <a href='/about' className="landing-page-depth5-frame3">
                    <span className="landing-page-text13">About</span>
                  </a>
                </div>
                <div className="landing-page-depth4-frame11">
                  <div className="landing-page-depth5-frame02">
                    <a href='#' className="landing-page-depth6-frame01">
                      <span className="landing-page-text14">Log in</span>
                    </a>
                  </div>
                  <div className="landing-page-depth5-frame12">
                    <a href='#' className="landing-page-depth6-frame02">
                      <span className="landing-page-text15">Sign up</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Recent Searches</h3>
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index}>{search}</li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>Saved Jobs</h3>
            <ul>
              {savedJobs.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
          </div>

          {/* Articles for You */}
          <div className="sidebar-section">
            <h3>Articles for You</h3>
            <div className="articles">
              {articles.map((article, index) => (
                <div className="article" key={index}>
                  <img src={article.image} alt={article.title} className="article-image" />
                  <div className="article-info">
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                    <small>{article.posted}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Search Section */}
          <div className="search-section">
            <div className="search-input-container">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search for teaching jobs..."
              />
              {suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button>Search</button>
          </div>

          {/* Filter Section */}
          <div className="filter-buttons">
            <button>All</button>
            <button>Full-time</button>
            <button>Part-time</button>
            <button>Remote</button>
          </div>

          {/* Job Listings */}
          <div className="job-list">
            {isLoading ? (
              <div className="job-card skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
              </div>
            ) : (
              jobs.map((job, index) => (
                <div className="job-card" key={index}>
                  <div className="job-image">
                    {job.image ? (
                      <img src={job.image} alt={job.school} />
                    ) : (
                      <span className="school-avatar">{job.school[0]}</span>
                    )}
                  </div>
                  <div className="job-details">
                    <h3>{job.school}</h3>
                    <p>{job.subject} Teacher</p>
                    <div className="job-meta">
                      <span className={`job-type ${job.type.toLowerCase()}`}>{job.type}</span>
                      <span className="job-posted">{job.posted}</span>
                    </div>
                    <button title="Apply to this job">Apply</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fab" onClick={handlePostJob}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default JobFinderPage;
