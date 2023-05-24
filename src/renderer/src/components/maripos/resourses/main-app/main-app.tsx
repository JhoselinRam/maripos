import { useAppSelector } from '@renderer/store/hooks';
import i18n from '../../../../i18n/i18n';

function MainApp(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);
  const language = useAppSelector((state) => state.languge);

  interface TestText {
    theme: {
      label: string;
      value: string;
    };
    language: {
      label: string;
      value: string;
    };
  }

  const { getText } = i18n<TestText>(
    {
      en: {
        language: {
          label: 'Language',
          value: 'English'
        },
        theme: {
          label: 'Theme',
          value: theme
        }
      },
      es: {
        language: {
          label: 'Lenguaje',
          value: 'Español'
        },
        theme: {
          label: 'Tema',
          value: theme === 'light' ? 'Claro' : 'Obscuro'
        }
      }
    },
    import.meta.env.RENDERER_VITE_FALLBACK_LANGUAGE
  );

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-slate-100 uppercase text-black dark:bg-gray-600 dark:text-white">
      <div className="flex items-center justify-center">
        <h1>
          {getText(language, 'theme.label')} : {getText(language, 'theme.value')}
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <h1>
          {getText(language, 'language.label')} : {getText(language, 'language.value')}
        </h1>
      </div>
    </div>
  );
}

export default MainApp;
