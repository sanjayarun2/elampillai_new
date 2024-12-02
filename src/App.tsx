import React from 'react';  // Ensure React is imported
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext'; // Import SettingsProvider
import { ErrorBoundary } from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Shops from './pages/Shops';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Marketplace from './pages/Marketplace';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet'; // Import Helmet

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Analytics />
            <Helmet>
              {/* Add Google AdSense Meta Tag */}
              <meta name="google-adsense-account" content="ca-pub-9375434489866075" />
              <title>Elampillai Sarees, Wholesale shop, best saree shop, softsilk saree, salem</title>
            </Helmet>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/shops" element={<Shops />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ErrorBoundary>
    </SettingsProvider>
  );
}

export default App;
