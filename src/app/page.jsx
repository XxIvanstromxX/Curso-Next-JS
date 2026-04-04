import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-cyan-50 via-sky-50 to-white text-slate-800">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-cyan-500" />
          <p className="text-lg font-semibold tracking-tight text-slate-900">
            Client Flow
          </p>
        </div>

        <nav className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-cyan-100"
          >
            Iniciar sesion
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
          >
            Ver dashboard
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-12 pt-6 md:grid-cols-2 md:px-10 md:pt-14">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Organizacion de clientes sin caos
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Gestiona tu equipo y tus clientes en un mismo flujo.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            Centraliza oportunidades, proyectos y tareas con una experiencia
            rapida, limpia y pensada para equipos que quieren ejecutar mejor.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="rounded-2xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-700"
            >
              Empezar gratis
            </Link>
            <Link
              href="/dashboard"
              className="rounded-2xl border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              Explorar demo
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-xl shadow-cyan-100/60">
          <div className="grid grid-cols-2 gap-4">
            <article className="rounded-2xl bg-cyan-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                Conversion
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">+28%</p>
            </article>
            <article className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Tareas al dia
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">91%</p>
            </article>
            <article className="rounded-2xl bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Tiempo ahorrado
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">8h/sem</p>
            </article>
            <article className="rounded-2xl bg-sky-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                Equipos activos
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">+320</p>
            </article>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-900 p-5 text-slate-100">
            <p className="text-sm leading-relaxed text-slate-200">
              &ldquo;Client Flow nos dio visibilidad total del pipeline y ahora
              el equipo prioriza mejor cada semana.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-white">
              Ana, Head of Operations
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-100 bg-white/70">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-10 md:grid-cols-3 md:px-10">
          <article className="rounded-2xl border border-slate-100 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Pipeline claro
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Visualiza etapas, bloqueos y proximas acciones sin perder
              contexto.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-100 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Colaboracion simple
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Asigna responsables, comenta avances y mantén al equipo alineado.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-100 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Decisiones rapidas
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Metricas utiles para priorizar lo que realmente impacta al
              negocio.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
