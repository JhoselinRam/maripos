import { setTheme } from '@renderer/theme/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MainApp(): JSX.Element {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  async function initialTheme(): Promise<void> {
    const theme = await window.api.theme.initialTheme();
    dispatch(setTheme(theme));
  }

  useEffect(() => {
    initialTheme();
  }, []);
  return <h1 className="bg-purple-300 dark:bg-gray-600">{theme}</h1>;
}

export default MainApp;
