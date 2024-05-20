import PrimaryButton from '../components/PrimaryButton';

export default function NyariTaborPage() {
  const createNyaritabor = async formData => {
    'use server';

    const rawFormData = {
      telefon: formData.get('telefon'),
    };

    console.log(rawFormData.telefon);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-stone prose-invert">
        <h2>Nyári tábor 2024</h2>
        <p>Nyári Tematikus Táboraink július 01-tól augusztus 16-ig</p>
        <p>2,5 éves kortól 7 éves korig</p>
        <p>A tábor helyszíne:</p>
        <address>
          1225. Budapest, Nagytétényi út 67. <br />
          Beszélj Velem Fejlesztőközpont, Kipp-Kopp Óvoda
        </address>

        <p>
          <strong>Kedvezmény!</strong> Május 31-i befizetés esetében 59 000 Ft
          programokkal és étkezéssel együtt/ hét (külsős gyermekeknek) testvér
          kedvezmény van, akár több turnusra/hétre is jelentkezhetnek. Június
          01-je utáni befizetés esetén 65 000 Ft/ hét.
        </p>

        <p>A kedvezmények miatt érdeklődjenek!</p>
        <address>
          Mobil:
          <br />
          <a href="tel:+36309705085">+36 30 970 5085</a>
          <br />
          <a href="tel:+36302292410">+36 30 229 2410</a>
          <br />
          Telefon:
          <br />
          <a href="tel:+3612073938">+36 1 207 3938</a>
          <br />
        </address>

        <hr />

        <h3>Regisztráció Ovis Nyári Tematikus Táborokra</h3>

        <form
          className="space-y-8 border border-stone-700 rounded-lg p-6"
          action={createNyaritabor}
        >
          <div>
            <label
              className="block font-medium text-sm text-stone-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 border-stone-700 bg-stone-900 text-stone-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md shadow-sm w-full"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <fieldset>
            <legend>
              Melyik táborra jelentkezik? Jelölje ha több turnusra/hétre
              jelentkeznek.
            </legend>
            <div className="flex flex-col items-start gap-2">
              <label
                className="mt-2 flex items-center gap-2"
                htmlFor="lovas-tabor"
              >
                <input
                  className="rounded bg-stone-900 border-stone-700 text-indigo-600 shadow-sm focus:ring-indigo-600 focus:ring-offset-stone-800"
                  type="checkbox"
                  name="lovas-tabor"
                  id="lovas-tabor"
                />
                <span>Július 01-05. Lovas tábor</span>
              </label>
              <label
                className="flex items-center gap-2"
                htmlFor="nemet-nyelvi-tabor"
              >
                <input
                  className="rounded bg-stone-900 border-stone-700 text-indigo-600 shadow-sm focus:ring-indigo-600 focus:ring-offset-stone-800"
                  type="checkbox"
                  name="nemet-nyelvi-tabor"
                  id="nemet-nyelvi-tabor"
                />
                <span>Július 08-12. Német nyelvi tábor</span>
              </label>
              <label className="flex items-center gap-2" htmlFor="zenei-tabor">
                <input
                  className="rounded bg-stone-900 border-stone-700 text-indigo-600 shadow-sm focus:ring-indigo-600 focus:ring-offset-stone-800"
                  type="checkbox"
                  name="zenei-tabor"
                  id="zenei-tabor"
                />
                <span>Július 15-19. Zenei tábor</span>
              </label>
              <label
                className="flex items-center gap-2"
                htmlFor="kertesz-tabor"
              >
                <input
                  className="rounded bg-stone-900 border-stone-700 text-indigo-600 shadow-sm focus:ring-indigo-600 focus:ring-offset-stone-800"
                  type="checkbox"
                  name="kertesz-tabor"
                  id="kertesz-tabor"
                />
                <span>Július 22-26. Kertész tábor</span>
              </label>
              <label className="flex items-center gap-2" htmlFor="foci-tabor">
                <input
                  className="rounded bg-stone-900 border-stone-700 text-indigo-600 shadow-sm focus:ring-indigo-600 focus:ring-offset-stone-800"
                  type="checkbox"
                  name="foci-tabor"
                  id="foci-tabor"
                />
                <span>Július 29 - augusztus 03. Foci, sakk-bélyeg tábor</span>
              </label>
              <label
                className="flex items-center gap-2"
                htmlFor="iskola-elokeszito"
              >
                <input
                  className="rounded bg-stone-900 border-stone-700 text-indigo-600 shadow-sm focus:ring-indigo-600 focus:ring-offset-stone-800"
                  type="checkbox"
                  name="iskola-elokeszito"
                  id="iskola-elokeszito"
                />
                <span>Augusztus 05-09. Iskola előkészítő</span>
              </label>
              <label
                className="flex items-center gap-2"
                htmlFor="fejleszto-tabor"
              >
                <input
                  className="rounded bg-stone-900 border-stone-700 text-indigo-600 shadow-sm focus:ring-indigo-600 focus:ring-offset-stone-800"
                  type="checkbox"
                  name="fejleszto-tabor"
                  id="fejleszto-tabor"
                />
                <span>Augusztus 12-16. Fejlesztő tábor</span>
              </label>
            </div>
          </fieldset>

          <div>
            <label
              className="block font-medium text-sm text-stone-300"
              htmlFor="telefon"
            >
              Telefonszámom
            </label>
            <input
              className="mt-1 border-stone-700 bg-stone-900 text-stone-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md shadow-sm w-full"
              type="tel"
              name="telefon"
              id="telefon"
            />
          </div>

          <div>
            <label
              className="block font-medium text-sm text-stone-300"
              htmlFor="gyermekek"
            >
              Gyermek/gyermekek neve, életkora. Testvérek esetében kérjük írja
              be a a testvér adatait is.
            </label>
            <input
              className="mt-1 border-stone-700 bg-stone-900 text-stone-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md shadow-sm w-full"
              type="tel"
              name="gyermekek"
              id="gyermekek"
            />
          </div>

          <div>
            <label
              className="block font-medium text-sm text-stone-300"
              htmlFor="szulo"
            >
              Szülő neve
            </label>
            <input
              className="mt-1 border-stone-700 bg-stone-900 text-stone-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md shadow-sm w-full"
              type="tel"
              name="szulo"
              id="szulo"
            />
          </div>

          <div>
            <label
              className="block font-medium text-sm text-stone-300"
              htmlFor="kerdes"
            >
              Kérdését itt tegye fel! Köszönjük!
            </label>
            <textarea
              className="mt-1 border-stone-700 bg-stone-900 text-stone-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md shadow-sm w-full"
              type="tel"
              name="kerdes"
              id="kerdes"
            />
          </div>

          <div>
            <PrimaryButton type="submit">Elküld</PrimaryButton>
          </div>
        </form>
      </article>
    </main>
  );
}
