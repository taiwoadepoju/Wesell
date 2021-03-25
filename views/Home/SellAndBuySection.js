import { useRouter } from 'next/router';
import styles from './styles.module.css';

const SellAndBuySection = () => {
  const router = useRouter();
  return (
    <div className={`${styles.sellandbuysection} row pt-5 pl-5 justify-content-center`}>
      <div className="col-md-5 pl-5 pt-5">
        <h1 className={styles.sellandbuytitle}>Sell and Buy on Wesell</h1>
        <p>
          Join our increasing network of trustworthy and verified
          sellers and buyers across the country.
        </p>
        <div className="row mt-4 ml-1">
          <button
            type="button"
            className={`${styles.submitbutton} btn btn-primary btn-block w-50`}
            onClick={() => router.push('/auth')}
          >
            Sign Up
          </button>
        </div>
        <p className="pt-3">Find how more about the platform &gt;</p>
      </div>
      <div className="col-md-5 offset-md-2">
        <img alt="landing" src="/assets/images/sell-and-buy-image.png" className={`${styles.sellandbuyimage} img-fluid pr-`} />
      </div>
    </div>
  );
};

export default SellAndBuySection;
