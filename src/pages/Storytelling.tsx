import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Storytelling.css";

const slideshowData = {
  slides: [
    {
      id: 1,
      type: "intro",
      title: "MVB's Journey",
      subtitle: "From Vision to Transformation",
      description: "We began with a mission to simplify IT infrastructure and build reliable ecosystems.",
      bgImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      content: "Crafting reliable IT infrastructure since day one"
    },
    {
      id: 2,
      type: "history",
      year: "2015",
      title: "The Beginning",
      description: "Started our journey with a vision to transform IT infrastructure and build reliable ecosystems.",
      icon: "🌱",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      stats: "Structured Cabling | Network Solutions | Small Team"
    },
    {
      id: 3,
      type: "history",
      year: "2017",
      title: "Expansion & Growth",
      description: "Expanded our services to include advanced data security and server solutions.",
      icon: "🏢",
      bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      stats: "Data Security | Server Storage | Growing Team"
    },
    {
      id: 4,
      type: "history",
      year: "2019",
      title: "Data Center Excellence",
      description: "Established ourselves as leaders in data center infrastructure and security solutions.",
      icon: "🏭",
      bgImage: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      stats: "Data Center Solutions | NOC & SOC | 50+ Clients"
    },
    {
      id: 5,
      type: "history",
      year: "2021",
      title: "Digital Transformation",
      description: "Evolved our offerings to include end-to-end IT ecosystems and advanced security frameworks.",
      icon: "💡",
      bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      stats: "AI Integration | Cyber Security | 100+ Projects"
    },
    {
      id: 6,
      type: "leadership",
      title: "Leadership Mapping",
      subtitle: "CXO Driven Decisions",
      description: "Understanding how technology decisions are driven by leadership",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      leaders: [
        { role: "CTO", focus: "Innovation & Technology Strategy", icon: "🚀" },
        { role: "CIO", focus: "IT Systems & Infrastructure", icon: "💻" },
        { role: "COO", focus: "Operations & Efficiency", icon: "⚙️" },
        { role: "CEO", focus: "Growth & Strategic Vision", icon: "🎯" }
      ]
    },
    {
      id: 7,
      type: "stakeholders",
      title: "Key Stakeholders",
      subtitle: "Understanding Decision Makers",
      description: "We mapped decision makers to solve real business pain points",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      stakeholders: [
        { role: "Facility / IT Head", focus: "Scalability & Lifecycle Management", icon: "🏗️" },
        { role: "CISO", focus: "Data Security (HIPAA, PCI DSS)", icon: "🔒" },
        { role: "Network Architects", focus: "Bandwidth & Latency Optimization", icon: "🌐" },
        { role: "Data Center Manager", focus: "Cooling & Uptime", icon: "❄️" },
        { role: "ESG", focus: "Energy Efficiency", icon: "🌱" }
      ]
    },
    {
      id: 8,
      type: "b2b",
      title: "B2B Journey",
      subtitle: "Decision Flow Process",
      description: "Understanding the complete buying process and decision-making hierarchy",
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      journey: [
        { step: "Initiator", role: "CIO, CTO", icon: "🎯" },
        { step: "User", role: "Operators & Engineers", icon: "👥" },
        { step: "Influencer", role: "CFO, COO", icon: "💡" },
        { step: "Decision Maker", role: "CEO", icon: "👔" },
        { step: "Buyer", role: "Purchase Head", icon: "💰" }
      ]
    },
    {
      id: 9,
      type: "services",
      title: "Our Core Solutions",
      bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      services: [
        { icon: "🔌", name: "Structured Cabling", desc: "Physical security, network, IOT & Automations" },
        { icon: "🔒", name: "Data Security", desc: "IT Security, Network Security, Cyber Security" },
        { icon: "🖥️", name: "Server & Storage", desc: "Server storage solutions & Lifecycle management" },
        { icon: "📡", name: "NOC & SOC", desc: "Network & Security Operations Centers" },
        { icon: "📹", name: "Physical Security", desc: "Cameras, Access control, Fire alarm systems" },
        { icon: "🤖", name: "AI Solutions", desc: "AI-powered automation and analytics" }
      ]
    },
    {
      id: 10,
      type: "strategy",
      title: "Our Strategy",
      subtitle: "Building Trust Through Excellence",
      description: "Customer-centric approach to deliver end-to-end IT solutions",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      strategies: [
        { name: "End-to-End Solutions", icon: "🔄", desc: "Complete IT ecosystem management" },
        { name: "Brand Building", icon: "🏆", desc: "Establishing market leadership" },
        { name: "Case Study Content", icon: "📊", desc: "Showcasing success stories" },
        { name: "Customer Reconnect", icon: "🤝", desc: "Building lasting relationships" }
      ]
    },
    {
      id: 11,
      type: "digital",
      title: "Digital Growth Strategy",
      subtitle: "Leveraging Digital Channels",
      description: "Comprehensive marketing approach for sustainable growth",
      bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      channels: [
        { name: "SEO", target: "Top ranking goal", icon: "📈" },
        { name: "Website & LinkedIn", target: "Complete revamp", icon: "🌐" },
        { name: "Video Content", target: "Engaging storytelling", icon: "🎥" },
        { name: "Full Funnel Marketing", target: "Lead generation", icon: "🎯" }
      ]
    },
    {
      id: 12,
      type: "achievements",
      title: "Our Impact",
      bgImage: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      stats: [
        { value: "200+", label: "Projects Completed", icon: "💼" },
        { value: "150+", label: "Happy Clients", icon: "😊" },
        { value: "12", label: "Countries Served", icon: "🌍" },
        { value: "98%", label: "Client Satisfaction", icon: "⭐" },
        { value: "24/7", label: "Support Available", icon: "🕒" }
      ]
    },
    {
      id: 13,
      type: "vision",
      title: "Our Vision",
      subtitle: "Building Tomorrow's IT Infrastructure",
      description: "We continue to innovate and lead IT infrastructure transformation, delivering seamless and secure IT ecosystems with peace of mind.",
      icon: "🚀",
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
      values: ["Innovation First", "Customer Centricity", "Security Excellence", "Sustainable Growth"]
    },
    {
      id: 14,
      type: "cta",
      title: "Ready to Transform Your IT Infrastructure?",
      description: "Join us in building reliable, secure, and future-ready IT ecosystems.",
      buttonText: "Start Your Journey",
      bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1))"
    }
  ]
};

const StoryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");
  const [isInView, setIsInView] = useState(true);
  const carouselRef = useRef(null);

  const totalSlides = slideshowData.slides.length;

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && isInView) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide, isInView]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isInView) {
        if (e.key === "ArrowLeft") {
          prevSlide();
          pauseAutoPlay();
        } else if (e.key === "ArrowRight") {
          nextSlide();
          pauseAutoPlay();
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isInView]);

  const pauseAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
    }
  };

  const nextSlide = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentSlideData = slideshowData.slides[currentSlide];

  const renderSlideContent = () => {
    switch (currentSlideData.type) {
      case "intro":
        return (
          <div className="slide-content intro-slide">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
            <h1 className="slide-title large">{currentSlideData.title}</h1>
            <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            <p className="slide-description highlight-text">{currentSlideData.description}</p>
            <div className="intro-quote highlight-text">{currentSlideData.content}</div>
            <button className="slide-button" onClick={() => { nextSlide(); pauseAutoPlay(); }}>
              Begin Story <span>→</span>
            </button>
          </div>
        );

      case "history":
        return (
          <div className="slide-content history-slide">
            <div className="timeline-badge">{currentSlideData.year}</div>
            <div className="history-icon">{currentSlideData.icon}</div>
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <p className="slide-description highlight-text">{currentSlideData.description}</p>
            <div className="history-stats">{currentSlideData.stats}</div>
          </div>
        );

      case "leadership":
        return (
          <div className="slide-content leadership-slide">
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            <p className="slide-description highlight-text">{currentSlideData.description}</p>
            <div className="leadership-grid">
              {currentSlideData.leaders.map((leader, idx) => (
                <div key={idx} className="leader-card">
                  <div className="leader-icon">{leader.icon}</div>
                  <div className="leader-role">{leader.role}</div>
                  <div className="leader-focus">{leader.focus}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "stakeholders":
        return (
          <div className="slide-content stakeholders-slide">
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            <p className="slide-description highlight-text">{currentSlideData.description}</p>
            <div className="stakeholders-grid">
              {currentSlideData.stakeholders.map((stakeholder, idx) => (
                <div key={idx} className="stakeholder-card">
                  <div className="stakeholder-icon">{stakeholder.icon}</div>
                  <div className="stakeholder-role">{stakeholder.role}</div>
                  <div className="stakeholder-focus">{stakeholder.focus}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "b2b":
        return (
          <div className="slide-content b2b-slide">
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            <p className="slide-description">{currentSlideData.description}</p>
            <div className="journey-flow">
              {currentSlideData.journey.map((item, idx) => (
                <div key={idx} className="journey-step">
                  <div className="step-icon">{item.icon}</div>
                  <div className="step-name">{item.step}</div>
                  <div className="step-role">{item.role}</div>
                  {idx < currentSlideData.journey.length - 1 && (
                    <div className="step-arrow">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "services":
        return (
          <div className="slide-content services-slide">
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <div className="services-grid">
              {currentSlideData.services.map((service, idx) => (
                <div key={idx} className="service-item">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-name">{service.name}</div>
                  <div className="service-desc">{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "strategy":
        return (
          <div className="slide-content strategy-slide">
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            <p className="slide-description highlight-text">{currentSlideData.description}</p>
            <div className="strategy-grid">
              {currentSlideData.strategies.map((strategy, idx) => (
                <div key={idx} className="strategy-card">
                  <div className="strategy-icon">{strategy.icon}</div>
                  <div className="strategy-name">{strategy.name}</div>
                  <div className="strategy-desc">{strategy.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "digital":
        return (
          <div className="slide-content digital-slide">
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            <p className="slide-description highlight-text">{currentSlideData.description}</p>
            <div className="digital-grid">
              {currentSlideData.channels.map((channel, idx) => (
                <div key={idx} className="digital-card">
                  <div className="digital-icon">{channel.icon}</div>
                  <div className="digital-name">{channel.name}</div>
                  <div className="digital-target">{channel.target}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "achievements":
        return (
          <div className="slide-content achievements-slide">
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <div className="achievements-grid">
              {currentSlideData.stats.map((stat, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-icon">{stat.icon}</div>
                  <div className="achievement-value">{stat.value}</div>
                  <div className="achievement-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "vision":
        return (
          <div className="slide-content vision-slide">
            <div className="vision-icon">{currentSlideData.icon}</div>
            <h2 className="slide-title">{currentSlideData.title}</h2>
            <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            <p className="slide-description vision-description">{currentSlideData.description}</p>
            <div className="values-list">
              {currentSlideData.values.map((value, idx) => (
                <span key={idx} className="value-tag">{value}</span>
              ))}
            </div>
          </div>
        );

      case "cta":
        return (
          <div className="slide-content cta-slide">
            <h2 className="slide-title large">{currentSlideData.title}</h2>
            <p className="slide-description highlight-text">{currentSlideData.description}</p>
            <button className="cta-large-button">{currentSlideData.buttonText}</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={carouselRef} className="storytelling-slideshow">
      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar-global" 
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>

      {/* Main Slide Container */}
      <div className={`slideshow-container ${direction}`}>
        <div
          className="slide-wrapper"
          style={{
            backgroundImage: `url(${currentSlideData.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div
            className="overlay"
            style={{ background: currentSlideData.overlay }}
          ></div>
          <div className="slide-content-wrapper">
            {renderSlideContent()}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {isInView && (
        <>
          <button className="nav-arrow nav-arrow-left" onClick={() => { prevSlide(); pauseAutoPlay(); }}>
            <span>←</span>
          </button>
          <button className="nav-arrow nav-arrow-right" onClick={() => { nextSlide(); pauseAutoPlay(); }}>
            <span>→</span>
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {isInView && (
        <div className="slide-indicators">
          {slideshowData.slides.map((slide, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      )}

      {/* Auto-play Toggle */}
      {isInView && (
        <button className="auto-play-toggle" onClick={toggleAutoPlay}>
          {isAutoPlaying ? "⏸" : "▶"}
        </button>
      )}

      {/* Keyboard Hint */}
      {isInView && (
        <div className="keyboard-hint">
          ← → Use arrow keys
        </div>
      )}
    </div>
  );
};

export default StoryCarousel;