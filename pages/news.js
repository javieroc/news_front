import Layout from "../components/Layout";
import { fetchNew } from "../services/api";

export default class extends React.Component {
  static async getInitialProps({ query, res }) {
    try {
      const { id } = query;
      const { data } = await fetchNew(id);

      return { data, statusCode: 200 };
    } catch (e) {
      res.statusCode = 503;
      return { data: null, statusCode: 503 };
    }
  }

  render() {
    const { title, content, category, image, date } = this.props.data;
    const newsBody = content.map(item => <p>{item}</p>);

    return (
      <Layout title={title}>
        <div className="news-detail">
          <span className="news-detail-category">{category}</span>
          <h1>{title}</h1>
          <div className="news-detail-content">
            <img src={image || "/static/default.jpg"} alt="" />
            <div className="news-detail-body">{newsBody}</div>
          </div>
        </div>

        <style jsx>{`
          .news-detail {
            width: 80%;
            margin: 30px auto;
          }
          .news-detail h1 {
            text-align: justify;
          }
          .news-detail span {
            background-color: #07080c;
            color: white;
            font-size: 22px;
            padding: 5px 8px;
          }
          .news-detail-content {
            background: white;
          }
          .news-detail-content img {
            width: 100%;
          }
          .news-detail-body {
            padding: 10px 20px;
            font-size: 18px;
          }
        `}</style>
      </Layout>
    );
  }
}
