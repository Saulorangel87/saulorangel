import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saulo-rangel-rosa-leonardo-1169093a6/', icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/Saulorangel87', icon: GitHubIcon },
  { label: 'E-mail', href: 'mailto:sauloleonardo1987@gmail.com', icon: MailIcon },
];

export default function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const viewport = window.visualViewport;
    let animationFrame = 0;

    const updatePosition = () => {
      const bottomBrowserInset = viewport
        ? Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop)
        : 0;

      footerRef.current?.style.setProperty(
        '--footer-viewport-offset',
        `${Math.round(bottomBrowserInset)}px`,
      );
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updatePosition);
    };

    updatePosition();
    viewport?.addEventListener('resize', scheduleUpdate);
    viewport?.addEventListener('scroll', scheduleUpdate);
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('orientationchange', scheduleUpdate);
    window.addEventListener('pageshow', scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      viewport?.removeEventListener('resize', scheduleUpdate);
      viewport?.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('orientationchange', scheduleUpdate);
      window.removeEventListener('pageshow', scheduleUpdate);
    };
  }, []);

  const footer = (
    <footer ref={footerRef} className="site-footer">
      <div className="site-container footer-row">
        <p>© 2026 · desenvolvido por Saulo Rangel</p>
        <nav className="footer-links" aria-label="Links de contato">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );

  return typeof document === 'undefined' ? footer : createPortal(footer, document.body);
}
