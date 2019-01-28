import NewsItem from "./NewsItem";

export default class NewsGrid extends React.Component {
  render() {
    const { news, title } = this.props;

    return (
      <div className="news-container">
        <h3>{title}</h3>
        <div className="news">
          {news.map((item, index) => (
            <NewsItem {...item} key={index} />
          ))}
        </div>

        <style jsx>{`
          .news-container {
            padding: 50px 10%;
          }
          .news {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          h3 {
            color: #393e46;
          }
        `}</style>
      </div>
    );
  }
}
