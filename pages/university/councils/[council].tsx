import AboutBanner from "@/components/AboutBanner";
import { Council } from "@/types/models";
import { getCouncil } from "@/utils/mic.util";
import { httpClient, uploadFileUrl } from "@/utils/util.http";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps(context: any) {
  const { council } = context.params;
  const councils = await httpClient(`council?councilType=${council}`);
  return {
    props: {
      councils,
      council,
    },
  };
}
function Council({
  councils,
  council,
}: {
  councils: Council[];
  council: string;
}) {
  const councilType = getCouncil(council);
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";
  return (
    <>
      <AboutBanner title={councilType[lng]} breadcrumbs={[councilType[lng]]} />

      <div className="graduate-admission pt-100 pb-70">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="courses-details">
                <div
                  className="description"
                  style={{ border: "none", paddingBottom: "0" }}
                >
                  <div className="container p-0">
                    <nav>
                      <div
                        className="nav nav-tabs d-flex justify-content-between"
                        id="nav-tab"
                        role="tablist"
                      >
                        {councils.map(({ id, title }, x) => (
                          <button
                            key={id}
                            className={`nav-link  ${x === 0 ? " active" : ""}`}
                            id={`nav-${id}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#nav-${id}`}
                            type="button"
                            role="tab"
                            aria-controls={`nav-${id}`}
                            aria-selected={x === 0 ? true : false}
                          >
                            {title?.[lng]}
                          </button>
                        ))}
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      {councils.map(({ id, title, descriptions, image }, x) => (
                        <div
                          key={id}
                          className={`tab-pane fade ${
                            x === 0 ? " active show" : ""
                          } `}
                          id={`nav-${id}`}
                          role="tabpanel"
                          aria-labelledby={`nav-${id}-tab`}
                        >
                          <div className="row">
                            <div className="col-xl-7">
                              <div className="overview">
                                <div className="curriculum">
                                  <h3>{title?.[lng]}</h3>
                                  <div className="list">
                                    <ul>
                                      {descriptions.map((d, x) => (
                                        <li key={`descriptions-council-${x}`}>
                                          {d?.[lng]}

                                          {d.lists && d.lists && (
                                            <div className="list tow">
                                              <ul>
                                                {d.lists.map((li, x) => (
                                                  <li
                                                    key={`lists-sub-${x}`}
                                                    style={{
                                                      display: "flex",
                                                      flexDirection: "row",
                                                      gap: 10,
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: 5,
                                                      }}
                                                    >
                                                      <span> {x + 1}</span>
                                                      <strong>
                                                        {li?.title?.[lng]}:
                                                      </strong>
                                                    </span>
                                                    <span>
                                                      {li?.description?.[lng]}
                                                    </span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="img">
                                {image && (
                                  <img
                                    src={uploadFileUrl + image}
                                    alt="Image"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Council;
