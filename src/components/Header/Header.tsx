import Link from 'next/link';

import styles from './Header.module.css';

const navigationItems = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link aria-label="OneByWants 홈" className={styles.brand} href="/">
          <img
            alt=""
            className={styles.symbol}
            src="/brand/onebywants-symbol.svg"
          />
          <img
            alt=""
            className={styles.wordmark}
            src="/brand/onebywants-wordmark.svg"
          />
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className={styles.navigation}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
