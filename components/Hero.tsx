export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(90vh-20px)] md:min-h-screen w-full bg-[url('/assets/images/hero.jpg')] bg-cover bg-no-repeat bg-center"
    >
      {/* overlay */}
      <div className="absolute bg-linear-to-b from-black/80 via-black/40 to-black/70 inset-0"></div>
      {/* content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 gap-4 text-center text-white">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            M.A Locações e Serviços
          </h1>
          <p className="text-lg max-w-3xl">
            Tudo que você precisa para sua obra!
          </p>
        </div>
      </div>
    </section>
  );
}
