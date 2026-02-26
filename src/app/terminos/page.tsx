import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Uso | Cartástrofe",
  description: "Términos de uso de Cartástrofe.",
};

export default function TermsPage() {
  return (
    <main className="container py-12 md:py-16">
      <article className="mx-auto max-w-4xl space-y-10 rounded-2xl border bg-card p-6 text-sm leading-7 text-card-foreground md:p-10 md:text-base">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Términos de Uso de Cartástrofe</h1>
          <p className="text-muted-foreground">Última actualización: 26 de febrero de 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">1. Aceptación de los Términos</h2>
          <p>
            Al descargar, instalar o utilizar la aplicación <strong>Cartástrofe</strong> (&ldquo;la Aplicación&rdquo;), aceptas quedar vinculado por estos Términos de Uso (&ldquo;Términos&rdquo;). Si no estás de acuerdo con alguno de estos Términos, no debes utilizar la Aplicación.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">2. Descripción del Servicio</h2>
          <p>Cartástrofe es una aplicación móvil gratuita para Android que proporciona un juego de cartas digital diseñado para ser jugado en pareja. La Aplicación:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Genera barajas aleatorias de 12 cartas a partir de un catálogo de 40 cartas posibles.</li>
            <li>Permite a los usuarios usar cartas dentro de un periodo de 24 horas.</li>
            <li>Almacena el progreso de la partida localmente en el dispositivo del usuario.</li>
            <li>Está disponible en español e inglés.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">3. Uso permitido</h2>
          <p>Te concedemos una licencia limitada, no exclusiva, no transferible y revocable para usar la Aplicación con fines personales y de entretenimiento, de acuerdo con estos Términos.</p>
          <p className="font-semibold">Te comprometes a:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Utilizar la Aplicación de forma responsable y respetuosa con tu pareja u otras personas.</li>
            <li>No utilizar la Aplicación para fines ilegales o no autorizados.</li>
            <li>No intentar descompilar, realizar ingeniería inversa ni modificar el código fuente de la Aplicación, salvo en los casos expresamente permitidos por la ley.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">4. Gratuidad</h2>
          <p>
            La Aplicación es completamente gratuita. No existen compras dentro de la aplicación (in-app purchases), suscripciones de pago ni funciones premium de pago. Nos reservamos el derecho de modificar este modelo en el futuro, en cuyo caso se te informará previamente.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">5. Propiedad intelectual</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5.1. Contenido de la Aplicación</h3>
            <p>
              Todos los elementos de la Aplicación, incluyendo pero no limitado a: diseño, gráficos, ilustraciones de cartas, tipografías, logotipos, textos y código fuente, son propiedad de los desarrolladores de Cartástrofe o se utilizan con la debida autorización, y están protegidos por las leyes de propiedad intelectual e industrial aplicables.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5.2. Marca</h3>
            <p>&ldquo;Cartástrofe&rdquo;, su logotipo y elementos visuales asociados son marcas de sus creadores. No está permitido el uso de estas marcas sin autorización previa por escrito.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5.3. Restricciones</h3>
            <p>No está permitido:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Copiar, modificar o distribuir el contenido de la Aplicación sin autorización.</li>
              <li>Utilizar las ilustraciones de las cartas fuera del contexto de la Aplicación.</li>
              <li>Crear obras derivadas basadas en la Aplicación sin autorización previa.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">6. Disponibilidad y funcionamiento</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6.1. Disponibilidad</h3>
            <p>La Aplicación se ofrece &ldquo;tal cual&rdquo; y &ldquo;según disponibilidad&rdquo;. No garantizamos que la Aplicación esté disponible de forma ininterrumpida, libre de errores o compatible con todos los dispositivos Android.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6.2. Actualizaciones</h3>
            <p>Podemos publicar actualizaciones de la Aplicación en cualquier momento. Algunas actualizaciones podrían modificar funcionalidades existentes o añadir nuevas. Te recomendamos mantener la Aplicación actualizada.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6.3. Interrupción del servicio</h3>
            <p>Nos reservamos el derecho de dejar de ofrecer la Aplicación, modificarla o eliminar funcionalidades en cualquier momento y sin previo aviso.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">7. Exención de responsabilidad</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">7.1. Uso bajo tu responsabilidad</h3>
            <p>
              El uso de la Aplicación y de las cartas del juego se realiza bajo tu exclusiva responsabilidad. Las acciones o retos que aparecen en las cartas son sugerencias lúdicas y deben realizarse siempre con el consentimiento mutuo de ambas partes. <strong>Nunca utilices una carta como excusa para hacer algo que tu pareja no desee.</strong>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">7.2. Limitación de responsabilidad</h3>
            <p>En la máxima medida permitida por la ley, los desarrolladores de Cartástrofe no serán responsables de:</p>
            <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Daños directos, indirectos, incidentales, consecuentes o especiales derivados del uso de la Aplicación.</li>
              <li>Pérdida de datos almacenados en el dispositivo.</li>
              <li>Cualquier disputa entre los jugadores surgida del uso de las cartas.</li>
              <li>Mal funcionamiento derivado de la incompatibilidad con determinados dispositivos o versiones de Android.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">8. Privacidad</h2>
          <p>
            El tratamiento de datos se rige por nuestra <Link href="/privacidad" className="underline hover:text-foreground">Política de Privacidad</Link>, que forma parte integrante de estos Términos. Te recomendamos leerla detenidamente.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">9. Modificaciones de los Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigor en el momento de su publicación. El uso continuado de la Aplicación tras la publicación de los Términos modificados constituye tu aceptación de los mismos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">10. Legislación aplicable y jurisdicción</h2>
          <p>
            Estos Términos se rigen por la legislación española. Para la resolución de cualquier controversia derivada de estos Términos, ambas partes se someten a la jurisdicción de los juzgados y tribunales de la ciudad de domicilio del desarrollador principal, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">11. Contacto</h2>
          <p>Si tienes alguna pregunta sobre estos Términos de Uso, puedes contactarnos en:</p>
          <p className="text-muted-foreground">
            📧 Email: info@cartastrofe.com
            <br />
            🌐 Web: https://cartastrofe.com
          </p>
        </section>

        <footer className="border-t pt-6 text-muted-foreground">
          © 2026 Cartástrofe. Todos los derechos reservados. Desarrollado por Susbeer y RustyRoboz.
          <div className="mt-2">
            <Link href="/" className="underline hover:text-foreground">
              Volver a la landing
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
