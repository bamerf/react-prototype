import React from "react";
import PartnerResourcesIcon from "@material-ui/icons/ChromeReaderMode";
import DemoAdminIcon from "@material-ui/icons/PlayCircleFilled";
import {
  ManageClientsIcon,
  QuestionSetsIcon,
  SupportCentreIcon,
  BillingIcon,
  OnboardingChecklistIcon
} from "../../assets/svg/PartnerPortalIcons";
import ManageClients from "../ManageClients/ManageClients";

export const partnerPortalRoutes = {
  ManageClients: "manage-clients",
  QuestionSets: "question-sets",
  PartnerResources: "partner-resources",
  SupportCentre: "support-centre",
  Billing: "billing",
  OnboardingChecklist: "onboarding-checklist",
  DemoAdmin: "demo-admin",
};

export const partnerPortalRouteToName = (route) => {
  switch (route) {
    case partnerPortalRoutes.ManageClients:
      return "Manage clients";
    case partnerPortalRoutes.QuestionSets:
      return "Question sets";
    case partnerPortalRoutes.PartnerResources:
      return "Partner resources";
    case partnerPortalRoutes.SupportCentre:
      return "Support centre";
    case partnerPortalRoutes.Billing:
      return "Billing";
    case partnerPortalRoutes.OnboardingChecklist:
      return "Onboarding checklist";
    case partnerPortalRoutes.DemoAdmin:
      return "Demo admin";
    default:
      return null;
  }
};

export const partnerPortalRouteToIcon = (route) => {
  switch (route) {
    case partnerPortalRoutes.ManageClients:
      return ManageClientsIcon;
    case partnerPortalRoutes.QuestionSets:
      return QuestionSetsIcon;
    case partnerPortalRoutes.PartnerResources:
      return PartnerResourcesIcon;
    case partnerPortalRoutes.SupportCentre:
      return SupportCentreIcon;
    case partnerPortalRoutes.Billing:
      return BillingIcon;
    case partnerPortalRoutes.OnboardingChecklist:
      return OnboardingChecklistIcon;
    case partnerPortalRoutes.DemoAdmin:
      return DemoAdminIcon;
    default:
      return null;
  }
};

export const partnerPortalRouteToComponent = (route) => {
  switch (route) {
    case partnerPortalRoutes.ManageClients:
      return ManageClients;
    case partnerPortalRoutes.QuestionSets:
      return React.Fragment;
    case partnerPortalRoutes.PartnerResources:
      return React.Fragment;
    case partnerPortalRoutes.SupportCentre:
      return React.Fragment;
    case partnerPortalRoutes.Billing:
      return React.Fragment;
    case partnerPortalRoutes.OnboardingChecklist:
      return React.Fragment;
    case partnerPortalRoutes.DemoAdmin:
      return React.Fragment;
    default:
      return null;
  }
};
