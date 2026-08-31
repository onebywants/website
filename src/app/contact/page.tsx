import styles from './page.module.css';

export default function ContactPage() {
  return <>
    <section className={styles.mainSection}>
      <div className={styles.mainInner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>CONTACT</p>
          <h1>Say hello.</h1>
          <p>
            Questions about OneByWants or one of our products? Get in touch and we’ll point you in the right direction.
          </p>
        </div>
        <address className={styles.contactInfo}>
          <p className={styles.emailLabel}>EMAIL</p>
          <a href="mailto:hello@onebywants.com">hello@onebywants.com</a>
          <p>For product questions, partnerships, and general inquiries.</p>
        </address>
      </div>
    </section>

    <section className={styles.support}>
      <div className={styles.supportInner}>
        <h2>Support for a product?</h2>
        <p>
          As individual product pages are published, product-specific support and privacy information will live with each product.
        </p>
      </div>
    </section>
    <div aria-hidden="true" className={styles.footerSpacer} />
  </>;
}
