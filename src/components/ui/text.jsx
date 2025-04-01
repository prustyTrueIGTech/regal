import React from "react";
import classNames from "classnames";

const Text = React.forwardRef(({ as: Component = "span", className, children, ...props }, ref) => {
  return (
    <Component ref={ref} className={classNames("rt-Text", className)} {...props}>
      {children}
    </Component>
  );
});

Text.displayName = "Text";

export { Text };