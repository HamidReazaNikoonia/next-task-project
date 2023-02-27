import { FC, useContext } from 'react';
import { ThemeContext } from '../../lib/context/theme/theme-context';

// Component
import ToggleButton from '../../components/ToggleButton';

// Style
import style from './style.module.scss';

const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };
  return (
    <header className={style.header}>
      <div className={style['header-content']}>
        <h2 className={style['header-title']}>Overreacted</h2>
        <ToggleButton theme={theme} handleChange={handleThemeChange} />
      </div>
    </header>
  );
};
export default Header;
