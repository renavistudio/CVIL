import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-offwhite text-charcoal p-4">
          <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-sm shadow-lg text-center">
            <h2 className="text-xl font-serif font-medium mb-4">Algo salió mal</h2>
            <p className="text-sm text-stone mb-6">
              Ocurrió un error inesperado al cargar la aplicación. Por favor, recarga la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gold hover:bg-obsidian text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-sm"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}

export default ErrorBoundary;
