import Link from "next/link";

export default class NewsItem extends React.Component {
  render() {
    const { _id, title, content, image, category, date } = this.props;

    return (
      <div className="news-item">
        <Link href={`/news?id=${_id}`} prefetch>
          <a>
            <img src={image} alt="" />
            <h2>{title}</h2>
          </a>
        </Link>

        <style jsx>{`
          .news-item {
            display: block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5em;
          }
          .news-item img {
            width: 100%;
          }
          .news-item a {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}
