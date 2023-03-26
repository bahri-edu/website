import AboutBanner from "@/components/AboutBanner";
import AdministrationList from "@/components/AdministrationList";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function CulturalRelationsAndInformation() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <Head>
        <title>إدارة العلاقات الثقافية</title>
      </Head>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("universityAdministrations"), t("title")]}
      />

      <div className="terms-condition-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="condition-content">
                <h2>{t("title")}</h2>
                <p>
                  تأسست مديرية العلاقات الثقافية والمعلومات (DCRI) في يوليو 2011
                  مباشرة بعد إنشاء جامعة بحري بهدف توثيق الروابط مع المؤسسات
                  والأكاديمية والبحثية والمنظمات الاجتماعية وطنيا وإقليميا
                  ودوليا ، من أجل الوصول إلى رؤية بناءة. التعاون الذي يدعم
                  الجامعة ببرامجها ومجالاتها المختلفة ، باستخدام كافة وسائل
                  الإعلام وقنوات الاتصال المتاحة لتحقيق هذا التعاون وتعكس صورتها
                  المشرقة ودورها المتنامي بالإضافة إلى التعريف بأنشطتها المتنوعة
                  بالتنسيق مع إدارات وكليات الجامعة المختلفة.
                </p>
                <p>
                  تمكنت الجامعة من إنشاء هذه المديرية لإيمانها الكامل والعميق
                  بأهميتها لأنها تعتبر من الأنشطة الضرورية والحيوية داخل الجامعة
                  لتقوية ودعم العلاقة بين الجامعة وجمهورها الداخلي والخارجي.
                  وكذلك ترسيخ الفهم الإيجابي للجامعة وإيجاد صورة ذهنية تتناسب مع
                  الأهداف الأكاديمية ومكانة هذا الصرح المهم. تمكنت DCRI خلال هذا
                  الوقت القصير من تحقيق دور نشط في المجالات المتعلقة بإبراز اسم
                  الجامعة ، والهوية التعليمية والأكاديمية بالطريقة المطلوبة
                  والمدروسة ، ضمن سياسات كل من الجامعة ووزارة التعليم العالي.
                </p>
              </div>

              <div className="description two bg-f4f6f9">
                <div className="container p-0">
                  <nav>
                    <div
                      className="nav nav-tabs d-flex justify-content-between"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-overview-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-overview"
                        type="button"
                        role="tab"
                        aria-controls="nav-overview"
                        aria-selected="true"
                      >
                        الرؤية و المهمة
                      </button>
                      <button
                        className="nav-link"
                        id="nav-curriculum-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-curriculum"
                        type="button"
                        role="tab"
                        aria-controls="nav-curriculum"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        الأهداف
                      </button>
                      <button
                        className="nav-link"
                        id="nav-instructor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-instructor"
                        type="button"
                        role="tab"
                        aria-controls="nav-instructor"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        الطرق
                      </button>
                      <button
                        className="nav-link"
                        id="nav-reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-reviews"
                        type="button"
                        role="tab"
                        aria-controls="nav-reviews"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        الأقسام
                      </button>
                      <button
                        className="nav-link"
                        id="nav-manager-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-manager"
                        type="button"
                        role="tab"
                        aria-controls="nav-reviews"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        المدير
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade active show"
                      id="nav-overview"
                      role="tabpanel"
                      aria-labelledby="nav-overview-tab"
                    >
                      <div className="overview">
                        <div className="learn">
                          <h3>
                            <i className="ri-eye-fill"></i>الرؤية
                          </h3>
                          <p>
                            أن نصبح رائدين ومبتكرين في مجال العلاقات الثقافية
                            والإعلام في الإقليم التربوي.
                          </p>
                          <h3>
                            <i className="ri-pencil-fill"></i>المهمة
                          </h3>
                          <p>
                            تتمثل مهمة المديرية في توسيع أوعية علاقات الجامعة
                            على المستويين الداخلي والخارجي في المجالات
                            الأكاديمية والبحثية وخدمة المجتمع ، وتمكين مكانة
                            الجامعة وإظهار صورة مرموقة للجمعيات الوطنية
                            والإقليمية والدولية.
                          </p>
                          <h3>
                            <i className="flaticon-college-graduation"></i>القيم
                          </h3>
                          <p>
                            الالتزام بالصدق والشفافية والذاتية والحيادية في جميع
                            أنشطة وبرامج المديرية.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-curriculum"
                      role="tabpanel"
                      aria-labelledby="nav-curriculum-tab"
                    >
                      <div className="overview">
                        <div className="learn">
                          <h3>
                            <i className="ri-checkbox-circle-fill"></i> أهداف
                            الإدارة
                          </h3>
                          <div className="overview">
                            <div className="overview-box">
                              <h4>
                                تعزيز علاقات الجامعة مع نظيراتها كالجامعات
                                والمؤسسات الأكاديمية والبحثية واتحاد الجامعات
                                داخل وخارج السودان.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                التعريف بدور الجامعة ورسالتها الأكاديمية
                                والبحثية لخدمة المجتمع والمواطن.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                تكوين صورة إيجابية عن الجامعة للمجتمع والتصدي
                                للشائعات والأخبار الكاذبة التي قد تنشر ضد
                                الجامعة باعتبارها صوتها الرسمي المعتمد.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                تطوير وتنفيذ البرامج المتخصصة التي تدعم العلاقات
                                بين أسرة الجامعة من أعضاء هيئة التدريس والعاملين
                                والطلاب.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                إقامة علاقات مع الخريجين ومتابعة أدائهم
                                والارتقاء بهم إلى سوق العمل داخليًا وخارجيًا
                                والاستفادة منهم لتحسين البرامج الأكاديمية وصعود
                                الأموال.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                ربط الجامعة بوسائل الإعلام المختلفة (صحافة ،
                                راديو ، تليفزيون) لتزويدهم بالأخبار والأنشطة
                                والفعاليات التي تقام في الجامعة وكلياتها
                                وإداراتها المختلفة بالإضافة إلى تنظيم مؤتمرات
                                صحفية دورية ولقاءات للمندوبين الصحفيين مع مسؤولي
                                الجامعة.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                إصدار المطبوعات والنشرات الإعلامية التي تهدف إلى
                                تقديم المعلومات التعريفية بأنشطة الجامعة
                                المختلفة لجمهورها المستهدف.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                إعداد وتنظيم المؤتمرات والندوات وورش العمل
                                والمعارض من بين الفعاليات الأخرى التي تقيمها
                                الجامعة.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                مراجعة الدوائر الحكومية والخاصة لإنجاز المهام
                                الجامعية الرسمية.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>تسهيل مهام وإجراءات الوفود الرسمية.</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-instructor"
                      role="tabpanel"
                      aria-labelledby="nav-instructor-tab"
                    >
                      <div className="overview">
                        <div className="learn">
                          <h3>
                            <i className="ri-file-list-2-fill"></i> الطرق
                          </h3>
                          <div className="overview">
                            <div className="overview-box">
                              <h4>
                                للتواصل مع المؤسسات الأكاديمية والعلمية والبحثية
                                والإعلامية على المستوى الوطني والإقليمي والدولي
                                وكذلك دعم قنوات التعاون المستمر من خلال الزيارات
                                العلمية وتبادل أعضاء هيئة التدريس والخبرات
                                والمنشورات العلمية ، إلخ.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                مراجعة وتجديد الاتفاقيات السابقة مع الجامعات
                                الوطنية والإقليمية والدولية وتوقيع عقود اتفاقيات
                                جديدة معها.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                المشاركة الفعالة في المؤتمرات والندوات وورش
                                العمل داخليا وخارجيا وكذلك استضافة المنتديات
                                المماثلة كمبادرات من الجامعة بالتنسيق مع الكليات
                                والجهات المعنية.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                لتنظيم اجتماعات للهيئات الدبلوماسية المعتمدة
                                وطنيا لتعريفهم بالجامعة وأنشطتها الأكاديمية
                                والثقافية كمفتاح لإقامة علاقة متبادلة مع تلك
                                البلدان.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                التنسيق مع وزارة الخارجية لإدراج الجامعة ضمن
                                البرامج الزائرة للوفود الأجنبية للتعرف على
                                الجامعة وأنشطتها.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                التواصل مع كافة وسائل الإعلام لإبراز دور الجامعة
                                وموظفيها في المجالات الأكاديمية والبحثية وخدمة
                                المجتمع.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                {" "}
                                لإعداد وإصدار مواد إعلامية حول الأنشطة
                                الأكاديمية والبحثية والاجتماعية وغيرها. ويشمل
                                ذلك النشرات التمهيدية ، والأدلة ، والملصقات ،
                                والأفلام الوثائقية ، وما إلى ذلك.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>تغطية إعلامية لجميع أنشطة الجامعة.</h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                تنظيم الزيارات المتبادلة بين مسؤولي الجامعة
                                والهيئات الخارجية.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                الإشراف على تطوير الصفحة الإلكترونية للإدارة على
                                موقع الجامعة وجعلها وسيلة للتفاعل بين الجامعة
                                وموظفيها وقطاعات المجتمع المختلفة.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                لإنشاء قاعدة بيانات للخريجين وعقد اجتماعات دورية
                                مع خريجي الجامعة وأصحاب العمل.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                تنظيم البرامج والأنشطة الثقافية والاجتماعية لكل
                                من الموظفين وقطاعات المجتمع المختلفة.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                التواصل مع الجهات المعنية لتسهيل مهام وإجراءات
                                الوفود الرسمية ومتابعة زياراتهم وتقديم كافة
                                الخدمات لهم.
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-reviews"
                      role="tabpanel"
                      aria-labelledby="nav-reviews-tab"
                    >
                      <div className="overview">
                        <div className="learn">
                          <h3>
                            <i className="ri-file-3-fill"></i>الأقسام و الوحدات
                          </h3>
                        </div>
                        <div className="overview-box list px-37">
                          <h4>قسم العلاقات الثقافية:</h4>
                          <p>رئيس القسم: د / سارة عثمان حسين.</p>
                        </div>
                        <div className="overview-box list px-37">
                          <h4> قسم العلاقات العامة:</h4>
                          <p>رئيس القسم: د / أحمد محمد علي.</p>
                        </div>
                        <div className="overview-box list px-37">
                          <h4>الشؤون الادارية والمالية:</h4>
                          <p>رئيس الدائرة: سمية محمد ابراهيم خالد.</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-manager"
                      role="tabpanel"
                      aria-labelledby="nav-manager-tab"
                    >
                      <div className="instructor inner">
                        <div className="row align-items-center">
                          <div className="col-lg-5">
                            <div className="instructor-image">
                              <img src="/images/user.png" alt="Image" />
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="instructor-content">
                              <div className="name">
                                <h3>دكتور سعد عبدالقادر العاقب</h3>
                                <p>المدير</p>
                              </div>
                              <div className="quick-contact inner">
                                <h4>التواصل</h4>
                                <ul>
                                  <li>
                                    <i className="ri-phone-line"></i>
                                    <span>الخط الأرضي:</span>
                                    <a href="tel:00249155888431">
                                      00249155888431
                                    </a>
                                  </li>
                                  <li>
                                    <i className="ri-cellphone-line"></i>
                                    <span>الهاتف المحمول:</span>
                                    <a href="tel:00249995089097">
                                      00249995089097
                                    </a>
                                  </li>
                                  <li>
                                    <i className="ri-mail-line"></i>
                                    <span>البريد الألكتروني:</span>
                                    <a href="mailto:">saad@gmail.com</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <AdministrationList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CulturalRelationsAndInformation;

const translate: ITranslate = {
  title: {
    ar: "إدارة العلاقات الثقافية",
    en: "Managing cultural relations",
  },
  universityAdministrations: {
    ar: "إدارات الجامعة",
    en: "University Administrations",
  },
};
