import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border-2",
    {
      "border-blue-600 bg-blue-500 text-white": primary && !outline,
      "border-gray-900 bg-gray-800 text-white": secondary && !outline,
      "border-green-800 bg-green-700 text-white": success && !outline,
      "border-yellow-500 bg-yellow-400 text-black": warning && !outline,
      "border-red-600 bg-red-500 text-white": danger && !outline,
      "rounded-full": rounded,
      "border-blue-600 bg-white text-blue-600": outline && primary,
      "border-gray-900 bg-white text-gray-900": outline && secondary,
      "border-green-600 bg-white text-green-600": outline && success,
      "border-yellow-500 bg-white text-yellow-500": outline && warning,
      "border-red-600 bg-white text-red-600": outline && danger,
    }
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariation: ({ primary, secondary, success, danger, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1)
      return new Error(
        "Only one of primary, secondary, success, warning or danger can be true"
      );
  },
};

export default Button;
