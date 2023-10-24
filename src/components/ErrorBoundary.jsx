import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    // Handle the error here, you can log it or display a custom error message
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return alert("Something Went Wrong");
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
