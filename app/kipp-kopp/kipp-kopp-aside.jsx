import KippKoppAsideLink from './kipp-kopp-aside-link';

export default function KippKoppAside() {
  return (
    <nav className="p-4 sm:p-0">
      <ul>
        <li>
          <KippKoppAsideLink href="/kipp-kopp">Bemutatkozó</KippKoppAsideLink>
        </li>
      </ul>
      <hr className="border-sky-900 my-2" />
      <span className="block my-4 text-lg font-semibold">Csoportok</span>
      <ul>
        <li>
          <KippKoppAsideLink href="/kipp-kopp/macko-csoport">
            Mackó csoport
          </KippKoppAsideLink>
        </li>
        <li>
          <KippKoppAsideLink href="/kipp-kopp/mokus-csoport">
            Mókus csoport
          </KippKoppAsideLink>
        </li>
        <li>
          <KippKoppAsideLink href="/kipp-kopp/katica-csoport">
            Katica csoport
          </KippKoppAsideLink>
        </li>
        <li>
          <KippKoppAsideLink href="/kipp-kopp/nemet-nemzetisegi-csoport">
            Német nemzetiségi csoport
          </KippKoppAsideLink>
        </li>
      </ul>
      <hr className="border-sky-900 my-2" />

      <span className="my-4 block text-lg font-semibold">Szolgáltatások</span>
      <ul>
        <li>
          <KippKoppAsideLink href="/kipp-kopp/kompetencia">
            Kompetencia felmérés alapú diff. fejlesztés
          </KippKoppAsideLink>
        </li>
        <li>
          <KippKoppAsideLink href="/kipp-kopp/logopedia">
            Logopédia
          </KippKoppAsideLink>
        </li>
        <li>
          <KippKoppAsideLink href="/kipp-kopp/sport">Sport</KippKoppAsideLink>
        </li>
      </ul>
      <hr className="border-sky-900 my-2" />

      <ul className="mt-4">
        <li>
          <KippKoppAsideLink href="/kipp-kopp/pedagogiai-program">
            Pedagógiai program
          </KippKoppAsideLink>
        </li>
      </ul>
    </nav>
  );
}
