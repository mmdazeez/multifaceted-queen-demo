import React from 'react';
import './App.css';

function App() {
  const templates = [
    {
      id: 1,
      title: 'Template 1',
      description: 'A polished website design option for Multifaceted Queen with a stylish layout, clear service sections, and a professional customer experience.',
      buttonText: 'View Template 1',
      link: 'https://multifaceted-queen-template1.vercel.app',
      previewTheme: 'theme-1'
    },
    {
      id: 2,
      title: 'Template 2',
      description: 'A modern website design option for Multifaceted Queen with a clean structure, strong service presentation, and a business-ready layout.',
      buttonText: 'View Template 2',
      link: 'https://multifaceted-queen-template2.vercel.app',
      previewTheme: 'theme-2'
    },
    {
      id: 3,
      title: 'Template 3',
      description: 'A bright and professional website design option for Multifaceted Queen focused on clear messaging, attractive visuals, and easy client navigation.',
      buttonText: 'View Template 3',
      link: 'https://multifaceted-queen-template3.vercel.app',
      previewTheme: 'theme-3'
    }
  ];

  const services = ['Hair', 'Crafting Projects', 'Alterations', 'Custom Services'];

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="brand">Multifaceted Queen</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Choose Your Website Design</h1>
          <p className="hero-subtitle">
            Review three custom website template options created for Multifaceted Queen. Each template is designed to present the business services clearly, including hair, crafting projects, and alterations. Click any template below to preview the full demo and choose the design style you like best.
          </p>
          <a href="#templates" className="btn btn-large">View Templates</a>
          
          <div className="service-tags">
            {services.map((service, index) => (
              <span key={index} className="tag">{service}</span>
            ))}
          </div>
        </div>
      </header>

      <main id="templates" className="showcase">
        <div className="container">
          <div className="grid">
            {templates.map((template) => (
              <article 
                key={template.id} 
                className="card"
                onClick={() => handleCardClick(template.link)}
              >
                <div className="card-preview">
                  <div className={`preview-browser ${template.previewTheme}`}>
                    <div className="browser-header">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <div className="browser-body">
                      <div className="wireframe-header"></div>
                      <div className="wireframe-hero"></div>
                      <div className="wireframe-boxes">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{template.title}</h3>
                  <p>{template.description}</p>
                  <a 
                    href={template.link} 
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {template.buttonText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <p>&copy; 2026 Multifaceted Queen. Website template showcase for client preview.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
