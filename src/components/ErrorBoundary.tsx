import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4">
          <div className="max-w-md w-full premium-card p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2"></div>
            
            <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-500/20">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>

            <h1 className="text-3xl font-black text-white mb-4 tracking-tighter">System Interruption</h1>
            <p className="text-slate-400 mb-10 text-sm leading-relaxed font-medium">
              We encountered an unexpected infrastructure error. Our engineering team has been notified.
            </p>

            <div className="space-y-4">
              <button 
                onClick={() => window.location.reload()}
                className="btn-primary w-full py-4 rounded-2xl flex items-center justify-center font-black group"
              >
                <RotateCcw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Retry Connection
              </button>
              
              <a 
                href="/"
                className="btn-secondary w-full py-4 rounded-2xl flex items-center justify-center font-black"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </a>
            </div>

            {(import.meta.env.DEV) && (
              <div className="mt-8 p-4 bg-navy-900 rounded-xl border border-white/5 text-left">
                <p className="text-[10px] text-red-400 font-mono break-words">
                  {this.state.error?.toString()}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
