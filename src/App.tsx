import {  Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Join from './pages/Join';
import NotFound from './pages/NotFound';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
  )
}

export default App