import "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/Layout";
import NewsGrid from "../components/NewsGrid";
import { fetchNews } from "../services/api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      news: props.news,
      page: props.page,
      per_page: props.per_page,
      pages: props.pages
    };
  }

  static async getInitialProps({ res }) {
    try {
      const { data, ...others } = await fetchNews({ page: 1, per_page: 12 });

      return { news: data, ...others, statusCode: 200 };
    } catch (e) {
      res.statusCode = 503;
      return { news: null, statusCode: 503 };
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  handleScroll = () => {
    const { loading, page, pages, per_page, news } = this.state;

    if (
      window.scrollY + window.innerHeight + 50 >= document.body.offsetHeight &&
      !loading &&
      page < pages
    ) {
      this.setState({ loading: true, page: page + 1 }, () => {
        this.updateNews();
      });
    }
  };

  updateNews = async () => {
    const { page, per_page, news } = this.state;
    const { data, ...others } = await fetchNews({ page, per_page });

    this.setState({
      loading: false,
      news: [...news, ...data],
      ...others
    });
  };

  render() {
    const { statusCode } = this.props;
    const { news, loading } = this.state;

    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="Automatic News">
        <div className="banner" />
        <NewsGrid news={news} title="Last News" />
        {loading && <h3 className="loading">Loading...</h3>}
        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-image: url("/static/banner.jpg");
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
          .loading {
            text-align: center;
          }
        `}</style>
      </Layout>
    );
  }
}
