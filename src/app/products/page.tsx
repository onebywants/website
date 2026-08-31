import Link from 'next/link';

import styles from './page.module.css';

export default function ProductsPage() {
  return <>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.kicker}>PRODUCTS</p>
        <h1>Small software.<br />Clear purpose.</h1>
        <p className={styles.introduction}>
          Focused products built around everyday needs — each designed to do one job well.
        </p>
      </div>
    </section>

    <section className={styles.products} aria-label="OneByWants 제품">
      <div className={styles.productsInner}>
        <div className={styles.divider} />
        <article className={styles.productRow}>
          <p className={styles.productNumber}>01</p>
          <div className={styles.productCopy}>
            <h2>PriShare</h2>
            <p>
              Privacy-first photo sharing for everyday use. Detect sensitive areas on-device and share safer copies without changing the original.
            </p>
          </div>
          <Link className={styles.productLink} href="/products/prishare">
            View PriShare&nbsp; →
          </Link>
        </article>
        <div className={styles.divider} />
        <div className={styles.futureNote}>
          <p>More products will appear here as they are ready.</p>
          <p>One want at a time.</p>
        </div>
      </div>
    </section>
    <div aria-hidden="true" className={styles.footerSpacer} />
  </>;
}
