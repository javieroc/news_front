import "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/Layout";
import NewsGrid from "../components/NewsGrid";

export default class extends React.Component {
  static async getInitialProps({ res }) {
    try {
      const req = await fetch("http://142.93.82.30:3000/news");
      const { data } = await req.json();

      return { news: data, statusCode: 200 };
    } catch (e) {
      res.statusCode = 503;
      return { news: null, statusCode: 503 };
    }
  }

  render() {
    const { news, statusCode } = this.props;

    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="Automatic News">
        <div className="banner" />
        <NewsGrid news={news} title="Last News" />
        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-image: url("/static/banner.jpg");
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
        `}</style>
      </Layout>
    );
  }
}
