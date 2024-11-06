import Image from "next/image";
import type { Champion } from "@/types/champion";

export async function fetchChampions(): Promise<Champion[]> {
  try {
    const response = await fetch('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json');
    const data = await response.json() as Champion[];
  
    return data;
  } catch (error) {
    console.error('Error fetching champion data:', error);
    return [];
  }
}

export default async function Home() {
  const champs = await fetchChampions();
  
  return (
    <main className="flex flex-col">

      {/* Side banner */}
      <div className="flex w-full justify-between ">
        <div className="w-1/2 bg-sky-600 py-5"><p className="uppercase text-white text-2xl ml-20 font-bold">Blue Side</p></div>
        <div className="w-1/2 bg-rose-600 py-5"><p className="uppercase text-white text-2xl text-right mr-20 font-bold">Red Side</p></div>
      </div>

      {/* Bans */}
      <section className="flex justify-between p-4">

      {/* Blue Side Bans */}
      <div className="flex gap-2">
        <div className="border border-black p-8 px-10 rounded-md">1</div>
        <div className="border border-black p-8 px-10 rounded-md">2</div>
        <div className="border border-black p-8 px-10 rounded-md mr-7">3</div>
        <div className="border border-black p-8 px-10 rounded-md">4</div>
        <div className="border border-black p-8 px-10 rounded-md">5</div>
      </div>

      {/* Red Side Bans */}
      <div className="flex gap-2 flex-row-reverse">
        <div className="border border-black p-8 px-10 rounded-md">1</div>
        <div className="border border-black p-8 px-10 rounded-md">2</div>
        <div className="border border-black p-8 px-10 rounded-md mr-7">3</div>
        <div className="border border-black p-8 px-10 rounded-md">4</div>
        <div className="border border-black p-8 px-10 rounded-md">5</div>
      </div>

      </section>

      {/* Picks */}
      <section className="flex justify-between p-4">

      {/* Blue Side Picks */}
      <div className="flex gap-3 flex-col ml-5">
        <div className="flex items-center gap-5"><p className="text-sky-600 text-2xl font-bold w-10">B1</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
        <div className="flex items-center gap-5"><p className="text-sky-600 text-2xl font-bold w-10">B2</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
        <div className="flex items-center gap-5"><p className="text-sky-600 text-2xl font-bold w-10">B3</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
        <div className="flex items-center gap-5"><p className="text-sky-600 text-2xl font-bold w-10">B4</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
        <div className="flex items-center gap-5"><p className="text-sky-600 text-2xl font-bold w-10">B5</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
      </div>

       {/* Champ Select */}
       <section>
        <div className="flex flex-wrap bg-gray-300 max-w-[60rem] max-h-[32rem] px-2 overflow-y-auto">
          {champs.slice(1).map((champ: any, index: number) => (
            <div key={index} className="flex flex-col items-center p-2">
              <div className="w-14 h-14 overflow-hidden">
                <Image 
                  width={80} 
                  height={80} 
                  src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.id}.png`}
                  alt={champ.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Red Side Picks */}
      <div className="flex gap-3 flex-col mr-5">
        <div className="flex flex-row-reverse items-center gap-5"><p className="text-rose-600 text-2xl font-bold w-10">R1</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
        <div className="flex flex-row-reverse items-center gap-5"><p className="text-rose-600 text-2xl font-bold w-10">R2</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
        <div className="flex flex-row-reverse items-center gap-5"><p className="text-rose-600 text-2xl font-bold w-10">R3</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
        <div className="flex flex-row-reverse items-center gap-5"><p className="text-rose-600 text-2xl font-bold w-10">R4</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
        <div className="flex flex-row-reverse items-center gap-5"><p className="text-rose-600 text-2xl font-bold w-10">R5</p><div className="border border-black p-8 rounded-md w-24 h-24"></div></div>
      </div>
      </section>
    </main>
  );
}
