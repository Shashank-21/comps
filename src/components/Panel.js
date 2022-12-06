import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "border-2 rounded p-3 shadow w-full bg-violet-100 border-violet-300",
    className
  );

  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  );
}

export default Panel;
