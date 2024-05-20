import Image from 'next/image';
import heroImage from './images/hero.jpg';

import { Delius_Unicase } from 'next/font/google';
import Link from 'next/link';

const deliusUnicase = Delius_Unicase({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative w-full h-[700px]">
        <Image className="object-cover" src={heroImage} fill />
        <div className="absolute inset-x-0 bottom-0 bg-orange-800/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-6xl font-bold">Köszöntünk óvodáink oldalán!</h1>
            <p className="mt-6 text-xl font-light">
              Vezetőség mottója: Mindent egy helyen – Mindenből a legjobbat
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-xl prose-stone prose-invert mx-auto">
          <p>Az alapítvány két óvodát működtet.</p>
          <p>
            A Kipp-Kopp Óvodát, amely <strong>tipikus fejlődésű</strong>{' '}
            gyermekeket fogad. Az óvoda nevelési és képzési tematikája által
            kivételes és egyedi helyet foglal el a köznevelés palettáján.
          </p>
          <p>
            A Beszélj Velem Fejlesztő Óvoda, befogadó intézménye a{' '}
            <strong>sajátos nevelési igenyű</strong> gyerekeknek.
          </p>
          <div className="flex justify-end">
            <Link href="#">További információ óvodáinkról</Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center lg:items-stretch lg:flex-row gap-12">
          <div className="flex-1 bg-sky-800 p-12 rounded-lg flex flex-col prose prose-stone prose-invert">
            <h2>Kipp-kopp Óvoda</h2>
            <p>
              Kivételes és egyedi helyet foglal el a köznevelés palettáján. Nagy
              az ellátási területünk, Budapest agglomerációjából is fogadunk
              gyermekeket. Bejutásukat óvodásbusz segíti. Több szakterület
              kiváló képviselői dolgoznak együtt annak érdekében, hogy minden
              kisgyermek jól érezze magát az óvodában és személyre szabott
              megsegítést, fejlesztést kapjon. A team-ben dolgoznak
              óvodapedagógusok, logopédus, gyógypedagógusok, pszichológus,
              terapeuták. Választható szakköröket kínálunk az óvodai
              mindennapokba integrálva: lovaglás, úszás – vízi torna, sakk,
              bélyegszakkör.
            </p>
            <Link className="mt-8 text-end" href="/kipp-kopp">
              Tovább a Kipp-kopp óvodához
            </Link>
          </div>
          <div className="flex-1 bg-pink-950 p-12 rounded-lg flex flex-col prose prose-stone prose-invert">
            <h2>Beszélj Velem Óvoda</h2>
            <p className="grow">
              Közel 30 éve működik a Beszélj Velem Fejlesztő Óvoda. Befogadó
              intézménye tipikus és sajátos nevelési igényű kicsi gyerekeknek.
              Különleges és egyedi köznevelési intézmény a családok
              szolgálatában. A legfiatalabb korosztály nevelését, fejlesztését
              tűzte ki célul.
            </p>
            <Link className="mt-8 text-end" href="/beszelj-velem">
              Tovább a Beszélj Velem óvodához
            </Link>
          </div>
        </div>
      </section>
    </main>
    // <main className="relative h-screen -z-10">
    //   <div className="absolute top-0 inset-0">
    //     <Image className="object-cover" src={heroImage} alt="" fill />
    //   </div>
    //   <h1
    //     className={`absolute bottom-32 text-stone-600 dark:text-slate-300 text-center text-4xl font-semibold bg-black/80 p-4 ${deliusUnicase.className}`}
    //   >
    //     KÖSZÖNTÜNK ÓVODÁINK OLDALÁN!
    //   </h1>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum harum,
    //     ipsum dolor debitis provident molestias repellat voluptatem eaque
    //     pariatur corrupti porro quibusdam sed. Officiis dignissimos minus omnis
    //     quo, reprehenderit aliquid!
    //   </p>
    // </main>
  );
}
