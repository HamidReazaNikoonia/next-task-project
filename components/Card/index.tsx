import * as React from 'react';
import classNames from 'classnames';


const defaultProps = {
    body: false,
  };

export interface CardProps
  extends React.HTMLAttributes<HTMLElement> {
         /**
   * Sets card background
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
          bg?: string;
  
           /**
   * Sets card text color
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'|'white'|'muted')}
   */
  text?: string;

  /**
   * Sets card border color
   *
   * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light')}
   */
  border?: string;

  /**
   * When this prop is set, it creates a Card with a Card.Body inside
   * passing the children directly to it
   */
  body?: boolean;
  as: React.ElementType;
}



const Card: React.ComponentPropsWithRef<'div', CardProps> = React.forwardRef<
  HTMLElement,
  CardProps
>(
  (
    {
      className,
      bg,
      text,
      border,
      body,
      children,
      as: Component = 'div',
      ...props
    },
    ref,
  ) => {

    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(
          className,
          bg && `bg-${bg}`,
          text && `text-${text}`,
          border && `border-${border}`,
        )}
      >
        {body ? <p>{children}</p> : children}
      </Component>
    );
  },
);

Card.displayName = 'Card';
Card.defaultProps = defaultProps;

export default Card