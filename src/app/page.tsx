import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const sourceSite = "https://www.conejovalleycounseling.com";

const navigationLinks = [
  { label: "About", href: "/therapists-newbury-park" },
  { label: "Our team", href: "/our-team" },
  { label: "Specialties", href: "/specialties" },
  { label: "Methods", href: "/methods" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
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

      <header className="relative z-10 mx-auto flex h-[122px] w-full max-w-[1600px] items-center justify-between px-[clamp(28px,4.2vw,66px)] max-[760px]:h-[120px] max-[760px]:px-[7.5vw]">
        <a
          className="inline-flex w-[clamp(190px,16vw,238px)] flex-none items-center max-[760px]:w-[clamp(190px,31vw,220px)] max-[420px]:w-[178px]"
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

        <nav className="flex items-center" aria-label="Main navigation">
          <NavigationMenu
            className="relative flex w-auto max-w-none flex-none items-center"
            viewport={false}
          >
            <NavigationMenuList className="m-0 flex list-none items-center justify-end gap-0 p-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="grid h-12 w-12 place-items-center rounded-full border-0 bg-transparent p-0 text-[#33332f] hover:bg-transparent focus:bg-transparent [&_svg]:hidden max-[760px]:h-[42px] max-[760px]:w-[42px]"
                >
                  <span
                    className="flex w-[35px] flex-col gap-[6px] max-[760px]:w-[34px] max-[760px]:gap-[5px]"
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
                  className="absolute z-50 overflow-hidden border border-[#33332f]/10 bg-[#fbfaf6] p-[30px_34px_26px] text-[#33332f] shadow-[0_18px_48px_rgba(35,35,30,0.12)] max-[760px]:p-[26px_24px_22px]"
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
                    {navigationLinks.map((link) => (
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
          className="mx-auto grid w-full max-w-[1600px] grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] items-center gap-[clamp(38px,5.2vw,82px)] px-[clamp(28px,4.2vw,66px)] pt-[46px] pb-[90px] max-[760px]:flex max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:px-0 max-[760px]:pt-[94px] max-[760px]:pb-[70px]"
          aria-labelledby="hero-title"
        >
          <div className="col-start-2 row-start-1 self-center pt-[18px] pr-[1.5vw] pb-9 pl-0 max-[760px]:w-full max-[760px]:px-[7.5vw]">
            <p className="mb-[45px] text-[12px] leading-[1.7] font-normal tracking-[0.15em] text-[#33332f] uppercase max-[760px]:mb-12 max-[760px]:text-[11px] max-[760px]:tracking-[0.14em] max-[420px]:mb-9">
              Online &amp; in-person counseling in Newbury Park &amp; across CA
            </p>
            <h1
              className="m-0 max-w-[700px] text-[clamp(45px,4.2vw,66px)] leading-[1.2] font-normal tracking-[-0.045em] max-[760px]:max-w-[620px] max-[760px]:text-[clamp(38px,8vw,52px)] max-[760px]:leading-[1.22] max-[420px]:text-[38px]"
              id="hero-title"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span
                className="text-[0.9em] font-normal tracking-normal whitespace-nowrap text-[#99b5ad] italic"
                style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
              >
                thrive.
              </span>
            </h1>
            <p className="mt-[27px] max-w-[510px] text-[15px] leading-[1.8] text-[#60615b] max-[760px]:mt-7 max-[760px]:max-w-[560px]">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>
            <a
              className="mt-[72px] inline-flex items-center gap-3 border-b border-current pb-2 text-[12px] tracking-[0.15em] text-[#33332f] uppercase transition-colors hover:text-[#66877f] focus-visible:text-[#66877f] max-[760px]:mt-[83px] max-[420px]:mt-[68px]"
              href={`${sourceSite}/contact`}
              target="_blank"
              rel="noreferrer"
            >
              Book an appointment
              <span className="text-sm tracking-normal" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div
            className="relative col-start-1 row-start-1 min-h-[600px] w-full self-stretch max-[760px]:mt-[55px] max-[760px]:min-h-[105vw] max-[760px]:w-[78vw] max-[760px]:self-start"
            aria-label="Therapy for families and children"
          >
            <div className="absolute top-0 left-0 h-[88%] w-[82%] overflow-hidden max-[760px]:w-[90%]">
              <img
                className="block h-full w-full object-cover"
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
                alt="Family therapy"
                width="1400"
                height="1200"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[43%] w-[43%] overflow-hidden border-[10px] border-[#f5f4ef] max-[760px]:right-[-22%] max-[760px]:h-[39%] max-[760px]:w-[51%] max-[760px]:border-[8px]">
              <img
                className="block h-full w-full object-cover"
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
