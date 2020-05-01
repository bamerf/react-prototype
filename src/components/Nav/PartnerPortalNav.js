import React from "react";
import VerticalLinkButtonGroup from "../VerticalLinkButtonGroup/VerticalLinkButtonGroup";
import TabLinkButton from "../TabLinkButton/TabLinkButton";
import {
  partnerPortalRouteToName,
  partnerPortalRoutes,
  partnerPortalRouteToIcon,
} from "./PartnerPortalRoutes";

export default function PartnerPortalNav() {
  return (
    <VerticalLinkButtonGroup maxWidth={420}>
      {Object.values(partnerPortalRoutes).map((route) => (
        <TabLinkButton
          key={route}
          to={`/partner-portal/${route}`}
          text={partnerPortalRouteToName(route)}
          Icon={partnerPortalRouteToIcon(route)}
        />
      ))}
    </VerticalLinkButtonGroup>
  );
}
