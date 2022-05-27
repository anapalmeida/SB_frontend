import BarMenu from 'components/BarMenu';
import SectionTitle from 'components/SectionTitle';
import headerImage from 'assets/images/about-us-header.png';
import nutella from 'assets/brands/nutella.png';
import callebaut from 'assets/brands/callebaut.jpeg';
import moca from 'assets/brands/moca.png';
import './style.css';
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
      <BarMenu bgColor="#fff" home={false} />
      <main className="aboutUsContainer">
        <SectionTitle title="Nossa história" />

        <section className="mainSection">
          <img src={headerImage} alt="Sofistiquée Brigaderia" />
          <div>
            <p>
              Fundada em 2015 na cidade de Osasco, a Sofistiquée Brigaderia foi idealizada pela Sra.
              Valéria Neves que, por gostar deste segmento e já ter tido experiência na fabricação
              de doces, viu uma nova oportunidade de negócio no mercado de brigadeiros gourmet.
            </p>
          </div>
        </section>

        <section className="ingredientsSection">
          <SectionTitle margin={true} title="Usamos  ingredientes de altíssima qualidade" />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img className="iconOne" src={callebaut} alt="Callebaut" />
            <img className="iconTwo" src={nutella} alt="Nutella" />
          </div>
          <div>
            <img className="iconThree" src={moca} alt="Moça" />
          </div>
        </section>

        <div className="boxesWrapper">
          <section className="missionSection">
            <SectionTitle title="Nossa missão" />
            <div className="aboutUsTextContainer">
              <p style={{ marginTop: 0 }}>
                Trazer um sabor diferenciado ao universo dos brigadeiros, oferecendo produtos e
                experiências sofisticadas aos nossos clientes.
              </p>
            </div>
          </section>

          <section className="visionSection">
            <SectionTitle title="Nossa visão" />
            <div className="aboutUsTextContainer">
              <p style={{ marginTop: 0 }}>
                Ser reconhecida pela qualidade e distinção de nossos produtos no mercado de
                brigadeiros gourmet.
              </p>
            </div>
          </section>
        </div>

        <section className="orderSection">
          <SectionTitle title="Gostou? Conheça nossos produtos" />
          <Link to="/produtos">Faça sua encomenda</Link>
        </section>
      </main>

      <Footer home={false} />
    </>
  );
}
