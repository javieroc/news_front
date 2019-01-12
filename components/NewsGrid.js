import NewsItem from "./NewsItem";

export default class NewsGrid extends React.Component {
  render() {
    const { news } = this.props;

    return (
      <div className="news">
        {news.map(item => (
          <NewsItem {...item} key={item._id} />
        ))}

        <style jsx>{`
          .news {
            display: grid;
            grid-gap: 20px;
            padding: 50px 10%;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        `}</style>
      </div>
    );
  }
}
