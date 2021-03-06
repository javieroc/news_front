import Link from "next/link";
import Head from "next/head";

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <header>
          <Link href="/">
            <a>Automatic News</a>
          </Link>
        </header>

        {children}

        <footer>
          <span>By Dev&Coffee 2019</span>
        </footer>

        <style jsx>{`
          header {
            color: white;
            background: #005c85;
            padding: 15px;
            text-align: center;
          }
          header a {
            color: #fff4e0;
            font-size: 20px;
            font-weight: bold;
            text-decoration: none;
          }
          footer {
            color: #fff4e0;
            background: #393e46;
            padding: 5px;
            text-align: right;
          }
        `}</style>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: #eee;
          }
        `}</style>
      </div>
    );
  }
}
