import { useAppDispatch, useAppSelector } from '@renderer/store/hooks';
import { setTheme } from '@renderer/theme/theme';
import { useEffect } from 'react';

function MainApp(): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);

  async function initialTheme(): Promise<void> {
    const theme = await window.api.theme.initialTheme();
    dispatch(setTheme(theme));
  }

  useEffect(() => {
    initialTheme();
    window.api.theme.update((_event, theme) => dispatch(setTheme(theme)));
  }, []);
  return (
    <h1 className="flex h-[100vh] items-center justify-center bg-slate-100 uppercase text-black dark:bg-gray-600 dark:text-white">
      {theme}
    </h1>
  );
}

export default MainApp;
