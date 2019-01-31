import Layout from "../components/Layout";

const data = {
  _id: {
    $oid: "5c4f98b3cf907c0026a79eed"
  },
  title:
    "Denuncian que una comunidad Wichi no tiene servicios básicos y que el intendente se esconde en Salta",
  content: [
    'Engaño, traición, dolor y desesperanza, estas son algunas de las cosas que sienten los miembros de la comunidad Wichi del "Algarrobal", en localidad de Pichanal, cada vez que se acuerdan del intendente Julio Antonio Jalit.',
    "Y es que el jefe comunal, hace un tiempo se acercó hasta el paraje ?El Algarrobal', para poder charlar con los originarios de la zona y ofrecerles una mejor calidad de vida, a cambio de que abandonaran sus tierras y se fueran a vivir directamente a la ciudad norteña.",
    "Los miembros de la comunidad aceptaron, pero con el paso del tiempo se dieron cuenta que dichas promesas nunca fueron del todo cumplidas. Los ubicaron eso sí, en un terreno que da para la parte trasera del ferrocarril, a muy pocos metros del cementerio. Pero nunca les cumplieron con la construcción de cloacas, alumbrado público, mucho menos una conexión de agua.",
    "Hoy, la población originaria se encuentra harta de tanta indiferencia, por lo cual fueron a pararse afuera de la intendencia para exigirle a Jalit que los atienda de manera personal.",
    " ",
    '"Es la única forma para que se vea nuestro reclamo, ya que sino el intendente sólo se dedica a irse de viaje a Salta" señala un joven bastante molesto.',
    "En una conversación exclusiva para Que Pasa Salta, el presidente del Concejo Deliberante, Facundo Monteros, aseguró que ciertamente el pedido de la comunidad originaria es legítimo, ya que durante el año pasado, pidieron cinco pedidos de informes, pero nunca tuvieron una respuesta del intendente, ya que se encuentra siempre de viaje a la capital salteña.",
    ""
  ],
  category: "Política",
  image:
    "https://www.quepasasalta.com.ar/files/image/86/86513/5c4f8d70a1754_1180_664!.jpg?s=76428ca5115aef2302149a2b99c99e95&d=1548717611",
  date: {
    $date: 1548720307969
  }
};

export default class extends React.Component {
  render() {
    const { title, content, category, image, date } = data;
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
