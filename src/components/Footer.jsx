import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saulo-rangel-rosa-leonardo-1169093a6/', icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/Saulorangel87', icon: GitHubIcon },
  { label: 'E-mail', href: 'mailto:sauloleonardo1987@gmail.com', icon: MailIcon },
];

export default function Footer() {
  return <footer className="site-footer"><div className="site-container footer-row"><p>© 2026 · desenvolvido por Saulo Rangel</p><nav className="footer-links" aria-label="Links de contato">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} aria-label={label} title={label}><Icon /></a>)}</nav></div></footer>;
}
