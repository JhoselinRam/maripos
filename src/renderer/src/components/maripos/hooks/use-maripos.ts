import useLanguage from './resourses/language/use-language';
import { useTheme } from './resourses/theme/use-theme';
import { UseMaripos } from './use-maripos-types';

//This hook manages the info coming from the 'backend'.
//
//This ensures that the main application is decoupled from the backend implementation
//so in the case that the app need to change environment, to web o mobile for example,
//only this part would be needed to change.
export function useMaripos(): UseMaripos {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return {
    theme,
    language
  };
}
