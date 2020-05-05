import React from "react";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PaletteIcon from "@material-ui/icons/Palette";
import ToggleOn from "@material-ui/icons/ToggleOn";
import TrackChanges from "@material-ui/icons/TrackChanges";
import ShowChart from "@material-ui/icons/ShowChart";
import Menu from "@material-ui/icons/Menu";
import TabLinkButton from "../../components/TabLinkButton/TabLinkButton";
import VerticalLinkButtonGroup from "../../components/VerticalLinkButtonGroup/VerticalLinkButtonGroup";

const navItems = [
  { name: "typography", Icon: TextFieldsIcon },
  { name: "buttons", Icon: VisibilityIcon },
  { name: "colors", Icon: PaletteIcon },
  { name: "switches", Icon: ToggleOn },
  { name: "menus", Icon: Menu },
  { name: "progress-circles", Icon: TrackChanges },
  { name: "charts", Icon: ShowChart },
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
