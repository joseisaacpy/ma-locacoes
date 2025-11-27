export default function Footer() {
  return (
    <footer className="hidden md:flex flex-col items-center justify-center gap-4 py-8 text-sm text-center bg-blue-default text-white font-bold">
      <p>
        © {new Date().getFullYear()} MA Locações. Todos os direitos reservados.
      </p>
    </footer>
  );
}
