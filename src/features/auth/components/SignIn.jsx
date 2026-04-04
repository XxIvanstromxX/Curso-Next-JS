import { signIn } from '@/lib/auth';

export default function SignIn() {
  return (
    <form
      className="w-full"
      action={async () => {
        'use server';
        await signIn('github', { redirectTo: '/dashboard' });
      }}
    >
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/25 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current text-white/90 transition-colors duration-300 group-hover:text-cyan-200"
        >
          <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.8c-2.95.64-3.57-1.24-3.57-1.24-.48-1.2-1.17-1.52-1.17-1.52-.96-.65.07-.64.07-.64 1.06.08 1.62 1.08 1.62 1.08.94 1.61 2.47 1.14 3.07.87.1-.67.37-1.13.67-1.39-2.35-.27-4.82-1.17-4.82-5.23 0-1.16.41-2.12 1.08-2.87-.11-.27-.47-1.37.1-2.86 0 0 .88-.28 2.89 1.1a10.02 10.02 0 0 1 5.26 0c2-1.38 2.88-1.1 2.88-1.1.58 1.49.22 2.59.11 2.86.67.75 1.07 1.71 1.07 2.87 0 4.07-2.48 4.95-4.85 5.21.38.33.72.97.72 1.96v2.9c0 .28.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
        </svg>
        Accede con GitHub
      </button>
    </form>
  );
}
