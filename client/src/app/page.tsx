import { ArrowDownCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <section
        className="relative w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: 'url(/room.jpeg)',
          height: 'calc(100vh - 7rem)', // 7rem is the height of the header
        }}
      >
        {/* BG Overlay */}
        <div className="absolute inset-0 bg-[#7C6A46] bg-opacity-50"></div>

        <article className="flex flex-col gap-12 w-1/2 text-center items-center text-white z-30">
          <h1 className="text-6xl font-bold">Rooms and Suites</h1>
          <p className="text-xl">
            The elegant luxury bedrooms in this gallery showcase custom interior
            designs & decorating ideas. View pictures and find your perfect
            luxury bedroom design.
          </p>
          <ArrowDownCircle size={84} className="animate-bounce" />
        </article>
      </section>
    </main>
  );
}
