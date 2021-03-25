import BlueCheckMark from '@/icons/BlueCheckMark';
import styles from './styles.module.css';

const Highlights = () => (
  <div className={`${styles.highlightsection} row`}>
    <div className="col-md-7 pr-5">
      <h4 className={styles.highlightheading}>
        Unmatched acess to amazing offers in product and services near you
      </h4>
      <div>
        <h6 className="pt-3">
          <BlueCheckMark />
          <span className={`${styles.highlightsubheading} pl-3`}>All our sellers are verified</span>
          <p className={styles.highlighttext}>
            We do not take your trust and security for granted why we ensure
            all the sellers on the platform are duly verified
          </p>
        </h6>
      </div>
      <div>
        <h6 className="pt-3">
          <BlueCheckMark />
          <span className={`${styles.highlightsubheading} pl-3`}>Access to millions of products and services</span>
          <p className={styles.highlighttext}>
            Find products and services you need in very close proximity to you.
          </p>
        </h6>
      </div>
      <div>
        <h6 className="pt-3">
          <BlueCheckMark />
          <span className={`${styles.highlightsubheading} pl-3`}>Anyone can sell and buy</span>
          <p className={styles.highlighttext}>
            We empower you with unfiltered access to a local market place
            to buy and sell services to people around you.
          </p>
        </h6>
      </div>
      <div>
        <h6 className="pt-3">
          <BlueCheckMark />
          <span className={`${styles.highlightsubheading} pl-3`}>Easy communication and link up</span>
          <p className={styles.highlighttext}>
            We have an inbuilt messaging system to discuss offers and link
            people up in safe open places across the country to trade.
          </p>
        </h6>
      </div>
    </div>
    <div className="col-md-5">
      <img alt="landing" src="/assets/images/highlights-image.png" className="img-fluid" />
    </div>
  </div>
);

export default Highlights;
