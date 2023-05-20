import { useAppSelector } from '@renderer/store/hooks';

function MainApp(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);

  return (
    <h1 className="flex h-[100vh] items-center justify-center bg-slate-100 uppercase text-black dark:bg-gray-600 dark:text-white">
      {theme}
    </h1>
  );
}

export default MainApp;
