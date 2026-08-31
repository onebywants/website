import styles from './page.module.css';

const values = [
  ['Simple first', 'Start with a clear problem and solve it cleanly.'],
  ['Useful in real life', 'Build for situations people actually encounter.'],
  ['Made with care', 'Small products still deserve thoughtful details.'],
];

export default function AboutPage() {
  return <>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.kicker}>ABOUT ONEBYWANTS</p>
        <h1>One want at a time.</h1>
        <p>
          OneByWants starts with small wants — things that feel inconvenient, repetitive, unclear, or simply could be better. We turn those wants into focused software products, one by one.
        </p>
      </div>
    </section>

    <section className={styles.story} aria-labelledby="why-the-name">
      <div className={styles.storyInner}>
        <p className={styles.kicker} id="why-the-name">WHY THE NAME</p>
        <div className={styles.storyCopy}>
          <h2>A product does not have to solve everything.</h2>
          <p>
            Sometimes one clear want is enough reason to build something useful. OneByWants is built around that idea: notice a real need, understand it well, and make one focused product for it.
          </p>
        </div>
      </div>
    </section>

    <section className={styles.values} aria-labelledby="values-heading">
      <div className={styles.valuesInner}>
        <p className={styles.kicker} id="values-heading">WHAT WE VALUE</p>
        <div className={styles.valueGrid}>
          {values.map(([title, description]) => (
            <article className={styles.value} key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>;
}
