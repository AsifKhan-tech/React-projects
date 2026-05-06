export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md rounded-[32px] shadow-sm py-10 px-6 text-center mb-8 border border-white">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3 flex items-center justify-center gap-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
          Jokes Viewer
        </span>
      </h1>
      <p className="text-gray-500 font-medium tracking-wide text-lg">
        Your daily dose of curated humor and wit.
      </p>
    </header>
  );
}
