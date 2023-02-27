import * as React from 'react';
import classNames from 'classnames';

// Styles
import styles from './styles.module.scss';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Sets theme selected.
   */
  theme?: 'light' | 'dark';
  /**
   * handleChange function for onChange event
   */
  handleChange?: React.FormEventHandler<HTMLInputElement | HTMLButtonElement>;
}

const defaultProps = {
  theme: 'light',
};

const ToggleButton: React.FC<ImageProps> = ({ className, theme, handleChange, ...props }) => {
  return (
    <div className={classNames(className, styles['toggle-btn-section'])}>
      <div className={classNames(styles['toggle-checkbox'], styles['m-vertical-auto'])}>
        <input
          className={styles['toggle-btn__input']}
          type="checkbox"
          name="checkbox"
          onChange={() => handleChange()}
          checked={theme === 'light'}
          {...props}
        />
        <button type="button" className={styles['toggle-btn__input-label']} onClick={() => handleChange()}></button>
      </div>
    </div>
  );
};

ToggleButton.displayName = 'ToggleButton';
ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
