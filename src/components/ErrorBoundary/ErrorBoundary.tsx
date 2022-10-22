import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  error: Error | null;
}

interface ErrorBoundaryProp {
  children?: ReactNode;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProp,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div className='flex justify-center align-middle'>
          <h2>Something went wrong.</h2>
          <details className='whitespace-pre-wrap'>
            {this.state.error && this.state.error.toString()}
            <br />
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
