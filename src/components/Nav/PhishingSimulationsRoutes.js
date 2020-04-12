import React from "react";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import DescriptionIcon from "@material-ui/icons/Description";
import TuneIcon from "@material-ui/icons/Tune";
import { PhishingIcon } from "../../assets/svg/PhishingIcon";
import Campaigns from "../Campaigns/Campaigns";
import AddCampaign from "../AddCampaign/AddCampaign";

export const phishingSimulationsRoutes = {
  Campaigns: "campaigns",
  AddCampaign: "add-campaign",
  ManageTemplate: "manage-template",
  ManageRecipients: "manage-recipients",
  SendingGroups: "sending-groups",
  Reports: "reports",
  Settings: "settings",
};

export const phishingSimulationsRouteToName = (route) => {
  switch (route) {
    case phishingSimulationsRoutes.Campaigns:
      return "Campaigns";
    case phishingSimulationsRoutes.AddCampaign:
      return "Add Campaign";
    case phishingSimulationsRoutes.ManageTemplate:
      return "Manage Template";
    case phishingSimulationsRoutes.ManageRecipients:
      return "Manage Recipients";
    case phishingSimulationsRoutes.SendingGroups:
      return "SendingGroups";
    case phishingSimulationsRoutes.Reports:
      return "Reports";
    case phishingSimulationsRoutes.Settings:
      return "Settings";
  }
};

export const phishingSimulationsRouteToComponent = (route) => {
  switch (route) {
    case phishingSimulationsRoutes.Campaigns:
      return Campaigns;
    case phishingSimulationsRoutes.AddCampaign:
      return AddCampaign;
    case phishingSimulationsRoutes.ManageTemplate:
      return React.Fragment;
    case phishingSimulationsRoutes.ManageRecipients:
      return React.Fragment;
    case phishingSimulationsRoutes.SendingGroups:
      return React.Fragment;
    case phishingSimulationsRoutes.Reports:
      return React.Fragment;
    case phishingSimulationsRoutes.Settings:
      return React.Fragment;
  }
};

export const phishingSimulationsRouteToIcon = (route) => {
  switch (route) {
    case phishingSimulationsRoutes.Campaigns:
      return PhishingIcon;
    case phishingSimulationsRoutes.AddCampaign:
      return AddIcon;
    case phishingSimulationsRoutes.ManageTemplate:
      return CreateIcon;
    case phishingSimulationsRoutes.ManageRecipients:
      return PersonIcon;
    case phishingSimulationsRoutes.SendingGroups:
      return SupervisorAccountIcon;
    case phishingSimulationsRoutes.Reports:
      return DescriptionIcon;
    case phishingSimulationsRoutes.Settings:
      return TuneIcon;
  }
};
