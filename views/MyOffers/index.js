/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import styles from './styles.module.css';
import BuyOffers from './BuyOffers';
import SellOffers from './SellOffers';

const MyOffers = () => {
  const [selectSelling, setSelectSelling] = useState(false);

  return (
    <div className="container pt-5">
      <h3 className={`${styles.title}`}>My Offers</h3>
      <div className={`${styles.buysellheading} row pt-5`}>
        <div className="col-md-2 col-sm-6 col-xs-6">
          <h3
            className={`${styles.title} ${styles.hover} ${!selectSelling ? `${styles.selectedtext}` : ''}`}
            onClick={() => setSelectSelling(false)}
          >
            Buying
          </h3>
        </div>
        <div className="col-md-2 col-sm-6 col-xs-6">
          <h3
            className={`${styles.title} ${styles.hover} ${selectSelling ? `${styles.selectedtext}` : ''}`}
            onClick={() => setSelectSelling(true)}
          >
            Selling
          </h3>
        </div>
      </div>

      <div>
        {selectSelling ? <SellOffers />
          : <BuyOffers />}
      </div>
    </div>
  );
};

export default MyOffers;
