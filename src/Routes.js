import React from "react";
import Frame24234244 from "pages/Frame24234244";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/frame24234244" element={<Frame24234244 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
