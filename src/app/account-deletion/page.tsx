"use client";

import SiteFooter from "@/components/SiteFooter";
import TopBar from "@/components/TopBar";
import { kishibContent } from "@/data/kishibContent";

export default function AccountDeletionPage() {
  const content = kishibContent.en;
  const homeNav = content.nav.map((item) => ({
    ...item,
    href: item.href.startsWith("#") ? `/${item.href}` : item.href,
  }));

  return (
    <main className="accountDeletionSite" dir="ltr">
      <TopBar
        nav={homeNav}
        langLabel=""
        brandHref="/#home"
        hideLanguage
        onToggleLang={() => undefined}
      />

      <section className="deletionHero">
        <div className="deletionHeroInner">
          <span>KISHIB Support</span>
          <h1>Account Deletion Request</h1>
          <p>طلب حذف الحساب</p>
        </div>
      </section>

      <section className="deletionBody">
        <article className="deletionArticle">
          <section aria-labelledby="english-title">
            <h2 id="english-title">Account Deletion Request</h2>

            <p>
              KISHIB users can delete their account directly inside the app by
              opening the user menu and selecting &quot;Delete account&quot;.
            </p>

            <p>
              If you can no longer access your account, you can request account
              deletion by contacting us at:
            </p>

            <p>
              <a href="mailto:support@kishibapp.com">support@kishibapp.com</a>
            </p>

            <p>
              Please include the email address used to create your KISHIB
              account.
            </p>

            <p>
              After receiving your request, we will delete your account and
              associated data, including profile information, uploaded images,
              evaluation history, and user notes, unless retention is required
              for legal, security, or fraud-prevention reasons.
            </p>

            <p>Deletion requests are processed within 30 days.</p>
          </section>

          <section className="arabicSection" dir="rtl" aria-labelledby="arabic-title">
            <h2 id="arabic-title">طلب حذف الحساب</h2>

            <p>
              يمكن لمستخدمي KISHIB حذف حسابهم مباشرة من داخل التطبيق عبر فتح
              قائمة المستخدم واختيار &quot;حذف الحساب&quot;.
            </p>

            <p>
              إذا لم تتمكن من الوصول إلى حسابك، يمكنك طلب حذف الحساب عبر
              مراسلتنا على البريد الإلكتروني:
            </p>

            <p>
              <a href="mailto:support@kishibapp.com">support@kishibapp.com</a>
            </p>

            <p>يرجى ذكر البريد الإلكتروني المستخدم في إنشاء حساب KISHIB.</p>

            <p>
              بعد استلام الطلب، سنقوم بحذف الحساب والبيانات المرتبطة به، بما
              في ذلك بيانات الملف الشخصي، الصور المرفوعة، سجل التقييمات،
              وملاحظات المستخدم، ما لم يكن الاحتفاظ ببعض البيانات مطلوبًا
              لأسباب قانونية أو أمنية أو لمنع الاحتيال.
            </p>

            <p>تتم معالجة طلبات الحذف خلال 30 يومًا.</p>
          </section>
        </article>
      </section>

      <SiteFooter nav={homeNav} footer={content.footer} />

      <style jsx>{`
        .accountDeletionSite {
          min-height: 100vh;
          overflow-x: hidden;
          background: #050505;
          color: #ffffff;
        }

        .deletionHero {
          padding: 150px 18px 68px;
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.2), #050505 100%),
            radial-gradient(circle at 18% 22%, rgba(216, 100, 34, 0.2), transparent 30%),
            radial-gradient(circle at 82% 18%, rgba(216, 182, 106, 0.16), transparent 30%),
            #111111;
          border-bottom: 1px solid rgba(216, 182, 106, 0.18);
        }

        .deletionHeroInner,
        .deletionArticle {
          width: min(920px, 100%);
          margin: 0 auto;
        }

        .deletionHero span {
          display: inline-block;
          color: #d8b66a;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .deletionHero h1,
        .deletionHero p,
        .deletionArticle h2,
        .deletionArticle p {
          margin: 0;
        }

        .deletionHero h1 {
          margin-top: 16px;
          color: #ffffff;
          font-size: clamp(40px, 7vw, 72px);
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0;
        }

        .deletionHero p {
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 22px;
          line-height: 1.35;
          font-weight: 750;
        }

        .deletionBody {
          padding: 64px 18px 78px;
          background:
            linear-gradient(135deg, rgba(216, 182, 106, 0.08), transparent 34%),
            #f2eee6;
          color: #111111;
        }

        .deletionArticle {
          padding: 42px;
          border: 1px solid rgba(5, 5, 5, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.62);
          box-shadow: 0 22px 54px rgba(5, 5, 5, 0.1);
        }

        .deletionArticle h2 {
          color: #050505;
          font-size: 25px;
          line-height: 1.25;
          font-weight: 900;
        }

        .deletionArticle p {
          margin-top: 15px;
          color: rgba(17, 17, 17, 0.76);
          font-size: 16px;
          line-height: 1.78;
        }

        .deletionArticle a {
          color: #8f3518;
          font-weight: 850;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .arabicSection {
          margin-top: 38px;
          padding-top: 34px;
          border-top: 1px solid rgba(5, 5, 5, 0.12);
        }

        @media (max-width: 760px) {
          .deletionHero {
            padding: 116px 14px 44px;
          }

          .deletionHero h1 {
            font-size: 39px;
          }

          .deletionHero p {
            font-size: 18px;
          }

          .deletionBody {
            padding: 38px 14px 52px;
          }

          .deletionArticle {
            padding: 22px;
          }

          .deletionArticle h2 {
            font-size: 21px;
          }

          .deletionArticle p {
            font-size: 14.5px;
            line-height: 1.7;
          }
        }
      `}</style>
    </main>
  );
}
