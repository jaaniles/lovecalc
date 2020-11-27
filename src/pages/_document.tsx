import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class RootDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render(): JSX.Element {
    return (
      <Html lang="fi">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
