import Layout from "../components/Layout";

export default class extends React.Component {
  render() {
    return (
      <Layout title="Automatic News">
        <div className="banner" />
        <h1>Hello world</h1>
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
