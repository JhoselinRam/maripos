import { setTheme } from '@renderer/theme/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MainApp(): JSX.Element {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    window.api.theme.handleTheme((_event, theme) => {
      dispatch(setTheme(theme));
    });
  }, []);
  return <h1 className="bg-purple-300 dark:bg-gray-600">{theme}</h1>;
}

export default MainApp;
