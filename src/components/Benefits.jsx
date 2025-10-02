import React, { useEffect } from 'react'

const Benefits = () => {
  useEffect(() => {
    // Parallax scroll effect with depth
    function parallaxScroll() {
      const images = document.querySelectorAll('.parallax-image');
      const grid = document.querySelector('.benefits-grid');

      if (!grid) return;

      const gridRect = grid.getBoundingClientRect();
      const gridTop = gridRect.top;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress relative to grid visibility
      const scrollProgress = (windowHeight - gridTop) / (windowHeight + gridRect.height);

      images.forEach(img => {
        // More visible parallax: move at 0.3x speed (70% slower than normal scroll)
        const parallaxSpeed = 0.3;
        const moveAmount = scrollProgress * 200 * (1 - parallaxSpeed);

        // Apply noticeable transform - move DOWN to cover more on scroll
        // Start at negative position to avoid white space at top
        img.style.transform = `translateY(${moveAmount - 100}px)`;
      });
    }

    // Throttle scroll events for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          parallaxScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    parallaxScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="m-0 p-0">
      <style>{`
        .benefits-section-title {
          text-align: center;
          padding: 4rem 2rem;
          background: #ffffff;
        }

        .benefits-section-title h2 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .benefits-section-title .text-gray-800 {
          color: #1f2937;
        }

        .benefits-section-title .grade-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 5rem;
          height: 5rem;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 0.75rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transform: rotate(-6deg);
          margin: 0 0.5rem;
        }

        .benefits-section-title .grade-box span {
          color: white;
          font-weight: 900;
          font-size: 2rem;
        }

        .benefits-section-title .highlight-text {
          background: linear-gradient(to right, #14b8a6, #0d9488, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          position: relative;
        }

        .benefits-section-title .highlight-underline {
          position: absolute;
          inset: 0 0 0.5rem 0;
          height: 1rem;
          background: linear-gradient(to right, rgba(20, 184, 166, 0.3), rgba(20, 184, 166, 0.4));
          z-index: -1;
          filter: blur(2px);
        }

        .benefits-section-title p {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 48rem;
          margin: 0 auto;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 50vw);
          grid-template-rows: repeat(2, 900px);
          gap: 0;
          margin: 0;
          padding: 0;
        }

        .grid-block {
          position: relative;
          overflow: hidden;
        }

        .grid-block img {
          width: 100%;
          height: 140%;
          object-fit: cover;
          display: block;
          will-change: transform;
          position: absolute;
          top: 0;
          left: 0;
        }

        .image-block {
          overflow: hidden;
        }

        .text-block {
          background: #ffffff;
          color: #000000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem;
        }

        .text-block h3 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 3rem;
        }

        .text-block .highlight {
          color: #14b8a6;
        }

        .text-block ul {
          list-style: none;
          padding: 0;
        }

        .text-block li {
          margin-bottom: 2rem;
          display: flex;
          gap: 1.5rem;
        }

        .text-block .circle_number {
          width: 3rem;
          height: 3rem;
          min-width: 3rem;
          border-radius: 50%;
          background: #14b8a6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: bold;
        }

        .text-block .content_part {
          flex: 1;
        }

        .text-block li strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .text-block li p {
          font-size: 0.9rem;
          color: #666666;
          line-height: 1.6;
        }

        .text-block .description {
          color: #666666;
          line-height: 1.8;
          font-size: 0.95rem;
        }
      `}</style>

      {/* 2x2 Grid Layout - Full Width */}
      <div className="benefits-grid">

        {/* Top Left - IMAGE */}
        <div className="grid-block image-block">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Professional pool service" className="parallax-image" />
        </div>

        {/* Top Right - TEXT */}
        <div className="grid-block text-block" style={{ justifyContent: 'space-between', paddingTop: '6rem', paddingBottom: '4rem' }}>
          <h3>Experience<br />the <span className="highlight">A+ Pool</span><br />Advantage</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem', position: 'relative' }}>
              <svg style={{ position: 'absolute', top: '1.5rem', left: 0, width: '1.25rem', height: '1.25rem', color: '#14b8a6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="description" style={{ marginLeft: '2rem' }}>
                Weekly service that actually shows up, rain or shine. We provide stress-free consistency you can count on.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem', position: 'relative' }}>
              <svg style={{ position: 'absolute', top: '1.5rem', left: 0, width: '1.25rem', height: '1.25rem', color: '#14b8a6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="description" style={{ marginLeft: '2rem' }}>
                Enjoy BBQs, pool parties, and family swims without the guilt or mess. Create beautiful backyard moments with your loved ones.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem', position: 'relative' }}>
              <svg style={{ position: 'absolute', top: '1.5rem', left: 0, width: '1.25rem', height: '1.25rem', color: '#14b8a6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="description" style={{ marginLeft: '2rem' }}>
                Fully licensed, bonded, and insured for your complete peace of mind. Your investment is protected with expert care.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Left - TEXT */}
        <div className="grid-block text-block" style={{ justifyContent: 'flex-end' }}>
          <h3>Why Choose<br /><span className="highlight">A+ Pool Service?</span></h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem', position: 'relative' }}>
              <svg style={{ position: 'absolute', top: '1.5rem', left: 0, width: '1.25rem', height: '1.25rem', color: '#14b8a6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <p className="description" style={{ marginLeft: '2rem' }}>
                Save your weekends and enjoy more time with family while we handle all the maintenance. Relax and recharge while your pool stays pristine.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem', position: 'relative' }}>
              <svg style={{ position: 'absolute', top: '1.5rem', left: 0, width: '1.25rem', height: '1.25rem', color: '#14b8a6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="description" style={{ marginLeft: '2rem' }}>
                Professionally balanced chemistry means crystal clear water every time. No cloudy water or skin irritation - just confidence with every swim.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem', position: 'relative' }}>
              <svg style={{ position: 'absolute', top: '1.5rem', left: 0, width: '1.25rem', height: '1.25rem', color: '#14b8a6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="description" style={{ marginLeft: '2rem' }}>
                Protect your investment with expert care and maintenance. Extend the life of your pool and equipment with our professional service.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Right - IMAGE */}
        <div className="grid-block image-block">
          <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80" alt="Crystal clear pool water" className="parallax-image" />
        </div>

      </div>
    </section>
  )
}

export default Benefits
