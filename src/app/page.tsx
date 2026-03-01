import { Shield, Sparkles, Smartphone, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CardsShowcase } from "@/components/cards-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const playStoreUrl = "https://play.google.com/store/apps/details?id=com.susbeerginman.cartastrofe";
const newsletterUrl = "https://cartastrofe.com/newsletter";
const privacyUrl = "/privacidad";
const termsUrl = "/terminos";
const heroHeaderImageUrl = "/images/cartastrofe_logo_landing.png";

const howToPlay = [
  {
    title: "1. Abrid baraja juntos 🤝",
    text: "Os ponéis de acuerdo (por ahora) y abrís una baraja nueva. La app os reparte 12 cartas aleatorias de un total de 40 posibles. Nunca sabéis qué os va a tocar.",
  },
  {
    title: "2. Jugad cuando queráis ⏰",
    text: "Tenéis 24 horas para usar vuestras cartas. En el desayuno. En el autobús. En una cena romántica. En plena reunión familiar (no nos hacemos responsables).",
  },
  {
    title: "3. Usad las cartas 🎯",
    text: "Cada carta tiene una misión diferente: acción, tarea, defensa y sorpresa. Cada jugada puede cambiarlo todo.",
  },
  {
    title: "4. Se acaba el tiempo… ¡nueva partida! 🔄",
    text: "Cuando pasen las 24h o uséis todas las cartas, podréis abrir una baraja nueva. Cada partida es diferente. Cada baraja es única.",
  },
];

const cardTypes = [
  "🗣️ Cartas de acción: Haz que tu pareja diga o haga algo.",
  "🧹 Cartas de tarea: Le toca cumplir un encargo.",
  "🛡️ Cartas de defensa: ¿Te tocó algo chungo? Contrarresta con otra carta.",
  "🔀 Cartas sorpresa: Mejor que no te la cuente... descúbrela tú.",
];

const reasons = [
  ["✅ 100% gratis", "Sin compras ocultas. Sin anuncios. De verdad."],
  ["📱 Solo necesitas tu móvil", "Nada de cartas físicas que se pierden debajo del sofá."],
  ["🕐 Juega donde sea", "En casa, en un bar, de viaje, en una cola del supermercado…"],
  ["🔒 Privacidad total", "No pedimos datos. No hay registro. No hay servidor. Todo se queda en tu móvil."],
  ["🌍 Español e Inglés", "Para parejas que hablan en cualquiera de los dos."],
  ["🎲 40 cartas posibles", "Cada baraja de 12 es diferente. Matemáticamente tienes más de 5 mil millones de combinaciones."],
];

const realCardExamples = Array.from({ length: 40 }, (_, index) => ({
  image: `/images/cartas/${index + 1}.png`,
  alt: `Carta ${index + 1} de Cartástrofe`,
}));

const faqs = [
  {
    q: "¿De verdad es gratis?",
    a: "Sí. Gratis-gratis. Sin truco. Sin versión premium. Sin paga para desbloquear las cartas buenas. Todas las cartas están disponibles desde el primer momento.",
  },
  {
    q: "¿Necesito Internet para jugar?",
    a: "No. Todo funciona offline. La app guarda todo en tu móvil.",
  },
  {
    q: "¿Funciona en iPhone?",
    a: "De momento, Cartástrofe es exclusiva para Android. Si quieres que lleguemos a iOS, apúntate a la lista de correo y lo sabrás el primero.",
  },
  {
    q: "¿Pueden jugar más de dos personas?",
    a: "Está diseñada para parejas, pero si sois un grupo atrevido... las reglas las ponéis vosotros.",
  },
  {
    q: "¿Cada cuánto puedo jugar?",
    a: "Cada 24 horas podéis abrir una baraja nueva. O cuando uséis las 12 cartas, lo que ocurra primero.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "No recogemos NINGÚN dato. Ni email, ni nombre, ni ubicación. Todo se queda en tu teléfono.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 overflow-hidden rounded-3xl border bg-card shadow-2xl">
            <Image
              src={heroHeaderImageUrl}
              alt="Cartástrofe - juego de cartas para parejas"
              width={1408}
              height={1024}
              priority
              className="h-auto w-full"
            />
          </div>
          <Badge className="mb-5" variant="secondary">
            Juego para parejas · Android
          </Badge>
          <h1 className="text-balance text-4xl font-black tracking-tight md:text-6xl">Tu pareja no sabe lo que le espera. 😈</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            <strong>Cartástrofe</strong> es el juego de cartas para parejas que convierte cualquier momento en una aventura impredecible. Sin cartas físicas. Sin excusas. Solo tu móvil y muchas ganas de liarla.
          </p>
          <p className="mt-4 font-semibold text-primary">Gratis en Android.</p>
          <div className="mt-8 flex justify-center">
            <div className="ml-compact w-full max-w-md rounded-md border border-input bg-background px-4 py-3 text-left">
              <div className="ml-embedded" data-form="7SWYmQ" />
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border bg-card/50 p-6 backdrop-blur md:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">12 cartas. 24 horas. Cero aburrimiento.</h2>
          <p className="mt-3 text-muted-foreground">Así funciona Cartástrofe:</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {howToPlay.map((item) => (
              <Card key={item.title} className="border-primary/20">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-xl border bg-background p-5 md:grid-cols-2">
            {cardTypes.map((type) => (
              <p className="text-sm text-muted-foreground" key={type}>
                {type}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Porque las relaciones necesitan menos Netflix y más caos controlado.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reasons.map(([title, description]) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border bg-secondary/30 p-6 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Un vistazo a lo que os espera... 👀</h2>
          <div className="mt-7">
            <CardsShowcase cards={realCardExamples} />
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <Card className="mx-auto max-w-5xl border-primary/30 bg-gradient-to-r from-primary/10 via-background to-accent/10">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">¿A qué estás esperando? Tu pareja ya se está poniendo nervioso/a.</CardTitle>
            <CardDescription className="text-base">
              Cartástrofe es <strong>gratis</strong>, <strong>sin anuncios</strong>, <strong>sin registro</strong> y <strong>exclusiva para Android</strong>. Descárgala, abrid una baraja y a ver quién sobrevive a las 24 horas.
            </CardDescription>
          </CardHeader>
          <CardContent />
        </Card>
      </section>

      <section className="container pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl border bg-card p-6 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">¿Quieres ser el primero en enterarte de las nuevas cartas? 💌</h2>
          <p className="mt-4 text-muted-foreground">
            Estamos preparando <strong>nuevas cartas, eventos especiales y sorpresas</strong> que solo los suscriptores conocerán antes que nadie.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>🃏 Enterarte antes que nadie</CardTitle>
                <CardDescription>De nuevas cartas y actualizaciones.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🎁 Contenido exclusivo</CardTitle>
                <CardDescription>Que no estará en ningún otro sitio.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>📬 Sin spam</CardTitle>
                <CardDescription>Solo cosas que merecen la pena. Palabra de Cartástrofe.</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">¿Lo peor que puede pasar? Que tu bandeja de entrada sea un poco más divertida.</p>
          <div className="ml-compact mt-6">
            <div className="ml-embedded" data-form="7SWYmQ" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Tu email está más seguro con nosotros que una carta de escudo en tu baraja. 🛡️</p>
        </div>
      </section>

      <section className="container pb-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Preguntas que sabemos que te estás haciendo</h2>
          <Accordion type="single" collapsible className="mt-6 w-full rounded-xl border bg-card px-6">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-4 text-sm text-muted-foreground">
            No recogemos datos. Si quieres ver más detalles, puedes leer nuestra{" "}
            <Link href={privacyUrl} className="underline hover:text-foreground">
              política de privacidad
            </Link>
            .
          </p>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-4 text-sm text-muted-foreground">
            <p className="text-base font-semibold text-foreground">Cartástrofe — El juego de cartas para parejas que lo cambia todo.</p>
            <p>Desarrollado con ❤️ por Susbeer y RustyRoboz.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href={playStoreUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
                Descargar
              </a>
              <a href={newsletterUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
                Lista de correo
              </a>
              <Link href={privacyUrl} className="hover:text-foreground">
                Política de privacidad
              </Link>
              <Link href={termsUrl} className="hover:text-foreground">
                Términos de uso
              </Link>
            </div>
            <p>© 2026 Cartástrofe. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <div className="fixed right-6 top-6 hidden items-center gap-2 rounded-full border bg-background/80 px-3 py-2 text-xs text-muted-foreground backdrop-blur md:flex">
        <Smartphone className="h-3.5 w-3.5" />
        Android
        <Timer className="h-3.5 w-3.5" />
        24h
        <Shield className="h-3.5 w-3.5" />
        Offline
        <Sparkles className="h-3.5 w-3.5" />
        Sin anuncios
      </div>
    </main>
  );
}

