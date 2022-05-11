import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro">
      <h2 className="intro_title title title--main">
        Szanowna Użytkowniczko, Szanowny Użytkowniku
      </h2>
      <div className="text" tabIndex={0}>
        <p className="text__paragraph">
          Zanim klikniesz którykolwiek przycisk prosimy o przeczytanie do końca tej informacji –
          dotyczy ona Twoich danych osobowych.
        </p>
        <p className="text__paragraph">
          Klikając „Przejdź do serwisu” udzielasz zgody na przetwarzanie Twoich danych osobowych
          dotyczących Twojej aktywności w Internecie (np. identyfikatory urządzenia, adres IP) przez
          nas - czyli Ringier Axel Springer Polska sp. z o.o. (RASP), Zaufanych Partnerów IAB i
          innych Zaufanych Partnerów w celach marketingowych.
          <a className="link" href="ss">
            (w tym automatycznej personalizacji reklam i dokonywania pomiarów)
          </a>
          , w celu dostosowania dostarczanych treści oraz w pozostałych celach podanych poniżej.
          Szczegółowy opis celów i zakresu przetwarzanych danych znajdziesz tutaj - obejmują one
          (klasyfikacja wg IAB Europe) m.in.: wybór podstawowych reklam; tworzenie profilu
          spersonalizowanych reklam; wybór spersonalizowanych reklam; tworzenia profilu
          spersonalizowanych treści; wybór spersonalizowanych treści; pomiar wydajności reklam;
          pomiar wydajności treści; stosowanie badań rynkowych w celu generowania opinii odbiorców;
          opracowywanie i ulepszanie produktów oraz funkcje specjalne takie jak: użycie dokładnych
          danych geolokalizacyjnych i aktywne skanowanie charakterystyki urządzenia do celów
          identyfikacji. Zgoda jest dobrowolna. Możesz jej odmówić lub ograniczyć jej zakres
          klikając w „Ustawienia zaawansowane”.
        </p>
      </div>
    </div>
  );
};

export default Intro;
