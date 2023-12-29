import { ArrowDownCircle, ShowerHead, Tv, Wifi } from 'lucide-react';
import Image from 'next/image';
import { Button } from './components/ui/button';

const rooms = [
  {
    id: 1,
    name: 'Block A',
    price: 'Ksh 10,000',
    available: true,
  },
  {
    id: 2,
    name: 'Block B',
    price: 'Ksh 8,000',
    available: true,
  },
  {
    id: 3,
    name: 'Block C',
    price: 'Ksh 6,000',
    available: true,
  },
  {
    id: 4,
    name: 'Block D',
    price: 'Ksh 4,000',
    available: true,
  },
  {
    id: 5,
    name: 'Block E',
    price: 'Ksh 2,000',
    available: true,
  },
];

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

      <section className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-12 px-32 py-28">
        {rooms.map((room) => (
          <article className="flex flex-col shadow-lg" key={room.id}>
            {/* Image container with aspect ratio */}
            <div className="aspect-w-16 aspect-h-9 w-full relative">
              <Image
                src="/room_2.jpeg"
                alt="Room"
                layout="responsive"
                width={160} // these should match the aspect ratio you want
                height={90}
                objectFit="cover"
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-between flex-grow">
              {/* Middle section */}
              <div className="flex flex-col gap-3 px-4 py-3">
                <h2 className="text-2xl">{room.name}</h2>
                <p className="text-xl">{room.price}</p>
              </div>

              {/* Bottom section */}
              <div className="flex flex-row justify-between items-center px-4 py-3 border-t border-t-[#EE7536]">
                <div className="flex flex-row space-x-2">
                  <Tv className="text-[#EE7536]" height={32} />
                  <ShowerHead className="text-[#EE7536]" height={32} />
                  <Wifi className="text-[#EE7536]" height={32} />
                </div>

                <Button>Book now</Button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
