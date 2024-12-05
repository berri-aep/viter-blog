import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/frontend/homepage/Homepage";
import Single from "./components/pages/frontend/single page/Single";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import { StoreProvider } from "./components/store/storeContext";
import Content from "./components/pages/backend/content/Content";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/single" element={<Single />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/content" element={<Content />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
