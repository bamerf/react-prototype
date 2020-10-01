import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import TuneIcon from "@material-ui/icons/Tune";
import { PhishingIcon } from "../../assets/svg/PhishingIcon";
import Dashboard from "../Dashboard/Dashboard";
import AddItem from "../AddItem/AddItem";
import Settings from "../Settings/Settings";
import ManageTemplates from "../ManageTemplates/ManageTemplates";

export const phishingSimulationsRoutes = {
  Dashboard: "dashboard",
  AddItem: "add-item",
  ManageTemplate: "manage-template",
  Settings: "settings",
};

export const phishingSimulationsRouteToName = (route) => {
  switch (route) {
    case phishingSimulationsRoutes.Dashboard:
      return "Dashboard";
    case phishingSimulationsRoutes.AddItem:
      return "Add Item";
    case phishingSimulationsRoutes.ManageTemplate:
      return "Manage Template";
    case phishingSimulationsRoutes.Settings:
      return "Settings";
    default:
      return null;
  }
};

export const phishingSimulationsRouteToComponent = (route) => {
  switch (route) {
    case phishingSimulationsRoutes.Dashboard:
      return Dashboard;
    case phishingSimulationsRoutes.AddItem:
      return AddItem;
    case phishingSimulationsRoutes.ManageTemplate:
      return ManageTemplates;
    case phishingSimulationsRoutes.Settings:
      return Settings;
    default:
      return null;
  }
};

export const phishingSimulationsRouteToIcon = (route) => {
  switch (route) {
    case phishingSimulationsRoutes.Dashboard:
      return PhishingIcon;
    case phishingSimulationsRoutes.AddItem:
      return AddIcon;
    case phishingSimulationsRoutes.ManageTemplate:
      return CreateIcon;
    case phishingSimulationsRoutes.Settings:
      return TuneIcon;
    default:
      return null;
  }
};
