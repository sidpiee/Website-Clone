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
                    <p className="m-0 font-serif text-[28px] font-normal">
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
            <p className="m-0 max-w-[390px] text-[12px] leading-[1.8] font-normal tracking-[0.14em] text-[#33332f] uppercase max-[960px]:max-w-[460px] max-[760px]:text-[11px]">
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
              <p className="mt-[32px] max-w-[550px] text-[15px] leading-[1.8] text-[#60615b] max-[960px]:mt-7 max-[960px]:max-w-[620px]">
                Specialized therapy for adults, couples, teens, and children to
                reflect, heal, and grow.
              </p>
              <a
                className="mt-[33px] inline-flex items-center border-b border-current pb-2 text-[12px] tracking-[0.15em] text-[#33332f] uppercase transition-colors hover:text-[#66877f] focus-visible:text-[#66877f] max-[960px]:mt-10"
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
      </main>
    </div>
  );
}
