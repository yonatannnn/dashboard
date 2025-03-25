import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Overview from "./pages/Overview"
import UserManagement from "./pages/UserManagement"
import Contents from "./pages/Contents"
import Notifications from "./pages/Notifications"
import Reports from "./pages/Reports"
import Settings from "./pages/Settings"
import "./App.css"
import React from "react"

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/contents" element={<Contents />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

