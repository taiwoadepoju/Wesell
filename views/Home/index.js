import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from 'components/Footer';
import ProductHeader from 'components/ProductHeader';
import { Form } from 'react-bootstrap';
import styles from './styles.module.css';
import Highlights from './Highlights';
import SellAndBuySection from './SellAndBuySection';
import Products from './Products';

const Home = () => (
  <section>
    <section className={`${styles.jumbotron}`}>
      <Head>
        <title>Wesell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={`${styles.maintext} text-white`}>Find anything, anywhere</h1>
      <p className={`${styles.subtitletext} text-white text-lg font-thin`}>
        Get the best deals on goods and services from
        trustworthy and verified sellers very close to you.
      </p>

      <div className="py-5">
        <div className={styles.inputsection}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={styles.searchlabel}>Goods and Services</Form.Label>
            <Form.Control type="text" placeholder="What are you looking for?" className={styles.input} />
          </Form.Group>
          <span className={styles.divider} />
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={styles.searchlabel}>Search area</Form.Label>
            <Form.Control type="text" placeholder="Whare are you located?" className={styles.input} />
          </Form.Group>
          <div className={styles.searchiconsection}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchicon} />
          </div>
        </div>
      </div>
    </section>
    <ProductHeader />
    <Products />
    <Highlights />
    <SellAndBuySection />
    <Footer />
  </section>

);

export default Home;
