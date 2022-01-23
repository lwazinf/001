import styles from '../styles/Product.module.css'

function Products() {
  return (
    <div className={styles._container}>
      <div className={styles._scrollContainer}>
        <div style={{ height: '56px' }} />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <div style={{ height: '97px' }} />
      </div>
      <div className={styles._fade0} />
      <div className={styles._fade1} />
    </div>
  );
}

export default Products;

function Product() {
  return (
    <div className={styles._prodContainer}>
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