import React, { ReactNode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App, { preparePage } from './App';
import './index.css';
import { setTranslationMap } from './localize';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2>Algo salió mal.</h2>
          <p>Por favor, recargue la página.</p>
          <button onClick={() => window.location.reload()} style={{ padding: '0.5rem 1rem', marginTop: '1rem', cursor: 'pointer' }}>Recargar</button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
async function start() {
  if (!rootElement) return;
  if (window.location.pathname === '/en' || window.location.pathname.startsWith('/en/')) {
    const english = await import('./data/en-translations.json');
    setTranslationMap(english.default);
  }
  await preparePage(window.location.pathname);
  const application = (
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  if (rootElement.hasChildNodes() && document.documentElement.lang === 'es-MX') {
    hydrateRoot(rootElement, application);
  } else {
    createRoot(rootElement).render(application);
  }
}

void start().catch((error) => {
  // A failed chunk must not erase usable server-rendered content and links.
  console.error('Unable to activate page; static content preserved.', error);
});
