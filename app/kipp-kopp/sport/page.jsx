import Image from 'next/image';
import szenzomotorosImage from '../../images/szenzomotoros.jpg';

export default function SportPage() {
  return (
    <article className="py-12 prose prose-stone prose-invert">
      <h2>Úszás</h2>
      <p>
        Intézményeinkben az egyik választható sporttevékenység az úszásoktatás,
        heti egy alkalommal, délelőtt, a napirendbe építve. Érd két jól
        felszerelt uszodájába kísérik el kollégáink a gyermekeket, ahol
        felkészült oktatók foglalkoznak velük, elősegítik a félénkebb gyermekek
        vízhez szoktatását biztonságos környezetben. Természetesen kísérő
        munkatársaink végig jelen vannak a tevékenység során, segítenek az
        öltözködésben. A nagytétényi intézménybe járó gyermekek az Aréna, míg az
        érdi gyermekeket a Gárdonyi tanuszoda fogadja.
      </p>

      <strong>Miért jó?</strong>

      <p>
        Az egyik legkedveltebb sport, gyermekek számára gyakran javasolt, nem
        ritkán az orvos ajánlásával. Az izmokra és csontokra gyakorolt hatása
        nagyon kiegyensúlyozott, az ízületek terhelése a „száraz földi”
        sportokhoz képest szinte elhanyagolható. Az izmok közül szinte mindegyik
        részt vesz a mozgásban, ezért nagyon egyenletes az igénybevétel.
        Kifejezetten ajánlott mellkas fejlődési rendellenességek, gerincferdülés
        esetén. Javítja a légzést, úszás közben nagy a szervezet oxigén igénye,
        így a fokozott légzés miatt nő a tüdő befogadóképessége.
      </p>

      <h2>Lovaglás</h2>
      <p>
        Választható mozgáslehetőség, mindkét intézményünkben a lovaglás. A 3-6
        éves korosztály számára általában vonzó tevékenység, hiszen a lovakat
        mindenki szereti. Számukra hetente egyszer, 15-20 perces délelőtti, a
        napirendbe beépített lovas torna foglalkozás keretében van lehetőség
        közel kerülni ezekhez a nemes állatokhoz, részt venni a lovak körüli
        teendőkben, természetesen az elvárható biztonsági intézkedések mellett,
        kollégáink felügyelete alatt. Ez a gyerekeknek maximálisan kielégítő és
        még nem megterhelő feladat. Elérhető a nagytétényi intézménybe járó
        gyermekeknek Sóskúton, a Habsburg birtokon.
      </p>

      <p>
        <q>
          A ló küllemében van valami, ami jó az ember belsőjének. (Sir Winston
          Churchill)
        </q>
      </p>

      <strong>Miért jó?</strong>

      <ul>
        <li>
          A lovaglás fejleszti az egyensúlyérzéket és a koordinációt, a
          figyelmet
        </li>
        <li>Kiváló testmozgás, hiszen nagyon sok izmot megmozgat.</li>
        <li>Megnyugtatja az elmét, stressz oldó hatású.</li>
        <li>
          Érzelmi, erkölcsi hatásai is nagyon pozitívak, kapcsolat alakul ló és
          lovasa között. A gyermek megtanulja az állat, a természet tiszteletét.
        </li>
      </ul>

      <h2>Szenzomotoros integrációs mozgásfejlesztés</h2>

      <p>
        Sokféle csatornán, sokféle inger éri egyszerre testünket, ezek felfogása
        és összerendezése sokszor nehéz feladatot jelent. Mind az egyes érzékek
        működésében, mind az érzékletek összerendezésében felléphetnek
        nehézségek – a szenzoros integráció zavara – mely az idegrendszer
        éretlenségének következménye.{' '}
      </p>

      <Image
        className="object-cover rounded-lg"
        src={szenzomotorosImage}
        alt="Szenzomotoros integrációs mozgásfejlesztés"
        priority
      />

      <p>
        A terápia elsősorban a legősibb érzékek, a tapintás- és az
        egyensúlyérzék ingerlésén keresztül juttatja el a gyereket egy magasabb
        idegrendszeri integrációs szintre. A sokféle eszköz, a hinták, labdák,
        lejtők, kötelek, gyerek stb. fantáziadús használata arra szolgál, hogy
        javítsa az agyféltekék közötti kapcsolatot, ezáltal segítve a
        tanulási-megismerési folyamat működését.
      </p>

      <strong>Kiknek ajánljuk?</strong>

      <ul>
        <li>Figyelem- és tanulási zavarokkal küzdő gyermekeknek</li>
        <li>Nehezen beszélő gyermekeknek</li>
        <li>Finom kézmozgásokban – például írásban – ügyetlen gyerekeknek</li>
        <li>Társas kapcsolataikban sikertelen gyerekeknek</li>
        <li>Koraszülötteknek</li>
        <li>Hiperaktív vagy éppen túlságosan passzív gyermekeknek</li>
      </ul>
    </article>
  );
}
