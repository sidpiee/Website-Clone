import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const metadata: Metadata = {
  title:
    "Anxiety, Trauma & Burnout Therapy in Santa Monica, CA | Dr. Maya Reynolds",
  description:
    "Dr. Maya Reynolds offers warm, collaborative therapy for adults in Santa Monica, CA, and secure telehealth across California. Support for anxiety, panic, trauma, burnout, and perfectionism.",
};

const mainNavigation = [
  { label: "About", href: "#about" },
  { label: "Areas of care", href: "#care" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const audienceCards = [
  {
    title: "Anxiety & panic",
    image: "/images/maya-reynolds/maya-reynolds.png",
    alt: "Dr. Maya Reynolds, licensed clinical psychologist.",
    width: 1000,
    height: 1500,
    description:
      "For adults who feel caught in overthinking, on edge, or as if they are always bracing for something to go wrong.",
  },
  {
    title: "Trauma & past experiences",
    image: "/images/maya-reynolds/office-1.jpg",
    alt: "A comfortable counseling room with natural light and soft seating.",
    width: 1500,
    height: 1000,
    description:
      "A careful space to work through painful experiences, with attention to safety, stabilization, and your own pace.",
  },
  {
    title: "Burnout & perfectionism",
    image: "/images/maya-reynolds/office-2.jpg",
    alt: "A warm therapy office with a sofa, bookshelves, and natural light.",
    width: 1500,
    height: 1000,
    description:
      "Support for adults living with professional burnout, perfectionism, or high internal pressure after years of pushing through.",
  },
];

const areasOfExpertise = [
  ["Anxiety", "Panic", "Trauma", "Professional burnout", "Perfectionism"],
  [
    "High internal pressure",
    "Overthinking",
    "Feeling emotionally on edge",
    "Safety & stabilization",
    "Emotional regulation",
  ],
];

const services = [
  {
    title: "Anxiety & panic therapy",
    description:
      "Therapy for adults navigating persistent worry, panic, stress, or the feeling of being constantly on alert. Maya integrates CBT, mindfulness-based practices, and body-oriented techniques in a way that fits the person.",
  },
  {
    title: "Trauma therapy",
    description:
      "Paced support for processing trauma and painful memories. Maya may integrate EMDR while prioritizing safety, stabilization, and feeling more regulated in daily life.",
  },
  {
    title: "Burnout & perfectionism support",
    description:
      "A collaborative space to explore professional burnout, perfectionism, and high internal pressure, and to develop more sustainable ways of living and working.",
  },
];

const faqs = [
  {
    question: "Who does Dr. Maya Reynolds work with?",
    answer:
      "Maya works with adults. Many of her clients are thoughtful and self-aware, yet feel exhausted, stuck in overthinking, or emotionally on edge.",
  },
  {
    question: "What can I bring to therapy?",
    answer:
      "Maya often works with anxiety, panic, trauma, professional burnout, perfectionism, and high internal pressure. You can also talk about earlier experiences that continue to affect your sense of safety or daily life.",
  },
  {
    question: "What approaches does Maya use?",
    answer:
      "Her integrative approach includes cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. The work is warm, collaborative, and grounded.",
  },
  {
    question: "Are sessions in person or online?",
    answer:
      "Maya offers in-person therapy at her Santa Monica office and secure telehealth for clients located in California.",
  },
  {
    question: "How does Maya approach trauma work?",
    answer:
      "Trauma work is paced carefully, with attention to safety and stabilization. The aim is to support greater regulation in daily life as the work unfolds.",
  },
];

const theme = {
  "--maya-ink": "#403238",
  "--maya-muted": "#6c5d62",
  "--maya-paper": "#fbf7f3",
  "--maya-white": "#fffdfb",
  "--maya-blush": "#f2e1e2",
  "--maya-pink": "#d99aa1",
  "--maya-rose": "#9a5c69",
  "--maya-deep-rose": "#674651",
  "--maya-line": "#e7d4d5",
} as CSSProperties;

const desktopNavLinkClass =
  "inline-flex h-12 items-center whitespace-nowrap rounded-none px-0 text-[12px] font-normal tracking-[0.12em] text-[var(--maya-ink)] uppercase hover:bg-transparent hover:text-[var(--maya-rose)] focus:bg-transparent focus:text-[var(--maya-rose)]";

export default function MayaReynoldsPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[var(--maya-paper)] font-sans text-[var(--maya-ink)]"
      id="top"
      style={theme}
    >
      <a
        className="absolute left-3 top-3 z-[100] -translate-y-[160%] bg-[var(--maya-white)] px-3.5 py-2.5 text-[var(--maya-ink)] focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>

      <header className="relative z-20 mx-auto flex h-[145px] w-full max-w-[1600px] items-start justify-between pt-[30px] pr-[6.3vw] pb-0 pl-[5.2vw] max-[960px]:h-[112px] max-[960px]:items-center max-[960px]:px-[7.5vw] max-[960px]:pt-0">
        <a
          className="-translate-y-[11px] inline-flex w-[clamp(220px,19.6vw,260px)] flex-none flex-col justify-center leading-tight max-[960px]:w-[clamp(190px,31vw,220px)] max-[960px]:translate-y-0 max-[420px]:w-[178px]"
          href="#top"
          aria-label="Dr. Maya Reynolds home"
        >
          <span className="font-cvc-heading text-[25px] font-extralight tracking-[0.01em] text-[var(--maya-ink)] max-[760px]:text-[22px]">
            Dr. Maya Reynolds
          </span>
          <span className="mt-1 text-[9px] tracking-[0.14em] text-[var(--maya-muted)] uppercase max-[760px]:text-[8px]">
            Licensed Clinical Psychologist
          </span>
        </a>

        <nav className="ml-auto flex items-center" aria-label="Main navigation">
          <NavigationMenu
            className="relative hidden w-auto max-w-none flex-none items-center min-[961px]:flex"
            viewport={false}
          >
            <NavigationMenuList className="m-0 flex list-none items-center justify-end gap-[clamp(20px,2.35vw,32px)] p-0">
              {mainNavigation.slice(0, -1).map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    className={desktopNavLinkClass}
                    href={link.href}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-[var(--maya-ink)] px-[22px] text-[12px] font-normal tracking-[0.12em] text-[var(--maya-ink)] uppercase transition-colors hover:bg-[var(--maya-ink)] hover:text-[var(--maya-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--maya-rose)]"
                  href="#contact"
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
                <NavigationMenuTrigger className="grid h-12 w-12 place-items-center rounded-full border-0 bg-transparent p-0 text-[var(--maya-ink)] hover:bg-transparent focus:bg-transparent [&_svg]:hidden">
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
                  className="absolute z-50 overflow-hidden border border-[var(--maya-line)] bg-[var(--maya-white)] p-[26px_24px_22px] text-[var(--maya-ink)] shadow-[0_18px_48px_rgba(64,50,56,0.12)]"
                  style={{
                    width: "min(430px, calc(100vw - 32px))",
                    top: "calc(100% + 15px)",
                    right: 0,
                    left: "auto",
                    borderRadius: 2,
                  }}
                >
                  <div className="grid gap-2 border-b border-[var(--maya-line)] pb-5">
                    <p className="m-0 font-cvc-heading text-[28px] font-extralight">
                      Explore
                    </p>
                    <span className="text-[13px] text-[var(--maya-muted)]">
                      Learn about therapy with Maya.
                    </span>
                  </div>
                  <ul className="m-0 mt-2.5 grid list-none grid-cols-2 gap-x-7 p-0 max-[420px]:grid-cols-1">
                    {mainNavigation.map((link) => (
                      <li key={link.label}>
                        <NavigationMenuLink
                          className="flex min-h-12 items-center justify-between rounded-none border-b border-[var(--maya-line)] bg-transparent px-0 py-2.5 text-[11px] tracking-[0.13em] text-[var(--maya-ink)] uppercase hover:bg-transparent hover:text-[var(--maya-rose)] focus:bg-transparent focus:text-[var(--maya-rose)]"
                          href={link.href}
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
          className="relative mx-auto h-[540px] w-full max-w-[1600px] max-[960px]:flex max-[960px]:h-auto max-[960px]:min-h-0 max-[960px]:flex-col max-[760px]:pb-[24px]"
          aria-labelledby="hero-title"
        >
          <div className="absolute top-0 left-[34.1%] z-10 flex h-full w-[56.9%] flex-col pt-[6px] pr-[20px] pb-[10px] pl-[clamp(64px,8.3vw,132px)] max-[960px]:relative max-[960px]:top-auto max-[960px]:left-auto max-[960px]:h-auto max-[960px]:w-full max-[960px]:px-[7.5vw] max-[960px]:pt-0 max-[960px]:pb-0 max-[760px]:px-[6vw] max-[760px]:pt-[60px]">
            <p className="m-0 max-w-[390px] font-cvc-paragraph text-[12px] leading-[1.8] font-normal tracking-[0.14em] text-[var(--maya-ink)] uppercase max-[960px]:max-w-[460px] max-[760px]:max-w-none max-[760px]:text-[15px] max-[760px]:tracking-[0.12em]">
              Adult therapy in Santa Monica
              <br className="hidden max-[420px]:block" />
              &amp; across California
            </p>
            <div className="mt-[127px] max-[960px]:mt-12 max-[760px]:mt-[31px]">
              <h1
                className="m-0 max-w-[610px] font-cvc-heading text-[clamp(42px,3.65vw,49px)] leading-[1.37] font-extralight tracking-[-0.02em] max-[960px]:max-w-[720px] max-[960px]:text-[clamp(38px,8vw,52px)] max-[960px]:leading-[1.33] max-[760px]:leading-[1.32] max-[420px]:text-[36px]"
                id="hero-title"
              >
                Anxiety, trauma &amp; burnout therapy in{" "}
                <span className="whitespace-nowrap">
                  <span className="mr-[25px] inline-block origin-left scale-x-[1.14] font-cvc-script text-[1.42em] leading-none font-normal tracking-normal text-[var(--maya-rose)] max-[960px]:mr-0 max-[960px]:scale-x-[1.08]">
                    Santa Monica
                  </span>
                </span>
              </h1>
              <p className="mt-[32px] max-w-[550px] font-cvc-paragraph text-[15px] leading-[1.8] text-[var(--maya-muted)] max-[960px]:mt-7 max-[960px]:max-w-[620px] max-[760px]:mt-[30px] max-[760px]:leading-[1.92]">
                Warm, collaborative therapy for adults navigating anxiety,
                trauma, burnout, and high internal pressure.
              </p>
              <a
                className="link-underline mt-[33px] inline-flex items-center pb-2 text-[12px] tracking-[0.15em] text-[var(--maya-ink)] uppercase transition-colors hover:text-[var(--maya-rose)] focus-visible:text-[var(--maya-rose)] max-[960px]:mt-10 max-[760px]:mt-[24px] max-[760px]:min-h-[35px] max-[760px]:pb-[9px] max-[760px]:text-[13.5px] max-[760px]:tracking-[0.12em]"
                href="#services"
              >
                Explore therapy options
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 min-h-[540px] max-[960px]:relative max-[960px]:inset-auto max-[960px]:order-2 max-[960px]:mt-[55px] max-[960px]:min-h-[clamp(380px,74vw,600px)] max-[960px]:w-screen max-[960px]:self-start max-[760px]:mt-[58px] max-[760px]:h-[78vw] max-[760px]:min-h-0 max-[760px]:max-h-[304px] max-[760px]:w-screen">
            <div className="absolute top-0 left-0 h-full w-[34.1%] overflow-hidden max-[960px]:h-[88%] max-[960px]:w-[57%] max-[760px]:h-full max-[760px]:w-[58%]">
              <Image
                className="block h-full w-full object-cover object-[50%_24%]"
                src="/images/maya-reynolds/maya-reynolds.png"
                alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica."
                width={1000}
                height={1500}
                sizes="(max-width: 960px) 58vw, 34vw"
                priority
              />
            </div>
            <div className="absolute top-[32.8%] right-0 h-[67.2%] w-[9%] overflow-hidden max-[960px]:top-auto max-[960px]:right-[3%] max-[960px]:bottom-0 max-[960px]:h-[39%] max-[960px]:w-[39%] max-[960px]:border-[8px] max-[960px]:border-[var(--maya-paper)] max-[760px]:right-[3%] max-[760px]:h-[65.5%] max-[760px]:w-[39%] max-[760px]:border-[6px]">
              <Image
                className="block h-full w-full object-cover object-center"
                src="/images/maya-reynolds/office-1.jpg"
                alt="A calm, light-filled counseling office."
                width={1500}
                height={1000}
                sizes="(max-width: 960px) 39vw, 9vw"
              />
            </div>
          </div>
        </section>

        <section
          className="relative mx-auto mt-[80px] h-[841px] w-full max-w-[1600px] bg-[var(--maya-paper)] max-[760px]:mt-[11px] max-[760px]:min-h-[1218px] max-[760px]:h-auto max-[760px]:pr-[6vw] max-[760px]:pt-[58px] max-[760px]:pb-[58px] max-[760px]:pl-[6vw]"
          id="about"
          aria-labelledby="about-title"
        >
          <h2
            className="absolute top-[205px] left-[8.75vw] max-w-[610px] font-cvc-heading text-[clamp(36px,3vw,40px)] leading-[1.48] font-extralight tracking-[-0.02em] max-[1020px]:max-w-[55vw] max-[760px]:static max-[760px]:max-w-none max-[760px]:text-[34px] max-[760px]:leading-[1.32]"
            id="about-title"
          >
            You can feel capable on the outside and exhausted inside.
          </h2>
          <div className="absolute top-[376px] left-[8.75vw] w-[24.8%] max-[760px]:static max-[760px]:mt-[11px] max-[760px]:w-full">
            <p className="m-0 max-w-[320px] font-cvc-paragraph text-[15px] leading-[1.8] tracking-normal text-[var(--maya-ink)] uppercase">
              Therapy for adults in Santa Monica and across California.
            </p>
            <p className="mt-[15px] font-cvc-paragraph text-[15px] leading-[1.92] text-[var(--maya-muted)]">
              Dr. Maya Reynolds is a licensed clinical psychologist who works
              with adults navigating anxiety, panic, trauma, professional
              burnout, perfectionism, and high internal pressure. Many of her
              clients are thoughtful and self-aware, yet still feel stuck in
              overthinking or emotionally on edge.
            </p>
          </div>
          <Image
            className="absolute top-[89px] right-0 h-[626px] w-[30.2%] object-cover object-center max-[760px]:relative max-[760px]:top-auto max-[760px]:right-auto max-[760px]:mt-[72px] max-[760px]:h-[clamp(190px,62.4vw,234px)] max-[760px]:w-full"
            src="/images/maya-reynolds/office-2.jpg"
            alt="A private counseling room with comfortable seating and bookshelves."
            width={1500}
            height={1000}
            sizes="(max-width: 760px) 88vw, 30vw"
            loading="lazy"
          />
          <p className="absolute top-[376px] left-[35.1vw] m-0 w-[24.8%] font-cvc-paragraph text-[15px] leading-[1.8] text-[var(--maya-muted)] max-[760px]:static max-[760px]:mt-[46px] max-[760px]:w-full max-[760px]:leading-[1.92]">
            Her work is warm, collaborative, and grounded. Therapy can create
            room to slow down, reconnect, and develop more sustainable ways of
            living and working. When trauma is part of the work, Maya attends to
            safety and stabilization as the process unfolds.
          </p>
        </section>

        <section
          className="mx-auto min-h-[955px] w-full max-w-[1600px] bg-[var(--maya-white)] px-[5vw] pt-[86px] pb-[110px] max-[760px]:min-h-[2028px] max-[760px]:pr-[6vw] max-[760px]:pt-[63px] max-[760px]:pb-[54px] max-[760px]:pl-[6vw]"
          id="care"
          aria-labelledby="care-title"
        >
          <h2
            className="m-0 font-cvc-heading text-[clamp(38px,3.4vw,46px)] leading-[1.35] font-extralight tracking-[-0.02em] max-[760px]:text-[34px] max-[760px]:leading-[1.3]"
            id="care-title"
          >
            Who Maya{" "}
            <span className="font-cvc-script text-[1.25em] text-[var(--maya-rose)] max-[760px]:text-[1em] max-[760px]:leading-none">
              supports
            </span>
          </h2>
          <div className="ml-[11.5vw] mt-[47px] grid grid-cols-3 gap-[20px] max-[760px]:ml-0 max-[760px]:mt-[54px] max-[760px]:grid-cols-1 max-[760px]:gap-[46px]">
            {audienceCards.map((card) => (
              <article key={card.title}>
                <Image
                  className="block aspect-[0.84/1] w-full object-cover object-center max-[760px]:aspect-[1.08/1]"
                  src={card.image}
                  alt={card.alt}
                  width={card.width}
                  height={card.height}
                  sizes="(max-width: 760px) 88vw, 28vw"
                  loading="lazy"
                />
                <h3 className="mt-8 mb-3 font-cvc-heading text-[21px] leading-[1.35] font-extralight max-[760px]:mt-[46px] max-[760px]:mb-[30px] max-[760px]:text-[22px] max-[760px]:leading-[1.36]">
                  {card.title}
                </h3>
                <p className="m-0 max-w-[360px] font-cvc-paragraph text-[13px] leading-[1.8] text-[var(--maya-muted)] max-[760px]:text-[16px] max-[760px]:leading-[1.8]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="A supportive approach and areas of care">
          <div className="relative isolate flex min-h-[516px] items-end overflow-hidden bg-[var(--maya-deep-rose)] px-[8.75vw] pt-[120px] pb-[85px] max-[760px]:min-h-[557px] max-[760px]:items-center max-[760px]:pr-[10vw] max-[760px]:py-[90px] max-[760px]:pl-[6vw]">
            <Image
              className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
              src="/images/maya-reynolds/office-1.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              loading="lazy"
            />
            <div
              className="absolute inset-0 z-0 bg-[var(--maya-deep-rose)]/80"
              aria-hidden="true"
            />
            <h2 className="relative z-10 m-0 max-w-[755px] font-cvc-heading text-[clamp(34px,3vw,40px)] leading-[1.43] font-extralight text-[var(--maya-white)] max-[760px]:text-[30px] max-[760px]:leading-[1.5]">
              You deserve a space where your experience is met with care.{" "}
              <span className="italic text-[var(--maya-pink)]">
                We can make room for understanding and change together.
              </span>
            </h2>
          </div>

          <div className="flex min-h-[623px] items-center bg-[var(--maya-white)] py-[95px] pr-[6.2vw] pl-[8.75vw] max-[760px]:min-h-[1069px] max-[760px]:pr-[6vw] max-[760px]:pt-[76px] max-[760px]:pb-[58px] max-[760px]:pl-[6vw]">
            <div className="grid w-full grid-cols-[276px_minmax(0,1fr)] gap-x-[59px] max-[760px]:grid-cols-1 max-[760px]:gap-[56px]">
              <h2 className="m-0 self-start font-cvc-heading text-[clamp(30px,2.7vw,36px)] leading-[1.35] font-extralight max-[760px]:text-[27px] max-[760px]:leading-[1.4]">
                Areas of care &amp; expertise
              </h2>
              <div className="grid grid-cols-2 gap-x-[11px] max-[760px]:grid-cols-1">
                {areasOfExpertise.map((column) => (
                  <ul className="m-0 list-none p-0" key={column[0]}>
                    {column.map((area) => (
                      <li
                        className="flex min-h-[72px] items-center border-b border-[var(--maya-line)] text-[11px] tracking-[0.12em] text-[var(--maya-ink)] uppercase max-[760px]:min-h-[70px]"
                        key={area}
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative mx-auto min-h-[898px] w-full max-w-[1600px] overflow-hidden bg-[var(--maya-blush)] px-[8.75vw] pt-[110px] pb-[90px] max-[760px]:min-h-[1503px] max-[760px]:pr-[6vw] max-[760px]:pt-[86px] max-[760px]:pb-[76px] max-[760px]:pl-[6vw]"
          id="approach"
          aria-labelledby="approach-title"
        >
          <p className="m-0 font-cvc-paragraph text-[12px] tracking-[0.12em] text-[var(--maya-muted)] uppercase">
            How Maya works
          </p>
          <h2
            className="mt-[126px] mb-0 font-cvc-heading text-[clamp(38px,3.4vw,46px)] leading-[1.35] font-extralight tracking-[-0.02em] max-[760px]:mt-[38px] max-[760px]:text-[32px] max-[760px]:leading-[1.38]"
            id="approach-title"
          >
            Therapy that moves at your pace.
          </h2>
          <Image
            className="absolute top-[107px] right-0 h-[683px] w-[22.5%] object-cover object-center max-[760px]:relative max-[760px]:top-auto max-[760px]:right-auto max-[760px]:mt-[50px] max-[760px]:h-[269px] max-[760px]:w-full"
            src="/images/maya-reynolds/office-2.jpg"
            alt="A quiet, welcoming therapy room with comfortable seating."
            width={1500}
            height={1000}
            sizes="(max-width: 760px) 88vw, 22vw"
            loading="lazy"
          />
          <div className="mt-[45px] grid max-w-[751px] grid-cols-2 gap-[20px] max-[760px]:mt-[45px] max-[760px]:max-w-none max-[760px]:grid-cols-1 max-[760px]:gap-7">
            <div>
              <p className="m-0 font-cvc-paragraph text-[12px] leading-[1.8] tracking-[0.11em] text-[var(--maya-ink)] uppercase">
                Therapy is collaborative, grounded, and shaped around the person
                in the room.
              </p>
              <p className="mt-5 font-cvc-paragraph text-[14px] leading-[1.8] text-[var(--maya-muted)]">
                Maya integrates CBT, EMDR, mindfulness-based practices, and
                body-oriented techniques. Together, you can explore what is
                happening and choose an approach that fits your needs and pace.
              </p>
            </div>
            <p className="m-0 font-cvc-paragraph text-[14px] leading-[1.8] text-[var(--maya-muted)]">
              When trauma is part of the work, the process is careful and
              attentive to safety and stabilization. The aim is to support
              greater regulation in daily life, with space for reflection and
              practical tools along the way.
            </p>
          </div>
          <a
            className="link-underline mt-[52px] inline-flex pb-2 text-[11px] tracking-[0.14em] text-[var(--maya-ink)] uppercase transition-colors hover:text-[var(--maya-rose)] focus-visible:text-[var(--maya-rose)]"
            href="#services"
          >
            Explore Maya’s services
          </a>
        </section>

        <section
          className="relative mx-auto min-h-[659px] w-full max-w-[1600px] bg-[var(--maya-white)] max-[760px]:min-h-0 max-[760px]:px-[6vw] max-[760px]:pt-[56px] max-[760px]:pb-[55px]"
          aria-labelledby="story-title"
        >
          <Image
            className="absolute top-[85px] left-0 h-[490px] w-[35%] object-cover object-top max-[760px]:relative max-[760px]:top-auto max-[760px]:left-auto max-[760px]:mx-auto max-[760px]:mt-0 max-[760px]:h-auto max-[760px]:w-[70vw] max-[760px]:max-w-[280px]"
            src="/images/maya-reynolds/maya-reynolds.png"
            alt="Dr. Maya Reynolds, ready to welcome adults to therapy."
            width={1000}
            height={1500}
            sizes="(max-width: 760px) min(70vw, 280px), 35vw"
            loading="lazy"
          />
          <h2
            className="absolute top-[402px] left-[57.8%] m-0 max-w-[470px] font-cvc-heading text-[clamp(38px,3.4vw,46px)] leading-[1.35] font-extralight tracking-[-0.02em] max-[760px]:static max-[760px]:mt-[11px] max-[760px]:max-w-none max-[760px]:text-[30px] max-[760px]:leading-[1.48]"
            id="story-title"
          >
            A thoughtful, grounded approach to lasting change.
          </h2>
        </section>

        <section
          className="mx-auto min-h-[951px] w-full max-w-[1600px] bg-[var(--maya-white)] px-[8.75vw] pt-[86px] max-[760px]:min-h-0 max-[760px]:px-[6vw] max-[760px]:pt-[68px] max-[760px]:pb-[67px]"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="grid grid-cols-3 gap-x-[59px] max-[760px]:grid-cols-1 max-[760px]:gap-0">
            <h2
              className="m-0 max-w-[330px] font-cvc-heading text-[clamp(34px,2.8vw,38px)] leading-[1.4] font-extralight tracking-[-0.02em] max-[760px]:max-w-none max-[760px]:text-[32px] max-[760px]:leading-[1.22]"
              id="services-title"
            >
              Therapy services in Santa Monica
            </h2>
            <div className="col-span-2 grid grid-cols-2 gap-x-[59px] gap-y-[43px] max-[760px]:col-span-1 max-[760px]:mt-[42px] max-[760px]:grid-cols-1 max-[760px]:gap-y-[50px]">
              {services.map((service) => (
                <article className="min-w-0" key={service.title}>
                  <h3 className="mt-[25px] mb-[13px] font-cvc-heading text-[23px] leading-[1.3] font-extralight max-[760px]:mb-[20px] max-[760px]:text-[22px] max-[760px]:leading-[1.36]">
                    {service.title}
                  </h3>
                  <p className="m-0 font-cvc-paragraph text-[14px] leading-[1.88] text-[var(--maya-muted)] max-[760px]:mt-[15px] max-[760px]:text-[16px] max-[760px]:leading-[1.8]">
                    {service.description}
                  </p>
                  <a
                    className="link-underline mt-[21px] inline-flex pb-[5px] text-[10px] tracking-[0.13em] text-[var(--maya-ink)] uppercase transition-colors hover:text-[var(--maya-rose)] focus-visible:text-[var(--maya-rose)]"
                    href="#contact"
                  >
                    Ask about this service
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-[var(--maya-paper)] px-[6vw] py-[70px] sm:px-[8.75vw] sm:py-[92px]"
          id="office"
          aria-labelledby="office-title"
        >
          <div className="mx-auto w-full max-w-[1300px]">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-[7vw]">
              <div>
                <p className="m-0 font-cvc-paragraph text-[11px] tracking-[0.16em] text-[var(--maya-rose)] uppercase">
                  In person in Santa Monica
                </p>
                <h2
                  className="mt-5 mb-0 font-cvc-heading text-[clamp(36px,4vw,51px)] leading-[1.3] font-extralight tracking-[-0.03em]"
                  id="office-title"
                >
                  Our office: a calm place to arrive and settle in.
                </h2>
              </div>
              <div className="max-w-[590px] lg:justify-self-end">
                <p className="m-0 font-cvc-paragraph text-[14px] leading-[1.9] text-[var(--maya-muted)] sm:text-[15px]">
                  Maya welcomes adults to meet in person at her Santa Monica
                  office. The office is a comfortable setting with natural light
                  and room to settle in. Secure telehealth is also available for
                  clients located in California.
                </p>
                <address className="mt-4 not-italic font-cvc-paragraph text-[12px] leading-[1.8] text-[var(--maya-ink)]">
                  123th Street 45 W
                  <br />
                  Santa Monica, CA 90401
                </address>
              </div>
            </div>

            <div className="mt-9 grid grid-cols-1 items-end gap-4 sm:grid-cols-[1.15fr_0.85fr] sm:gap-5 lg:mt-[54px]">
              <figure className="m-0">
                <Image
                  className="block aspect-[1.35/1] w-full object-cover object-center sm:aspect-[1.42/1]"
                  src="/images/maya-reynolds/office-1.jpg"
                  alt="Sunlight fills a comfortable therapy office with a sofa and armchair."
                  width={1500}
                  height={1000}
                  sizes="(max-width: 640px) 88vw, 60vw"
                  loading="lazy"
                />
                <figcaption className="mt-3 font-cvc-paragraph text-[9px] tracking-[0.13em] text-[var(--maya-muted)] uppercase">
                  Natural light · Comfortable seating
                </figcaption>
              </figure>
              <figure className="m-0 sm:mb-8">
                <Image
                  className="block aspect-[1.15/1] w-full object-cover object-center sm:aspect-[0.98/1]"
                  src="/images/maya-reynolds/office-2.jpg"
                  alt="A private therapy room with a sofa, bookshelf, and soft neutral colors."
                  width={1500}
                  height={1000}
                  sizes="(max-width: 640px) 88vw, 40vw"
                  loading="lazy"
                />
                <figcaption className="mt-3 font-cvc-paragraph text-[9px] tracking-[0.13em] text-[var(--maya-muted)] uppercase">
                  A private, welcoming setting
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section
          className="bg-[var(--maya-white)] px-[6vw] py-[72px] sm:px-[8.75vw] sm:py-[96px]"
          id="faqs"
          aria-labelledby="faqs-title"
        >
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-[8vw]">
            <div>
              <p className="m-0 font-cvc-paragraph text-[10px] tracking-[0.17em] text-[var(--maya-rose)] uppercase">
                A few things to know
              </p>
              <h2
                className="mt-5 mb-0 font-cvc-heading text-[clamp(38px,4vw,52px)] leading-[1.3] font-extralight tracking-[-0.03em]"
                id="faqs-title"
              >
                Frequently asked questions
              </h2>
            </div>
            <div>
              {faqs.map((faq) => (
                <details
                  className="group border-t border-[var(--maya-line)] py-5 last:border-b"
                  key={faq.question}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-cvc-heading text-[19px] leading-[1.45] font-extralight marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--maya-rose)] sm:text-[21px]">
                    {faq.question}
                    <span
                      className="shrink-0 font-sans text-[22px] text-[var(--maya-rose)] transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 mb-0 max-w-[680px] pr-8 font-cvc-paragraph text-[14px] leading-[1.9] text-[var(--maya-muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative mx-auto min-h-[780px] w-full max-w-[1600px] overflow-hidden bg-[var(--maya-blush)] max-[760px]:min-h-0 max-[760px]:px-[6vw] max-[760px]:pt-[56px] max-[760px]:pb-[67px]"
          id="contact"
          aria-labelledby="contact-title"
        >
          <Image
            className="absolute top-[192px] left-0 h-[468px] w-[11.7%] object-cover object-center max-[760px]:top-[56px] max-[760px]:h-[199px] max-[760px]:w-[48.5%]"
            src="/images/maya-reynolds/office-1.jpg"
            alt="A quiet corner of Maya’s Santa Monica counseling office."
            width={1500}
            height={1000}
            sizes="(max-width: 760px) 49vw, 12vw"
            loading="lazy"
          />
          <div className="absolute top-[84px] left-[20.2%] w-[37%] max-w-[470px] max-[760px]:static max-[760px]:mt-[267px] max-[760px]:w-full max-[760px]:max-w-none">
            <p className="m-0 font-cvc-paragraph text-[11px] tracking-[0.13em] text-[var(--maya-muted)] uppercase">
              In-person &amp; telehealth
            </p>
            <h2
              className="mt-[93px] mb-0 font-cvc-heading text-[clamp(38px,3.4vw,46px)] leading-[1.35] font-extralight tracking-[-0.02em] max-[760px]:mt-[31px] max-[760px]:text-[34px] max-[760px]:leading-[1.31]"
              id="contact-title"
            >
              Take the next step at a pace that feels right.
            </h2>
            <p className="mt-[16px] mb-0 font-cvc-paragraph text-[14px] leading-[1.8] text-[var(--maya-muted)] max-[760px]:mt-[16px] max-[760px]:text-[16px] max-[760px]:leading-[1.8]">
              Dr. Maya Reynolds offers in-person therapy in Santa Monica and
              secure telehealth for adults located in California. Explore her
              services and office details to learn more about the practice.
            </p>
            <a
              className="mt-[18px] inline-flex min-h-[48px] items-center justify-center rounded-full border border-[var(--maya-ink)] px-[24px] text-[11px] tracking-[0.13em] text-[var(--maya-ink)] uppercase transition-colors hover:bg-[var(--maya-ink)] hover:text-[var(--maya-paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--maya-rose)] max-[760px]:mt-[16px]"
              href="#office"
            >
              View the office
            </a>
          </div>
          <Image
            className="absolute top-[84px] right-0 h-[575px] w-[34.4%] object-cover object-center max-[760px]:relative max-[760px]:top-auto max-[760px]:right-auto max-[760px]:mx-auto max-[760px]:mt-[51px] max-[760px]:h-auto max-[760px]:w-[70vw] max-[760px]:max-w-[280px]"
            src="/images/maya-reynolds/maya-reynolds.png"
            alt="Dr. Maya Reynolds, available for adult therapy in Santa Monica and California."
            width={1000}
            height={1500}
            sizes="(max-width: 760px) min(70vw, 280px), 34.4vw"
            loading="lazy"
          />
        </section>
      </main>

      <footer className="mx-auto w-full max-w-[1600px] bg-[var(--maya-white)] text-[var(--maya-ink)]">
        <div className="grid min-h-[470px] grid-cols-[42%_16.5%_20.7%_20.8%] px-[5vw] pt-[57px] pb-[48px] max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:px-[6vw] max-[760px]:pt-[73px] max-[760px]:pb-[44px]">
          <div className="max-[760px]:max-w-[360px]">
            <a
              className="inline-flex flex-col"
              href="#top"
              aria-label="Dr. Maya Reynolds home"
            >
              <span className="font-cvc-heading text-[32px] leading-tight font-extralight">
                Dr. Maya Reynolds
              </span>
              <span className="mt-2 text-[10px] tracking-[0.14em] text-[var(--maya-muted)] uppercase">
                Licensed Clinical Psychologist
              </span>
            </a>
            <p className="mt-6 max-w-[320px] font-cvc-paragraph text-[13px] leading-[1.8] text-[var(--maya-muted)]">
              Adult therapy in Santa Monica, California, and secure telehealth
              across the state.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[14px] max-[760px]:mt-10">
            <p className="mb-2 font-cvc-paragraph text-[10px] tracking-[0.14em] uppercase">
              Explore
            </p>
            {mainNavigation.slice(0, 4).map((link) => (
              <a
                className="link-underline inline-flex pb-1 font-cvc-paragraph text-[11px] tracking-[0.1em] text-[var(--maya-muted)] uppercase hover:text-[var(--maya-rose)]"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-[14px] max-[760px]:mt-10">
            <p className="mb-2 font-cvc-paragraph text-[10px] tracking-[0.14em] uppercase">
              Therapy services
            </p>
            {services.map((service) => (
              <a
                className="link-underline inline-flex pb-1 font-cvc-paragraph text-[11px] tracking-[0.1em] text-[var(--maya-muted)] uppercase hover:text-[var(--maya-rose)]"
                href="#services"
                key={service.title}
              >
                {service.title}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-[14px] max-[760px]:mt-10">
            <p className="mb-2 font-cvc-paragraph text-[10px] tracking-[0.14em] uppercase">
              Santa Monica office
            </p>
            <a
              className="link-underline inline-flex pb-1 font-cvc-paragraph text-[11px] tracking-[0.1em] text-[var(--maya-muted)] uppercase hover:text-[var(--maya-rose)]"
              href="#office"
            >
              123th Street 45 W
            </a>
            <span className="font-cvc-paragraph text-[11px] text-[var(--maya-muted)]">
              Santa Monica, CA 90401
            </span>
            <a
              className="link-underline inline-flex pb-1 font-cvc-paragraph text-[11px] tracking-[0.1em] text-[var(--maya-muted)] uppercase hover:text-[var(--maya-rose)]"
              href="#faqs"
            >
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
