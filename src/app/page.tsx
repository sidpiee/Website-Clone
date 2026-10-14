import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const sourceSite = "https://www.conejovalleycounseling.com";

const menuGroups = [
  {
    label: "Our team",
    links: [
      { label: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
      { label: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
      {
        label: "Heather Williams-Baumgart, AMFT",
        href: "/heather-williams-baumgart",
      },
      { label: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
      { label: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
      { label: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
      { label: "Chad Flores, AMFT", href: "/chad-flores" },
      { label: "Simran Sidhu, AMFT", href: "/simran-sidhu" },
      { label: "Jessica Jauregui, MA, AMFT", href: "/jessica-jauregui" },
    ],
  },
  {
    label: "Specialties",
    links: [
      {
        label: "Dissociation",
        href: "/dissociative-identity-disorder-therapist-newbury-park",
      },
      { label: "Trauma", href: "/trauma-counseling-newbury-park" },
      {
        label: "Special Needs Parenting",
        href: "/counseling-special-needs-parents-newbury-park",
      },
      { label: "Couples", href: "/couples-therapy" },
      { label: "Children & Teens", href: "/children-and-teens" },
      { label: "Anxiety & Depression", href: "/anxiety-depression" },
      { label: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
    ],
  },
  {
    label: "Methods",
    links: [
      { label: "EMDR", href: "/emdr-therapy-newbury-park" },
      { label: "Brainspotting", href: "/brainspotting" },
      { label: "Somatic Therapy", href: "/somatic-therapy" },
      { label: "Parts Work Therapy", href: "/parts-work-therapy" },
    ],
  },
];

const allNavigationLinks = [
  { label: "About", href: "/therapists-newbury-park" },
  { label: "Our team", href: "/our-team" },
  { label: "Specialties", href: "/specialties" },
  { label: "Methods", href: "/methods" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const desktopNavLinkClass =
  "inline-flex h-12 items-center whitespace-nowrap rounded-none px-0 text-[12px] font-normal tracking-[0.12em] text-[#33332f] uppercase hover:bg-transparent hover:text-[#66877f] focus:bg-transparent focus:text-[#66877f]";

const peopleWeHelp = [
  {
    title: "Adults",
    image:
      "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg?format=500w",
    alt: "Two people sitting on a log at the beach, facing a lake with mountains in the background.",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    title: "Couples",
    href: "/couples-therapy",
    image:
      "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg?format=500w",
    alt: "A couple embracing on the beach, with both wearing casual summer clothing and smiling at each other. The ocean is in the background.",
    description:
      "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    href: "/children-and-teens",
    image:
      "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg?format=500w",
    alt: "A boy carrying a girl on a beach with waves in the background.",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

const areasOfExpertise = [
  [
    {
      label: "Dissociation",
      href: "/dissociative-identity-disorder-therapist-newbury-park",
    },
    { label: "Trauma", href: "/trauma-counseling-newbury-park" },
    { label: "Family conflict" },
    {
      label: "Special needs parenting",
      href: "/counseling-special-needs-parents-newbury-park",
    },
    { label: "Depression", href: "/anxiety-depression" },
    { label: "Marriage", href: "/couples-therapy" },
  ],
  [
    { label: "Anxiety", href: "/anxiety-depression" },
    { label: "Relationships", href: "/couples-therapy" },
    { label: "Children", href: "/children-and-teens" },
    { label: "Teens", href: "/children-and-teens" },
    { label: "Intimacy & connection", href: "/couples-therapy" },
    { label: "…and more." },
  ],
];

const specialties = [
  {
    title: "Trauma",
    href: "/trauma-counseling-newbury-park",
    description:
      "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay ‘stuck,’ and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
  },
  {
    title: "EMDR",
    href: "/emdr-therapy-newbury-park",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Dissociation",
    href: "/dissociative-identity-disorder-therapist-newbury-park",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "Special Needs Parenting",
    href: "/counseling-special-needs-parents-newbury-park",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

const footerNavigation = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/therapists-newbury-park" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const footerTeam = [
  { label: "Jennifer Anderson", href: "/jennifer-anderson" },
  { label: "Heather Williams-Baumgart", href: "/heather-williams-baumgart" },
  { label: "Autumn Bodily", href: "/autumn-bodily" },
  { label: "Candace Bletscher", href: "/candace-bletscher" },
  { label: "Samantha Johnson", href: "/samantha-johnson" },
  { label: "Rosa Gomez", href: "/rosa-gomez" },
  { label: "Chad Flores", href: "/chad-flores" },
  { label: "Simran Sidhu", href: "/simran-sidhu" },
  { label: "Jessica Jauregui", href: "/jessica-jauregui" },
];

const footerLegal = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f4ef] font-sans text-[#33332f]">
      <a
        className="absolute left-3 top-3 z-[100] -translate-y-[160%] bg-white px-3.5 py-2.5 text-[#33332f] focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>

      <header className="relative z-20 mx-auto flex h-[145px] w-full max-w-[1600px] items-start justify-between pt-[30px] pr-[6.3vw] pb-0 pl-[5.2vw] max-[960px]:h-[112px] max-[960px]:items-center max-[960px]:px-[7.5vw] max-[960px]:pt-0">
        <a
          className="-translate-y-[11px] inline-flex w-[clamp(220px,19.6vw,260px)] flex-none items-center max-[960px]:w-[clamp(190px,31vw,220px)] max-[960px]:translate-y-0 max-[420px]:w-[178px]"
          href="/"
          aria-label="Conejo Valley Family Counseling home"
        >
          <img
            className="block h-auto w-full"
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w"
            alt="Conejo Valley Family Counseling"
            width="450"
            height="116"
          />
        </a>

        <nav className="ml-auto flex items-center" aria-label="Main navigation">
          <NavigationMenu
            className="relative hidden w-auto max-w-none flex-none items-center min-[961px]:flex"
            viewport={false}
          >
            <NavigationMenuList className="m-0 flex list-none items-center justify-end gap-[clamp(23px,2.8vw,36px)] p-0">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={desktopNavLinkClass}
                  href={`${sourceSite}/therapists-newbury-park`}
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              {menuGroups.map((group) => (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger
                    className={`${desktopNavLinkClass} [&_svg]:hidden`}
                  >
                    {group.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className="absolute z-50 border border-[#33332f]/10 bg-[#f5f4ef] p-5 text-[#33332f] shadow-[0_18px_48px_rgba(35,35,30,0.12)]"
                    style={{
                      width: "min(320px, calc(100vw - 32px))",
                      top: "calc(100% + 12px)",
                      left: 0,
                      borderRadius: 0,
                    }}
                  >
                    <ul className="m-0 grid list-none grid-cols-1 p-0">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <NavigationMenuLink
                            className="flex min-h-10 items-center rounded-none border-b border-[#33332f]/10 px-0 py-2 text-[10px] tracking-[0.1em] text-[#33332f] uppercase hover:bg-transparent hover:text-[#66877f] focus:bg-transparent focus:text-[#66877f]"
                            href={`${sourceSite}${link.href}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={desktopNavLinkClass}
                  href={`${sourceSite}/faqs`}
                  target="_blank"
                  rel="noreferrer"
                >
                  FAQs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#33332f] px-[22px] text-[12px] font-normal tracking-[0.12em] text-[#33332f] uppercase transition-colors hover:bg-[#33332f] hover:text-[#f5f4ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66877f]"
                  href={`${sourceSite}/contact`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu
            className="relative hidden w-auto max-w-none flex-none items-center max-[960px]:flex"
            viewport={false}
          >
            <NavigationMenuList className="m-0 flex list-none items-center justify-end gap-0 p-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="grid h-12 w-12 place-items-center rounded-full border-0 bg-transparent p-0 text-[#33332f] hover:bg-transparent focus:bg-transparent [&_svg]:hidden">
                  <span
                    className="flex w-[35px] flex-col gap-[6px]"
                    aria-hidden="true"
                  >
                    <span className="block h-px w-full bg-current" />
                    <span className="block h-px w-full bg-current" />
                    <span className="block h-px w-full bg-current" />
                  </span>
                  <span className="sr-only group-data-open/navigation-menu-trigger:hidden">
                    Open navigation menu
                  </span>
                  <span className="sr-only hidden group-data-open/navigation-menu-trigger:block">
                    Close navigation menu
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="absolute z-50 overflow-hidden border border-[#33332f]/10 bg-[#fbfaf6] p-[26px_24px_22px] text-[#33332f] shadow-[0_18px_48px_rgba(35,35,30,0.12)]"
                  style={{
                    width: "min(430px, calc(100vw - 32px))",
                    top: "calc(100% + 15px)",
                    right: 0,
                    left: "auto",
                    borderRadius: 2,
                  }}
                >
                  <div className="grid gap-2 border-b border-[#33332f]/15 pb-5">
                    <p className="font-cvc-paragraph m-0 font-serif text-[28px] font-normal">
                      Explore
                    </p>
                    <span className="text-[13px] text-[#60615b]">
                      Find the support that fits your needs.
                    </span>
                  </div>
                  <ul className="m-0 mt-2.5 grid list-none grid-cols-2 gap-x-7 p-0 max-[420px]:grid-cols-1">
                    {allNavigationLinks.map((link) => (
                      <li key={link.label}>
                        <NavigationMenuLink
                          className="flex min-h-12 items-center justify-between rounded-none border-b border-[#33332f]/10 bg-transparent px-0 py-2.5 text-[11px] tracking-[0.13em] text-[#33332f] uppercase hover:bg-transparent hover:text-[#66877f] focus:bg-transparent focus:text-[#66877f]"
                          href={`${sourceSite}${link.href}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                          <span aria-hidden="true">↗</span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>

      <main id="main-content" className="w-full">
        <section
          className="relative mx-auto h-[540px] w-full max-w-[1600px] max-[960px]:flex max-[960px]:h-auto max-[960px]:min-h-0 max-[960px]:flex-col"
          aria-labelledby="hero-title"
        >
          <div className="absolute top-0 left-[34.1%] z-10 flex h-full w-[56.9%] flex-col pt-[6px] pr-[20px] pb-[10px] pl-[clamp(64px,8.3vw,132px)] max-[960px]:relative max-[960px]:top-auto max-[960px]:left-auto max-[960px]:h-auto max-[960px]:w-full max-[960px]:px-[7.5vw] max-[960px]:pt-0 max-[960px]:pb-0">
            <p className="font-cvc-paragraph m-0 max-w-[390px] text-[12px] leading-[1.8] font-normal tracking-[0.14em] text-[#33332f] uppercase max-[960px]:max-w-[460px] max-[760px]:text-[11px]">
              Online &amp; in-person counseling in Newbury Park &amp; across CA
            </p>
            <div className="mt-[127px] max-[960px]:mt-12">
              <h1
                className="m-0 max-w-[610px] font-cvc-heading text-[clamp(45px,3.8vw,50px)] leading-[1.37] font-extralight tracking-[-0.02em] max-[960px]:max-w-[720px] max-[960px]:text-[clamp(38px,8vw,52px)] max-[960px]:leading-[1.22] max-[420px]:text-[38px]"
                id="hero-title"
              >
                <span className="block max-[960px]:inline">
                  Rebuild your foundation
                </span>{" "}
                <span className="block max-[960px]:inline">
                  on solid ground and
                </span>{" "}
                <span className="block max-[960px]:inline">
                  finally begin to{" "}
                  <span className="whitespace-nowrap">
                    <span className="mr-[52px] inline-block origin-left scale-x-[1.43] font-cvc-script text-[1.5em] leading-none font-normal tracking-normal text-[#93b3ab] max-[960px]:mr-0 max-[960px]:scale-x-100 max-[960px]:text-[1em]">
                      thrive
                    </span>
                    .
                  </span>
                </span>
              </h1>
              <p className="font-cvc-paragraph mt-[32px] max-w-[550px] text-[15px] leading-[1.8] text-[#60615b] max-[960px]:mt-7 max-[960px]:max-w-[620px]">
                Specialized therapy for adults, couples, teens, and children to
                reflect, heal, and grow.
              </p>
              <a
                className="link-underline mt-[33px] inline-flex items-center pb-2 text-[12px] tracking-[0.15em] text-[#33332f] uppercase transition-colors hover:text-[#66877f] focus-visible:text-[#66877f] max-[960px]:mt-10"
                href={`${sourceSite}/contact`}
                target="_blank"
                rel="noreferrer"
              >
                Book an appointment
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 min-h-[540px] max-[960px]:relative max-[960px]:inset-auto max-[960px]:order-2 max-[960px]:mt-[55px] max-[960px]:min-h-[clamp(380px,85vw,650px)] max-[960px]:w-[78vw] max-[960px]:self-start">
            <div className="absolute top-0 left-0 h-full w-[34.1%] overflow-hidden max-[960px]:h-[88%] max-[960px]:w-[90%]">
              <img
                className="block h-full w-full object-cover"
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
                alt="Family therapy"
                width="1400"
                height="1200"
              />
            </div>
            <div className="absolute top-[32.8%] right-0 h-[67.2%] w-[9%] overflow-hidden max-[960px]:top-auto max-[960px]:right-[-22%] max-[960px]:bottom-0 max-[960px]:h-[39%] max-[960px]:w-[51%] max-[960px]:border-[8px] max-[960px]:border-[#f5f4ef]">
              <img
                className="block h-full w-full object-cover object-[80%_center]"
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
                alt="Child therapy"
                width="900"
                height="1100"
              />
            </div>
          </div>
        </section>

        <section
          className="relative mx-auto mt-[80px] h-[841px] w-full max-w-[1600px] bg-[#f5f4ef] max-[760px]:mt-[11px] max-[760px]:min-h-[1218px] max-[760px]:h-auto max-[760px]:pr-[6vw] max-[760px]:pt-[58px] max-[760px]:pb-[58px] max-[760px]:pl-[6vw]"
          aria-labelledby="hope-title"
        >
          <h2
            className="absolute top-[205px] left-[8.75vw] max-w-[610px] font-cvc-heading text-[clamp(36px,3vw,40px)] leading-[1.48] font-extralight tracking-[-0.02em] max-[760px]:static max-[760px]:text-[34px] max-[760px]:leading-[1.32]"
            id="hope-title"
          >
            You’re holding onto hope that life can be better than it is right
            now.
          </h2>
          <div className="absolute top-[376px] left-[8.75vw] w-[24.8%] max-[760px]:static max-[760px]:mt-[11px] max-[760px]:w-full">
            <p className="font-cvc-paragraph m-0 max-w-[320px] text-[15px] leading-[1.8]  tracking-normal text-[#33332f]  uppercase">
              At Conejo Valley Family Counseling we want to make that hope a
              reality.
            </p>
            <p className="font-cvc-paragraph mt-[15px] max-[760px]:max-w-[300px] text-[15px] leading-[1.92] text-[#60615b]">
              Whether you’re an adult seeking personal growth, looking to work
              through your trauma, a couple working on your relationship, or a
              parent looking for support for your child, we provide a
              compassionate and safe space to help you navigate all of life’s
              ups and downs.
            </p>
          </div>
          <img
            className="absolute top-[89px] right-0 h-[626px] w-[30.2%] object-cover object-center max-[760px]:relative max-[760px]:top-auto max-[760px]:right-auto max-[760px]:mt-[46px] max-[760px]:h-[clamp(190px,62.4vw,234px)] max-[760px]:w-full"
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg?format=1500w"
            alt="Sandy beach with gentle ocean waves and a cloudy sky."
            width="1200"
            height="1600"
          />
          <p className="font-cvc-paragraph absolute top-[376px] left-[35.1vw] m-0 w-[24.8%] text-[15px] leading-[1.8] text-[#60615b] max-[760px]:static max-[760px]:mt-[46px] max-[760px]:w-full max-[760px]:leading-[1.92]">
            First and foremost, we believe what you’re going through is real,
            valid, and worthy of support. Our team offers clients in the Newbury
            Park area and across CA an environment to discover a new life and a
            deeper sense of self in the midst of their struggles. As we tap into
            the power of connection and understanding, you can find your footing
            again and take a transformative path forward.
          </p>
        </section>

        <section
          className="mx-auto min-h-[955px] w-full max-w-[1600px] bg-white px-[5vw] pt-[86px] pb-[110px] max-[760px]:min-h-[2029px] max-[760px]:pr-[6vw] max-[760px]:pt-[63px] max-[760px]:pb-[80px] max-[760px]:pl-[6vw]"
          aria-labelledby="who-title"
        >
          <h2
            className="m-0 font-cvc-heading text-[clamp(38px,3.4vw,46px)] leading-[1.35] font-extralight tracking-[-0.02em] max-[760px]:text-[34px] max-[760px]:leading-[1.3]"
            id="who-title"
          >
            Who we{" "}
            <span className="font-cvc-script text-[1.25em] text-[#91b1a9]">
              help
            </span>
          </h2>
          <div className="ml-[11.5vw] mt-[47px] grid grid-cols-3 gap-[20px] max-[760px]:ml-0 max-[760px]:mt-[43px] max-[760px]:grid-cols-1 max-[760px]:gap-[52px]">
            {peopleWeHelp.map((person) => (
              <article key={person.title}>
                <img
                  className="block aspect-[0.84/1] w-full object-cover max-[760px]:aspect-[1.08/1]"
                  src={person.image}
                  alt={person.alt}
                  width="640"
                  height="760"
                />
                <h3 className="mt-8 mb-3 font-cvc-heading text-[21px] leading-[1.35] font-extralight max-[760px]:mt-[44px] max-[760px]:mb-[26px]">
                  {person.href ? (
                    <a
                      className="transition-colors hover:text-[#66877f]"
                      href={sourceSite + person.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {person.title}
                    </a>
                  ) : (
                    person.title
                  )}
                </h3>
                <p className="font-cvc-paragraph m-0 max-w-[360px] text-[13px] leading-[1.8] text-[#60615b]">
                  {person.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Support and areas of expertise">
          <div className="relative isolate flex min-h-[516px] items-end overflow-hidden bg-[#2b2b2b] px-[8.75vw] pt-[120px] pb-[85px] max-[760px]:min-h-[557px] max-[760px]:items-center max-[760px]:pr-[10vw] max-[760px]:py-[90px] max-[760px]:pl-[6vw]">
            <img
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png?format=1500w"
              alt=""
              aria-hidden="true"
              width="780"
              height="482"
            />
            <div
              className="absolute inset-0 z-0 bg-[#2b2b2b]/75"
              aria-hidden="true"
            />
            <h2 className="relative z-10 m-0 max-w-[755px] font-cvc-heading text-[clamp(34px,3vw,40px)] leading-[1.43] font-extralight text-[#f5f4ef] max-[760px]:text-[30px] max-[760px]:leading-[1.5]">
              You deserve a place where your story is heard, valued, and
              understood.{" "}
              <span className="italic">
                Nothing will be too heavy for us to carry together.
              </span>
            </h2>
          </div>

          <div className="flex min-h-[623px] items-center bg-white py-[95px] pr-[6.2vw] pl-[8.75vw] max-[760px]:min-h-[1069px] max-[760px]:pr-[6vw] max-[760px]:pt-[76px] max-[760px]:pb-[58px] max-[760px]:pl-[6vw]">
            <div className="grid w-full grid-cols-[276px_minmax(0,1fr)] gap-x-[59px] max-[760px]:grid-cols-1 max-[760px]:gap-[56px]">
              <h2 className="m-0 self-start font-cvc-heading text-[clamp(30px,2.7vw,36px)] leading-[1.35] font-extralight max-[760px]:text-[27px] max-[760px]:leading-[1.4]">
                Our areas of{" "}
                <span className="block font-cvc-script text-[1.3em] text-[#91b1a9] max-[760px]:inline max-[760px]:text-[1em]">
                  expertise
                </span>
              </h2>
              <div className="grid grid-cols-2 gap-x-[11px] max-[760px]:grid-cols-1">
                {areasOfExpertise.map((column) => (
                  <ul className="m-0 list-none p-0" key={column[0].label}>
                    {column.map((area) => (
                      <li
                        className="flex min-h-[72px] items-center border-b border-[#33332f]/10 text-[11px] tracking-[0.12em] text-[#33332f] uppercase max-[760px]:min-h-[70px]"
                        key={area.label}
                      >
                        {area.href ? (
                          <a
                            className="transition-colors hover:text-[#66877f]"
                            href={sourceSite + area.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {area.label}
                          </a>
                        ) : (
                          area.label
                        )}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative mx-auto min-h-[898px] w-full max-w-[1600px] overflow-hidden bg-[#e3d9ca] px-[8.75vw] pt-[110px] pb-[90px] max-[760px]:min-h-[1503px] max-[760px]:pr-[6vw] max-[760px]:pt-[86px] max-[760px]:pb-[76px] max-[760px]:pl-[6vw]"
          aria-labelledby="how-title"
        >
          <p className="font-cvc-paragraph m-0 text-[12px] tracking-[0.12em] text-[#60615b] uppercase">
            How we work
          </p>
          <h2
            className="mt-[126px] mb-0 font-cvc-heading text-[clamp(38px,3.4vw,46px)] leading-[1.35] font-extralight tracking-[-0.02em] max-[760px]:mt-[38px] max-[760px]:text-[32px] max-[760px]:leading-[1.38]"
            id="how-title"
          >
            We’re here to make a difference.
          </h2>
          <img
            className="absolute top-[107px] right-0 h-[683px] w-[22.5%] object-cover object-center max-[760px]:relative max-[760px]:top-auto max-[760px]:right-auto max-[760px]:mt-[50px] max-[760px]:h-[269px] max-[760px]:w-full"
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
            alt="A woman and a child in white dresses dancing on a sandy beach at sunset."
            width="900"
            height="1400"
          />
          <div className="mt-[45px] grid max-w-[751px] grid-cols-2 gap-[20px] max-[760px]:mt-[45px] max-[760px]:max-w-none max-[760px]:grid-cols-1 max-[760px]:gap-7">
            <div>
              <p className="font-cvc-paragraph m-0 text-[12px] leading-[1.8] tracking-[0.11em] text-[#33332f] uppercase">
                The clients we work with are balancing so many things at once,
                it’s often hard for them to put themselves first.
              </p>
              <p className="font-cvc-paragraph mt-5 text-[14px] leading-[1.8] text-[#60615b]">
                Here, your needs are always top priority. Our team takes the
                time to deeply listen to our clients in order to truly
                understand their story and their struggles. We recognize that no
                two people are the same and that personalized therapy means an
                intentional, tailored approach. (You won’t find anything
                “one-size-fits-all” here.) If you’re ready to do the work, we’re
                ready to help.
              </p>
            </div>
            <p className="font-cvc-paragraph m-0 text-[14px] leading-[1.8] text-[#60615b]">
              Sometimes we may gently challenge you to look at things
              differently and other times we may explore your emotions, all
              while encouraging you to practice what you’ve learned in your
              daily life. We take what we do seriously because we know how
              important it is for you to heal from what’s hurting you, discover
              a fulfilling life, and build meaningful relationships. Our goal is
              to walk alongside you in this journey, offering support and
              guidance as you uncover your strengths and embrace what the future
              can hold for you.
            </p>
          </div>
          <a
            className="link-underline mt-[52px] inline-flex pb-2 text-[11px] tracking-[0.14em] text-[#33332f] uppercase transition-colors hover:text-[#66877f] focus-visible:text-[#66877f]"
            href={`${sourceSite}/therapists-newbury-park`}
            target="_blank"
            rel="noreferrer"
          >
            Learn more about us
          </a>
        </section>
      </main>

      <section
        className="relative mx-auto min-h-[659px] w-full max-w-[1600px] bg-white max-[760px]:min-h-0 max-[760px]:px-[6vw] max-[760px]:pt-[56px] max-[760px]:pb-[55px]"
        aria-labelledby="family-heading"
      >
        <img
          className="absolute top-[85px] left-0 h-[490px] w-[53.3%] object-cover object-center max-[760px]:relative max-[760px]:top-auto max-[760px]:left-auto max-[760px]:h-[clamp(260px,78vw,304px)] max-[760px]:w-full"
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg?format=1000w"
          alt="A family spending time together outdoors."
          width="1000"
          height="725"
        />
        <h2
          className="absolute top-[402px] left-[57.8%] m-0 max-w-[470px] font-cvc-heading text-[clamp(38px,3.4vw,46px)] leading-[1.35] font-extralight tracking-[-0.02em] max-[760px]:static max-[760px]:mt-[11px] max-[760px]:max-w-none max-[760px]:text-[34px] max-[760px]:leading-[1.31]"
          id="family-heading"
        >
          Honoring where you’ve been &amp; helping shape where you’re headed.
        </h2>
      </section>

      <section
        className="mx-auto min-h-[951px] w-full max-w-[1600px] bg-white px-[8.75vw] pt-[86px]  max-[760px]:min-h-0 max-[760px]:px-[6vw] max-[760px]:pt-[68px] max-[760px]:pb-[80px]"
        aria-labelledby="specialties-heading"
      >
        <div className="grid grid-cols-3 gap-x-[59px] max-[760px]:grid-cols-1 max-[760px]:gap-0">
          <h2
            className="m-0 max-w-[330px] font-cvc-heading text-[clamp(34px,2.8vw,38px)] leading-[1.4] font-extralight tracking-[-0.02em] max-[760px]:max-w-none max-[760px]:text-[32px] max-[760px]:leading-[1.35]"
            id="specialties-heading"
          >
            Our specialties include…
          </h2>
          <div className="col-span-2 grid grid-cols-2 gap-x-[59px] gap-y-[43px] max-[760px]:col-span-1 max-[760px]:mt-[52px] max-[760px]:grid-cols-1 max-[760px]:gap-y-[50px]">
            {specialties.map((specialty) => (
              <article className="min-w-0" key={specialty.title}>
                <h3 className="mt-[25px] mb-[13px] font-cvc-heading text-[23px] leading-[1.3] font-extralight">
                  {specialty.title}
                </h3>
                <p className="font-cvc-paragraph m-0 text-[14px] leading-[1.88] text-[#60615b]">
                  {specialty.description}
                </p>
                <a
                  className="link-underline mt-[21px] inline-flex pb-[5px] text-[10px] tracking-[0.13em] text-[#33332f] uppercase transition-colors hover:text-[#66877f] focus-visible:text-[#66877f]"
                  href={`${sourceSite}${specialty.href}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative mx-auto min-h-[780px] w-full max-w-[1600px] overflow-hidden bg-[#f5f4ef] max-[760px]:min-h-0 max-[760px]:px-[6vw] max-[760px]:pt-[56px] max-[760px]:pb-[67px]"
        aria-labelledby="appointment-heading"
      >
        <img
          className="absolute top-[192px] left-0 h-[468px] w-[11.7%] object-cover object-center max-[760px]:top-[56px] max-[760px]:h-[199px] max-[760px]:w-[49%]"
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg?format=300w"
          alt="A small shell resting on the sand."
          width="300"
          height="900"
        />
        <div className="absolute top-[84px] left-[20.2%] w-[37%] max-w-[470px] max-[760px]:static max-[760px]:mt-[262px] max-[760px]:w-full max-[760px]:max-w-none">
          <p className="font-cvc-paragraph m-0 text-[11px] tracking-[0.13em] text-[#60615b] uppercase">
            Schedule an appointment
          </p>
          <h2
            className="mt-[93px] mb-0 font-cvc-heading text-[clamp(38px,3.4vw,46px)] leading-[1.35] font-extralight tracking-[-0.02em] max-[760px]:mt-[31px] max-[760px]:text-[34px] max-[760px]:leading-[1.31]"
            id="appointment-heading"
          >
            Find a therapist who is the right fit for you.
          </h2>
          <p className="font-cvc-paragraph mt-[16px] mb-0 text-[14px] leading-[1.8] text-[#60615b] max-[760px]:mt-[15px] max-[760px]:text-[14px] max-[760px]:leading-[1.85]">
            Coming to therapy is a courageous decision, and connecting with the
            right kind of therapist makes all the difference. We understand that
            your journey is personal, and we’re here to support you with care
            and understanding every step of the way. Each member of our team
            brings dedicated expertise and a commitment to support you in your
            struggles. We want you to feel prioritized, understood, and
            empowered.
          </p>
          <p className="font-cvc-paragraph mt-[15px] mb-0 text-[14px] leading-[1.7] text-[#60615b]">
            Click the button below to schedule an appointment.
          </p>
          <a
            className="mt-[18px] inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#33332f] px-[24px] text-[11px] tracking-[0.13em] text-[#33332f] uppercase transition-colors hover:bg-[#33332f] hover:text-[#f5f4ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66877f]"
            href={`${sourceSite}/contact`}
            target="_blank"
            rel="noreferrer"
          >
            Book now
          </a>
        </div>
        <img
          className="absolute top-[84px] right-[0%] h-[575px] w-[34.4%] object-cover object-center max-[760px]:relative max-[760px]:top-auto max-[760px]:right-auto max-[760px]:mt-[51px] max-[760px]:ml-[12vw] max-[760px]:h-[269px] max-[760px]:w-[82.5%]"
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg?format=750w"
          alt="A child looking out across the beach."
          width="750"
          height="990"
        />
      </section>

      <footer className="mx-auto w-full max-w-[1600px] bg-white text-[#33332f]">
        <div className="grid min-h-[470px] grid-cols-[42%_16.5%_20.7%_20.8%] px-[5vw] pt-[57px] pb-[48px] max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:px-[6vw] max-[760px]:pt-[73px] max-[760px]:pb-[44px]">
          <div className="max-[760px]:max-w-[360px]">
            <a
              className="inline-flex w-[clamp(280px,25.5vw,360px)] max-[760px]:w-[322px] max-[420px]:w-full"
              href={`${sourceSite}/home`}
              target="_blank"
              rel="noreferrer"
              aria-label="Conejo Valley Family Counseling home"
            >
              <img
                className="block h-auto w-full"
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w"
                alt="Conejo Valley Counseling"
                width="450"
                height="116"
              />
            </a>
            <p className="font-cvc-paragraph mt-[30px] ml-[22px] max-w-[327px] text-[13px] leading-[1.85] text-[#60615b] max-[760px]:mt-[11px] max-[760px]:ml-[20px] max-[760px]:text-[13px] max-[760px]:leading-[1.85]">
              We want to make getting started simple. You’re welcome to come
              into our office in Newbury Park or schedule virtual appointments
              from anywhere in CA—whatever works best for you.
            </p>
          </div>

          <FooterLinkGroup
            className="max-[760px]:order-1 max-[760px]:mt-[38px] max-[760px]:ml-[42px]"
            heading="Navigate"
            links={footerNavigation}
          />
          <FooterLinkGroup
            className="max-[760px]:order-3 max-[760px]:mt-[43px] max-[760px]:ml-[42px]"
            heading="Our Team"
            links={footerTeam}
          />
          <div className="max-[760px]:order-2 max-[760px]:mt-[43px] max-[760px]:ml-[42px]">
            <h2 className="m-0 text-[11px] font-normal tracking-[0.13em] uppercase">
              Contact
            </h2>
            <address className="mt-[24px] max-w-[235px] text-[13px] leading-[1.85] text-[#60615b] not-italic">
              925 Broadbeck Dr
              <br />
              Suites 200 and 225
              <br />
              Newbury Park, CA 91320
              <br />
              <a
                className="transition-colors hover:text-[#66877f]"
                href="mailto:info@conejovalleycounseling.com"
              >
                info@conejovalleycounseling.com
              </a>
              <br />
              <a
                className="transition-colors hover:text-[#66877f]"
                href="tel:+18052423120"
              >
                805.242.3120
              </a>
              <br />
              <br />
              Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark,
              &amp; Simi Valley.
            </address>
          </div>
        </div>

        <div className="flex min-h-[40px] items-center bg-[#8cb5aa] px-[6.8vw] py-2 text-[10px] tracking-[0.03em] text-white max-[760px]:min-h-[68px] max-[760px]:justify-center max-[760px]:px-[8vw] max-[760px]:py-[10px]">
          <div className="flex flex-wrap items-center gap-x-[22px] gap-y-1 max-[760px]:justify-center max-[760px]:gap-x-[18px]">
            {footerLegal.map((link) => (
              <a
                className="transition-opacity hover:opacity-75 text-lg"
                href={`${sourceSite}${link.href}`}
                target="_blank"
                rel="noreferrer"
                key={link.label}
              >
                {link.label}
              </a>
            ))}

            <a
              className="transition-opacity hover:opacity-75"
              href="https://walkerstrategyco.com/"
              target="_blank"
              rel="noreferrer"
            >
              Website by Walker Strategy Co.
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterLinkGroup({
  className,
  heading,
  links,
}: {
  className?: string;
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className={className}>
      <h2 className="m-0 text-[11px] font-normal tracking-[0.13em] uppercase">
        {heading}
      </h2>
      <ul className="mt-[24px] grid list-none gap-[8px] p-0 text-[12px] leading-[1.5] text-[#60615b] max-[760px]:gap-[8px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="transition-colors hover:text-[#66877f]"
              href={`${sourceSite}${link.href}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
