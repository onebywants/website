import Link from 'next/link';

import styles from './page.module.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const principles = [
  {
    number: '01',
    title: 'Simple first',
    description: 'Start with a clear problem and solve it cleanly.',
  },
  {
    number: '02',
    title: 'Useful in real life',
    description: 'We focus on tools people can actually use.',
  },
  {
    number: '03',
    title: 'Built to last',
    description: 'Small products, but thoughtfully made.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>INDEPENDENT SOFTWARE COMPANY</p>
            <h1 className={styles.headline}>
              One want
              <br />
              at a time.
            </h1>
            <p className={styles.heroDescription}>
              We make small, practical software products for real everyday needs
              — one clear problem at a time.
            </p>
            <Link className={styles.secondaryAction} href="/about">
              About OneByWants
            </Link>
          </div>
          <div className={styles.symbolAccent}>
            <img
              alt=""
              className={styles.heroSymbol}
              src={`${basePath}/brand/onebywants-symbol.svg`}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="products-heading" className={styles.products}>
        <div className={styles.productsInner}>
          <div className={styles.sectionHeading}>
            <h2 id="products-heading">Products</h2>
            <p>Software products by OneByWants.</p>
          </div>
          <div className={styles.productRow}>
            <Link
              aria-label="PriShare 자세히 보기"
              className={styles.priShareCard}
              href="/products/prishare"
            >
              <div className={styles.productCopy}>
                <h3>PriShare</h3>
                <p>
                  Detect sensitive content on your photos and share a safer copy
                  — without changing the original.
                </p>
                <span className={styles.productLink}>Learn more&nbsp; →</span>
              </div>
              <img
                alt=""
                className={styles.priShareMark}
                src={`${basePath}/brand/prishare-mark.svg`}
              />
            </Link>
            <div className={styles.moreProducts}>
              <p className={styles.moreProductsLabel}>MORE PRODUCTS IN PROGRESS</p>
              <p>
                New ideas are tested one by one. Only the useful ones become
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-we-build-heading" className={styles.principles}>
        <div className={styles.principlesInner}>
          <h2 id="how-we-build-heading">How we build</h2>
          <div className={styles.principleGrid}>
            {principles.map((principle, index) => (
              <article className={styles.principle} key={principle.number}>
                <p
                  className={
                    index === 1 ? styles.principleNumberOrange : styles.principleNumber
                  }
                >
                  {principle.number}
                </p>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
