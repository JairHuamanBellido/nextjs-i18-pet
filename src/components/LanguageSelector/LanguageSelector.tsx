import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { Language } from "../../domain/model/Language.model";
import { HttpRestApiLanguage } from "../../infrastructure/api/HttpRestApiLanguage";

export default function LanguageContainer(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { pathname, query, asPath, locale } = router;

  const { data: languagues, isSuccess } = useQuery("", () =>
    HttpRestApiLanguage.findAll()
  );

  const currentLanguage =
    languagues && languagues.find((e) => e.code === locale);

  const changeLanguage = (nextLocale: string) => {
    setIsOpen(false);
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };
  return (
    <>
      <div className="min-w-[120px] relative flex items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
        >
          {isSuccess && (
            <>
              <Image
                src={`/${currentLanguage?.flag.name}`}
                alt="2"
                width={'24px'}
                height={'24px'}
              />
              <p className="ml-3">
                {currentLanguage?.label} ({currentLanguage?.code})
              </p>
            </>
          )}
        </div>
        {isOpen && isSuccess && (
          <LanguageSelector
            languages={languagues}
            changeLanguage={changeLanguage}
          />
        )}
      </div>
    </>
  );
}

function LanguageSelector({
  changeLanguage,
  languages,
}: {
  changeLanguage(val: string): void;
  languages: Language[];
}) {
  return (
    <div className="absolute w-[320px] z-10 top-[40px] right-0 py-4 bg-white shadow-xl rounded">
      <p className="text-xl mb-4 px-6 ">Seleccione un idioma</p>
      {languages.map((e) => (
        <button
          key={e.id}
          className="relative h-10 w-full px-6 hover:bg-slate-200 transition-all flex items-center"
          onClick={() => {
            changeLanguage(e.code);
          }}
        >
          <Image
            src={"/" + e.flag.name}
            layout="intrinsic"
            alt="2"
            width={24}
            height={24}
          />
          <p className="ml-3 text-base">
            {e.label} ({e.code})
          </p>
        </button>
      ))}
    </div>
  );
}
