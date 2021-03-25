import styles from './styles.module.css';

const BuyOffers = () => (
  <div>
    <h4 className={`${styles.titlealt} text-center pt-5`}>
      You have made no offer for anything yet
    </h4>
    <div className="pt-5">
      <img
        src="/assets/icons/empty-cart.png"
        className={`${styles.emptycart} img-fluid mx-auto d-block`}
        alt="empty cart"
      />
    </div>
    <div className="row mt-4 ml-1 justify-content-center p-5">
      <button
        type="button"
        className={`${styles.offerbutton} btn btn-primary btn-block w-25`}
      >
        Buy Something
      </button>
    </div>
  </div>
);

export default BuyOffers;
