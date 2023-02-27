import * as React from 'react';
import classNames from 'classnames';

// Styles
import styles from './styles.module.scss';

type Variant = 'primary' | 'secondary' | 'dark' | 'light';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Sets card background
   *
   * @type {('primary'|'secondary'|'dark'|'light')}
   */
  bg?: Variant;

  /**
   * Sets card text color
   *
   * @type {('primary'|'secondary'|'dark'|'light')}
   */
  text?: Variant;

  /**
   * Sets card border color
   *
   * @type {('primary'|'secondary'|'dark'|'light')}
   */
  border?: Variant;

  /**
   * When this prop is set, it creates a Card with a Card.Body inside
   * passing the children directly to it
   */
  body?: boolean;
  as: React.ElementType;
}

const defaultProps = {
  body: false,
};

const Card: React.FC<CardProps> = ({
  className,
  bg,
  text,
  border,
  body,
  children,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      {...props}
      className={classNames(
        className,
        bg && styles[`bg-${bg}`],
        text && styles[`text-${text}`],
        border && (styles['border'], styles[`border-${border}`])
      )}
    >
      {body ? <p>{children}</p> : children}
    </Component>
  );
};

Card.displayName = 'Card';
Card.defaultProps = defaultProps;

export default Card;
