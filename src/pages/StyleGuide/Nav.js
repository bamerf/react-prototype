import React from "react";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PaletteIcon from "@material-ui/icons/Palette";
import TabLinkButton from "../../components/TabLinkButton/TabLinkButton";
import VerticalLinkButtonGroup from "../../components/VerticalLinkButtonGroup/VerticalLinkButtonGroup";

const navItems = [
  { name: "typography", Icon: TextFieldsIcon },
  { name: "buttons", Icon: VisibilityIcon },
  { name: "colors", Icon: PaletteIcon },
];

export default function Nav({ match }) {
  return (
    <VerticalLinkButtonGroup maxWidth={420}>
      {navItems.map(({ name, Icon }) => (
        <TabLinkButton
          text={name}
          Icon={Icon}
          to={`${match.url}/${name}`}
          key={name}
        />
      ))}
    </VerticalLinkButtonGroup>
  );
}
