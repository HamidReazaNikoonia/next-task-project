import * as React from 'react';
import classNames from 'classnames';

// Styles
import styles from './styles.module.scss';

export interface IToggleButton {
  /**
   * Sets theme selected.
   */
  theme?: string;
  /**
   * handleChange function for onChange event
   */
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const defaultProps = {
  theme: 'light',
};

const ToggleButton: React.FC<IToggleButton> = ({ className, theme, handleClick, handleChange, ...props }) => {
  return (
    <div className={classNames(className, styles['toggle-btn-section'])}>
      <div className={classNames(styles['toggle-checkbox'], styles['m-vertical-auto'])}>
        <input
          className={styles['toggle-btn__input']}
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          checked={theme === 'light'}
          {...props}
        />
        <button type="button" className={styles['toggle-btn__input-label']} onClick={handleClick}></button>
      </div>
    </div>
  );
};

ToggleButton.displayName = 'ToggleButton';
ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
