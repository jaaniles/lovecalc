import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class RootDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="fi">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// eslint-disable-next-line no-restricted-syntax
export default RootDocument;
