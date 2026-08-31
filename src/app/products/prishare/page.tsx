import styles from './page.module.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const features = [
  {
    number: '01',
    title: 'Detect',
    description: 'Find faces and text that may contain private information.',
  },
  {
    number: '02',
    title: 'Hide',
    description: 'Blur or redact selected areas before export.',
  },
  {
    number: '03',
    title: 'Share',
    description: 'Create a safer copy while leaving the original untouched.',
  },
];

export default function PriSharePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>PRODUCT / PRISHARE</p>
            <h1>
              Share photos.
              <br />
              Keep private things
              <br />
              private.
            </h1>
            <p className={styles.introduction}>
              PriShare helps you find and hide faces, text, and other sensitive
              details before sharing a photo — with privacy-focused processing on
              your device.
            </p>
            <p className={styles.status}>Coming soon</p>
          </div>
          <div className={styles.productVisual}>
            <div className={styles.priShareLogo}>
              <img
                alt=""
                className={styles.priShareSymbol}
                src={`${basePath}/brand/prishare-symbol.svg`}
              />
              <img
                alt="PriShare"
                className={styles.priShareWordmark}
                src={`${basePath}/brand/prishare-wordmark.svg`}
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="what-it-does" className={styles.features}>
        <div className={styles.featuresInner}>
          <p className={styles.kicker}>WHAT IT DOES</p>
          <h2 id="what-it-does">
            Privacy before sharing,
            <br />
            without extra complexity.
          </h2>
          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article className={styles.feature} key={feature.number}>
                <p className={styles.featureNumber}>{feature.number}</p>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="privacy-first" className={styles.privacy}>
        <div className={styles.privacyInner}>
          <div className={styles.privacyCopy}>
            <p className={styles.kicker}>PRIVACY FIRST</p>
            <h2 id="privacy-first">
              Designed to keep photo processing close to you.
            </h2>
            <p>
              Core detection and editing are designed around on-device processing,
              so the product can help protect what you share without making
              upload-first behavior the default.
            </p>
          </div>
          <div aria-hidden="true" className={styles.privacyAccent} />
        </div>
      </section>
    </>
  );
}
