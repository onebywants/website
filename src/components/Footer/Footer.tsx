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
          <div className={styles.businessInfo}>
            <p>회사명 : 원바이원츠</p>
            <p>사업자등록번호 : 697-04-03885</p>
            <p>통신판매업신고 : 제2026-서울강동-1648</p>
            <p>이메일 : <a href="mailto:onebywants@gmail.com">onebywants@gmail.com</a></p>
            <p>대표자 : 우제경</p>
          </div>
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
