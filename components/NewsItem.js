import Link from "next/link";

export default class NewsItem extends React.Component {
  render() {
    const { _id, title, content, image, category, date } = this.props;

    return (
      <div className="news-item">
        <Link href={`/news?id=${_id}`} prefetch>
          <a>
            <span className="category">{category}</span>
            <img src={image} alt="" />
            <div className="content">
              <h2>{title}</h2>
              {content[0] && <p className="text-abstract">{content[0]}</p>}
            </div>
          </a>
        </Link>

        <style jsx>{`
          .news-item {
            position: relative;
            display: block;
            border-radius: 3px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5em;
          }
          .news-item .content {
            padding: 1em;
          }
          .news-item img {
            width: 100%;
          }
          .news-item a {
            display: block;
            margin-bottom: 0.5em;
            color: #393e46;
            text-decoration: none;
          }
          .text-abstract {
            overflow: hidden;
            display: -webkit-box;
            text-align: justify;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .category {
            position: absolute;
            top: 30px;
            background-color: #07080c;
            color: white;
            padding: 2px 5px;
          }
          .category:after {
            content: "";
            position: absolute;
            top: 0;
            left: 100%;
            height: 0;
            width: 0;
            border-width: 11px;
            border-style: solid;
            border-color: #07080c;
            border-top-color: transparent;
            border-bottom-color: transparent;
            border-right-color: transparent;
          }
        `}</style>
      </div>
    );
  }
}
