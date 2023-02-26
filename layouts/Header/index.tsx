/* eslint-disable @next/next/no-html-link-for-pages */
import { FC, useContext } from 'react';
import { ThemeContext } from '../../lib/context/theme/theme-context';
// import logoIcon from '../images/logo-icon.png';



const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };
  return (
    <header className="header">
      <div className="header-content">
        <h2>Overreacted</h2>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;