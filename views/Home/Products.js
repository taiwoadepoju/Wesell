import styles from './styles.module.css';

const Products = () => (
  <div className="row py-5 px-5">
    <div className={`${styles.filter} col-sm-4 col-xs-12 p-3`}>
      <p>Health, beauty &amp; wellness</p>
      <p>Home, Office furniture &amp; Appliances</p>
      <p>Computers</p>
      <p>Electronics</p>
      <p>Fashion</p>
      <hr className={styles.filterdivider} />
      <p className="text-center">View all product categories +</p>
    </div>
    <div className="col-sm-8 col-xs-12">
      <p>
        <img src="/assets/icons/star.png" className={`${styles.staricon} card-img-top`} alt="product" />
        <span className={`${styles.productsheader}`}>Top Selling Products</span>
      </p>
      <div className="row">
        <div className="col-md-3">
          <div className="card border-0">
            <img src="/assets/images/sample-product.png" className="card-img-top" alt="product" />
            <div className="card-body">
              <p className={`${styles.productname} card-text`}>Crossbody Bags</p>
              <p className={`${styles.productdesc}`}>Product listed by DJ Cuppy</p>
              <p className={`${styles.productprice}`}>NGN 150,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0">
            <img src="/assets/images/sample-product.png" className="card-img-top" alt="product" />
            <div className="card-body">
              <p className={`${styles.productname} card-text`}>Hobo Bags</p>
              <p className={`${styles.productdesc}`}>Product listed by DJ Cuppy</p>
              <p className={`${styles.productprice}`}>NGN 235,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0">
            <img src="/assets/images/sample-product.png" className="card-img-top" alt="product" />
            <div className="card-body">
              <p className={`${styles.productname} card-text`}>Clutch Bag</p>
              <p className={`${styles.productdesc}`}>Product listed by DJ Cuppy</p>
              <p className={`${styles.productprice}`}>NGN 175,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0">
            <img src="/assets/images/sample-product.png" className="card-img-top" alt="product" />
            <div className="card-body">
              <p className={`${styles.productname} card-text`}>Satchel</p>
              <p className={`${styles.productdesc}`}>Product listed by DJ Cuppy</p>
              <p className={`${styles.productprice}`}>NGN 815,000</p>
            </div>
          </div>
        </div>
      </div>

      <p>
        <img src="/assets/icons/star.png" className={`${styles.staricon} card-img-top`} alt="product" />
        <span className={`${styles.productsheader}`}>Top Selling Services</span>
      </p>
      <div className="row">
        <div className="col-md-3">
          <div className="card border-0">
            <img src="/assets/images/sample-product.png" className="card-img-top" alt="product" />
            <div className="card-body">
              <p className={`${styles.productname} card-text`}>Bag Making</p>
              <p className={`${styles.productdesc}`}>Product listed by DJ Cuppy</p>
              <p className={`${styles.productprice}`}>NGN 18,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0">
            <img src="/assets/images/sample-product.png" className="card-img-top" alt="product" />
            <div className="card-body">
              <p className={`${styles.productname} card-text`}>Bag Repair</p>
              <p className={`${styles.productdesc}`}>Product listed by DJ Cuppy</p>
              <p className={`${styles.productprice}`}>NGN 75,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0">
            <img src="/assets/images/sample-product.png" className="card-img-top" alt="product" />
            <div className="card-body">
              <p className={`${styles.productname} card-text`}>Water proofing</p>
              <p className={`${styles.productdesc}`}>Product listed by DJ Cuppy</p>
              <p className={`${styles.productprice}`}>NGN 65,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0">
            <img src="/assets/images/sample-product.png" className="card-img-top" alt="product" />
            <div className="card-body">
              <p className={`${styles.productname} card-text`}>Leather Shining</p>
              <p className={`${styles.productdesc}`}>Product listed by DJ Cuppy</p>
              <p className={`${styles.productprice}`}>NGN 15,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Products;
