import SignIn from '@/features/auth/components/SignIn';

export default function Login() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">
            Bienvenido a Client Flow
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-800 sm:text-5xl">
            Inicia sesion
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-500/90">
            Accede con GitHub para gestionar clientes, proyectos y el progreso
            de tu equipo en un solo lugar.
          </p>

          <div className="mt-8">
            <SignIn />
          </div>
        </div>
      </section>
    </main>
  );
}
