import styles from '../styles/Product.module.css'

function Product() {
    return ( 
      <div className={styles._container}>
          <div className={styles._filter}>
            <div className={styles._details}>
              <p style={{ margin: '0px' }}>Nike Air Jordan 1 Retro High OG</p>
            </div>
            <div className={styles._details2}>
              <p className={styles._details2Text}>R1500</p>
            </div>
          </div>
        </div>
     );
  }
  
  export default Product;