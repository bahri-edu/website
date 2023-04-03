import AboutBanner from "@/components/AboutBanner";
import { UniversityAdministration } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps(ctx: any) {
  const { slug } = ctx.params;
  const data = await httpClient(`university-administration/slug/${slug}`);
  return {
    props: {
      data,
    },
  };
}

function UniversityAdministrationBySlug({
  data,
}: {
  data: UniversityAdministration;
}) {
  const { locale } = useRouter();
  const t = useTranslate(translate, locale);

  const lng = locale === "ar" ? "ar" : "en";
  return (
    <>
      <Head>
        <title>{data?.unit?.[lng]}</title>
      </Head>
      <AboutBanner
        title={data?.unit?.[lng]}
        breadcrumbs={[t("universityAdministrations"), data?.unit?.[lng]]}
      />

      <div className="terms-condition-area pt-100 pb-70">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="condition-content">
                <h2>{data?.unit?.[lng]}</h2>
                <p>{data?.introduction?.[lng]}</p>
              </div>

              <div className="description two bg-f4f6f9">
                <div className="container p-0">
                  <nav>
                    <div
                      className="nav nav-tabs d-flex justify-content-between"
                      id="nav-tab"
                      role="tablist"
                    >
                      {data?.info?.map((inf, x) => (
                        <button
                          key={`info-${x}`}
                          className={`nav-link ${x === 0 ? " active" : ""}`}
                          id={`nav-${x}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#nav-${x}-nav`}
                          type="button"
                          role="tab"
                          aria-controls={`nav-${x}-nav`}
                          aria-selected={x === 0 ? "true" : "false"}
                          tabIndex={-1}
                        >
                          {inf?.title?.[lng]}
                        </button>
                      ))}
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    {data?.info?.map((inf, x) => (
                      <div
                        key={`tab-content-nav-${x}`}
                        className={`tab-pane fade ${
                          x === 0 ? " show active" : ""
                        }`}
                        id={`nav-${x}-nav`}
                        role="tabpanel"
                        aria-labelledby={`nav-${x}-tab`}
                      >
                        <div className="overview">
                          <div className="learn">
                            <h3>
                              <i className={inf?.icon}></i>
                              {inf?.title?.[lng]}
                            </h3>
                            <p>{inf?.description?.[lng]}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {data?.staff?.length > 0 && (
              <div className="col-lg-12">
                <div className="condition-content mt-5">
                  {data?.staffTitle?.[lng] && (
                    <h2>{data?.staffTitle?.[lng]}</h2>
                  )}
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <td>الإسم</td>
                        <td>المكتب</td>
                        <td>البريد الإلكتروني</td>
                        <td>رقم الهاتف</td>
                      </tr>
                    </thead>

                    <tbody>
                      {data?.staff?.map((staf, x) => (
                        <tr key={`staff-${x}-nav`}>
                          <td>{staf?.name?.[lng]}</td>
                          <td>{staf?.position?.[lng]}</td>
                          <td>{staf?.email}</td>
                          <td>{staf?.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UniversityAdministrationBySlug;

const translate: ITranslate = {
  title: {
    ar: "إدارة الموارد البشرية",
    en: "Human Resource Management",
  },
  universityAdministrations: {
    ar: "إدارات الجامعة",
    en: "University Administrations",
  },
};
