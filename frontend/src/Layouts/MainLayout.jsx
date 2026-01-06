import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Backspace key
      if (event.key === 'Backspace') {
        const activeElement = document.activeElement;
        const isInput =
          activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.isContentEditable;

        if (!isInput) {
          // Optional: prevent default if needed, though browser default is often 'back' anyway, 
          // but mapped explicitly here for SPA routing.
          // event.preventDefault(); 
          navigate(-1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      {/* Sidebar Component - Handles its own mobile state internally or via props if lifted */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">

        {/* Mobile Header with Hamburger */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 flex-shrink-0 z-20">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <span className="text-2xl">☰</span>
          </button>
          <span className="font-bold text-primary-600 text-lg">Mianàra.</span>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
