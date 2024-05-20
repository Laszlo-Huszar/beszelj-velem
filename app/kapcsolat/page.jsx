import Image from 'next/image';
import facebookLogo from '../images/Facebook_Logo_Primary.png';

export default function KapcsolatPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 space-y-8">
        <address>
          <strong>Titkárság</strong>
          <br />
          Telefon: <a href="tel:+36 1 207 3938">+36 1 207 3938</a>
          <br />
          Email:{' '}
          <a href="mailto:titkarsag@beszeljvelem.hu">
            titkarsag@beszeljvelem.hu
          </a>
        </address>
        <address>
          <strong>Dr. Kopp Miklósné</strong> - fenntartó
          <br />
          Fogadási idő: Kedd, 14-16 óráig
          <br />
          Telefon: <a href="tel:+36309705085">+36 30 970 5085</a>
          <br />
          Email:{' '}
          <a href="mailto:titkarsag@beszeljvelem.hu">
            titkarsag@beszeljvelem.hu
          </a>
        </address>
        <address>
          <strong>Sándorné Szabó Katalin</strong> - Kipp-Kopp Óvoda mb. igazgató
          <br />
          Fogadási idő: Szerda, 14-16 óráig
          <br />
          Email:{' '}
          <a href="mailto:igazgato.kippkopp@beszeljvelem.hu">
            igazgato.kippkopp@beszeljvelem.hu
          </a>
        </address>
        <address>
          <strong>Vetésiné Török Márta</strong> - gazdasági referens
          <br />
          Fogadási idő: Csütörtök, 11-12 óráig
          <br />
          Email:{' '}
          <a href="mailto:gazdasagi@beszeljvelem.hu">
            gazdasagi@beszeljvelem.hu
          </a>
        </address>
        <address>Cím: Budapest, 1225 Nagytétényi út 67.</address>
        <div className="w-full">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Budapest,%20Nagyt%C3%A9t%C3%A9nyi%20%C3%BAt%2067,%201225+(Besz%C3%A9lj%20Velem%20%C3%93voda)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="text-center">
            <a
              className="inline-block mt-8"
              href="https://www.facebook.com/kippkoppovoda"
              target="_blank"
            >
              <Image src={facebookLogo} alt="facebook" width={30} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
