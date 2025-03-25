"use client"

import { useState } from "react"

const Contents = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [contents, setContents] = useState([
    { id: 1, title: "Introduction to Math", category: "Books", status: "Published", date: "2023-05-15" },
    { id: 2, title: "Classical Music Collection", category: "Music", status: "Published", date: "2023-06-20" },
    { id: 3, title: "Science Experiments", category: "Videos", status: "Draft", date: "2023-07-10" },
    { id: 4, title: "History Timeline", category: "Others", status: "Published", date: "2023-08-05" },
  ])

  const handleDeleteContent = (id) => {
    setContents(contents.filter((content) => content.id !== id))
  }

  return (
    <div className="page-container">
      <h1 className="page-header">Content Management</h1>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-title">Total Contents</div>
          <div className="stat-value">671</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Books</div>
          <div className="stat-value">150</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Music</div>
          <div className="stat-value">220</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Videos</div>
          <div className="stat-value">250</div>
        </div>
      </div>

      <div className="tab-container">
        <div className="tabs">
          <div className={`tab ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
            All
          </div>
          <div className={`tab ${activeTab === "books" ? "active" : ""}`} onClick={() => setActiveTab("books")}>
            Books
          </div>
          <div className={`tab ${activeTab === "music" ? "active" : ""}`} onClick={() => setActiveTab("music")}>
            Music
          </div>
          <div className={`tab ${activeTab === "videos" ? "active" : ""}`} onClick={() => setActiveTab("videos")}>
            Videos
          </div>
          <div className={`tab ${activeTab === "others" ? "active" : ""}`} onClick={() => setActiveTab("others")}>
            Others
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <button className="button button-primary">Add New Content</button>
          <input type="text" className="search-input" placeholder="Search" style={{ width: "250px" }} />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents
              .filter((content) => {
                if (activeTab === "all") return true
                return content.category.toLowerCase() === activeTab
              })
              .map((content) => (
                <tr key={content.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{content.title}</td>
                  <td>{content.category}</td>
                  <td>
                    <span className={`status-badge ${content.status.toLowerCase()}`}>{content.status}</span>
                  </td>
                  <td>{content.date}</td>
                  <td>
                    <button className="action-button" style={{
                          backgroundColor: "#28a745",
                          color: "#fff",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "3px",
                          cursor: "pointer",
                          marginRight: "5px",
                        }}>Edit</button>
                    <button className="action-button" onClick={() => handleDeleteContent(content.id)} style={{
                          backgroundColor: "#dc3545",
                          color: "#fff",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "3px",
                          cursor: "pointer",
                        }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Contents

