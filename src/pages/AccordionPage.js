import Accordion from "../components/Accodrion";

function AccodrionPage() {
  const items = [
    {
      id: "lasioqjhe",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want.You can use React on any project you want",
    },
    {
      id: "oi3hewqw",
      label: "Can I use Javascript on a project?",
      content:
        "You can use Javascript on any project you want.You can use Javascript on any project you want",
    },
    {
      id: "askldjasl",
      label: "Can I use CSS on a project?",
      content:
        "You can use CSS on any project you want.You can use CSS on any project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default AccodrionPage;
