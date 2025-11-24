export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-24 text-neutral-900">
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm backdrop-blur">
              برنامج تصعيد مهني شامل (12 أسبوعاً)
            </span>
            <h1 className="text-4xl font-semibold leading-relaxed sm:text-5xl">
              من الصفر إلى بناء أعمال رقمية مربحة:
              <br />
              خطة تعليمية وعملية تحت إشراف مرشدك الشخصي
            </h1>
            <p className="text-lg leading-9 text-white/90">
              هذا المنهج المكثف صُمّم ليضعك على مسار واضح لتأسيس منتجات رقمية
              قوية، بدءاً من المفاهيم الأساسية وحتى إطلاق منتجات قابلة للنمو
              والتطوير. يعتمد على تنفيذ أسبوعي، مهام تطبيقية، أدوات احترافية،
              ومراجعات نوعية تضمن تقدّمك بثقة.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
              <p className="text-sm text-white/70">مدة البرنامج</p>
              <p className="mt-2 text-2xl font-semibold">12 أسبوعاً</p>
              <p className="mt-2 text-sm text-white/70">
                مقسمة إلى 5 مراحل واضحة مع تقييمات مرحلية وتراكميّة.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
              <p className="text-sm text-white/70">المخرجات الرئيسية</p>
              <p className="mt-2 text-2xl font-semibold">
                منتج رقمي جاهز للإطلاق + قناة بيع فعّالة
              </p>
              <p className="mt-2 text-sm text-white/70">
                يشمل ملف هوية، صفحة مبيعات، وخطة تسويق أولية لمدة 30 يوماً.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
              <p className="text-sm text-white/70">نسبة التطبيق</p>
              <p className="mt-2 text-2xl font-semibold">60% تطبيق / 40% تعلم</p>
              <p className="mt-2 text-sm text-white/70">
                كل وحدة تنتهي بمهمة واقعية وربط مباشر بالسوق.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-6 pt-16">
        <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-lg shadow-blue-100 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              المراحل الخمس لرحلتك نحو الاحتراف
            </h2>
            <p className="leading-8 text-slate-600">
              اتبع الجدول الزمني التالي كمرجع رئيسي. كل مرحلة تحتوي على أهداف،
              مخرجات قابلة للقياس، ومعايير تقييم معتمدة لضمان الجاهزية للانتقال
              للمرحلة التالية.
            </p>
            <div className="grid gap-5">
              {[
                {
                  title: "المرحلة التأسيسية",
                  weeks: "الأسبوع 1 - 2",
                  focus:
                    "فهم كامل لمشهد المنتجات الرقمية، تحديد أهداف التعلم والنجاح الشخصي.",
                  deliverables: [
                    "خريطة مستويات الدخل الرقمي",
                    "تقييم مهارات ذاتي + فجوات التعلم",
                  ],
                },
                {
                  title: "مرحلة البحث والتحقق",
                  weeks: "الأسبوع 3 - 4",
                  focus:
                    "اختيار نيتش مربح، دراسة السوق، بناء شخصيات العملاء، واختبار الجدوى.",
                  deliverables: [
                    "لوحة بحث (Market Board)",
                    "ملف بيرسونا رئيسية",
                    "قائمة المنتجات المنافسة وتحليل فجواتها",
                  ],
                },
                {
                  title: "مرحلة التصميم وبناء الـ MVP",
                  weeks: "الأسبوع 5 - 7",
                  focus:
                    "تطوير منتج أولي عالي الجودة باستخدام أدوات ذكية وتكرار سريع.",
                  deliverables: [
                    "هيكل محتوى/خصائص المنتج",
                    "نظام التصميم أو هوية المنتج",
                    "نسخة أولية مكتملة قابلة للاختبار",
                  ],
                },
                {
                  title: "البناء التجاري والبنية التحتية",
                  weeks: "الأسبوع 8 - 9",
                  focus:
                    "إعداد المنصة/المتجر، تسعير استراتيجي، تجهيز الأصول التسويقية.",
                  deliverables: [
                    "صفحة مبيعات أو متجر جاهز",
                    "نظام دفع وتجربة شراء سلسة",
                    "مواد إطلاق (نشرة بريدية، فيديو، رسائل تلقائية)",
                  ],
                },
                {
                  title: "الإطلاق، التسويق، والتحسين",
                  weeks: "الأسبوع 10 - 12",
                  focus:
                    "تنفيذ حملة إطلاق، تتبع الأرقام، بناء نظام تحسين مستمر وتوسّع.",
                  deliverables: [
                    "خطة محتوى 30 يوماً",
                    "لوحة مؤشرات (KPI Dashboard)",
                    "خطة تطوير للنسخة الثانية من المنتج",
                  ],
                },
              ].map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {phase.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white">
                      {phase.weeks}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {phase.focus}
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pr-5 text-sm text-slate-700">
                    {phase.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-6 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-slate-800">
            <h3 className="text-lg font-semibold text-blue-900">
              توصيات تنفيذية
            </h3>
            <ul className="space-y-4">
              <li>
                <strong className="block text-blue-900">
                  سلم المهارات المصاحبة
                </strong>
                <span className="text-blue-900/80">
                  إدارة المعرفة، إنتاج المحتوى، تحليل البيانات، بناء الأنظمة،
                  والتسويق المبني على القصة (Story-driven marketing).
                </span>
              </li>
              <li>
                <strong className="block text-blue-900">ساعات التعلم</strong>
                <span className="text-blue-900/80">
                  6 ساعات تعليمية أسبوعياً + 8 ساعات تطبيق عملي. يمكن توزيعها
                  على 4 جلسات مركزة (Focus Blocks).
                </span>
              </li>
              <li>
                <strong className="block text-blue-900">
                  مؤشرات التقدم الرئيسية
                </strong>
                <span className="text-blue-900/80">
                  التزام بالمهام، فهم واضح للجمهور المستهدف، قدرة على إنتاج قيمة
                  ملموسة أسبوعياً، واستجابة سريعة للتغذية الراجعة.
                </span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="space-y-8 rounded-3xl bg-white p-8 shadow-lg shadow-emerald-100">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900">
              الأساسيات والمفاهيم: خريطة المنتجات الرقمية
            </h2>
            <p className="text-slate-600">
              اختر النوع المناسب بناءً على خبرتك، رأس المال، والسرعة المطلوبة
              لدخول السوق. استخدم الجدول التالي لاتخاذ قرار واعٍ.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <table className="w-full min-w-[720px] border-collapse text-right text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">النوع</th>
                  <th className="px-4 py-3 font-semibold">الميزات الرئيسية</th>
                  <th className="px-4 py-3 font-semibold">التحديات</th>
                  <th className="px-4 py-3 font-semibold">
                    الأنسب للمبتدئ
                  </th>
                  <th className="px-4 py-3 font-semibold">تكلفة البداية</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "كتب إلكترونية وأدلة",
                    pros: [
                      "سهولة الإنتاج باستثمار منخفض",
                      "بناء خبرة موثقة يمكن تحويلها لدورات لاحقاً",
                    ],
                    cons: [
                      "حاجة لتمايز قوي في المحتوى",
                      "سرعة النسخ من المنافسين",
                    ],
                    fit: "ممتاز للمبتدئ مع خبرة معرفية أو مهنية محددة",
                    cost: "0 - 50 دولار (أدوات كتابة وتصميم)",
                  },
                  {
                    name: "دورات تعليمية مصغرة",
                    pros: [
                      "قيمة عالية وإمكانية تسعير مرتفع",
                      "بناء مجتمع حول المنتج",
                    ],
                    cons: [
                      "تتطلب ظهوراً شخصياً أو صوتياً",
                      "إنتاج فيديو/صوت بجودة مناسبة",
                    ],
                    fit: "جيد لمن يمتلك مهارات تدريسية أو عرض مرئي",
                    cost: "50 - 300 دولار (منصة تصوير/تسجيل، استضافة)",
                  },
                  {
                    name: "قوالب Notion / أدوات جاهزة",
                    pros: [
                      "طلب مرتفع في سوق الإنتاجية",
                      "سرعة الإطلاق والتحديث",
                    ],
                    cons: [
                      "تشبع نسبي في بعض المجالات",
                      "يتطلب فهم عميق لتجربة المستخدم",
                    ],
                    fit: "ممتاز للمبتدئين التقنيين والمبدعين في التنظيم",
                    cost: "0 - 30 دولار (أدوات تصميم وصور)",
                  },
                  {
                    name: "منتجات SaaS خفيفة (Micro-SaaS)",
                    pros: [
                      "قابلية تكرار إيرادات شهرية",
                      "حاجز دخول أعلى للمنافسين",
                    ],
                    cons: [
                      "احتياج لمهارات برمجية أو فريق",
                      "متطلبات دعم فني مستمرة",
                    ],
                    fit: "أنسب للمبتدئ التقني أو شراكة مؤسس/مطور",
                    cost: "300 - 1,200 دولار (استضافة، تطوير، تكاملات)",
                  },
                  {
                    name: "فنون رقمية وأصول تصميم",
                    pros: [
                      "سوق نشط في Etsy وCreative Market",
                      "إمكانية الأتمتة عبر الذكاء الاصطناعي",
                    ],
                    cons: [
                      "منافسة سعرية حادة",
                      "حاجة لتحديث مستمر للكتالوج",
                    ],
                    fit: "جيد للمبدعين والفنانين الرقميين",
                    cost: "20 - 150 دولار (أدوات تصميم، مخزون صور)",
                  },
                ].map((type) => (
                  <tr
                    key={type.name}
                    className="even:bg-slate-50/70 hover:bg-emerald-50/80"
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {type.name}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      <ul className="space-y-1">
                        {type.pros.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      <ul className="space-y-1">
                        {type.cons.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{type.fit}</td>
                    <td className="px-4 py-3 text-slate-700">{type.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <strong className="block text-emerald-900">
                إطار اتخاذ القرار السريع (FAST)
              </strong>
              <ul className="mt-2 space-y-1">
                <li>• Focus: اختر نوع منتج واحد خلال أول أسبوع.</li>
                <li>• Audience: تحقّق من وجود جمهور يبحث عن حلول فورية.</li>
                <li>• Skills: قيّم مهاراتك الحالية وعيّن الموارد الناقصة.</li>
                <li>• Timeline: التزم بخطة زمنية لا تتجاوز 6 أسابيع للنسخة الأولى.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <strong className="block text-blue-900">
                متى تنتقل لنوع منتج أعلى؟
              </strong>
              <p className="mt-2 leading-6">
                بعد تحقيق 50 عملية بيع من منتجك الأول أو جمع قائمة بريدية من 500
                مشترك متفاعل. هذا المؤشر يعني إمكانية الاستثمار في منتج أعمق
                (دورة شاملة أو SaaS خفيف).
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8 rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 p-8 text-white shadow-lg shadow-slate-300">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">
              البحث واختيار النيتش: نظام تشخيص مكوّن من ثلاث طبقات
            </h2>
            <p className="text-white/80">
              اعتمد على مصادر بيانات كمية، مقابلات نوعية، واختبارات فعلية للطلب
              قبل الالتزام ببناء المنتج.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "طبقة اكتشاف الفرص",
                week: "الأسبوع 3",
                actions: [
                  "استخدم أدوات مثل Google Trends، Exploding Topics، Product Hunt لرصد اتجاهات الطلب.",
                  "حلل أسئلة الجمهور في Reddit، Quora، مجتمعات Telegram/Discord العربية.",
                  "كوّن قائمة مبدئية من 10 أفكار مصنّفة حسب شدة المشكلة وقابلية الحل.",
                ],
                deliverable: "قائمة أفكار مرتبة حسب حجم السوق، سرعة التنفيذ، وحجم الألم.",
              },
              {
                title: "طبقة التحليل والمواءمة",
                week: "الأسبوع 4",
                actions: [
                  "أجرِ تحليل منافسين سريع باستخدام Sheet يشمل: السعر، الوعد التسويقي، نقاط الضعف.",
                  "حدّد شرائح الجمهور (Personas) عبر أسلوب Jobs To Be Done وسرد قصص المستخدم.",
                  "اختبر استعدادك المعرفي والمهاري لكل نيتش، وأيها يمنحك ميزة تنافسية شخصية.",
                ],
                deliverable: "ملف بيرسونا رئيسية + مصفوفة اختيار نيتش (ICE Score).",
              },
              {
                title: "طبقة التحقق السريع",
                week: "الأسبوع 4 (نهاية)",
                actions: [
                  "اصنع استطلاع رأي سريع (Typeform أو Google Forms) ووزعه على 30 شخصاً من الشريحة المستهدفة.",
                  "أنشئ منشور اختبار على تويتر/لينكدإن أو إعلاناً تجريبياً بمعدل إنفاق 20 دولاراً لرصد التفاعل.",
                  "حلل النتائج وحدد مؤشر القرار (Go / Hold / Pivot).",
                ],
                deliverable: "تقرير تحقق مختصر + قرار نهائي مع أسباب الاختيار.",
              },
            ].map((layer) => (
              <div
                key={layer.title}
                className="flex flex-col justify-between rounded-2xl bg-white/10 p-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{layer.title}</h3>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                      {layer.week}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-white/85">
                    {layer.actions.map((action) => (
                      <li key={action}>• {action}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-lg bg-white/20 p-3 text-xs text-white/80">
                  <strong className="block text-white">
                    المخرج المطلوب:
                  </strong>
                  {layer.deliverable}
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6 text-sm text-white/80 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-lg font-semibold text-white">
                أدوات البحث الموصى بها
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "Ahrefs / Semrush (إصدار مجاني محدود)",
                    role: "تحليل الكلمات المفتاحية وحجم البحث",
                  },
                  {
                    name: "Glasp + Notion",
                    role: "جمع وتحليل أفضل مقالات ومصادر في النيتش",
                  },
                  {
                    name: "Fathom Analytics (تجربة مجانية)",
                    role: "قراءة اتجاهات الزيارات للمواقع المنافسة",
                  },
                  {
                    name: "SparkToro",
                    role: "فهم القنوات التي يتواجد فيها جمهورك",
                  },
                  {
                    name: "Paste / Tally <-> Airtable",
                    role: "إنشاء نماذج جمع بيانات وربطها بلوحات تحكم",
                  },
                  {
                    name: "ChatGPT + Claude",
                    role: "صياغة أسئلة الاستطلاع وتحليل الردود الأولية",
                  },
                ].map((tool) => (
                  <div key={tool.name} className="rounded-xl bg-white/10 p-4">
                    <p className="font-semibold text-white">{tool.name}</p>
                    <p className="mt-1 text-xs text-white/70">{tool.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-lg font-semibold text-white">
                معايير اختيار النيتش الفائز
              </h3>
              <ul className="mt-4 space-y-3">
                <li>• مشكلة متكررة وقابلة للقياس (Pain + Frequency).</li>
                <li>• جمهور يمكن الوصول إليه عبر قنوات محددة بوضوح.</li>
                <li>• منافسون يمكن التفوق عليهم بعرض قيمة محدد.</li>
                <li>• فرصة لإطلاق منتج أولي خلال 45 يوماً دون تعقيد.</li>
                <li>• إمكانية توسيع الخط الإنتاجي لمنتجات إضافية.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8 rounded-3xl bg-white p-8 shadow-lg shadow-purple-100">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900">
              مرحلة الإنشاء والتطوير: من الفكرة إلى منتج ذو جودة عالية
            </h2>
            <p className="text-slate-600">
              اتبع هذا المسار لإنجاز نسخة أولية مقنعة خلال 21 يوماً، مع توزيع
              واضح للمهام والأدوات.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "تصميم المحتوى والمعمارية",
                duration: "اليوم 1 - 5",
                steps: [
                  "اكتب قائمة المشاكل الأساسية التي يحلها منتجك ورتبها حسب الأولوية.",
                  "حدّد نتيجة التحول Transformation لكل مشكلة.",
                  "استخدم Notion أو Whimsical لرسم خريطة معمارية المحتوى.",
                  "طوّر هيكل الدروس/الوحدات أو خصائص المنتج باستخدام Miro.",
                ],
                tools: ["Notion", "Miro", "XMind", "ChatGPT"],
              },
              {
                title: "التصميم وتجربة المستخدم",
                duration: "اليوم 6 - 12",
                steps: [
                  "أنشئ نظام ألوان وهوية بصرية سريعة عبر Coolors + Figma.",
                  "صمّم نماذج أولية (Wireframes) لشاشة المنتج أو صفحات الكتاب.",
                  "اختبر التصميم مع 3 أشخاص من الجمهور واحصل على تغذية راجعة قصيرة.",
                  "وثّق التعديلات المطلوبة ودرجها حسب تأثيرها.",
                ],
                tools: ["Figma", "Canva Pro", "VISIWIG Mockups", "Khatt Fonts"],
              },
              {
                title: "الإنتاج والصقل النهائي",
                duration: "اليوم 13 - 21",
                steps: [
                  "نفّذ المحتوى باستخدام أدوات إنتاج مخصصة (Descript، ScreenFlow، Scribe).",
                  "اعتمد على أدوات الذكاء الاصطناعي لكتابة النصوص والتحسين اللغوي.",
                  "اصنع حزمة ملفات قابلة للتنزيل ومنظمة (ملفات مضغوطة، جداول عمل).",
                  "أنشئ دليل استخدام قصير يوضح كيفية بدء العميل خلال 10 دقائق.",
                ],
                tools: ["Descript", "OBS Studio", "Gamma App", "Adobe Express"],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 p-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {block.title}
                    </h3>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                      {block.duration}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600">
                    {block.steps.map((step) => (
                      <li key={step}>• {step}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-lg bg-purple-50 p-3 text-xs text-purple-900">
                  <strong className="block">أدوات مُوصى بها:</strong>
                  {block.tools.join(" • ")}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900">
                معايير الجودة قبل الانتقال لمرحلة الإطلاق
              </h3>
              <ul className="mt-4 space-y-3">
                <li>• وجود دليل استخدام واضح + فيديو قصير للترحيب بالمستخدم.</li>
                <li>• وجود 3 أمثلة عملية أو حالات استخدام حقيقية.</li>
                <li>• تنظيم جميع الملفات في مجلدات واضحة وتسمية احترافية.</li>
                <li>• توثيق جدول تحديثات متوقعة خلال أول 90 يوماً.</li>
                <li>• خطة دعم: قناة تواصل (بريد، Slack، Notion) + وقت استجابة 24 ساعة.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
              <h3 className="text-lg font-semibold text-slate-900">
                إطار تسعير منتجك الأول (Value Ladder)
              </h3>
              <ul className="mt-4 space-y-2">
                <li>• منتج مجاني مغناطيسي (Lead Magnet).</li>
                <li>• منتج أساسي 19 - 49 دولار (Low Ticket) لتجربة السوق.</li>
                <li>• ترقيات لاحقة: حزمة متقدمة أو اشتراك شهري 79 - 149 دولار.</li>
                <li>• أضف Bonus Stack بقيمة أعلى من سعر المنتج بـ 3 مرات.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8 rounded-3xl bg-white p-8 shadow-lg shadow-amber-100">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900">
              المنصات والمتاجر: اختيار قناة البيع المثالية
            </h2>
            <p className="text-slate-600">
              استخدم المصفوفة التالية للموازنة بين السرعة، التحكم، والرسوم. ابدأ
              بمنصة واحدة، ثم وسّع إلى قناة ثانية بعد تثبيت المبيعات.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <table className="w-full min-w-[780px] border-collapse text-right text-sm">
              <thead className="bg-amber-500 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">المنصة / الحل</th>
                  <th className="px-4 py-3 font-semibold">المميزات</th>
                  <th className="px-4 py-3 font-semibold">الرسوم / التكلفة</th>
                  <th className="px-4 py-3 font-semibold">الاستخدام الأمثل</th>
                  <th className="px-4 py-3 font-semibold">خطوات الإعداد السريع</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Gumroad",
                    pros: [
                      "إطلاق سريع جداً، بوابات دفع عالمية",
                      "يدعم الاشتراكات والتحديثات",
                    ],
                    fees: "10% على كل عملية بيع + رسوم بوابات الدفع",
                    best: "منتجات معلوماتية، قوالب، عضويات بسيطة",
                    setup: [
                      "إعداد صفحة المنتج خلال ساعتين",
                      "إضافة Bonus Stack",
                      "تفعيل Emails التلقائية",
                    ],
                  },
                  {
                    name: "Etsy",
                    pros: [
                      "حركة مرور عضوية ضخمة",
                      "ملائم للفنون والقوالب",
                    ],
                    fees: "0.20$ رسوم إدراج + 6.5% رسوم معاملة",
                    best: "قوالب Notion، تصاميم مطبوعة، منتجات فنية رقمية",
                    setup: [
                      "إنشاء ملفات Mockup جذابة",
                      "تحسين الكلمات المفتاحية للـ SEO",
                      "تقديم عروض خصم للمشترين الأوائل",
                    ],
                  },
                  {
                    name: "Amazon KDP",
                    pros: [
                      "أكبر منصة للكتب التعليمية",
                      "إمكانية الطباعة حسب الطلب",
                    ],
                    fees: "لا يوجد تكلفة إنشاء، نسبة ربح 35-70%",
                    best: "كتب وإرشادات، دفاتر عمل تفاعلية",
                    setup: [
                      "تهيئة ملف الكتاب وفق معايير KDP",
                      "اختبار الكلمات المفتاحية عبر Publisher Rocket",
                      "تنفيذ حملة إطلاق صغيرة عبر Amazon Ads",
                    ],
                  },
                  {
                    name: "Shopify / Salla / Zid",
                    pros: [
                      "تحكم كامل بالهوية والعروض",
                      "تكامل مع أنظمة بريدية وتحليلات",
                    ],
                    fees: "29$ شهرياً تقريباً (Shopify) + تطبيقات إضافية",
                    best: "علامة تجارية متعددة المنتجات، توسع دولي",
                    setup: [
                      "اختيار قالب جاهز وتحسينه خلال 3 أيام",
                      "إضافة بوابة دفع محلية + عالمية",
                      "ربط Klaviyo أو ConvertKit للتسويق بالبريد",
                    ],
                  },
                  {
                    name: "WordPress (WooCommerce) + LearnDash",
                    pros: [
                      "مرونة كبيرة ودعم محتوى عربي ممتاز",
                      "إضافات تعليمية قوية وإدارة طلاب",
                    ],
                    fees: "استضافة 15$ شهرياً + إضافات 150$ سنوياً",
                    best: "أكاديميات رقمية، باقات تدريبية، محتوى طويل المدى",
                    setup: [
                      "تنصيب قالب Astra أو Kadence",
                      "إعداد بوابات الدفع + عضويات",
                      "إنشاء Funnel للطلبات والاستفسارات",
                    ],
                  },
                ].map((platform) => (
                  <tr
                    key={platform.name}
                    className="even:bg-amber-50/60 hover:bg-amber-100/60"
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {platform.name}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      <ul className="space-y-1">
                        {platform.pros.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{platform.fees}</td>
                    <td className="px-4 py-3 text-slate-700">{platform.best}</td>
                    <td className="px-4 py-3 text-slate-700">
                      <ul className="space-y-1">
                        {platform.setup.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-6 text-sm text-slate-700 lg:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-amber-900">
                استراتيجية اختيار المنصة
              </h3>
              <ul className="mt-4 space-y-3">
                <li>• ابدأ بمنصة جاهزة لتختبر الفكرة وتبني الثقة.</li>
                <li>• انتقل لمنصة مملوكة عند وصولك إلى 3,000$ مبيعات خلال 90 يوماً.</li>
                <li>• حافظ على قناة بيع ثانوية كخطة بديلة أو لزيادة التواجد.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-lg font-semibold text-blue-900">
                إعداد المتجر لزيادة معدل التحويل
              </h3>
              <ul className="mt-4 space-y-2">
                <li>• استخدم Social Proof: شهادات، أرقام مستخدمين، لقطات شاشة.</li>
                <li>• أضف ضمان استرداد خلال 14 يوماً مع شروط واضحة.</li>
                <li>• جهّز ثلاث باقات سعرية (Starter / Pro / VIP).</li>
                <li>• فعّل رسائل البريد التلقائية: ترحيب، متابعة، استبيان.</li>
                <li>• اربط المتجر بـ Google Analytics + Meta Pixel منذ اليوم الأول.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8 rounded-3xl bg-slate-900 p-8 text-white shadow-lg shadow-slate-300">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">
              خطة التطبيق الأسبوعية (12 أسبوعاً)
            </h2>
            <p className="text-white/80">
              جدول تفصيلي لتقسيم ساعات العمل، مع مهام محددة لكل يومين، ومؤشرات
              نجاح قابلة للقياس.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                weeks: "1-2",
                theme: "التهيئة والفهم",
                goals: [
                  "إكمال دورة مصغرة حول نماذج الأعمال الرقمية.",
                  "إنتاج لوحة رؤية شخصية وأهداف مالية.",
                  "إجراء تحليل مهارات وتحديد فجوات التعلم.",
                ],
                kpi: "إنهاء 4 مهام تعليمية + توثيق خطة تعلم بسيطة.",
              },
              {
                weeks: "3-4",
                theme: "البحث والتحقق",
                goals: [
                  "جمع 30 ردًا من الجمهور المستهدف.",
                  "تحليل 5 منافسين بشكل عميق.",
                  "اختيار نيتش نهائي وتوثيق سبب الاختيار.",
                ],
                kpi: "امتلاك ملف بيرسونا كامل + قرار مبني على بيانات.",
              },
              {
                weeks: "5-7",
                theme: "التصميم والإنتاج",
                goals: [
                  "إكمال 80% من محتوى المنتج أو خصائصه.",
                  "الحصول على تغذية راجعة من 5 مستخدمين تجريبيين.",
                  "تحديث المنتج بناء على ملاحظات الجودة.",
                ],
                kpi: "منتج أولي يمكن عرضه وبيعه لأصدقاء داعمين.",
              },
              {
                weeks: "8-9",
                theme: "البنية التحتية التجارية",
                goals: [
                  "إطلاق صفحة مبيعات محسّنة للتحويل.",
                  "إعداد نظام دفع وتجربة تسليم فورية.",
                  "بناء تسلسل بريد إلكتروني مكوّن من 5 رسائل.",
                ],
                kpi: "جاهزية كاملة للإطلاق + عملية شراء ناجحة تجريبية.",
              },
              {
                weeks: "10-12",
                theme: "الإطلاق والتوسّع",
                goals: [
                  "تنفيذ حملة إطلاق بزاوية قصة شخصية + عرض محدود.",
                  "جمع 20 تقييمًا أو شهادة من العملاء الأوائل.",
                  "تحديث المنتج بناءً على البيانات الأولية.",
                ],
                kpi: "تحقيق 30 عملية بيع أو الوصول إلى 1,500$ خلال الإطلاق.",
              },
            ].map((sprint) => (
              <div
                key={sprint.theme}
                className="flex flex-col justify-between rounded-2xl bg-white/10 p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                      الأسابيع {sprint.weeks}
                    </span>
                    <p className="text-lg font-semibold text-emerald-200">
                      {sprint.theme}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/85">
                    {sprint.goals.map((goal) => (
                      <li key={goal}>• {goal}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-lg bg-emerald-400/15 p-3 text-xs text-emerald-100">
                  <strong className="block text-emerald-100">
                    مؤشر النجاح:
                  </strong>
                  {sprint.kpi}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 rounded-3xl bg-white p-8 shadow-lg shadow-rose-100">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900">
              منظومة الدعم والمتابعة
            </h2>
            <p className="text-slate-600">
              لتضمن الانتقال إلى الاحتراف، اعتمد على هذه البنية الداعمة التي
              توفّر مراجعات دورية، مصادر متقدمة، ومجتمع محفّز.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "جلسات المراجعة الأسبوعية",
                content: [
                  "جلسة 30 دقيقة لمراجعة الإنجازات والتحديات.",
                  "مقاييس تعتمد على OKRs صغيرة: التعلم، الإنتاج، المبيعات.",
                  "تحديث خطة الأسبوع القادم بناءً على التغذية الراجعة.",
                ],
              },
              {
                title: "لوحة المتابعة (Dashboard)",
                content: [
                  "استخدم Notion أو ClickUp لتوثيق جميع المهام والنتائج.",
                  "أضف قسم KPI (قائمة بريدية، مبيعات، معدل تحويل، وقت التنفيذ).",
                  "حدّد ألوان للمهام (تعلم، تنفيذ، تسويق) لسهولة الرؤية.",
                ],
              },
              {
                title: "مجتمع ومسارات متقدمة",
                content: [
                  "انضم إلى مجتمعات مثل IndieHackers، ProductLed Growth، Makers.io.",
                  "تابع قنوات يوتيوب متخصصة (Ali Abdaal، Dan Koe، Renee Warren).",
                  "خصص ساعة أسبوعياً لتعلم استراتيجية متقدمة (Automation، Funnel، Paid Ads).",
                ],
              },
            ].map((support) => (
              <div
                key={support.title}
                className="rounded-2xl border border-rose-100 bg-rose-50 p-6"
              >
                <h3 className="text-lg font-semibold text-rose-900">
                  {support.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-rose-900/80">
                  {support.content.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-rose-100 bg-white p-6 text-sm text-slate-600">
            <h3 className="text-lg font-semibold text-slate-900">
              خطة التطوير بعد الإطلاق (90 يوماً)
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <strong className="text-slate-900">الشهر الأول</strong>
                <ul className="mt-2 space-y-1">
                  <li>• تحليل عمليات الشراء الأولى.</li>
                  <li>• تحديث المنتج بناءً على 20% أهم ملاحظات.</li>
                  <li>• إطلاق حملة محتوى أسبوعية.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <strong className="text-slate-900">الشهر الثاني</strong>
                <ul className="mt-2 space-y-1">
                  <li>• إضافة Upsell أو Bonus إضافي.</li>
                  <li>• فتح برنامج شركاء أو نظام إحالة.</li>
                  <li>• اختبار إعلان مدفوع بميزانية 150 دولار.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <strong className="text-slate-900">الشهر الثالث</strong>
                <ul className="mt-2 space-y-1">
                  <li>• إطلاق إصدار 2.0 أو منتج مكمل.</li>
                  <li>• بناء Funnel تلقائي (Webinar أو Challenge).</li>
                  <li>• قياس معدل الاحتفاظ وتخطيط أهداف نصف السنة.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
