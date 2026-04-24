export default function Home() {
  return (
    <main style={{minHeight: '100vh', background: '#0a0a0f', color: '#e8e6e3', fontFamily: 'system-ui, sans-serif'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', padding: '24px 48px', borderBottom: '1px solid #1a1920'}}>
        <a href="/" style={{fontSize: '20px', fontWeight: 700, color: '#fff', textDecoration: 'none'}}>
          Andre Duval <span style={{color: '#00d4ff'}}>Portfolio</span>
        </a>
        <div style={{display: 'flex', gap: '32px'}}>
          <a href="#work" style={{color: '#a09c96', textDecoration: 'none'}}>Work</a>
          <a href="#about" style={{color: '#a09c96', textDecoration: 'none'}}>About</a>
          <a href="#contact" style={{color: '#a09c96', textDecoration: 'none'}}>Contact</a>
        </div>
      </nav>

      <section style={{padding: '120px 48px', maxWidth: '1200px', margin: '0 auto'}}>
        <span style={{fontSize: '14px', color: '#00d4ff', letterSpacing: '0.1em', textTransform: 'uppercase'}}>
          Product Design & Development
        </span>
        <h1 style={{fontSize: '96px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          Andre<br/>Duval
        </h1>
        <p style={{fontSize: '18px', color: '#a09c96', maxWidth: '600px', marginBottom: '32px'}}>
          Certified Product Manager/Developer with expertise in crafting innovative software solutions.
        </p>
        <div style={{display: 'flex', gap: '16px'}}>
          <a href="#contact" style={{padding: '14px 28px', background: 'linear-gradient(135deg, #00d4ff, #a855f7)', color: '#0a0a0f', textDecoration: 'none', borderRadius: '100px', fontWeight: 600}}>
            Get in Touch
          </a>
          <a href="#resume" style={{padding: '14px 28px', border: '1px solid #2a2930', color: '#e8e6e3', textDecoration: 'none', borderRadius: '100px'}}>
            View Resume
          </a>
        </div>
      </section>

      <section id="work" style={{padding: '80px 48px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1920'}}>
        <h2 style={{fontSize: '42px', fontWeight: 700, marginBottom: '48px'}}>Selected Work</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
          {['Project Alpha', 'Project Beta', 'Project Gamma'].map((project) => (
            <div key={project} style={{padding: '32px', background: '#1a1920', borderRadius: '16px', border: '1px solid #2a2930'}}>
              <h3 style={{fontSize: '20px', fontWeight: 600, marginBottom: '8px'}}>{project}</h3>
              <p style={{fontSize: '14px', color: '#a09c96'}}>Product design & development</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{padding: '80px 48px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1920'}}>
        <h2 style={{fontSize: '42px', fontWeight: 700, marginBottom: '48px'}}>About</h2>
        <p style={{fontSize: '18px', color: '#a09c96', maxWidth: '600px', marginBottom: '24px'}}>
          Certified Product Developer with over seven years of experience crafting innovative software and media solutions.
        </p>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '32px'}}>
          {['Product Strategy', 'UX Research', 'Design Systems', 'Full-Stack Dev'].map((skill) => (
            <span key={skill} style={{padding: '6px 14px', background: '#1a1920', border: '1px solid #2a2930', borderRadius: '100px', fontSize: '12px'}}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" style={{padding: '80px 48px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1920'}}>
        <h2 style={{fontSize: '42px', fontWeight: 700, marginBottom: '32px'}}>Let's Work Together</h2>
        <a href="mailto:your.email@example.com" style={{fontSize: '24px', color: '#00d4ff', textDecoration: 'none'}}>
          your.email@example.com
        </a>
      </section>

      <footer style={{padding: '48px', borderTop: '1px solid #1a1920', display: 'flex', justifyContent: 'space-between', color: '#605c56'}}>
        <span>2026 Andre Duval</span>
        <span>Certified Product Developer</span>
      </footer>
    </main>
  )
}
