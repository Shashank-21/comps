import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];

  const renderedLinks = links.map((link) => {
    const { label, path } = link;
    return (
      <Link
        key={label}
        to={path}
        className="text-md my-2 py-4"
        activeClassName="font-bold bg-lime-100 border-l-4 border-lime-800"
      >
        {label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col text-center">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
