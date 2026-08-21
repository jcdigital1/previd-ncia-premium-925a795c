import { createFileRoute } from "@tanstack/react-router";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";
import { Reveal } from "@/components/Reveal";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

const WA = "https://wa.link/rso0eo";
const IG = "https://www.instagram.com/jessicaprevidenciaria?igsh=Mjl4a2lrNzY5d2N6";
const FB = "https://www.facebook.com/share/1FTC8UzDFL/?mibextid=wwXIfr";
const MAPS =
  "https://www.google.com/maps/place/J%C3%A9ssica+Rodrigues+Advocacia+%7C+Advocacia+Previdenci%C3%A1ria+-+R.+Joaquim+Carlos+dos+Santos,+492+-+Constantino,+Patroc%C3%ADnio+-+MG,+38747-036/@-18.9403667,-46.9878721,16z/data=!4m6!3m5!1s0x94afbbbbaf77465d:0x5b73854047dd4a2e!8m2!3d-18.9403667!4d-46.9878721!16s%2Fg%2F11txy5bn10";
const GOOGLE_REVIEWS = "https://share.google/5WseIpeMR8w7bGWKT";
const LOGO = "https://i.postimg.cc/CK63W8TT/Design-sem-nome.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jéssica Rodrigues Advocacia | Advocacia Previdenciária e INSS" },
      {
        name: "description",
        content:
          "Advocacia previdenciária com mais de 10 anos revertendo negativas do INSS: BPC/LOAS, auxílio-doença, pensão por morte e aposentadoria. Atendimento em todo o Brasil.",
      },
      { property: "og:title", content: "Jéssica Rodrigues Advocacia | Previdenciário e INSS" },
      {
        property: "og:description",
        content:
          "Benefício negado pelo INSS não significa fim. Fale com a advogada e entenda seus direitos previdenciários.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: LOGO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: LOGO },
    ],
  }),
  component: Index,
});

const CONTACTS = [
  { label: "WhatsApp", href: WA, Icon: WhatsAppIcon },
  { label: "Instagram", href: IG, Icon: InstagramIcon },
  { label: "Facebook", href: FB, Icon: FacebookIcon },
  { label: "Localização", href: MAPS, Icon: MapPinIcon },
];

const SERVICES = [
  {
    title: "BPC / LOAS",
    hook: "Benefício de prestação continuada negado ou cortado?",
    text: "Analisamos o caso para identificar as possibilidades de recurso e defesa do seu direito.",
  },
  {
    title: "Auxílio-doença",
    hook: "INSS negou seu auxílio-doença?",
    text: "Mesmo após uma negativa, ainda pode existir direito ao benefício. Cada situação precisa ser analisada individualmente.",
  },
  {
    title: "Aposentadoria por incapacidade",
    hook: "Está incapaz de trabalhar, mas o INSS não reconheceu sua situação?",
    text: "Uma análise jurídica e documental pode identificar as medidas possíveis para o seu caso.",
  },
  {
    title: "Pensão por morte",
    hook: "Perdeu alguém e o INSS negou a pensão?",
    text: "Dependendo das circunstâncias e da documentação, a negativa pode ser revista.",
  },
  {
    title: "Planejamento Previdenciário",
    hook: "Quer entender quando e como poderá se aposentar?",
    text: "Faça uma análise individualizada para conhecer suas possibilidades e planejar sua aposentadoria com mais segurança.",
  },
  {
    title: "Recurso Administrativo",
    hook: "Recebeu uma negativa do INSS?",
    text: "Dependendo do caso, ainda pode ser possível apresentar recurso dentro do próprio INSS.",
  },
];

const CASES = [
  "Benefício negado?",
  "BPC cortado ou negado?",
  "Auxílio-doença negado?",
  "Pensão por morte negada?",
  "Quero me aposentar",
  "Outro problema com o INSS",
];

const AUTHORITY = [
  {
    highlight: "+10 ANOS",
    text: "Revertendo negativas e defendendo direitos previdenciários.",
  },
  {
    highlight: "ATENDIMENTO EM TODO O BRASIL",
    text: "Atendimento previdenciário para clientes de diferentes cidades e estados.",
  },
  {
    highlight: "OAB/MG",
    text: "Ordem dos Advogados do Brasil — Seção Minas Gerais",
  },
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <div className="hairline-gold mx-auto mt-4 h-px w-24" />
      {subtitle ? <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p> : null}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundImage: "var(--gradient-page)" }}>
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-ink px-5 pb-14 pt-8 sm:pt-12">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
            style={{ backgroundImage: "linear-gradient(180deg, transparent, #3A0E13)" }}
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <img
              src={LOGO}
              alt="Jéssica Rodrigues Advocacia — Advocacia Previdenciária"
              width={450}
              height={799}
              fetchPriority="high"
              className="h-auto w-[var(--logo-w)] [--logo-w:min(74vw,300px)] md:[--logo-w:min(430px,42vw)]"
              style={{ marginBottom: "calc(var(--logo-w) * -0.44)" }}
            />

            <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Jéssica Rodrigues Advocacia
            </h1>
            <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-primary">
              Advocacia Previdenciária | INSS
            </p>

            <p className="mt-5 font-display text-xl italic leading-snug text-foreground sm:text-2xl">
              “Benefício negado pelo INSS não significa fim.”
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Há mais de 10 anos atuando para reverter negativas e defender direitos previdenciários.
              Atendimento em todo o Brasil.
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform active:scale-[0.98]"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com a advogada
            </a>

            {/* CONTATOS */}
            <div className="mt-10 w-full">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Entre em contato
              </p>
              <div className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-3 sm:grid-cols-4">
                {CONTACTS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card flex flex-col items-center gap-2 rounded-xl px-3 py-4 text-xs font-medium text-foreground transition-colors hover:border-primary"
                  >
                    <Icon className="h-6 w-6" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="px-5 py-16">
          <Reveal>
            <SectionTitle
              title="Como podemos ajudar você?"
              subtitle="Atuação especializada em Direito Previdenciário e benefícios do INSS."
            />
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <article className="surface-card h-full rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm font-medium text-foreground">{s.hook}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SITUAÇÃO / WHATSAPP */}
        <section className="px-5 py-16">
          <Reveal>
            <SectionTitle
              title="Qual é a sua situação?"
              subtitle="Escolha uma opção e fale diretamente pelo WhatsApp."
            />
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {CASES.map((label, i) => (
              <Reveal key={label} delay={i * 60}>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card flex items-center justify-between gap-3 rounded-xl px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary"
                >
                  <span className="min-w-0">{label}</span>
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* AUTORIDADE */}
        <section className="px-5 py-16">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            {AUTHORITY.map((a, i) => (
              <Reveal key={a.highlight} delay={i * 80}>
                <div className="surface-card h-full rounded-2xl px-6 py-8 text-center">
                  <p className="font-display text-2xl font-semibold leading-tight text-gold-gradient">
                    {a.highlight}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section className="py-16">
          <div className="px-5">
            <Reveal>
              <SectionTitle
                title="O que dizem nossos clientes"
                subtitle="Algumas avaliações publicadas no Google"
              />
            </Reveal>
          </div>
          <div className="mx-auto mt-10 max-w-6xl px-3">
            <ReviewsCarousel />
          </div>
          <div className="mt-8 px-5 text-center">
            <a
              href={GOOGLE_REVIEWS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-accent/40"
            >
              <GoogleIcon className="h-4 w-4" />
              Ver mais avaliações no Google
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-5 py-16">
          <Reveal>
            <div className="surface-card mx-auto max-w-2xl rounded-3xl px-6 py-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ainda tem dúvidas sobre seu benefício?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Converse com a Jéssica e explique sua situação. Uma análise individual pode ajudar
                você a entender quais caminhos estão disponíveis.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform active:scale-[0.98] sm:text-sm"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar com a Jéssica no WhatsApp
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-ink px-5 pb-28 pt-14 text-center sm:pb-14">
        <img
          src={LOGO}
          alt="Jéssica Rodrigues Advocacia"
          width={520}
          height={520}
          loading="lazy"
          className="mx-auto h-auto w-[min(60vw,220px)]"
        />
        <p className="mt-4 font-display text-xl font-semibold">Jéssica Rodrigues Advocacia</p>
        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.25em] text-primary">
          Advocacia Previdenciária | INSS
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Atendimento em todo o Brasil</p>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          {CONTACTS.map(({ label, href }, i) => (
            <span key={label} className="flex items-center gap-3">
              {i > 0 ? <span className="text-primary/60">•</span> : null}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {label}
              </a>
            </span>
          ))}
        </nav>

        <div className="hairline-gold mx-auto mt-8 h-px w-32" />
        <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-muted-foreground">
          As informações apresentadas neste site possuem caráter exclusivamente informativo e não
          substituem uma análise jurídica individualizada.
        </p>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-ink-2/95 px-3 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-foreground shadow-[var(--shadow-elegant)] backdrop-blur sm:px-5"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden sm:inline">Fale conosco</span>
      </a>
    </div>
  );
}
