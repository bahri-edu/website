import AboutBanner from "@/components/AboutBanner";
import { DeanshipTypeEnum, Translate } from "@/types/models";
import { getDeanship } from "@/utils/mic.util";
import { httpClient, uploadFileUrl } from "@/utils/util.http";
import Link from "next/link";
import React from "react";

interface Deanship {
  id: string;
  title: Translate;
  icon?: string;
  image?: string;
  descriptions: Translate[];
  deanshipType: DeanshipTypeEnum;
}

interface AdministrationDeanship {
  id: string;
  possison: Translate;
  name: Translate;
  degree: Translate;
  email: string;
  phone: string;

  image?: string;
  socials?: { icon: string; url: string }[];
}

interface StudentService {
  id: string;
  title: Translate;
  icon?: string;
  description: Translate;
}

interface Department {
  id: string;
  title: Translate;
  description?: Translate;
  icon?: string;
}

// const deanships: Deanship[] = [
//   {
//     id: "reokekbeberb",
//     title: {
//       ar: "الخلفية التاريخية",
//       en: "Historical background",
//     },
//     icon: "ri-pencil-fill",
//     deanshipType: DeanshipTypeEnum.DEANSHIPOFLIBRARIES,
//     descriptions: [
//       {
//         ar: "تأسست المكتبة المركزية عام 1998 بالخرطوم منطقة الأمارات بالخرطوم كمكتبة مركزية لجامعة جوبا ، ثم انتقلت عام 2003 إلى مجمع الكليات بمنطقة الكادرو ، بعد انفصال جنوب السودان عام 2011 أصبحت المكتبة المركزية لجامعة بحري. استمرت المكتبة في تقديم خدماتها للباحثين والطلاب منذ ذلك الوقت ، لكنها فقدت الكثير من الكتب والمراجع بعد انفصال جنوب السودان.",
//         en: "The central library was established in 1998 in Khartoum, the Emirates district of Khartoum, as a central library for the University of Juba. Then, in 2003, it moved to the Colleges Complex in the Kadro area. After the secession of South Sudan in 2011, it became the central library of Bahri University. The library has continued to provide its services to researchers and students since that time, but it lost many books and references after the secession of South Sudan.",
//       },
//     ],
//   },
//   {
//     id: "rhrhrhrhrhrhr",
//     title: {
//       ar: "الرؤية",
//       en: "Vision",
//     },
//     icon: "ri-eye-fill",
//     deanshipType: DeanshipTypeEnum.DEANSHIPOFLIBRARIES,
//     descriptions: [
//       {
//         ar: "أن نصبح رائدين ومبتكرين في مجال العلاقات الثقافية والإعلام في الإقليم التربوي",
//         en: "To become pioneers and innovators in the field of cultural relations and media in the educational region.",
//       },
//     ],
//   },
//   {
//     id: "hththththththhth",
//     title: {
//       ar: "الرسالة",
//       en: "Message",
//     },
//     icon: "ri-message-2-fill",
//     deanshipType: DeanshipTypeEnum.DEANSHIPOFLIBRARIES,
//     descriptions: [
//       {
//         ar: "تتمثل مهمة المديرية في توسيع أوعية علاقات الجامعة على المستويين الداخلي والخارجي في المجالات الأكاديمية والبحثية وخدمة المجتمع ، وتمكين مكانة الجامعة وإظهار صورة مرموقة للجمعيات الوطنية والإقليمية والدولية. ",
//         en: "The mission of the Directorate is to expand the vessels of the university's relations at the internal and external levels in the academic, research and community service fields, and to empower the university's status and show a prestigious image to national, regional and international associations.",
//       },
//     ],
//   },
//   {
//     id: "hththththththththh",
//     title: {
//       ar: "شعار العمادة",
//       en: "Deanship logo",
//     },
//     icon: "ri-checkbox-circle-fill",
//     deanshipType: DeanshipTypeEnum.DEANSHIPOFLIBRARIES,
//     image: "assets/images/logo-bahri.jpg",
//     descriptions: [
//       {
//         ar: "",
//         en: "",
//       },
//     ],
//   },
// ];

// const administrationDeanships: AdministrationDeanship[] = [
//   {
//     id: "sdsddsdsdww",
//     possison: {
//       ar: "عميد شؤون الطلاب",
//       en: "Dean of Student Affairs",
//     },
//     name: {
//       ar: "أحمد عبد القادر آدم",
//       en: "Ahmed Abdel Qader Adam",
//     },
//     degree: {
//       ar: "بروفيسر",
//       en: "Professor",
//     },
//     email: "249918199724+",
//     phone: "ahmed@gmail.com",
//     socials: [
//       {
//         icon: "ri-linkedin-fill",
//         url: "#",
//       },
//       {
//         icon: "ri-instagram-line",
//         url: "#",
//       },
//       {
//         icon: "ri-twitter-fill",
//         url: "#",
//       },
//       {
//         icon: "ri-facebook-fill",
//         url: "#",
//       },
//     ],
//   },
//   {
//     id: "akuluyl777",
//     possison: {
//       ar: "نائب عميد شؤون الطلاب",
//       en: "Vice Dean of Student Affairs",
//     },
//     name: {
//       ar: "أحمد عبد القادر آدم",
//       en: "Ahmed Abdel Qader Adam",
//     },
//     degree: {
//       ar: "بروفيسر",
//       en: "Professor",
//     },
//     email: "249918199724+",
//     phone: "ahmed@gmail.com",
//     socials: [
//       {
//         icon: "ri-linkedin-fill",
//         url: "#",
//       },
//       {
//         icon: "ri-instagram-line",
//         url: "#",
//       },
//       {
//         icon: "ri-twitter-fill",
//         url: "#",
//       },
//       {
//         icon: "ri-facebook-fill",
//         url: "#",
//       },
//     ],
//   },
//   {
//     id: "ewtlhg856757iy",
//     possison: {
//       ar: "مدير المكتب التنفيذي",
//       en: "Executive Office Manager",
//     },
//     name: {
//       ar: "أحمد عبد القادر آدم",
//       en: "Ahmed Abdel Qader Adam",
//     },
//     degree: {
//       ar: "بروفيسر",
//       en: "Professor",
//     },
//     email: "249918199724+",
//     phone: "ahmed@gmail.com",
//   },
// ];

// const studentServices: StudentService[] = [
//   {
//     id: "jtjtjt5j6t56tk2t6k2",
//     title: {
//       ar: "تسجيل الطلاب",
//       en: "student registration",
//     },
//     description: {
//       ar: "تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات",
//       en: "Each year, the university allocates a number of seats for self-admission",
//     },
//     icon: "ri-graduation-cap-fill",
//   },
//   {
//     id: "erhtjt26ky5kyk5yky",
//     title: {
//       ar: "تسجيل الطلاب",
//       en: "student registration",
//     },
//     description: {
//       ar: "تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات",
//       en: "Each year, the university allocates a number of seats for self-admission",
//     },
//     icon: "ri-graduation-cap-fill",
//   },
//   {
//     id: "eqeq5q5f6q5ffq",
//     title: {
//       ar: "تسجيل الطلاب",
//       en: "student registration",
//     },
//     description: {
//       ar: "تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات",
//       en: "Each year, the university allocates a number of seats for self-admission",
//     },
//     icon: "ri-graduation-cap-fill",
//   },
// ];

// const departments: Department[] = [
//   {
//     id: "jtjtjt5j6t56tk2t6k2",
//     title: {
//       ar: "الشعبة الإدارية والمالية",
//       en: "Administrative and Financial Division",
//     },
//     description: {
//       ar: "تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات",
//       en: "Each year, the university allocates a number of seats for self-admission",
//     },
//     icon: "ri-graduation-cap-fill",
//   },
//   {
//     id: "erhtjt26ky5kygegegegk5yky",
//     title: {
//       ar: "دائرة الخدمات الالكترونية",
//       en: "Electronic Services Department",
//     },
//     description: {
//       ar: "تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات",
//       en: "Each year, the university allocates a number of seats for self-admission",
//     },
//     icon: "ri-graduation-cap-fill",
//   },
//   {
//     id: "eqeq5q5f6q5ffq",
//     title: {
//       ar: "وحدة الجودة والتطوير",
//       en: "Quality and development unit",
//     },
//     description: {
//       ar: "تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات",
//       en: "Each year, the university allocates a number of seats for self-admission",
//     },
//     icon: "ri-graduation-cap-fill",
//   },

//   {
//     id: "eqeq5q5fgegegegegy6q5ffq",
//     title: {
//       ar: "الفهرسة والتصنيف",
//       en: "Cataloging and classification",
//     },
//     description: {
//       ar: "تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات",
//       en: "Each year, the university allocates a number of seats for self-admission",
//     },
//     icon: "ri-graduation-cap-fill",
//   },
// ];

export async function getServerSideProps(context: any) {
  const { deanship } = context.params;
  const locale = context.locale === "ar" ? "ar" : "en";

  const [deanships, administrationDeanships, studentServices, departments] =
    await Promise.all([
      httpClient(`deanship?deanshipType=${deanship}`),
      httpClient(`deanship-administration?deanshipType=${deanship}`),
      httpClient(`deanship-student-service?deanshipType=${deanship}`),
      httpClient(`deanship-department?deanshipType=${deanship}`),
    ]); //
  // const  = await httpClient(`deanship?deanshipType=${deanship}`);
  return {
    props: {
      deanship,
      deanships,
      administrationDeanships,
      studentServices,
      departments,
      locale,
    },
  };
}

function Deanship({
  deanships,
  deanship,
  administrationDeanships,
  studentServices,
  departments,
  locale,
}: {
  deanships: Deanship[];
  deanship: string;
  administrationDeanships: AdministrationDeanship[];
  studentServices: StudentService[];
  departments: Department[];
  locale: "ar" | "en";
}) {
  const deanshipType = getDeanship(deanship);
  return (
    <>
      <AboutBanner
        title={deanshipType[locale]}
        breadcrumbs={[title[locale], deanshipType[locale]]}
      />

      <div className="graduate-admission pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="how-to-apply">
                <div className="courses-details">
                  <div
                    className="description"
                    style={{ border: "none", paddingBottom: 0 }}
                  >
                    <div className="container p-0">
                      <nav>
                        <div
                          className="nav nav-tabs d-flex justify-content-between"
                          id="nav-tab"
                          role="tablist"
                        >
                          {deanships.map(({ id, title }, x) => (
                            <button
                              key={id}
                              className={`nav-link ${x === 0 ? " active" : ""}`}
                              id={`nav-${id}-tab`}
                              data-bs-toggle="tab"
                              data-bs-target={`#nav-${id}`}
                              type="button"
                              role="tab"
                              aria-controls={`nav-${id}`}
                              aria-selected="true"
                            >
                              {title[locale]}
                            </button>
                          ))}
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        {deanships.map(
                          ({ id, title, icon, descriptions, image }, x) => (
                            <div
                              key={id}
                              className={`tab-pane fade ${
                                x === 0 ? " active show" : ""
                              } `}
                              id={`nav-${id}`}
                              role="tabpanel"
                              aria-labelledby={`nav-${id}-tab`}
                            >
                              <div className="overview">
                                <div className="learn">
                                  <h3>
                                    <i className={icon}></i>
                                    {title[locale]}
                                  </h3>
                                  {descriptions.map((description, x) => (
                                    <p key={`descriptions-${x}`}>
                                      {description[locale]}
                                    </p>
                                  ))}

                                  {image && (
                                    <div className="image Lib">
                                      <img
                                        src={uploadFileUrl + image}
                                        width="250px"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="additional-information">
                <h3>{title[locale]}</h3>
                <div className="list">
                  <ul>
                    <li>
                      <Link href={`/deanship/deanship-of-scientific-research`}>
                        <a>{deanshipOfScientificResearch[locale]}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/deanship/deanship-of-student-affairs`}>
                        <a>{deanshipOfStudentAffairs[locale]}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/deanship/deanship-of-libraries`}>
                        <a>{deanshipOfLibraries[locale]}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {administrationDeanships?.length > 0 && (
        <div className="terms-condition-area ruels two pt-100 pb-70 bg-f4f6f9">
          <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-12">
                <div className="condition-content">
                  <h2>{administrationTitle[locale]}</h2>
                </div>

                <div className="description two">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-lg-3">
                        <nav>
                          <div
                            className="nav nav-tabs d-flex justify-content-between"
                            id="nav-tab"
                            role="tablist"
                          >
                            {administrationDeanships.map(
                              ({ id, possison }, x) => (
                                <button
                                  key={id}
                                  className={`nav-link ${
                                    x === 0 ? " active" : ""
                                  }`}
                                  id={`nav-${id}-tab`}
                                  data-bs-toggle="tab"
                                  data-bs-target={`#nav-${id}-nav`}
                                  type="button"
                                  role="tab"
                                  aria-controls={`nav-${id}`}
                                  aria-selected={x === 0 ? true : false}
                                >
                                  {possison?.[locale]}
                                </button>
                              )
                            )}
                          </div>
                        </nav>
                      </div>
                      <div className="col-lg-9">
                        <div className="tab-content" id="nav-tabContent">
                          {administrationDeanships.map(
                            (
                              { id, name, phone, email, degree, socials },
                              x
                            ) => (
                              <div
                                key={id}
                                className={`tab-pane fade ${
                                  x === 0 ? " show active" : ""
                                } `}
                                id={`nav-${id}-nav`}
                                role="tabpanel"
                                aria-labelledby={`nav-${id}-tab`}
                              >
                                <div className="about-lecturer">
                                  <div className="row align-items-center">
                                    <div className="col-md-5">
                                      <img src="/images/user.png" alt="Image" />
                                    </div>
                                    <div className="col-md-7">
                                      <div className="address">
                                        <h4>{name?.[locale]}</h4>
                                        <div className="list mb-4">
                                          <ul>
                                            <li>
                                              {degreeTitle[locale]} :
                                              {degree?.[locale]}
                                            </li>
                                            <li>
                                              {phoneTitle[locale]} :
                                              <a dir="ltr" href="tel:">
                                                {phone}
                                              </a>
                                            </li>
                                            <li>
                                              {emailTitle[locale]} :
                                              <a href="#">{email}</a>
                                            </li>
                                          </ul>
                                        </div>

                                        <div className="social-content">
                                          <ul>
                                            {socials &&
                                              socials.length > 0 &&
                                              socials.map(
                                                ({ icon, url }, x) => (
                                                  <li key={`socials-${x}`}>
                                                    <a
                                                      href={url}
                                                      target="_blank"
                                                      rel="noreferrer"
                                                    >
                                                      <i className={icon}></i>
                                                    </a>
                                                  </li>
                                                )
                                              )}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {studentServices?.length > 0 && (
        <div className="ptb-100">
          <div className="container">
            <div className="section-title style2 style3">
              <h2>{studentServiceTitle[locale]}</h2>
            </div>
            <div className="row">
              {studentServices.map(({ id, title, description, icon }, x) => (
                <div key={id} className="col-lg-4 col-md-6">
                  <div className="single-academics-card">
                    <div className="academic-top-content">
                      <i className={icon}></i>
                      <i className="ri-graduation-cap-fill"></i>
                      <h3>{title?.[locale]}</h3>
                    </div>
                    <p>{description?.[locale]}</p>
                    <a href="#" className="read-more-btn">
                      {readMore[locale]}
                      <i className="flaticon-next"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {departments?.length > 0 && (
        <div className="eduction-area ptb-100 bg-f4f6f9">
          <div className="container">
            <div className="section-title style2 style3">
              <h2>{departmentTitle[locale]}</h2>
            </div>
            <div className="row">
              {departments.map(({ id, title, icon }, x) => (
                <div key={id} className="col-lg-3 col-md-6">
                  <div className="single-education-card">
                    <div className="edication-content">
                      <div className="icon">
                        <i className={icon}></i>
                      </div>
                      <a href="#">
                        <h3>{title?.[locale]}</h3>
                      </a>
                      <a href="#" className="read-more-btn white-color">
                        {readMore[locale]}
                        <i className="flaticon-next"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Deanship;

const title = {
  ar: "العمادات",
  en: "Deanship",
};

const studentServiceTitle = {
  ar: "خدمات الطلاب",
  en: "Student services",
};
const administrationTitle = {
  ar: "إدارة العمادة",
  en: "Deanship administration",
};
const departmentTitle = {
  ar: "أقسام  العمادة",
  en: "Deanship departments",
};

const deanshipOfScientificResearch = {
  ar: "عمادة البحث العلمي",
  en: "Deanship of Scientific Research",
};
const deanshipOfStudentAffairs = {
  ar: "عمادة شؤون الطلاب",
  en: "Deanship of Student Affairs",
};
const deanshipOfLibraries = {
  ar: "عمادة المكتبات",
  en: "Deanship of Libraries",
};

const readMore = {
  ar: "إقرء المزيد",
  en: "Read More",
};

const degreeTitle = {
  ar: "الدرجة العلمية",
  en: "Degree",
};
const emailTitle = {
  ar: "البريد الإلكتروني",
  en: "Email",
};
const phoneTitle = {
  ar: "رقم الهاتف",
  en: "Phone",
};
