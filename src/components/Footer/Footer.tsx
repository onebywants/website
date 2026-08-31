import Link from 'next/link';

import styles from './Footer.module.css';

const navigationItems = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.tagline}>One want at a time.</p>
          <p className={styles.copyright}>© OneByWants</p>
        </div>
        <nav aria-label="푸터 메뉴">
          <ul className={styles.navigation}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
