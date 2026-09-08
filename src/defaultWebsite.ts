import { WebsiteTemplate } from './types';

export const DEFAULT_WEBSITE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Apex Studio — Digital Craft & Innovation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #2563eb;
      --primary-hover: #1d4ed8;
      --primary-light: #eff6ff;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --bg-page: #f8fafc;
      --bg-card: #ffffff;
      --border-color: #e2e8f0;
      --radius: 12px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      color: var(--text-main);
      background-color: var(--bg-page);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    .container {
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Navigation */
    header.site-header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border-color);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--text-main);
    }

    .logo-badge {
      width: 36px;
      height: 36px;
      background: var(--primary);
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.1rem;
    }

    nav ul {
      display: flex;
      list-style: none;
      gap: 32px;
    }

    nav a {
      text-decoration: none;
      color: var(--text-muted);
      font-weight: 500;
      font-size: 0.95rem;
      transition: color 0.15s ease;
    }

    nav a:hover {
      color: var(--primary);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      border: 1px solid transparent;
    }

    .btn-primary {
      background: var(--primary);
      color: #ffffff;
    }

    .btn-primary:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: #ffffff;
      color: var(--text-main);
      border-color: var(--border-color);
    }

    .btn-secondary:hover {
      background: #f1f5f9;
    }

    /* Hero Section */
    .hero {
      padding: 80px 0 60px;
      text-align: center;
    }

    .badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: var(--primary-light);
      color: var(--primary);
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 24px;
    }

    .hero h1 {
      font-size: clamp(2.2rem, 5vw, 3.5rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--text-main);
      max-width: 800px;
      margin: 0 auto 20px;
    }

    .hero p.subtitle {
      font-size: 1.15rem;
      color: var(--text-muted);
      max-width: 620px;
      margin: 0 auto 36px;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }

    /* Stats Bar */
    .stats-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      padding: 32px 24px;
      margin-top: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary);
      line-height: 1;
      margin-bottom: 6px;
    }

    .stat-label {
      font-size: 0.9rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    /* Features Grid */
    .section {
      padding: 80px 0;
    }

    .section-header {
      text-align: center;
      max-width: 640px;
      margin: 0 auto 56px;
    }

    .section-header h2 {
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin-bottom: 12px;
    }

    .section-header p {
      color: var(--text-muted);
      font-size: 1.05rem;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 28px;
    }

    .feature-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      padding: 32px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .feature-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px -3px rgba(0, 0, 0, 0.05);
    }

    .feature-icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    .feature-card h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .feature-card p {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.55;
    }

    /* Showcase / Story */
    .story-card {
      background: #0f172a;
      color: #ffffff;
      border-radius: 16px;
      padding: 60px 48px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }

    @media (max-width: 840px) {
      .story-card {
        grid-template-columns: 1fr;
        padding: 40px 24px;
      }
    }

    .story-card h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 16px;
      color: #ffffff;
    }

    .story-card p {
      color: #94a3b8;
      font-size: 1.05rem;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .story-card ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .story-card li {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #cbd5e1;
      font-size: 0.95rem;
    }

    /* Contact Section */
    .contact-wrapper {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      padding: 48px;
      max-width: 680px;
      margin: 0 auto;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04);
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--text-main);
    }

    .form-control {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      font-size: 0.95rem;
      font-family: inherit;
      background: #f8fafc;
      transition: border-color 0.15s ease;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--primary);
      background: #ffffff;
    }

    textarea.form-control {
      resize: vertical;
      min-height: 120px;
    }

    /* Footer */
    footer.site-footer {
      background: #ffffff;
      border-top: 1px solid var(--border-color);
      padding: 48px 0 24px;
      margin-top: 60px;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--border-color);
    }

    .footer-copy {
      text-align: center;
      padding-top: 24px;
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .footer-links {
      display: flex;
      gap: 24px;
      list-style: none;
    }

    .footer-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.9rem;
    }

    .footer-links a:hover {
      color: var(--primary);
    }
  </style>
</head>
<body>

  <!-- Site Navigation -->
  <header class="site-header">
    <div class="container nav-wrapper">
      <a href="#" class="brand-logo">
        <span class="logo-badge">A</span>
        <span>Apex Studio</span>
      </a>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <a href="#contact" class="btn btn-primary">Get Started</a>
    </div>
  </header>

  <!-- Hero Section -->
  <main>
    <section class="hero">
      <div class="container">
        <div class="badge-pill">
          <span>✨</span>
          <span>Version 3.0 is now live</span>
        </div>
        <h1>Design experiences that inspire and convert</h1>
        <p class="subtitle">
          Build polished digital products with high speed, responsive foundations, and modern design precision. Customize this template right on your screen.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Start Free Trial</a>
          <a href="#features" class="btn btn-secondary">Explore Features</a>
        </div>

        <!-- Metric highlights -->
        <div class="stats-bar">
          <div class="stat-item">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime Reliability</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">4.9/5</div>
            <div class="stat-label">Customer Satisfaction</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">240k+</div>
            <div class="stat-label">Active Users</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">&lt; 50ms</div>
            <div class="stat-label">Fast Response Time</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Core Capabilities</h2>
          <p>Everything you need to launch impactful web experiences without technical friction.</p>
        </div>

        <div class="grid-3">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Lightning Fast Loading</h3>
            <p>Optimized asset delivery, semantic markup, and clean layouts that render in milliseconds on all devices.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Responsive by Default</h3>
            <p>Flawless adaptation to mobile smartphones, iPads, high-res monitors, and widescreen displays.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Modular Styling</h3>
            <p>Configurable design tokens, CSS variables, and clean components you can modify in seconds.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <div class="story-card">
          <div>
            <h2>Crafted with Attention to Detail</h2>
            <p>
              We believe websites should feel effortless, load instantly, and communicate your message with clarity. Click anywhere in Visual Editor mode to customize this copy.
            </p>
            <ul>
              <li>✓ Fully accessible semantic HTML5 architecture</li>
              <li>✓ Modern flexbox & CSS grid fluid responsiveness</li>
              <li>✓ Single-file standalone portability with zero build lock-in</li>
            </ul>
          </div>
          <div style="background: rgba(255,255,255,0.06); padding: 32px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
            <h3 style="color: #ffffff; margin-bottom: 12px; font-size: 1.2rem;">Ready to make changes?</h3>
            <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 20px;">
              Use the top toolbar to switch between Live Preview, Visual In-Place Editing, and Source Code editing.
            </p>
            <a href="#contact" class="btn btn-primary" style="background: #3b82f6; width: 100%;">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Get in Touch</h2>
          <p>Send us a message and our team will get back to you within 24 hours.</p>
        </div>

        <div class="contact-wrapper">
          <form onsubmit="event.preventDefault(); alert('Form submitted successfully!');">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" class="form-control" placeholder="Jane Doe" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" class="form-control" placeholder="jane@example.com" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" class="form-control" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px;">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <a href="#" class="brand-logo">
          <span class="logo-badge">A</span>
          <span>Apex Studio</span>
        </a>
        <ul class="footer-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-copy">
        <p>&copy; 2026 Apex Studio, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>

</body>
</html>`;

export const TEMPLATES: WebsiteTemplate[] = [
  {
    id: 'business-landing',
    name: 'Modern Business Landing',
    category: 'Business & Startup',
    description: 'Hero with metrics, 3-column features, dark story highlight, contact form, and footer.',
    html: DEFAULT_WEBSITE_HTML,
  },
  {
    id: 'portfolio',
    name: 'Creative Portfolio',
    category: 'Personal & Creative',
    description: 'Clean showcase for designers, developers, and photographers with work gallery and skills.',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Morgan — Product Designer & Developer</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --accent: #059669;
      --bg: #fafafa;
      --surface: #ffffff;
      --text: #18181b;
      --muted: #71717a;
      --border: #e4e4e7;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
    .wrap { max-width: 900px; margin: 0 auto; padding: 60px 24px; }
    header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 60px; }
    .nav a { margin-left: 20px; color: var(--muted); text-decoration: none; font-weight: 500; font-size: 0.95rem; }
    .nav a:hover { color: var(--accent); }
    .hero { margin-bottom: 70px; }
    .status-dot { display: inline-flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--accent); font-weight: 600; margin-bottom: 16px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); }
    h1 { font-size: 2.75rem; font-weight: 700; line-height: 1.2; margin-bottom: 20px; letter-spacing: -0.02em; }
    .bio { font-size: 1.2rem; color: var(--muted); max-width: 680px; }
    h2 { font-size: 1.6rem; font-weight: 700; margin: 50px 0 24px; }
    .work-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    @media(max-width: 650px) { .work-grid { grid-template-columns: 1fr; } }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 28px; transition: transform 0.2s; }
    .card:hover { transform: translateY(-3px); }
    .tag { display: inline-block; font-size: 0.8rem; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
    .card h3 { font-size: 1.25rem; margin-bottom: 8px; }
    .card p { color: var(--muted); font-size: 0.95rem; }
    .btn { display: inline-block; margin-top: 24px; padding: 12px 24px; background: var(--text); color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div style="font-weight: 700; font-size: 1.2rem;">Alex Morgan</div>
      <div class="nav">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
    <section class="hero">
      <div class="status-dot"><span class="dot"></span> Available for new projects</div>
      <h1>Designing digital products with simplicity & purpose</h1>
      <p class="bio">I partner with founders and engineering teams to craft fast, accessible user interfaces and web applications.</p>
      <a href="#contact" class="btn">Get in touch</a>
    </section>
    <section id="work">
      <h2>Selected Works</h2>
      <div class="work-grid">
        <div class="card">
          <span class="tag">Web Application</span>
          <h3>Pulse Analytics</h3>
          <p>Real-time telemetry dashboard simplifying multi-cluster metrics for developer teams.</p>
        </div>
        <div class="card">
          <span class="tag">Design System</span>
          <h3>Krypton UI</h3>
          <p>An accessible, token-driven component library adopted across 14 enterprise platforms.</p>
        </div>
      </div>
    </section>
  </div>
</body>
</html>`,
  },
  {
    id: 'saas-pricing',
    name: 'SaaS Product & Pricing',
    category: 'Software & Tech',
    description: 'SaaS landing page with tier comparison pricing cards, FAQ accordion, and feature list.',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CloudSync — Team Collaboration Reimagined</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root { --primary: #6366f1; --bg: #fdfdfd; --text: #09090b; --muted: #71717a; --border: #e4e4e7; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
    .container { max-width: 1040px; margin: 0 auto; padding: 60px 24px; text-align: center; }
    h1 { font-size: 2.8rem; font-weight: 800; margin-bottom: 16px; letter-spacing: -0.02em; }
    .lead { font-size: 1.2rem; color: var(--muted); max-width: 600px; margin: 0 auto 50px; }
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px; text-align: left; }
    .card { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 36px 28px; position: relative; }
    .card.popular { border: 2px solid var(--primary); box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.15); }
    .badge { position: absolute; top: -12px; right: 24px; background: var(--primary); color: #fff; font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 12px; }
    .price { font-size: 2.5rem; font-weight: 800; margin: 20px 0; }
    .price span { font-size: 1rem; font-weight: 500; color: var(--muted); }
    ul { list-style: none; margin: 24px 0; display: flex; flex-direction: column; gap: 12px; }
    li { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; color: var(--muted); }
    .btn { display: block; width: 100%; text-align: center; padding: 12px; border-radius: 8px; font-weight: 600; text-decoration: none; }
    .btn-primary { background: var(--primary); color: #fff; }
    .btn-outline { border: 1px solid var(--border); color: var(--text); }
  </style>
</head>
<body>
  <div class="container">
    <h1>Simple, transparent pricing</h1>
    <p class="lead">Everything you need to automate workflows and accelerate delivery.</p>
    <div class="pricing-grid">
      <div class="card">
        <h3>Starter</h3>
        <p style="color:var(--muted); font-size:0.9rem;">Ideal for hobbyists and freelancers</p>
        <div class="price">$0 <span>/ month</span></div>
        <a href="#" class="btn btn-outline">Start Free</a>
        <ul>
          <li>✓ 3 Active Projects</li>
          <li>✓ 10GB Cloud Storage</li>
          <li>✓ Community Support</li>
        </ul>
      </div>
      <div class="card popular">
        <div class="badge">MOST POPULAR</div>
        <h3>Professional</h3>
        <p style="color:var(--muted); font-size:0.9rem;">For fast-growing companies and teams</p>
        <div class="price">$29 <span>/ month</span></div>
        <a href="#" class="btn btn-primary">Try Pro 14 Days</a>
        <ul>
          <li>✓ Unlimited Projects</li>
          <li>✓ 500GB Fast Storage</li>
          <li>✓ Priority 24/7 Support</li>
          <li>✓ Custom Domain Setup</li>
        </ul>
      </div>
      <div class="card">
        <h3>Enterprise</h3>
        <p style="color:var(--muted); font-size:0.9rem;">Dedicated capacity & custom contracts</p>
        <div class="price">$99 <span>/ month</span></div>
        <a href="#" class="btn btn-outline">Contact Sales</a>
        <ul>
          <li>✓ Dedicated Database</li>
          <li>✓ Custom SLA Guarantee</li>
          <li>✓ Single Sign-On (SSO)</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`,
  }
];
