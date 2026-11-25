import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => (
  <footer role="contentinfo" className="compact-footer">
    <div className="footer-wrap">
      <div className="footer-top">
        <a href="/" aria-label="Inicio de CVIL"><Logo showText={false} className="h-[55px] invert brightness-0" /></a>
        <div className="footer-contact">
          <p>Llamadas / WhatsApp</p>
          <div className="footer-numbers"><a href="tel:+524432735543">443 273 5543</a><a href="tel:+523511277317">351 127 7317</a></div>
        </div>
        <nav aria-label="Redes sociales" className="footer-social">
          <a href="https://www.linkedin.com/company/144049091" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://www.instagram.com/cvil.abogados/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href="https://www.facebook.com/profile.php?id=61595686288951" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
        </nav>
      </div>
      <nav aria-label="Áreas de práctica" className="footer-areas">
        <a href="/abogados-corporativos-zamora">Empresas y socios</a>
        <a href="/derecho-corporativo-zamora">Contratos</a>
        <a href="/abogados-laborales-zamora">Relaciones laborales</a>
        <a href="/abogados-mercantiles-zamora">Cobros mercantiles</a>
        <a href="/abogados-penalistas-zamora">Asuntos penales</a>
        <a href="/blog">Guías legales</a>
      </nav>
      <div className="footer-bottom">
        <a href="https://maps.google.com/?cid=8710019042285162848" target="_blank" rel="noopener noreferrer">Suiza 721, piso 3 · La Luneta · Zamora, Michoacán · C.P. 59689 ↗</a>
        <div className="footer-legal"><span>© {new Date().getFullYear()} CVIL</span><a href="/aviso-de-privacidad">Privacidad</a></div>
      </div>
    </div>
  </footer>
);
export default Footer;
