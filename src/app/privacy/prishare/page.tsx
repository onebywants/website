import type { Metadata } from 'next';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'PriShare Privacy Policy',
  description: 'PriShare 개인정보처리방침 및 Privacy Policy',
};

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

export default function PriSharePrivacyPolicyPage() {
  return (
    <article className={styles.page}>
      <header className={styles.pageHeader}>
        <p className={styles.kicker}>PRISHARE / PRIVACY</p>
        <h1>PriShare Privacy Policy</h1>
      </header>

      <div className={styles.policySections}>
        <section aria-labelledby="korean-policy" className={styles.policySection}>
          <div className={styles.sectionHeader}>
            <h2 id="korean-policy">PriShare 개인정보처리방침</h2>
            <p className={styles.effectiveDate}>시행일: 2026년 9월 16일</p>
          </div>

          <div className={styles.policyBody}>
            <p>
              OneByWants(이하 &quot;개발자&quot;)는 PriShare(이하 &quot;앱&quot;) 이용자의 개인정보를 중요하게 생각하며, 관련 법령 및 Google Play 정책에 따라 개인정보를 안전하게 처리하기 위해 노력합니다.
            </p>
            <p>
              본 개인정보처리방침은 PriShare가 어떤 정보에 접근하고, 어떤 정보를 수집·이용·공유하는지 설명합니다.
            </p>

            <h3>1. 앱의 개인정보 처리 원칙</h3>
            <p>
              PriShare는 사용자가 사진을 공유하기 전에 사진에 포함된 개인정보를 확인하고 가릴 수 있도록 지원하는 앱입니다.
            </p>
            <p>사진 분석 및 편집 기능은 원칙적으로 사용자의 기기 내에서 처리됩니다.</p>
            <p>
              PriShare는 사용자가 선택한 사진의 원본 이미지 또는 편집된 이미지 자체를 OneByWants의 서버로 업로드하거나 저장하지 않습니다.
            </p>

            <h3>2. 앱이 접근하는 정보</h3>
            <h4>2.1 사용자가 선택한 사진</h4>
            <p>
              PriShare는 사용자가 Android Photo Picker 또는 Android 공유 기능을 통해 직접 선택하거나 전달한 사진에 접근합니다.
            </p>
            <p>사진은 다음 기능을 제공하기 위해 사용됩니다.</p>
            <ul>
              <li>얼굴 탐지</li>
              <li>이미지 내 텍스트 탐지</li>
              <li>개인정보로 추정되는 텍스트 탐지</li>
              <li>흐림 및 가림 처리</li>
              <li>사진의 EXIF 및 위치정보 등 메타데이터 제거</li>
              <li>안전하게 처리된 이미지 생성, 저장 및 공유</li>
            </ul>
            <p>이러한 이미지 분석 및 편집 작업은 사용자의 기기 내에서 수행됩니다.</p>
            <p>
              OneByWants는 사용자가 처리하는 사진 또는 사진에 포함된 얼굴, 문자, 위치정보 등의 내용을 자체 서버로 전송하거나 저장하지 않습니다.
            </p>

            <h3>3. 사진 메타데이터 처리</h3>
            <p>PriShare는 사용자가 선택한 사진에 포함된 다음과 같은 메타데이터를 확인할 수 있습니다.</p>
            <ul>
              <li>GPS 위치정보</li>
              <li>촬영 일시</li>
              <li>기기 제조사 및 모델</li>
              <li>소프트웨어 정보</li>
              <li>렌즈 정보</li>
              <li>이미지 방향 및 크기 정보</li>
            </ul>
            <p>
              이 정보는 안전한 공유 이미지를 생성하기 위해 확인되며, 결과 이미지에서는 개인정보 보호를 위해 관련 메타데이터가 제거됩니다.
            </p>
            <p>PriShare는 이러한 메타데이터를 OneByWants의 서버로 전송하거나 저장하지 않습니다.</p>

            <h3>4. 얼굴 및 문자 정보 처리</h3>
            <p>PriShare는 사진에서 얼굴 및 텍스트 영역을 탐지하기 위해 기기 내 머신러닝 기능을 사용할 수 있습니다.</p>
            <p>탐지된 얼굴, 문자, 개인정보 추정 결과는 사진 편집 기능을 제공하기 위한 목적으로만 사용됩니다.</p>
            <p>해당 정보는 OneByWants의 서버로 전송되거나 별도로 저장되지 않습니다.</p>

            <h3>5. 광고 서비스</h3>
            <p>PriShare의 무료 버전에서는 Google AdMob을 이용하여 광고를 제공할 수 있습니다.</p>
            <p>
              Google Mobile Ads SDK는 광고 제공, 광고 성과 측정, 분석 및 부정 사용 방지 등을 위해 다음과 같은 정보를 자동으로 수집하거나 처리할 수 있습니다.
            </p>
            <ul>
              <li>IP 주소</li>
              <li>앱 실행, 화면 또는 광고와의 상호작용 정보</li>
              <li>앱 및 SDK의 성능·진단 정보</li>
              <li>Android 광고 ID</li>
              <li>앱 세트 ID 등 기기 또는 앱 식별자</li>
            </ul>
            <p>이 정보는 Google의 정책에 따라 Google에 의해 처리될 수 있습니다.</p>
            <p>PriShare Pro 이용자에게는 앱 내 광고가 제공되지 않을 수 있습니다.</p>
            <p>
              광고와 관련한 Google의 개인정보 처리에 관한 자세한 사항은{' '}
              <ExternalLink href="https://policies.google.com/privacy">Google의 개인정보처리방침</ExternalLink> 및 광고 관련 정책을 확인하시기 바랍니다.
            </p>

            <h3>6. 인앱결제</h3>
            <p>PriShare는 PriShare Pro 등의 유료 기능을 제공하기 위해 Google Play의 인앱결제 시스템을 사용할 수 있습니다.</p>
            <p>
              결제 과정은 Google Play를 통해 처리되며, OneByWants는 사용자의 신용카드 번호나 은행계좌 정보 등 직접적인 결제 수단 정보를 수집하거나 저장하지 않습니다.
            </p>
            <p>앱은 구매 여부를 확인하고 Pro 기능을 제공하기 위해 Google Play가 제공하는 구매 상태 및 상품 정보를 사용할 수 있습니다.</p>
            <p>결제와 관련한 개인정보 처리는 Google Play의 개인정보처리방침 및 결제 정책의 적용을 받을 수 있습니다.</p>

            <h3>7. 개인정보의 제3자 제공 및 외부 서비스</h3>
            <p>OneByWants는 사용자의 사진 또는 사진에서 탐지된 얼굴·문자·개인정보 내용을 제3자에게 판매하거나 제공하지 않습니다.</p>
            <p>다만 앱에서 사용하는 다음 외부 서비스는 서비스 제공 과정에서 자체적으로 일부 정보를 처리할 수 있습니다.</p>
            <ul className={styles.serviceList}>
              <li>
                <strong>Google AdMob</strong>
                <ul>
                  <li>광고 제공</li>
                  <li>광고 성과 측정</li>
                  <li>분석</li>
                  <li>부정 사용 방지</li>
                </ul>
              </li>
              <li>
                <strong>Google Play Billing</strong>
                <ul>
                  <li>인앱결제 및 구매 상태 확인</li>
                </ul>
              </li>
            </ul>
            <p>각 서비스에서 처리하는 정보는 해당 서비스 제공자의 개인정보처리방침에 따라 관리됩니다.</p>

            <h3>8. 개인정보 보관 및 삭제</h3>
            <p>PriShare는 사용자가 편집하는 사진, 얼굴 탐지 결과, 문자 탐지 결과 또는 개인정보 탐지 결과를 OneByWants의 서버에 저장하지 않습니다.</p>
            <p>편집 과정에서 생성되는 임시 이미지 파일은 앱의 로컬 캐시 영역에 저장될 수 있으며, 앱 사용 과정 또는 운영체제의 캐시 관리에 따라 삭제될 수 있습니다.</p>
            <p>사용자가 직접 저장한 결과 이미지는 사용자의 기기 저장공간에 저장되며, 사용자가 직접 삭제할 수 있습니다.</p>
            <p>앱 설정값 등 일부 정보는 사용자의 기기 내에 저장될 수 있으며, 앱 삭제 또는 앱 데이터 삭제를 통해 제거할 수 있습니다.</p>
            <p>광고 및 Google Play 결제와 관련하여 Google이 처리하는 정보의 보관 및 삭제 정책은 Google의 관련 정책을 따릅니다.</p>

            <h3>9. 개인정보 보호를 위한 조치</h3>
            <p>PriShare는 개인정보 보호를 위해 다음과 같은 방식을 사용합니다.</p>
            <ul>
              <li>사진 분석 및 편집을 기기 내에서 처리</li>
              <li>원본 사진을 직접 수정하지 않음</li>
              <li>안전한 공유용 이미지를 별도로 생성</li>
              <li>결과 이미지에서 위치정보 및 주요 EXIF 메타데이터 제거</li>
              <li>사진을 OneByWants의 서버로 업로드하지 않음</li>
            </ul>

            <h3>10. 사용자 계정</h3>
            <p>PriShare는 자체 회원가입 또는 사용자 계정 기능을 제공하지 않습니다.</p>
            <p>따라서 OneByWants가 별도의 PriShare 사용자 계정이나 계정 기반 개인정보를 보관하지 않습니다.</p>
            <p>Google Play 구매 및 광고와 관련된 Google 계정 정보는 Google의 정책에 따라 Google이 처리합니다.</p>

            <h3>11. 아동의 개인정보</h3>
            <p>PriShare는 아동의 개인정보를 의도적으로 직접 수집하는 서비스를 제공하지 않습니다.</p>
            <p>사용자가 사진을 선택하여 처리하는 경우 해당 사진은 사용자의 기기 내에서 처리되며 OneByWants 서버로 전송되지 않습니다.</p>

            <h3>12. 개인정보처리방침의 변경</h3>
            <p>앱 기능, 관련 법령 또는 외부 서비스의 정책이 변경되는 경우 본 개인정보처리방침이 변경될 수 있습니다.</p>
            <p>중요한 변경사항이 있는 경우 앱, 스토어 또는 관련 웹페이지 등을 통해 안내할 수 있습니다.</p>

            <h3>13. 문의</h3>
            <p>PriShare의 개인정보 처리와 관련한 문의는 아래 연락처로 문의할 수 있습니다.</p>
            <address className={styles.contact}>
              <p>개발자: OneByWants</p>
              <p>이메일: <a href="mailto:onebywants@gmail.com">onebywants@gmail.com</a></p>
              <p>웹사이트: <a href="https://onebywants.com">https://onebywants.com</a></p>
            </address>
          </div>
        </section>

        <section aria-labelledby="english-policy" className={styles.policySection}>
          <div className={styles.sectionHeader}>
            <h2 id="english-policy">PriShare Privacy Policy</h2>
            <p className={styles.effectiveDate}>Effective Date: September 16, 2026</p>
          </div>

          <div className={styles.policyBody}>
            <p>
              OneByWants (the “Developer”) values the privacy of PriShare (the “App”) users and strives to process personal information safely in accordance with applicable laws and Google Play policies.
            </p>
            <p>This Privacy Policy explains what information PriShare accesses and how it collects, uses, and shares that information.</p>

            <h3>1. Privacy Principles</h3>
            <p>PriShare helps users review and hide personal information contained in photos before sharing them.</p>
            <p>Photo analysis and editing features are processed on the user’s device in principle.</p>
            <p>PriShare does not upload or store the original or edited photos selected by the user on OneByWants servers.</p>

            <h3>2. Information Accessed by the App</h3>
            <h4>2.1 Photos Selected by the User</h4>
            <p>PriShare accesses photos that the user directly selects or shares through Android Photo Picker or Android sharing features.</p>
            <p>Photos are used to provide the following features:</p>
            <ul>
              <li>Face detection</li>
              <li>Text detection in images</li>
              <li>Detection of text that may contain personal information</li>
              <li>Blurring and redaction</li>
              <li>Removal of photo metadata, including EXIF data and location information</li>
              <li>Creation, saving, and sharing of safely processed images</li>
            </ul>
            <p>These image analysis and editing tasks are performed on the user’s device.</p>
            <p>OneByWants does not transmit or store the photos processed by the user, or the faces, text, location information, or other contents contained in those photos, on its own servers.</p>

            <h3>3. Photo Metadata Processing</h3>
            <p>PriShare may access the following types of metadata contained in photos selected by the user:</p>
            <ul>
              <li>GPS location information</li>
              <li>Date and time the photo was taken</li>
              <li>Device manufacturer and model</li>
              <li>Software information</li>
              <li>Lens information</li>
              <li>Image orientation and dimensions</li>
            </ul>
            <p>This information is accessed to create a safe-to-share image, and relevant metadata is removed from the resulting image to protect privacy.</p>
            <p>PriShare does not transmit or store this metadata on OneByWants servers.</p>

            <h3>4. Face and Text Processing</h3>
            <p>PriShare may use on-device machine learning features to detect faces and text areas in photos.</p>
            <p>Detected faces, text, and results identified as potentially containing personal information are used only to provide photo editing features.</p>
            <p>This information is not transmitted to or separately stored on OneByWants servers.</p>

            <h3>5. Advertising Services</h3>
            <p>The free version of PriShare may provide advertisements through Google AdMob.</p>
            <p>For purposes such as serving ads, measuring ad performance, analytics, and preventing abuse, the Google Mobile Ads SDK may automatically collect or process the following information:</p>
            <ul>
              <li>IP address</li>
              <li>Information about app launches and interactions with screens or advertisements</li>
              <li>App and SDK performance and diagnostic information</li>
              <li>Android Advertising ID</li>
              <li>Device or app identifiers, such as the App Set ID</li>
            </ul>
            <p>This information may be processed by Google in accordance with Google’s policies.</p>
            <p>In-app advertisements may not be provided to PriShare Pro users.</p>
            <p>
              For more information about Google’s processing of personal information related to advertising, please review{' '}
              <ExternalLink href="https://policies.google.com/privacy">Google’s Privacy Policy</ExternalLink> and its advertising-related policies.
            </p>

            <h3>6. In-App Purchases</h3>
            <p>PriShare may use Google Play’s in-app billing system to provide paid features such as PriShare Pro.</p>
            <p>Payments are processed through Google Play. OneByWants does not collect or store direct payment instrument information such as credit card numbers or bank account information.</p>
            <p>The App may use purchase status and product information provided by Google Play to verify purchases and provide Pro features.</p>
            <p>Personal information processing related to payments may be subject to Google Play’s Privacy Policy and payment policies.</p>

            <h3>7. Third-Party Services and Information Sharing</h3>
            <p>OneByWants does not sell or provide users’ photos, or faces, text, or personal information detected in photos, to third parties.</p>
            <p>However, the following external services used by the App may independently process some information as part of providing their services.</p>
            <ul className={styles.serviceList}>
              <li>
                <strong>Google AdMob</strong>
                <ul>
                  <li>Serving advertisements</li>
                  <li>Measuring ad performance</li>
                  <li>Analytics</li>
                  <li>Preventing abuse</li>
                </ul>
              </li>
              <li>
                <strong>Google Play Billing</strong>
                <ul>
                  <li>Processing in-app purchases and verifying purchase status</li>
                </ul>
              </li>
            </ul>
            <p>Information processed by each service is managed in accordance with the privacy policy of that service provider.</p>

            <h3>8. Data Retention and Deletion</h3>
            <p>PriShare does not store photos edited by the user, face detection results, text detection results, or personal information detection results on OneByWants servers.</p>
            <p>Temporary image files created during editing may be stored in the App’s local cache area and may be deleted during use of the App or through the operating system’s cache management.</p>
            <p>Resulting images saved directly by the user are stored in the user’s device storage and can be deleted by the user.</p>
            <p>Some information, such as App settings, may be stored on the user’s device and can be removed by uninstalling the App or clearing its data.</p>
            <p>Google’s applicable policies govern the retention and deletion of information processed by Google in connection with advertising and Google Play payments.</p>

            <h3>9. Privacy Protection Measures</h3>
            <p>PriShare uses the following measures to protect privacy:</p>
            <ul>
              <li>Processing photo analysis and editing on the device</li>
              <li>Leaving the original photo unmodified</li>
              <li>Creating a separate image for safe sharing</li>
              <li>Removing location information and major EXIF metadata from resulting images</li>
              <li>Not uploading photos to OneByWants servers</li>
            </ul>

            <h3>10. User Accounts</h3>
            <p>PriShare does not provide its own sign-up or user account features.</p>
            <p>Accordingly, OneByWants does not retain a separate PriShare user account or account-based personal information.</p>
            <p>Google processes Google Account information related to Google Play purchases and advertising in accordance with Google’s policies.</p>

            <h3>11. Children’s Privacy</h3>
            <p>PriShare does not provide a service that intentionally directly collects children’s personal information.</p>
            <p>When a user selects a photo for processing, the photo is processed on the user’s device and is not transmitted to OneByWants servers.</p>

            <h3>12. Changes to This Privacy Policy</h3>
            <p>This Privacy Policy may change if App features, applicable laws, or external service policies change.</p>
            <p>If there are important changes, we may provide notice through the App, the store, or relevant web pages.</p>

            <h3>13. Contact</h3>
            <p>For questions about PriShare’s processing of personal information, please contact:</p>
            <address className={styles.contact}>
              <p>Developer: OneByWants</p>
              <p>Email: <a href="mailto:onebywants@gmail.com">onebywants@gmail.com</a></p>
              <p>Website: <a href="https://onebywants.com">https://onebywants.com</a></p>
            </address>
          </div>
        </section>
      </div>
    </article>
  );
}
