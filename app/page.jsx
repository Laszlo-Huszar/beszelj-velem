import Image from 'next/image';
// import heroImage from './images/hero.jpg';

import { Delius_Unicase } from 'next/font/google';
import Link from 'next/link';
import Container from './components/container';
import HeroHeader from './components/hero-header';
import HeroDescription from './components/hero-description';
import PrimaryLargeLink from './components/primary-large-link';
import PrimaryLargeOutlineLink from './components/primary-large-outline-link';

const deliusUnicase = Delius_Unicase({ subsets: ['latin'], weight: '400' });

import heroImage from '../public/csoport.jpg';
import jatszoterImage from '../public/kipp-kopp-jatszoter.jpg';
import teremImage from '../public/terem.jpg';
import PrimaryLink from './components/primary-link';

export default function Home() {
  return (
    <main>
      <div className="bg-gray-100 dark:bg-gray-900 pt-24 pb-24 h-screen lg:h-auto">
        <Container>
          <div className="lg:grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:mt-32 lg:col-span-7 z-10 max-w-prose lg:max-w-none mx-auto lg:pb-12">
              <HeroHeader>Mindent egy helyen, mindenből a legjobbat</HeroHeader>
              <HeroDescription className="mt-6">
                A hozzánk kerülő gyermekek kompetenciáit felmérve nagyobb
                hangsúlyt fektethetünk a konkrét fejlesztésekre, hogy magabiztos
                tudással, készségekkel bocsájtsuk iskolába.
              </HeroDescription>

              <div className="mt-12 not-prose flex gap-4">
                <PrimaryLargeLink href="#">Bemutatkozás</PrimaryLargeLink>
                <PrimaryLargeOutlineLink href="/beiratkozas">
                  Beiratokozás
                </PrimaryLargeOutlineLink>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-5 relative lg:rotate-1 max-w-prose mx-auto w-full">
              <div className="absolute inset-0 w-full aspect-square lg:w-[390px] lg:h-[700px] xl:w-[500px] 2xl:w-[600px] rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-50 blur-lg"></div>
              <div className="absolute w-full aspect-square lg:w-[390px] lg:h-[700px] xl:w-[500px] 2xl:w-[600px]">
                <div className="relative w-full h-full">
                  <Image
                    className="object-cover rounded-lg ring-1 ring-white backdrop-blur-lg"
                    src={heroImage}
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-white dark:bg-gray-950 pt-12 lg:pt-48">
        <Container>
          <div className="prose prose-xl prose-gray dark:prose-invert">
            <p>Az alapítvány két óvodát működtet.</p>
            <p>
              A Kipp-Kopp Óvodát, amely tipikus fejlődésű gyermekeket fogad. Az
              óvoda nevelési és képzési tematikája által kivételes és egyedi
              helyet foglal el a köznevelés palettáján.
            </p>
            <p>
              A Beszélj Velem Fejlesztő Óvoda, befogadó intézménye a sajátos
              nevelési igenyű gyerekeknek.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-white dark:bg-gray-950 pt-32 pb-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="rounded-lg overflow-hidden mx-auto bg-sky-200 dark:bg-sky-950 border border-gray-300 dark:border-gray-800">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image className="object-cover" src={jatszoterImage} fill />
              </div>
              <section className="p-6 prose prose-gray dark:prose-invert">
                <h3>Kipp-kopp Óvoda</h3>
                <p>
                  Kivételes és egyedi helyet foglal el a köznevelés palettáján.
                  Nagy az ellátási területünk, Budapest agglomerációjából is
                  fogadunk gyermekeket. Bejutásukat óvodásbusz segíti. Több
                  szakterület kiváló képviselői dolgoznak együtt annak
                  érdekében, hogy minden kisgyermek jól érezze magát az óvodában
                  és személyre szabott megsegítést, fejlesztést kapjon. A
                  team-ben dolgoznak óvodapedagógusok, logopédus,
                  gyógypedagógusok, pszichológus, terapeuták. Választható
                  szakköröket kínálunk az óvodai mindennapokba integrálva:
                  lovaglás, úszás – vízi torna, sakk, bélyegszakkör.
                </p>
                <div className="flex justify-end">
                  <Link href="/kipp-kopp">Tovább a Kipp-Kopp Óvodához</Link>
                </div>
              </section>
            </div>
            <div className="rounded-lg overflow-hidden mx-auto bg-pink-200 dark:bg-pink-950 border border-gray-300 dark:border-gray-800">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image className="object-cover" src={teremImage} fill />
              </div>

              <section className="flex flex-col p-6 prose prose-gray dark:prose-invert">
                <h3>Beszélj Velem Óvoda</h3>
                <p className="grow">
                  Közel 30 éve működik a Beszélj Velem Fejlesztő Óvoda. Befogadó
                  intézménye tipikus és sajátos nevelési igényű kicsi
                  gyerekeknek. Különleges és egyedi köznevelési intézmény a
                  családok szolgálatában. A legfiatalabb korosztály nevelését,
                  fejlesztését tűzte ki célul.
                </p>
                <div className="flex justify-end">
                  <Link href="/beszelj-velem">
                    Tovább a Beszélj Velem Óvodához
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </main>

    // <main className="min-h-screen">
    //   <div className="relative w-full h-[700px]">
    //     <Image className="object-cover" src={heroImage} fill />
    //     <div className="absolute inset-x-0 bottom-0 bg-orange-800/70">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //         <h1 className="text-6xl font-bold">Köszöntünk óvodáink oldalán!</h1>
    //         <p className="mt-6 text-xl font-light">
    //           Vezetőség mottója: Mindent egy helyen – Mindenből a legjobbat
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    //     <div className="prose prose-xl prose-stone prose-invert mx-auto">
    //       <p>Az alapítvány két óvodát működtet.</p>
    //       <p>
    //         A Kipp-Kopp Óvodát, amely <strong>tipikus fejlődésű</strong>{' '}
    //         gyermekeket fogad. Az óvoda nevelési és képzési tematikája által
    //         kivételes és egyedi helyet foglal el a köznevelés palettáján.
    //       </p>
    //       <p>
    //         A Beszélj Velem Fejlesztő Óvoda, befogadó intézménye a{' '}
    //         <strong>sajátos nevelési igenyű</strong> gyerekeknek.
    //       </p>
    //       <div className="flex justify-end">
    //         <Link href="#">További információ óvodáinkról</Link>
    //       </div>
    //     </div>

    //     <div className="mt-12 flex flex-col items-center lg:items-stretch lg:flex-row gap-12">
    //       <div className="flex-1 bg-sky-800 p-12 rounded-lg flex flex-col prose prose-stone prose-invert">
    //         <h2>Kipp-kopp Óvoda</h2>
    //         <p>
    //           Kivételes és egyedi helyet foglal el a köznevelés palettáján. Nagy
    //           az ellátási területünk, Budapest agglomerációjából is fogadunk
    //           gyermekeket. Bejutásukat óvodásbusz segíti. Több szakterület
    //           kiváló képviselői dolgoznak együtt annak érdekében, hogy minden
    //           kisgyermek jól érezze magát az óvodában és személyre szabott
    //           megsegítést, fejlesztést kapjon. A team-ben dolgoznak
    //           óvodapedagógusok, logopédus, gyógypedagógusok, pszichológus,
    //           terapeuták. Választható szakköröket kínálunk az óvodai
    //           mindennapokba integrálva: lovaglás, úszás – vízi torna, sakk,
    //           bélyegszakkör.
    //         </p>
    //         <Link className="mt-8 text-end" href="/kipp-kopp">
    //           Tovább a Kipp-kopp óvodához
    //         </Link>
    //       </div>
    //       <div className="flex-1 bg-pink-950 p-12 rounded-lg flex flex-col prose prose-stone prose-invert">
    //         <h2>Beszélj Velem Óvoda</h2>
    //         <p className="grow">
    //           Közel 30 éve működik a Beszélj Velem Fejlesztő Óvoda. Befogadó
    //           intézménye tipikus és sajátos nevelési igényű kicsi gyerekeknek.
    //           Különleges és egyedi köznevelési intézmény a családok
    //           szolgálatában. A legfiatalabb korosztály nevelését, fejlesztését
    //           tűzte ki célul.
    //         </p>
    //         <Link className="mt-8 text-end" href="/beszelj-velem">
    //           Tovább a Beszélj Velem óvodához
    //         </Link>
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
}
