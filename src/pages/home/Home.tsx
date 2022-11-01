import CitiesForm from '../../components/cities-form/CitiesForm';
import Layout from '../../components/layout/Layout';
import './Home.css'

const Home = (): JSX.Element => {
  return (
    <div className="home-page">
      <Layout>
        <div className="home-page__form">
          <CitiesForm />
        </div>
      </Layout>
    </div>
  );
};

export default Home;