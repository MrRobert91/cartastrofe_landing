import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Cartástrofe",
  description: "Política de Privacidad de Cartástrofe.",
};

export default function PrivacyPage() {
  return (
    <main className="container py-12 md:py-16">
      <article className="mx-auto max-w-4xl space-y-10 rounded-2xl border bg-card p-6 text-sm leading-7 text-card-foreground md:p-10 md:text-base">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Política de Privacidad de Cartástrofe</h1>
          <p className="text-muted-foreground">Última actualización: 26 de febrero de 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">1. Introducción</h2>
          <p>
            Bienvenido/a a <strong>Cartástrofe</strong> (&ldquo;la Aplicación&rdquo;), desarrollada por Susbeer y RustyRoboz (&ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo;). Esta Política de Privacidad describe cómo tratamos la información cuando utilizas nuestra aplicación móvil.
          </p>
          <p>
            Nos tomamos tu privacidad muy en serio. De hecho, esta puede ser la política de privacidad más corta que hayas leído, porque <strong>no recogemos prácticamente ningún dato tuyo</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">2. Información que recopilamos</h2>
          <h3 className="text-lg font-semibold">2.1. Datos personales</h3>
          <p>
            <strong>No recopilamos ningún dato personal.</strong> No solicitamos ni almacenamos:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Nombre o apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Ubicación geográfica</li>
            <li>Fotografías o archivos multimedia</li>
            <li>Datos de pago o financieros</li>
            <li>Identificadores de dispositivo con fines de seguimiento</li>
          </ul>

          <h3 className="text-lg font-semibold">2.2. Datos de uso de la aplicación</h3>
          <p>La aplicación almacena los siguientes datos <strong>exclusivamente en tu dispositivo</strong> (almacenamiento local mediante SharedPreferences):</p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Las cartas que componen tu baraja actual.</li>
            <li>El estado de cada carta (usada o no usada).</li>
            <li>La fecha y hora en que se usó cada carta.</li>
            <li>La fecha de creación de la baraja actual.</li>
            <li>Tu preferencia de idioma (Español o Inglés).</li>
          </ul>
          <p>
            <strong>Estos datos nunca salen de tu dispositivo.</strong> No se transmiten a ningún servidor, servicio en la nube ni a terceros.
          </p>

          <h3 className="text-lg font-semibold">2.3. Datos de terceros</h3>
          <p>La aplicación <strong>no integra</strong> servicios de terceros que recopilen datos, tales como:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Herramientas de analítica (Google Analytics, Firebase Analytics, etc.)</li>
            <li>Redes publicitarias (AdMob, Facebook Ads, etc.)</li>
            <li>Servicios de autenticación (Google Sign-In, Facebook Login, etc.)</li>
            <li>Herramientas de rastreo o seguimiento de usuarios</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">3. Cómo utilizamos la información</h2>
          <p>Los datos almacenados localmente en tu dispositivo se utilizan exclusivamente para:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Mantener el estado actual de tu partida (baraja, cartas usadas).</li>
            <li>Calcular el tiempo de expiración de la baraja.</li>
            <li>Mostrar la interfaz en el idioma que hayas seleccionado.</li>
          </ul>
          <p>No utilizamos estos datos para ningún otro fin.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">4. Compartición de datos</h2>
          <p>
            <strong>No compartimos ningún dato con terceros.</strong> Dado que no recopilamos datos personales ni los almacenamos fuera de tu dispositivo, no existe información que compartir, vender, alquilar ni transferir a ninguna entidad.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">5. Almacenamiento y seguridad</h2>
          <p>
            Todos los datos de la aplicación se almacenan localmente en tu dispositivo Android, utilizando el mecanismo estándar de almacenamiento de preferencias del sistema operativo (SharedPreferences). La seguridad de estos datos depende de las medidas de seguridad propias de tu dispositivo (bloqueo de pantalla, cifrado del dispositivo, etc.).
          </p>
          <p>Al desinstalar la aplicación, todos los datos almacenados localmente se eliminan automáticamente.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">6. Derechos del usuario</h2>
          <p>
            Dado que no recopilamos datos personales, los derechos habituales de acceso, rectificación, eliminación y portabilidad de datos se ejercen directamente sobre tu dispositivo:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>
              <strong>Acceso y rectificación:</strong> Puedes ver el estado de tus cartas y baraja directamente en la aplicación.
            </li>
            <li>
              <strong>Eliminación:</strong> Puedes borrar todos los datos desinstalando la aplicación o borrando los datos de la app desde los ajustes de tu dispositivo Android (Ajustes &gt; Aplicaciones &gt; Cartástrofe &gt; Almacenamiento &gt; Borrar datos).
            </li>
            <li>
              <strong>Portabilidad:</strong> No aplica, ya que no almacenamos datos en servidores externos.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">7. Menores de edad</h2>
          <p>
            Cartástrofe no está dirigida a menores de 13 años. No recopilamos conscientemente información de menores de 13 años. Si eres padre o tutor y crees que tu hijo/a menor de 13 años ha proporcionado algún dato personal (aunque la app no lo solicite), ponte en contacto con nosotros.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">8. Cambios en esta Política de Privacidad</h2>
          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página con la fecha de actualización correspondiente. Te recomendamos revisar esta política periódicamente.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">9. Legislación aplicable</h2>
          <p>
            Esta Política de Privacidad se rige por el <strong>Reglamento General de Protección de Datos (RGPD)</strong> de la Unión Europea y la <strong>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</strong> de España.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold">10. Contacto</h2>
          <p>Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad, puedes ponerte en contacto con nosotros en:</p>
          <p className="text-muted-foreground">
            📧 Email: info@cartastrofe.com
            <br />
            🌐 Web: https://cartastrofe.com
          </p>
        </section>

        <div className="border-t pt-6 text-muted-foreground">
          <Link href="/" className="underline hover:text-foreground">
            Volver a la landing
          </Link>
        </div>
      </article>
    </main>
  );
}
