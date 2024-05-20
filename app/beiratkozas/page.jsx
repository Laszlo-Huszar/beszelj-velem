import Image from 'next/image';
import drKoppMiklosnePhoto from '../images/drkoppmiklosne.jpg';

export default function BeiratkozasPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <article className="prose prose-stone prose-invert">
        <h2>Beiratkozás</h2>
        <h3>Kedves érdeklődő szülők, és nagyszülők</h3>
        <p>
          Fontosnak tartom, hogy óvodánk, fejlesztő, családias biztonságot
          jelentsen, minden beiratkozó gyermeknek. Mindent egy helyen –
          mindenből a legjobbat.
        </p>
        <p>
          Dr. Kopp Miklósné vagyok A <strong>Beszélj Velem Alapítvány</strong>{' '}
          kuratóriumi elnök. Több, mint harminc éve pedagógus pályán dolgozom,
          gyógypedagógusként, logopédusként. Amikor telefonálnak, vagy levelet
          írnak, én leszek az, aki válaszol a kérdéseikre szóban vagy írásban.
        </p>
        <p>
          Intézményünkbe a beiratkozás folyamatos, a szabad férőhelyekre év
          közben is lehet jelentkezni.
        </p>
        <p>
          Az érdeklődőket előre egyeztetett időpontban egy személyes találkozó
          keretében szoktam fogadni leendő óvodás gyermekükkel. Ekkor válaszolok
          a feltett kérdéseikre, ismerkedek meg a gyermekekkel.
        </p>
        <p>
          Kérem, hogy időpont egyeztetés érdekében vegyék fel velem a
          kapcsolatot elérhetőségeim valamelyikén.
        </p>
        <div className="mt-16 flex flex-col sm:flex-row gap-8">
          <div className="shrink-0 relative w-[250px] h-[350px] not-prose">
            <Image className="object-cover" src={drKoppMiklosnePhoto} fill />
          </div>
          <address>
            <strong>Dr. Kopp Miklósné</strong>
            <br />
            <span className="inline-block mt-4">Telefon:</span>
            <br />
            <a href="tel:+36309705085">+36 30 970 5085</a>
            <br />
            <a href="tel:+3612073938">+36 1 207 3938</a>
            <br />
            <span className="inline-block mt-4">Email:</span>
            <br />
            <a href="mailto:igazgato.kippkopp@beszeljvelem.hu">
              igazgato.kippkopp@beszeljvelem.hu
            </a>
            <br />
            <a href="mailto:kopp.miklosne@beszeljvelem.hu">
              kopp.miklosne@beszeljvelem.hu
            </a>
            <br />
            <span className="inline-block mt-4">Helyszín:</span>
            <br />
            Budapest, 1225 Nagytétényi út 67.
          </address>
        </div>
      </article>
    </main>
  );
}
