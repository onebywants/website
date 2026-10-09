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
        <section aria-labelledby="korean-policy" className={styles.policySection} lang="ko">
          <div className={styles.sectionHeader}>
            <h2 id="korean-policy">{"PriShare 개인정보처리방침"}</h2>
            <p className={styles.effectiveDate}>{"시행일: 2026년 10월 10일"}</p>
          </div>

          <div className={styles.policyBody}>
            <p>{"OneByWants(이하 “개발자”)는 PriShare(이하 “앱”) 이용자의 개인정보를 중요하게 생각하며, 관련 법령에 따라 개인정보를 처리합니다. 본 방침은 앱이 처리하는 정보, 목적, 외부 서비스, 보관 및 삭제 기준, 이용자의 선택과 권리 행사 방법을 설명합니다."}</p>

            <h3 id="ko-section-1">{"1. 앱의 주요 개인정보 처리 방식"}</h3>

            <p>{"PriShare는 사진을 공유하기 전에 사진에 포함된 얼굴, 문자, 위치정보 등을 확인하고 가릴 수 있도록 지원합니다."}</p>

            <p>{"사진 분석 및 편집은 사용자의 기기에서 수행됩니다. 개발자는 선택한 원본 사진, 편집된 사진, 인식한 문자 및 얼굴 탐지 결과를 자체 서버로 업로드하거나 저장하지 않습니다."}</p>

            <p>{"광고 제공, 이용 분석, 오류 보고, 구매 처리, 인식 모델 제공 및 SDK 진단을 위해 외부 서비스가 일부 기기·앱 정보와 식별자를 처리할 수 있습니다. 이는 사진의 기기 내 처리와 구분됩니다. 결과 이미지를 외부 앱으로 공유하면 해당 이미지가 사용자가 선택한 앱에 전달됩니다."}</p>

            <h3 id="ko-section-2">{"2. 사진 및 사진에 포함된 정보"}</h3>

            <p>{"앱은 Android Photo Picker 또는 Android 공유 기능을 통해 사용자가 직접 선택하거나 전달한 사진에 접근합니다. 사진의 픽셀, 탐지 영역 좌표, 인식한 문자, 개인정보 추정 결과 및 원본 파일 이름 등을 다음 목적으로 기기에서 사용합니다."}</p>

            <ul>
              <li>{"얼굴 탐지 및 이미지 내 문자 인식"}</li>
              <li>{"개인정보로 추정되는 문자 탐지 및 사용자가 지정한 문자 검색"}</li>
              <li>{"흐림·가림 처리"}</li>
              <li>{"EXIF 등 사진 메타데이터 확인 및 제거"}</li>
              <li>{"결과 이미지 생성·저장·공유"}</li>
            </ul>

            <p>{"앱은 원본 사진을 직접 수정하지 않고 별도의 결과 이미지를 생성합니다. Android 9 이하에서는 결과 이미지 저장을 위해 저장공간 쓰기 권한을 요청할 수 있습니다."}</p>

            <h3 id="ko-section-3">{"3. 사진 메타데이터"}</h3>

            <p>{"앱은 선택한 사진의 GPS 위치정보, 촬영 일시, 기기 제조사·모델, 소프트웨어·렌즈 정보, 이미지 방향·크기 및 내장 썸네일 존재 여부를 확인할 수 있습니다. 이 정보는 사진을 올바르게 표시하고 개인정보 메타데이터를 제거한 결과 이미지를 생성하기 위해 사용합니다."}</p>

            <p>{"결과 이미지를 새로 인코딩하며, GPS·촬영 일시·기기 정보 등 주요 개인정보 메타데이터의 잔존 여부를 확인합니다. 해당 메타데이터를 개발자의 자체 서버로 전송하거나 저장하지 않습니다."}</p>

            <h3 id="ko-section-4">{"4. Google ML Kit 및 Gemini Nano"}</h3>

            <p>{"앱은 Google ML Kit으로 얼굴을 탐지하고 문자를 인식합니다. 지원 기기에서는 Gemini Nano로 인식한 문자가 개인정보에 해당할 가능성을 판단할 수 있습니다. 분석 대상 사진과 문자 및 분석 결과는 이러한 기능을 통해 Google의 원격 분석 서버로 전송되지 않습니다."}</p>

            <p>{"다만 모델 제공 및 SDK 운영·진단을 위해 기기·앱 정보, 식별자, 기능 사용 이벤트, 처리 시간, 입력·출력 크기 및 오류 코드 등이 Google에 전송될 수 있습니다. 이용 분석·오류 보고 설정은 ML Kit 및 Google Play 서비스 자체의 모든 진단 처리를 중단하는 설정이 아닙니다."}</p>

            <p>{"참고: "}<ExternalLink href="https://developers.google.com/ml-kit/terms">{"ML Kit 개인정보 안내"}</ExternalLink>{", "}<ExternalLink href="https://developers.google.com/ml-kit/android-data-disclosure">{"SDK 데이터 처리 안내"}</ExternalLink></p>

            <h3 id="ko-section-5">{"5. 광고 및 광고 개인정보 선택"}</h3>

            <p>{"앱의 무료 이용 환경에서는 Google AdMob 광고를 제공합니다. 해당 광고 서비스의 계약상 제공자는 Google LLC입니다."}</p>

            <p>{"광고 SDK는 광고 제공·측정 및 부정 사용 방지를 위해 IP 주소와 대략적인 위치, 앱·광고 상호작용, 성능·진단 정보, Android 광고 ID 및 앱 세트 ID 등의 정보를 처리할 수 있습니다."}</p>

            <p>{"앱은 Google User Messaging Platform(UMP)을 이용하여 해당 지역에서 요구되는 광고 개인정보 선택 화면을 제공합니다. 제공되는 경우 앱 설정의 ‘광고 개인정보 설정’에서 선택을 변경할 수 있습니다. Android 광고 설정에서도 광고 ID를 재설정하거나 삭제할 수 있습니다. 이러한 선택이 모든 SDK 처리를 중단하거나 이미 전송된 정보를 삭제하는 것은 아닙니다."}</p>

            <p>{"PriShare Pro가 활성화된 동안에는 앱 내 광고를 표시하지 않습니다. Pro 구매 여부와 이용 분석·오류 보고 허용 여부는 별개입니다."}</p>

            <p>{"참고: "}<ExternalLink href="https://developers.google.com/admob/android/privacy/play-data-disclosure">{"AdMob SDK 데이터 처리 안내"}</ExternalLink>{", "}<ExternalLink href="https://policies.google.com/technologies/partner-sites?hl=ko">{"Google의 파트너 앱 정보 처리 안내"}</ExternalLink></p>

            <h3 id="ko-section-6">{"6. 인앱결제 및 구매 상태"}</h3>

            <p>{"PriShare Pro 구매는 Google Play Billing을 통해 처리됩니다. 개발자는 신용카드 번호나 은행계좌 정보 등 결제 수단 정보를 직접 수집하거나 저장하지 않습니다."}</p>

            <p>{"앱은 구매 확인·승인·복원 및 Pro 기능 제공을 위해 Google Play가 제공하는 상품 정보, 구매 상태, 구매 토큰 및 승인 여부를 사용합니다. 마지막으로 확인한 Pro 상태는 기기에 저장될 수 있습니다."}</p>

            <p>{"Google Play 계정 및 결제 정보의 처리는 해당 지역에 적용되는 Google Play·결제 서비스 약관과 Google 개인정보처리방침을 따릅니다. 서비스 제공 법인은 배포·거래 지역에 따라 달라질 수 있습니다."}</p>

            <p>{"참고: "}<ExternalLink href="https://play.google/developer-distribution-agreement.html">{"Google Play 개발자 배포 계약"}</ExternalLink>{", "}<ExternalLink href="https://policies.google.com/privacy?hl=ko">{"Google 개인정보처리방침"}</ExternalLink></p>

            <h3 id="ko-section-7">{"7. 이용 분석 및 오류 보고"}</h3>

            <p>{"앱은 Google Analytics for Firebase로 이용 통계를 분석하고 Firebase Crashlytics로 오류와 안정성을 진단합니다."}</p>

            <ul>
              <li>{"이용 분석: 앱 인스턴스 식별자, 앱 이용·구매 이벤트, 기기·운영체제 정보 및 IP 주소에서 추정한 대략적인 위치 등이 처리될 수 있습니다."}</li>
              <li>{"오류 보고: 오류 스택, 오류 당시 앱 상태, 기기·운영체제 정보 및 설치 식별자 등이 처리될 수 있습니다. 관련 SDK는 서비스 운영을 위한 설치·세션 정보도 처리할 수 있습니다."}</li>
            </ul>

            <p>{"개발자는 사진, 인식한 문자 및 얼굴 탐지 결과를 분석 이벤트나 오류 보고의 사용자 지정 정보로 첨부하지 않습니다."}</p>

            <p>{"이용 분석 수집과 오류 보고 전송은 기본적으로 꺼져 있습니다. 사용자는 홈 화면 오른쪽 위 설정 버튼을 누른 뒤 설정 화면 하단의 ‘개인정보 설정’에서 ‘이용 분석 허용’과 ‘오류 보고 허용’을 각각 변경할 수 있습니다. 이 설정은 Basic과 Pro 모두에서 제공됩니다. 이용 분석에는 해당 지역의 관련 개인정보 선택 상태도 적용됩니다. 두 기능을 허용하지 않아도 사진 편집·저장·공유 기능을 사용할 수 있습니다."}</p>

            <p>{"오류 보고 전송을 꺼도 SDK가 오류 기록을 기기에 임시 저장할 수 있습니다. 앱은 저장된 선택을 확인하여 이전 실행의 미전송 보고서를 전송하거나 삭제합니다. 허용 전의 미전송 보고서를 나중에 설정을 켰다는 이유만으로 전송하지 않습니다."}</p>

            <p>{"설정을 꺼도 이미 전송되었거나 전송 중인 데이터는 자동으로 삭제되지 않습니다. 이 설정은 외부 SDK의 모든 서비스 운영 정보 처리를 제어하는 설정이 아닙니다."}</p>

            <p>{"참고: "}<ExternalLink href="https://firebase.google.com/docs/android/play-data-disclosure">{"Firebase Android 데이터 처리 안내"}</ExternalLink></p>

            <h3 id="ko-section-8">{"8. 외부 서비스 이용 및 처리위탁"}</h3>

            <p>{"개발자는 사용자의 사진 및 사진에서 탐지한 얼굴·문자 내용을 판매하지 않습니다. 사용자가 결과 이미지를 공유한 뒤의 처리는 수신 앱의 개인정보처리방침을 따릅니다."}</p>

            <div aria-labelledby="ko-section-8" className={styles.tableWrapper} role="region" tabIndex={0}>
              <table className={styles.policyTable}>
                <thead><tr><th scope="col">{"서비스"}</th><th scope="col">{"목적"}</th><th scope="col">{"제공자 및 처리 방식"}</th></tr></thead>
                <tbody>
                  <tr><th scope="row">{"Google AdMob·UMP"}</th><td>{"광고 제공·측정, 부정 사용 방지 및 광고 선택 관리"}</td><td>{"AdMob 계약 법인: Google LLC. 광고 데이터에는 Google의 광고 데이터 보호 약관 및 개인정보처리방침이 적용됩니다."}</td></tr>
                  <tr><th scope="row">{"Google Analytics for Firebase"}</th><td>{"이용·구매 통계 분석"}</td><td>{"Google LLC. 개발자의 분석 데이터 처리에는 Analytics 데이터 처리 약관이 적용됩니다."}</td></tr>
                  <tr><th scope="row">{"Firebase Crashlytics"}</th><td>{"오류 분석·안정성 진단"}</td><td>{"한국 소재 개발자에 대한 계약상 수탁자: Google Asia Pacific Pte. Ltd. 오류 보고 업무에 Firebase 데이터 처리 및 보안 약관이 적용됩니다."}</td></tr>
                  <tr><th scope="row">{"Google ML Kit·Gemini Nano 관련 서비스"}</th><td>{"기기 내 인식·분류, 모델 제공 및 SDK 진단"}</td><td>{"ML Kit API 제공자: Google LLC. 입력·결과의 기기 내 처리와 SDK 운영·진단 데이터 처리를 구분합니다."}</td></tr>
                  <tr><th scope="row">{"Google Play Billing"}</th><td>{"결제·구매 확인·승인"}</td><td>{"거래·배포 지역에 적용되는 Google Play 및 결제 서비스 제공 법인. 결제 서비스에서 직접 처리하는 계정·결제 정보와 앱이 전달받는 구매 상태를 구분합니다."}</td></tr>
                </tbody>
              </table>
            </div>

            <p>{"처리위탁에 해당하는 업무는 적용 계약에 따라 목적 외 처리 제한, 보안 및 개인정보 보호에 필요한 조치를 관리합니다. 외부 서비스를 이용해도 개발자가 책임지는 개인정보 처리에 관한 문의와 권리 행사 요청은 제14항에서 접수합니다."}</p>

            <p>{"참고: "}<ExternalLink href="https://marketingplatform.google.com/about/analytics/terms/kr/">{"Analytics 이용약관"}</ExternalLink>{", "}<ExternalLink href="https://firebase.google.com/terms/crashlytics">{"Crashlytics 이용약관"}</ExternalLink>{", "}<ExternalLink href="https://firebase.google.com/terms/data-processing-terms">{"Firebase 데이터 처리 및 보안 약관"}</ExternalLink>{", "}<ExternalLink href="https://business.safety.google/adscontrollerterms/">{"Google 광고 데이터 보호 약관"}</ExternalLink></p>

            <h3 id="ko-section-9">{"9. 국외 처리에 관한 안내"}</h3>

            <p>{"제4항부터 제8항의 외부 서비스를 이용하는 과정에서 기기·앱 정보와 식별자, 광고·분석·오류·구매 관련 정보가 국외에서 처리되거나 보관될 수 있습니다. 사진·인식 문자·얼굴 탐지 결과를 개발자 서버로 업로드하는 것과는 구분됩니다."}</p>

            <p>{"정보는 기능 실행, 모델 요청, 광고 요청, 허용된 분석·오류 보고 전송 또는 구매 처리 시 인터넷을 통해 전달됩니다. Analytics는 제10항의 2개월 보관 설정을 적용하며, Crashlytics는 제10항의 90일 후 삭제 절차를 적용합니다. 그 밖의 서비스 정보는 제10항의 Google 보관 기준을 따릅니다."}</p>

            <p>{"Google은 여러 국가의 시설에서 정보를 처리할 수 있으며, Firebase는 Crashlytics를 글로벌 인프라에서 처리되는 서비스로 안내합니다. 계약 법인의 소재지만으로 실제 저장·처리 국가를 한 곳으로 특정할 수는 없습니다."}</p>

            <p>{"사용자는 이용 분석·오류 보고 설정을 끄거나 제공되는 광고 선택 화면에서 선택을 변경할 수 있습니다. 모델 제공·결제 등 외부 서비스에 의존하는 처리를 거부하면 해당 기능 사용이 제한될 수 있습니다. 기본 사진 편집은 이용 분석·오류 보고 허용 없이 사용할 수 있습니다."}</p>

            <p>{"Google의 일반 개인정보 문의 연락처는 googlekrsupport@google.com입니다. 이 주소는 "}<ExternalLink href="https://policies.google.com/privacy?hl=ko">{"Google 한국어 개인정보처리방침"}</ExternalLink>{"에 공개되어 있습니다. Firebase 관련 문의는 "}<ExternalLink href="https://firebase.google.com/support/privacy/dpo">{"Firebase 개인정보 문의"}</ExternalLink>{"를 이용할 수 있습니다. 개발자가 책임지는 처리에 대한 문의는 제14항에서 접수합니다."}</p>

            <p>{"참고: "}<ExternalLink href="https://policies.google.com/privacy?hl=ko">{"Google 개인정보처리방침의 데이터 이전 안내"}</ExternalLink>{", "}<ExternalLink href="https://firebase.google.com/support/privacy">{"Firebase의 처리 위치 안내"}</ExternalLink></p>

            <h3 id="ko-section-10">{"10. 보관기간 및 삭제"}</h3>

            <div aria-labelledby="ko-section-10" className={styles.tableWrapper} role="region" tabIndex={0}>
              <table className={styles.policyTable}>
                <thead><tr><th scope="col">{"정보"}</th><th scope="col">{"보관 및 삭제 기준"}</th></tr></thead>
                <tbody>
                  <tr><th scope="row">{"사진 분석·편집 결과"}</th><td>{"편집 기능 제공 중 기기 메모리 등에서 사용하며 개발자 서버에 저장하지 않습니다."}</td></tr>
                  <tr><th scope="row">{"편집용 임시 이미지"}</th><td>{"앱 캐시에 저장될 수 있으며 편집 상태 정리, 캐시·데이터 삭제 또는 운영체제 관리에 따라 삭제됩니다. 비정상 종료 시 일부 파일이 남을 수 있습니다."}</td></tr>
                  <tr><th scope="row">{"공유용 임시 이미지"}</th><td>{"생성 후 24시간이 지난 파일을 앱의 다음 정리 실행 시 삭제합니다. 정확히 24시간 시점에 삭제된다는 의미는 아닙니다."}</td></tr>
                  <tr><th scope="row">{"사용자가 저장한 결과 이미지"}</th><td>{"사용자가 갤러리·파일 관리 앱 등에서 삭제할 때까지 남을 수 있으며 앱 삭제만으로 제거되지 않을 수 있습니다."}</td></tr>
                  <tr><th scope="row">{"앱 설정·검색어·마지막 확인 Pro 상태"}</th><td>{"설정 변경, 앱 데이터 삭제 또는 앱 삭제로 제거됩니다. 백업본은 해당 백업 서비스 기준을 따릅니다."}</td></tr>
                  <tr><th scope="row">{"Analytics 사용자·이벤트 단위 데이터"}</th><td>{"보관 설정은 2개월입니다. 새 활동에 따른 사용자 데이터 보관기간 재설정은 꺼져 있습니다. 기간이 지난 데이터는 Google의 월별 삭제 절차에 따라 삭제됩니다. 표준 집계 보고서에는 이 설정이 적용되지 않습니다."}</td></tr>
                  <tr><th scope="row">{"Crashlytics 오류 기록 및 관련 식별자"}</th><td>{"90일 보관 후 Google 운영·백업 시스템에서 삭제하는 절차가 시작됩니다."}</td></tr>
                  <tr><th scope="row">{"개인정보 문의 이메일·문의 내용"}</th><td>{"문의 답변 및 처리가 완료되면 지체 없이 삭제합니다. 법령상 보관 의무가 있는 경우 적용 항목·근거·기간에 따라 별도 보관합니다."}</td></tr>
                </tbody>
              </table>
            </div>

            <p>{"AdMob·UMP·ML Kit·Google Play의 정보는 일률적으로 2개월 또는 90일 보관되는 것이 아닙니다. Google은 데이터 종류와 이용 목적에 따라 삭제·익명화 기준을 적용하며, 보안·부정 사용 방지·회계·법적 의무를 위한 기록은 해당 목적에 필요한 기간 보관할 수 있습니다. 개발자가 이들 서비스의 모든 보관기간을 설정하거나 삭제를 직접 제어할 수는 없습니다."}</p>

            <p>{"개발자가 관리하는 전자적 개인정보는 보관 목적이 끝나면 저장 시스템의 삭제 기능을 이용해 삭제합니다. 앱 삭제나 수집 중지는 외부 서비스에 전송된 정보의 삭제와 동일하지 않습니다."}</p>

            <p>{"참고: "}<ExternalLink href="https://policies.google.com/technologies/retention?hl=ko">{"Google 데이터 보관 안내"}</ExternalLink>{", "}<ExternalLink href="https://support.google.com/analytics/answer/7667196?hl=ko">{"Analytics 보관 설정"}</ExternalLink>{", "}<ExternalLink href="https://firebase.google.com/support/privacy">{"Firebase 보관 기준"}</ExternalLink></p>

            <h3 id="ko-section-11">{"11. 기기 내 설정 및 백업"}</h3>

            <p>{"앱은 편집 설정, 추가 OCR 언어, 특정 텍스트 검색어, 화면 표시 설정 및 마지막으로 확인한 Pro 상태 등을 기기에 저장할 수 있습니다. 검색어에 입력한 이름·전화번호 등도 기기에 저장될 수 있으나 개발자 서버로 전송하지 않습니다."}</p>

            <p>{"일부 설정은 Android 백업 및 기기 이전 설정에 따라 복원될 수 있습니다. 이용 분석·오류 보고 허용 설정은 앱의 백업 및 기기 이전 대상에서 제외됩니다."}</p>

            <p>{"저장한 이미지는 사용자가 설정한 갤러리·클라우드 백업 서비스에 의해 별도로 동기화될 수 있으며, 해당 서비스의 설정과 개인정보처리방침을 따릅니다."}</p>

            <h3 id="ko-section-12">{"12. 이용자의 권리 및 선택"}</h3>

            <p>{"사용자는 적용 법령에 따라 개인정보 열람·정정·삭제·처리정지 및 동의 철회를 요청할 수 있습니다. 법정대리인 또는 적법하게 위임받은 대리인도 권리를 행사할 수 있습니다."}</p>

            <p>{"제14항 이메일로 요청하면 개발자는 본인·대리인 확인에 필요한 최소한의 정보를 요청할 수 있으며, 관련 법령에 따라 처리 결과를 안내합니다. 법령상 제한이나 별도 보관 의무가 있으면 그 사유를 안내합니다."}</p>

            <p>{"사용자는 앱의 분석·오류 보고 설정과 광고 선택, 검색어·편집 설정, 캐시·데이터 삭제, 저장 이미지 삭제, Android 광고 ID 및 백업 설정을 통해 직접 정보를 관리할 수도 있습니다."}</p>

            <p>{"개발자는 자체 서버에 이용자의 사진이나 별도 앱 계정을 보관하지 않습니다. SDK 식별자로 처리되는 정보는 이메일 주소만으로 특정 이용자의 데이터를 식별하기 어려울 수 있으며, 필요한 확인 절차와 개발자가 처리할 수 있는 범위, 외부 서비스의 권리 행사 방법을 안내합니다."}</p>

            <h3 id="ko-section-13">{"13. 개인정보 보호조치 및 아동 관련 사항"}</h3>

            <p>{"개발자는 기기 내 사진 분석·편집, 원본과 결과 이미지의 분리, 주요 개인정보 메타데이터 제거·확인, 앱 전용 캐시 및 제한된 파일 공유 권한, 이용 분석·오류 보고의 기본 비활성화, 사진·문자를 분석·오류 보고의 추가 정보로 첨부하지 않는 조치를 적용합니다. 외부 SDK가 제공하는 전송 암호화 등 보호조치를 이용합니다."}</p>

            <p>{"앱의 대상 이용자는 만 16세 이상입니다. 앱은 자체 회원가입을 제공하지 않으며 이용자의 생년월일을 입력받는 계정 기능이 없습니다."}</p>

            <p>{"만 14세 미만 아동의 개인정보 처리에 법령상 동의가 필요한 경우에는 법정대리인의 동의와 동의 여부 확인이 필요합니다. 아동이나 법정대리인은 제14항 이메일로 개인정보 처리에 관한 문의 및 권리 행사 요청을 할 수 있습니다. 선택한 사진에 아동이 포함되어 있어도 사진 분석·편집은 기기에서 수행되며 개발자 서버에 업로드하지 않습니다."}</p>

            <h3 id="ko-section-14">{"14. 개인정보 보호책임자 및 방침 변경"}</h3>

            <p>{"개인정보 보호책임자: 우제경"}<br />{"담당: OneByWants / PriShare 운영"}<br />{"이메일: onebywants@gmail.com"}</p>

            <p>{"개인정보 처리에 관한 문의·불만 및 권리 행사 요청은 위 이메일로 접수합니다."}</p>

            <p>{"개인정보 침해 관련 상담 및 구제는 "}<ExternalLink href="https://privacy.kisa.or.kr/">{"개인정보침해신고센터"}</ExternalLink>{" 또는 "}<ExternalLink href="https://www.kopico.go.kr/">{"개인정보분쟁조정위원회"}</ExternalLink>{"에 요청할 수 있습니다."}</p>

            <p>{"본 방침을 변경하면 앱 또는 개인정보처리방침 게시 페이지를 통해 변경 내용과 시행일을 안내합니다. 별도 동의가 필요한 변경은 적용 법령에 따른 동의 절차를 거쳐 처리합니다."}</p>
          </div>
        </section>

        <section aria-labelledby="english-policy" className={styles.policySection} lang="en">
          <div className={styles.sectionHeader}>
            <h2 id="english-policy">{"PriShare Privacy Policy"}</h2>
            <p className={styles.effectiveDate}>{"Effective date: October 10, 2026"}</p>
          </div>

          <div className={styles.policyBody}>
            <p>{"OneByWants (the “Developer”) values the privacy of people using PriShare (the “App”) and processes personal information in accordance with applicable law. This policy explains the information the App processes, its purposes, external services, retention and deletion, and your choices and rights."}</p>

            <h3 id="en-section-1">{"1. How the App processes information"}</h3>

            <p>{"PriShare helps you inspect and obscure faces, text, location information, and other potentially private information in photos before sharing them."}</p>

            <p>{"Photo analysis and editing take place on your device. The Developer does not upload or store your selected original photos, edited photos, recognized text, or face detection results on its own servers."}</p>

            <p>{"External services may process device and app information and identifiers for advertising, analytics, crash reporting, purchases, model delivery, and SDK diagnostics. This is separate from on-device photo processing. When you share a result image, it is sent to the external app you choose."}</p>

            <h3 id="en-section-2">{"2. Photos and their contents"}</h3>

            <p>{"The App accesses photos you select or send using Android Photo Picker or Android sharing. It uses image pixels, detection coordinates, recognized text, potential personal-information classifications, and original file names on your device for:"}</p>

            <ul>
              <li>{"Face detection and text recognition."}</li>
              <li>{"Detection of potentially private text and searches for text you specify."}</li>
              <li>{"Blurring and redaction."}</li>
              <li>{"Inspection and removal of EXIF and other photo metadata."}</li>
              <li>{"Creation, saving, and sharing of result images."}</li>
            </ul>

            <p>{"The App creates separate result images instead of changing the original photo. On Android 9 and earlier, it may request storage write permission to save an image."}</p>

            <h3 id="en-section-3">{"3. Photo metadata"}</h3>

            <p>{"The App may inspect GPS information, capture time, device manufacturer and model, software and lens information, image orientation and dimensions, and the presence of an embedded thumbnail. It uses this information to display the photo correctly and create an output with personal metadata removed."}</p>

            <p>{"Output images are re-encoded and checked for remaining major personal metadata, including GPS, capture time, and device information. This metadata is not sent to or stored on the Developer’s servers."}</p>

            <h3 id="en-section-4">{"4. Google ML Kit and Gemini Nano"}</h3>

            <p>{"The App uses Google ML Kit for face detection and text recognition. On supported devices, Gemini Nano may help classify recognized text as potentially private. These features do not send input photos, recognized text, or analysis results to Google’s remote analysis servers."}</p>

            <p>{"Model delivery and SDK operation or diagnostics may involve transmission of device and app details, identifiers, usage events, processing time, input or output sizes, and error codes. The App’s analytics and crash reporting settings do not disable all diagnostics performed by ML Kit or Google Play services."}</p>

            <p>{"See "}<ExternalLink href="https://developers.google.com/ml-kit/terms">{"ML Kit privacy information"}</ExternalLink>{" and "}<ExternalLink href="https://developers.google.com/ml-kit/android-data-disclosure">{"SDK data disclosures"}</ExternalLink>{"."}</p>

            <h3 id="en-section-5">{"5. Advertising and advertising privacy choices"}</h3>

            <p>{"The free version uses Google AdMob advertising. Its contractual service provider is Google LLC."}</p>

            <p>{"The advertising SDK may process IP addresses and approximate location, app or ad interactions, performance and diagnostic information, Android advertising IDs, and app set IDs to provide and measure advertising and prevent misuse."}</p>

            <p>{"The App uses Google User Messaging Platform (UMP) to present advertising privacy choices where required. When available, you can change your choices under advertising privacy settings in the App. You can also reset or delete your advertising ID in Android settings. These actions do not stop every SDK process or delete information already transmitted."}</p>

            <p>{"The App does not display ads while PriShare Pro is active. Purchasing Pro is separate from allowing analytics or crash reporting."}</p>

            <p>{"See "}<ExternalLink href="https://developers.google.com/admob/android/privacy/play-data-disclosure">{"AdMob SDK data disclosures"}</ExternalLink>{" and "}<ExternalLink href="https://policies.google.com/technologies/partner-sites?hl=en">{"Google’s information for partner apps"}</ExternalLink>{"."}</p>

            <h3 id="en-section-6">{"6. In-app purchases and purchase status"}</h3>

            <p>{"PriShare Pro purchases are processed through Google Play Billing. The Developer does not directly collect or store payment instrument details such as credit card numbers or bank account information."}</p>

            <p>{"The App uses product information, purchase status, purchase tokens, and acknowledgment status supplied by Google Play to verify, acknowledge, and restore purchases and provide Pro features. The last verified Pro status may be stored on your device."}</p>

            <p>{"Google Play account and payment information are processed under the Google Play and payment terms applicable to your region and Google’s Privacy Policy. The relevant service entities may vary by distribution or transaction region."}</p>

            <p>{"See the "}<ExternalLink href="https://play.google/developer-distribution-agreement.html">{"Google Play Developer Distribution Agreement"}</ExternalLink>{" and "}<ExternalLink href="https://policies.google.com/privacy?hl=en">{"Google Privacy Policy"}</ExternalLink>{"."}</p>

            <h3 id="en-section-7">{"7. Analytics and crash reporting"}</h3>

            <p>{"The App uses Google Analytics for Firebase for usage statistics and Firebase Crashlytics for crash and stability diagnostics."}</p>

            <ul>
              <li>{"Analytics may process app instance identifiers, usage or purchase events, device and operating system details, and approximate location derived from IP addresses."}</li>
              <li>{"Crash reports may include stack traces, app state, device and operating system details, and installation identifiers. Related SDKs may also process installation and session information for service operation."}</li>
            </ul>

            <p>{"The Developer does not attach photos, recognized text, or face detection results to analytics events or custom crash report information."}</p>

            <p>{"Analytics collection and crash report uploads are off by default. To change either choice, open Settings using the button at the top right of the home screen, scroll to Privacy settings, and change Allow usage analytics or Allow crash reporting. These settings are available in both Basic and Pro. Analytics also reflects applicable regional privacy choices. You can edit, save, and share photos without allowing either feature."}</p>

            <p>{"The crash SDK may temporarily store reports on your device while uploads are disabled. The App checks your saved choice to send or delete unsent reports from a previous run. Enabling reporting later does not cause reports from before opt-in to be uploaded merely because you enabled it."}</p>

            <p>{"Turning a setting off does not automatically delete information already transmitted or in transit. These settings do not control every item of service-operation information processed by external SDKs."}</p>

            <p>{"See "}<ExternalLink href="https://firebase.google.com/docs/android/play-data-disclosure">{"Firebase Android data disclosures"}</ExternalLink>{"."}</p>

            <h3 id="en-section-8">{"8. External services and processing on behalf of the Developer"}</h3>

            <p>{"The Developer does not sell photos or detected face or text contents. After you share a result image, the recipient app’s privacy policy governs its processing."}</p>

            <div aria-labelledby="en-section-8" className={styles.tableWrapper} role="region" tabIndex={0}>
              <table className={styles.policyTable}>
                <thead><tr><th scope="col">{"Service"}</th><th scope="col">{"Purpose"}</th><th scope="col">{"Provider and processing arrangement"}</th></tr></thead>
                <tbody>
                  <tr><th scope="row">{"Google AdMob and UMP"}</th><td>{"Advertising, measurement, misuse prevention, and advertising choices"}</td><td>{"AdMob contractual entity: Google LLC. Google’s advertising data protection terms and Privacy Policy apply to advertising data."}</td></tr>
                  <tr><th scope="row">{"Google Analytics for Firebase"}</th><td>{"Usage and purchase statistics"}</td><td>{"Google LLC. Analytics data processing terms apply to the Developer’s analytics data."}</td></tr>
                  <tr><th scope="row">{"Firebase Crashlytics"}</th><td>{"Crash analysis and stability diagnostics"}</td><td>{"Contractual processor for a Korea-based developer: Google Asia Pacific Pte. Ltd. Firebase data processing and security terms apply to crash reporting."}</td></tr>
                  <tr><th scope="row">{"Google ML Kit and related Gemini Nano services"}</th><td>{"On-device recognition and classification, model delivery, and SDK diagnostics"}</td><td>{"ML Kit API provider: Google LLC. On-device inputs and results are distinguished from SDK operational and diagnostic data."}</td></tr>
                  <tr><th scope="row">{"Google Play Billing"}</th><td>{"Payments, purchase verification, and acknowledgment"}</td><td>{"Google Play and payment entities applicable to the distribution or transaction region. Account and payment information handled by the payment service is distinct from the purchase status received by the App."}</td></tr>
                </tbody>
              </table>
            </div>

            <p>{"For processing performed on behalf of the Developer, the applicable agreements govern purpose restrictions, security, and privacy protections. You can contact the Developer about processing for which it is responsible using Section 14."}</p>

            <p>{"See the "}<ExternalLink href="https://marketingplatform.google.com/about/analytics/terms/kr/">{"Analytics terms"}</ExternalLink>{", "}<ExternalLink href="https://firebase.google.com/terms/crashlytics">{"Crashlytics terms"}</ExternalLink>{", "}<ExternalLink href="https://firebase.google.com/terms/data-processing-terms">{"Firebase Data Processing and Security Terms"}</ExternalLink>{", and "}<ExternalLink href="https://business.safety.google/adscontrollerterms/">{"Google advertising data protection terms"}</ExternalLink>{"."}</p>

            <h3 id="en-section-9">{"9. Processing outside your country"}</h3>

            <p>{"External services described in Sections 4–8 may process or store device and app details, identifiers, and advertising, analytics, crash, or purchase information outside your country. This is distinct from uploading photos, recognized text, or face detection results to the Developer’s servers."}</p>

            <p>{"Information is transmitted over the internet when a feature runs, a model or ad is requested, permitted analytics or crash reports are sent, or a purchase is processed. Analytics uses the two-month retention setting in Section 10, and Crashlytics follows the deletion process beginning after 90 days. Other service information follows the Google retention criteria described in Section 10."}</p>

            <p>{"Google may process information at facilities in multiple countries. Firebase identifies Crashlytics as a service using global infrastructure. The contractual entity’s address alone does not identify a single country in which all data is stored or processed."}</p>

            <p>{"You can turn analytics or crash reporting off and change available advertising choices. Refusing processing needed by external services, such as model delivery or payments, may limit the corresponding features. Basic photo editing is available without allowing analytics or crash reporting."}</p>

            <p>{"Google’s general privacy contact is googlekrsupport@google.com, as published in its "}<ExternalLink href="https://policies.google.com/privacy?hl=ko">{"Korean Privacy Policy"}</ExternalLink>{". For Firebase inquiries, see "}<ExternalLink href="https://firebase.google.com/support/privacy/dpo">{"Firebase data privacy inquiries"}</ExternalLink>{". For processing for which the Developer is responsible, use Section 14."}</p>

            <p>{"See "}<ExternalLink href="https://policies.google.com/privacy?hl=en">{"Google’s data transfer information"}</ExternalLink>{" and "}<ExternalLink href="https://firebase.google.com/support/privacy">{"Firebase processing locations"}</ExternalLink>{"."}</p>

            <h3 id="en-section-10">{"10. Retention and deletion"}</h3>

            <div aria-labelledby="en-section-10" className={styles.tableWrapper} role="region" tabIndex={0}>
              <table className={styles.policyTable}>
                <thead><tr><th scope="col">{"Information"}</th><th scope="col">{"Retention and deletion"}</th></tr></thead>
                <tbody>
                  <tr><th scope="row">{"Photo analysis and editing results"}</th><td>{"Used in device memory and related local processing while editing; not stored on the Developer’s servers."}</td></tr>
                  <tr><th scope="row">{"Temporary editing images"}</th><td>{"May remain in the App’s cache until editing-state cleanup, cache or data deletion, or operating-system cleanup. Some files may remain after abnormal termination."}</td></tr>
                  <tr><th scope="row">{"Temporary sharing images"}</th><td>{"Files older than 24 hours are removed at the App’s next cleanup. They are not necessarily deleted at the exact 24-hour mark."}</td></tr>
                  <tr><th scope="row">{"Images you save"}</th><td>{"May remain until you delete them using your gallery or file manager. Uninstalling the App may not remove them."}</td></tr>
                  <tr><th scope="row">{"Settings, search text, and last verified Pro status"}</th><td>{"Removed through setting changes, App data deletion, or uninstallation. Backups follow the backup service’s rules."}</td></tr>
                  <tr><th scope="row">{"Analytics user-level and event-level data"}</th><td>{"Retention is set to two months. Resetting user retention on new activity is disabled. Expired data is deleted through Google’s monthly process. This setting does not apply to standard aggregated reports."}</td></tr>
                  <tr><th scope="row">{"Crashlytics reports and associated identifiers"}</th><td>{"Retained for 90 days before Google starts removal from live and backup systems."}</td></tr>
                  <tr><th scope="row">{"Privacy inquiry emails and contents"}</th><td>{"Deleted without undue delay after the inquiry has been answered and resolved. Any legally required records are retained separately for the applicable items, legal basis, and period."}</td></tr>
                </tbody>
              </table>
            </div>

            <p>{"AdMob, UMP, ML Kit, and Google Play information does not have one universal two-month or 90-day retention period. Google applies deletion or anonymization criteria according to data type and purpose. Security, misuse prevention, accounting, or legally required records may be retained for the corresponding needs. The Developer cannot configure every retention period or directly control all deletion in these services."}</p>

            <p>{"The Developer deletes electronic information it controls using the relevant system’s deletion functions when the retention purpose ends. Uninstalling the App or stopping collection is not equivalent to deleting information held by external services."}</p>

            <p>{"See "}<ExternalLink href="https://policies.google.com/technologies/retention?hl=en">{"Google retention information"}</ExternalLink>{", "}<ExternalLink href="https://support.google.com/analytics/answer/7667196?hl=en">{"Analytics retention settings"}</ExternalLink>{", and "}<ExternalLink href="https://firebase.google.com/support/privacy">{"Firebase retention criteria"}</ExternalLink>{"."}</p>

            <h3 id="en-section-11">{"11. Local settings and backups"}</h3>

            <p>{"The App may store editing settings, additional OCR languages, specific-text search queries, display preferences, and the last verified Pro status on your device. Names or phone numbers entered as search queries may be saved locally but are not sent to the Developer’s servers."}</p>

            <p>{"Some settings may be restored through Android backup or device transfer. Analytics and crash reporting permission settings are excluded from the App’s backup and device-transfer rules."}</p>

            <p>{"Saved images may be independently synchronized by gallery or cloud backup services you configure. Their settings and privacy policies apply."}</p>

            <h3 id="en-section-12">{"12. Your rights and choices"}</h3>

            <p>{"Subject to applicable law, you can request access, correction, deletion, restriction of processing, or withdrawal of consent. Legal representatives and properly authorized agents may also exercise these rights."}</p>

            <p>{"Contact the email address in Section 14. The Developer may request the minimum information needed to verify you or your representative and will explain the outcome under applicable law. It will explain any legal restriction or retention obligation."}</p>

            <p>{"You can also manage information through analytics and crash reporting choices, advertising choices, search and editing settings, cache or App data deletion, deletion of saved images, and Android advertising-ID and backup settings."}</p>

            <p>{"The Developer does not maintain your photos or a separate App account on its own servers. SDK data may not be identifiable from your email address alone. The Developer will explain necessary verification, its ability to act, and the external service’s rights-request options."}</p>

            <h3 id="en-section-13">{"13. Safeguards and children"}</h3>

            <p>{"The App uses on-device photo processing, separate original and output images, removal and checks of major personal metadata, App-specific caches and limited file-sharing permissions, analytics and crash reporting disabled by default, and exclusion of photo or text contents from custom analytics or crash information. It uses encryption and other safeguards provided by external SDKs."}</p>

            <p>{"The App’s intended users are aged 16 or older. It has no separate account-registration feature that asks users to enter their date of birth."}</p>

            <p>{"Where consent is legally required to process the personal information of a child under 14, consent from the child’s legal representative and verification of that consent are required. Children and their legal representatives can contact Section 14 for privacy inquiries and rights requests. Photos depicting children are still analyzed and edited on the device and are not uploaded to the Developer’s servers."}</p>

            <h3 id="en-section-14">{"14. Privacy officer and policy changes"}</h3>

            <p>{"Privacy officer: JaeKyung Woo"}<br />{"Role: OneByWants / PriShare operations"}<br />{"Email: onebywants@gmail.com"}</p>

            <p>{"Use this email for privacy inquiries, complaints, and rights requests."}</p>

            <p>{"In Korea, privacy assistance is also available from the "}<ExternalLink href="https://privacy.kisa.or.kr/">{"Privacy Infringement Report Center"}</ExternalLink>{" and the "}<ExternalLink href="https://www.kopico.go.kr/">{"Personal Information Dispute Mediation Committee"}</ExternalLink>{"."}</p>

            <p>{"Changes and their effective dates will be announced in the App or on the policy page. Changes requiring separate consent are subject to the consent procedures required by applicable law."}</p>
          </div>
        </section>
      </div>
    </article>
  );
}
