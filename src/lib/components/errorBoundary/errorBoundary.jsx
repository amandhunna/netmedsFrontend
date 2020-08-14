import React, { Component } from "react";

const errorBoundary = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
      };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.log("error: ", error);
      console.log("info: ", info);
    }

    render() {
      if (this.state.hasError) {
        return (
          <h1
            style={{ height: "100vh" }}
            className="font-weight-bolder d-flex justify-content-center align-content-center align-items-center"
          >
            Something went wrong. Try reloading the page
          </h1>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default errorBoundary;
