import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LicenseClasses from './components/LicenseClasses';
import LicenseListing from './components/LicenseListing';
import LicenseDetail from './components/LicenseDetail';
import FAQ from './components/FAQ';
import FAQPage from './components/FAQPage';
import AboutPage from './components/AboutPage';
import Blog from './components/Blog';
import BlogListPage from './components/BlogListPage';
import BlogDetail from './components/BlogDetail';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import LocationSection from './components/LocationSection';

// Basic state-based routing types
type ViewState = 'home' | 'listing' | 'detail' | 'faq' | 'about' | 'blog-list' | 'blog-detail' | 'contact';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedLicenseId, setSelectedLicenseId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  // Global UX Fix: Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedLicenseId, selectedBlogId]);

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedLicenseId(null);
    setSelectedBlogId(null);
  };

  const navigateToListing = () => {
    setCurrentView('listing');
    setSelectedLicenseId(null);
  };

  const navigateToDetail = (id: string) => {
    setSelectedLicenseId(id);
    setCurrentView('detail');
  };

  const navigateToFAQ = () => {
    setCurrentView('faq');
    setSelectedLicenseId(null);
  }

  const navigateToAbout = () => {
    setCurrentView('about');
    setSelectedLicenseId(null);
  }

  const navigateToBlogList = () => {
    setCurrentView('blog-list');
    setSelectedBlogId(null);
  }

  const navigateToBlogDetail = (id: string) => {
    setSelectedBlogId(id);
    setCurrentView('blog-detail');
  }

  const navigateToContact = () => {
    setCurrentView('contact');
    setSelectedLicenseId(null);
  }

  // General router handler for Navbar
  const handleNavbarNavigation = (page: string) => {
    switch(page) {
        case 'home':
            navigateToHome();
            break;
        case 'listing':
            navigateToListing();
            break;
        case 'faq':
            navigateToFAQ();
            break;
        case 'about':
            navigateToAbout();
            break;
        case 'blog':
            navigateToBlogList();
            break;
        case 'contact':
            navigateToContact();
            break;
        default:
            navigateToHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-body">
      <TopBar />
      <Navbar onNavigate={handleNavbarNavigation} />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero onNavigateToListing={navigateToListing} />
            <Services />
            <LicenseClasses 
                onNavigateToListing={navigateToListing} 
                onNavigateToDetail={navigateToDetail}
            />
            {/* Show only Top 4 on Home with View All button */}
            <FAQ 
                limit={4} 
                showViewAll={true} 
                onViewAllClick={navigateToFAQ} 
            />
            {/* Replaced Statistics with LocationSection as requested */}
            <LocationSection />
            {/* Show only Top 3 "Star" posts on Home */}
            <Blog 
                limit={3} 
                onPostClick={navigateToBlogDetail} 
                onViewAllClick={navigateToBlogList}
            />
          </>
        )}

        {currentView === 'listing' && (
            <LicenseListing 
                onSelectLicense={navigateToDetail} 
                onBack={navigateToHome}
            />
        )}

        {currentView === 'detail' && selectedLicenseId && (
            <LicenseDetail 
                licenseId={selectedLicenseId}
                onBack={navigateToListing}
            />
        )}

        {currentView === 'faq' && (
            <FAQPage onBack={navigateToHome} />
        )}

        {currentView === 'about' && (
            <AboutPage onBack={navigateToHome} />
        )}

        {currentView === 'blog-list' && (
            <BlogListPage 
                onPostClick={navigateToBlogDetail}
                onBack={navigateToHome}
            />
        )}

        {currentView === 'blog-detail' && selectedBlogId && (
            <BlogDetail 
                postId={selectedBlogId}
                onBack={navigateToBlogList}
            />
        )}

        {currentView === 'contact' && (
            <ContactPage onBack={navigateToHome} />
        )}
      </main>
      
      <Footer onNavigate={handleNavbarNavigation} />
    </div>
  );
}

export default App;