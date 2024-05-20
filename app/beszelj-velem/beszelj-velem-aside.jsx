import BeszeljVelemAsideLink from './beszelj-velem-aside-link';

export default function BeszeljVelemAside() {
  return (
    <nav className="px-4 sm:px-0">
      <ul>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem">
            Bemutatkozó
          </BeszeljVelemAsideLink>
        </li>
      </ul>
      <hr className="border-pink-900 my-2" />
      <span className="block my-4 text-lg font-semibold">Csoportok</span>
      <ul>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/szazszorszep-csoport">
            Százszorszép csoport
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/napraforgo-csoport">
            Napraforgó csoport
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/szivarvany-csoport">
            Szivárvány csoport
          </BeszeljVelemAsideLink>
        </li>
      </ul>

      <hr className="border-pink-900 my-2" />
      {/* <span className="block my-4 text-lg font-semibold">Terápiák</span> */}

      <ul>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak">
            Terápiák
          </BeszeljVelemAsideLink>
        </li>
        {/* <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#kutyaterapia">
            Kutyaterápia
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#hrg">
            Hidroterápiás rehabilitációs gimnasztika
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#kommunikacio-fejlesztese">
            Kommunikáció fejlesztése
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#logopedia">
            Logopédia
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#nyelvi-es-kommunikacios-zavarok">
            Nyelvi és kommunikációs zavarok
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#dadogas">
            Dadogás
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#diszfazia">
            Diszfázia (akadályozott beszédfejlődés)
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#diszfonia">
            Diszfónia
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#sindelar-fejlesztes">
            Sindelár fejlesztés
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#nyelvlokeses">
            Nyelvlökéses (infantilis) nyelés terápiája
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#alapozo-terapia">
            Alapozó terápia
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#konduktiv-torna">
            Konduktív torna
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#hallas-fejlesztes">
            Hallás fejlesztés
          </BeszeljVelemAsideLink>
        </li>
        <li>
          <BeszeljVelemAsideLink href="/beszelj-velem/terapiak#egyeni-komplex-gyogypedagogia">
            Egyéni komplex gyógypedagógia
          </BeszeljVelemAsideLink>
        </li> */}
      </ul>
    </nav>
  );
}
