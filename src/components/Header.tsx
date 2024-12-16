import { useState } from "react";
import { Group } from "@mantine/core";
import { IconBrandMeta } from "@tabler/icons-react";
import classes from "./Header.module.css";
const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function HeaderSimple() {
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <IconBrandMeta size={28} />
      <Group gap={5} visibleFrom="xs">
        {items}
      </Group>
    </>
  );
}
