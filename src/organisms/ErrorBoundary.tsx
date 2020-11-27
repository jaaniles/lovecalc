import { Component } from "react";

import { GenericErrorPage } from "~/organisms/GenericErrorPage";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error: Error): void {
    this.setState({ hasError: true });

    console.error("Page crashed, catched in wrapper <ErrorBoundary />", error);
  }

  render(): JSX.Element {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <GenericErrorPage />;
    }

    return <>{children}</>;
  }
}
