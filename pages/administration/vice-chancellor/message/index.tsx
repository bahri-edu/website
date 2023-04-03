import AboutBanner from "@/components/AboutBanner";
import AdministratorSidebar from "@/components/AdministratorSidebar";
import { ViceChancellorMessage } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps() {
  const messages = await httpClient(`vice-chancellor/message`);
  return {
    props: {
      messages,
    },
  };
}

function Message({ messages }: { messages: ViceChancellorMessage[] }) {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);

  const [message] = messages;
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("viceChancellor"), t("title")]}
      />

      <div className="terms-condition-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="condition-content">
                <h2>{message?.title?.[lng]}</h2>
                {message?.descriptions?.map((des, x) => (
                  <p key={`ViceChancellorMessageDescription${x}`}>
                    {des?.[lng]}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <AdministratorSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;

const translate: ITranslate = {
  title: {
    ar: "رسالة مدير الجامعة",
    en: "vice-chancellor Message",
  },
  viceChancellor: {
    ar: "مدير الجامعة",
    en: "vice-chancellor",
  },
  message: {
    ar: `
    مرحبًا بكم في الموقع الإلكتروني لجامعة بحري ، والذي تم تصميمه مؤخرًا لتوفير معلومات محدثة عن برامجنا التعليمية وأنشطتنا البحثية والخدمة الإدارية ومساهمتنا في تنمية المجتمع. تأسس في يوليو 2011 ، بعد انفصال جنوب السودان إلى دولة ذات سيادة. جامعة بحري ليست مؤسسة أكاديمية جديدة ، فهي في الواقع خليفة لجامعة جوبا وغيرها من الجامعات الوطنية الجنوبية السابقة (مثل بحر الغزال وأعالي النيل ورمبيك) في السودان. تأسست جامعة جوبا عام 1975 في جوبا ، وانتقلت إلى الخرطوم عام 1989 ، بسبب الأوضاع الأمنية في جنوب السودان بسبب الحرب الأهلية الثانية التي استمرت لأكثر من عقدين (1983-2005). بعد انفصال جنوب السودان ، تم أيضًا تقسيم جامعة جوبا والجامعات الوطنية الجنوبية الأخرى وفقًا لجنسية الطلاب وأعضاء هيئة التدريس والموظفين الآخرين. بعد ذلك ، انتقلت جامعة جوبا إلى مسقط رأسها في جوبا ، بينما تم تغيير اسم حرمها الجامعي في الخرطوم إلى "جامعة بحري" ، مع تفويضها بتنفيذ جميع الأنشطة الأكاديمية وغير الأكاديمية التي كانت تمارسها جامعة جوبا في السابق. كان في جمهورية السودان. وبفضل هذا الإرث الأكاديمي الغني والمتنوع ، رسخت جامعة بحري نفسها بقوة بين الجامعات الوطنية الرائدة.

اليوم ، تمتلك جامعة بحري حرمًا جامعيًا متطورًا في الخرطوم بحري (أي بحري) ، يمتد على مساحة تزيد عن 493000 متر مربع ، مع قاعات محاضرات مناسبة ومختبرات مجهزة جيدًا وورش عمل ومرافق أخرى ضرورية لبيئة تعليمية مواتية. تضم الجامعة أكثر من 830 من أعضاء هيئة التدريس المؤهلين تأهيلا عاليا والمتفانين ، وأكثر من 20000 طالب ، مع 19 كلية وثلاثة مراكز متخصصة ، تغطي مجموعة متنوعة من التخصصات. بالإضافة إلى ذلك ، فقد ورثت الجامعة عددًا كبيرًا من الكوادر الفنية والمساندة عالية المستوى. على هذا النحو ، استمرت برامجنا الأكاديمية دون انقطاع ، مع تخرج 1،876 طالبًا في عام 2012 ، كأول دفعة من الخريجين. نفس الإرث سيمكن الجامعة من الوصول إلى آفاق جديدة والاضطلاع بدور أكبر في السودان والعالم في المستقبل.

تطمح جامعة بحري إلى أن تصبح المؤسسة المعرفية الرائدة في إفريقيا والعالم العربي ، من خلال الالتزام بمعايير الجودة والتميز في التدريس والبحث والخدمات المجتمعية. منذ إنشائها في عام 2011 ، قامت جامعة بحري بتغييرات وتحولات ملحوظة في برامجها الأكاديمية والبيئة المادية الحاسمة لإنجاز مهمتها. يتضمن ذلك مراجعة كبيرة وإعادة هيكلة للبرامج الأكاديمية وإدخال تخصصات جديدة ، من أجل تلبية متطلبات المجتمع العالمي سريع التغير ، لتزويد طلابنا بالمعرفة المعاصرة وإعدادهم لمعايير مهنية عالية ومستقبل أكثر إشراقًا. لقد قمنا بتحسين كبير في مرافق التعلم والبنية التحتية والبيئة الأكاديمية بأكملها التي ستوفر أساسًا مناسبًا حيث يمكن للطلاب التفوق في دراستهم وتطويرهم المهني. لقد عززنا روابطنا التعاونية وسنواصل زيادة تعاوننا مع جامعات ذات سمعة عالمية ومؤسسات بحثية وشركات ومجتمع. نحن على ثقة من أنه بفضل الحماس والدعم من موظفينا وطلابنا ، ستحقق جامعة بحري ارتفاعات أكبر في السنوات القليلة القادمة. ندعوك لزيارة موقعنا على الإنترنت للحصول على مزيد من الأفكار حول برامجنا التعليمية وأنشطتنا البحثية والمساهمات والاهتمامات البحثية لأكاديميينا.`,
    en: `
    Welcome to the University of Bahri website, which was recently designed to provide updated information on our educational programs, research activities, administrative service, and our contribution to community development. It was established in July 2011, after the secession of South Sudan into a sovereign country. The University of Bahri is not a new academic institution, in fact it is the successor to the University of Juba and other former Southern National Universities (such as Bahr El Ghazal, Upper Nile and Rumbek) in Sudan. The University of Juba was established in 1975 in Juba, and moved to Khartoum in 1989, due to the security situation in southern Sudan due to the second civil war that lasted for more than two decades (1983-2005). After the secession of South Sudan, the University of Juba and other southern national universities were also divided according to the nationality of students, faculty and other staff. Subsequently, the University of Juba moved to its hometown of Juba, while its campus in Khartoum was renamed "University of Bahri", with the mandate to carry out all academic and non-academic activities previously carried out by the University of Juba. He was in the Republic of Sudan. With this rich and diverse academic legacy, the University of Bahri has firmly established itself among the leading national universities.

Today, the University of Bahri has a state-of-the-art campus in Khartoum North (meaning Bahri), spread over an area of over 493,000 square metres, with adequate lecture halls, well-equipped laboratories, workshops, and other facilities necessary for a conducive learning environment. The university has more than 830 highly qualified and dedicated faculty, more than 20,000 students, with 19 faculties and three specialist centers, covering a variety of disciplines. In addition, the university has inherited a large number of high-level technical and support personnel. As such, our academic programs have continued without interruption, with 1,876 students graduating in 2012, as our first class of graduates. The same legacy will enable the university to reach new horizons and play a greater role in Sudan and the world in the future.

The University of Bahri aspires to become the leading knowledge institution in Africa and the Arab world, by adhering to standards of quality and excellence in teaching, research and community services. Since its inception in 2011, the University of Bahri has undergone remarkable changes and transformations in its academic programs and the physical environment crucial to accomplishing its mission. This includes a major revision and restructuring of academic programs and the introduction of new disciplines, in order to meet the demands of a rapidly changing global society, to provide our students with contemporary knowledge and to prepare them for high professional standards and a brighter future. We have greatly improved the learning facilities, infrastructure and the entire academic environment which will provide a proper foundation where students can excel in their studies and professional development. We have strengthened our collaborative ties and will continue to increase our collaboration with world-renowned universities, research institutions, companies and the community. We are confident that with the enthusiasm and support of our staff and students, the University of Bahri will achieve greater heights in the next few years. We invite you to visit our website to gain more insights into our educational programmes, research activities, contributions and research interests of our academics.`,
  },
};
