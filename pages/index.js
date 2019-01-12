import Layout from "../components/Layout";
import NewsGrid from "../components/NewsGrid";

const news = [
  {
    _id: 1,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 2,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 3,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 4,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 5,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 6,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 7,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 8,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 9,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  },
  {
    _id: 10,
    title: "Title",
    content: [
      "Con su experiencia en la faz económica, más allá de que su presente lo tiene ligado a dirigir los destinos de la Fundación Imagina Salta, el ex-funcionario provincial y candidato a gobernador, Carlos Parodi arremetió contra la actual gestión nacional, al mencionar que el país tiene un déficit fiscal donde más del 65% de los gastos del Estado están relacionados con planes sociales.",
      "En la entrevista en el programa De buena fuente (Marcela Jesús), Parodi enumeró las promesas sin cumplir de Cambiemos y recordó que Argentina es el país que más devaluó en el mundo, respecto al dólar, y salvo Venezuela, somos el país con más inflación, con mayor riesgo país, sin acceso al crédito internacional.",
      'Preocupado y hasta molesto, vaticinó que "para el 2019 es muy difícil esperar algo peor que esto, aunque no descarto que pueda ser así, porque es sumamente negativo el balance económico, porque se golpeó al asalariado que se la bancó y le puso el pecho, a pesar de que nos vienen chamuyando con lo del segundo semestre desde que asumieron".'
    ],
    image: "https://picsum.photos/620/340/?gravity=east",
    date: "2018/03/01",
    category: "Random"
  }
];

export default class extends React.Component {
  render() {
    return (
      <Layout title="Automatic News">
        <div className="banner" />
        <NewsGrid news={news} />
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
