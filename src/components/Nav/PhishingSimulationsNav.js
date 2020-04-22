import React from "react";
import VerticalLinkButtonGroup from "../VerticalLinkButtonGroup/VerticalLinkButtonGroup";
import TabLinkButton from "../TabLinkButton/TabLinkButton";
import {
  phishingSimulationsRouteToName,
  phishingSimulationsRoutes,
  phishingSimulationsRouteToIcon,
} from "./PhishingSimulationsRoutes";

export default function PhishingSimulationsNav() {
  return (
    <VerticalLinkButtonGroup maxWidth={420}>
      {Object.values(phishingSimulationsRoutes).map((route) => (
        <TabLinkButton
          key={route}
          to={`/phishing-simulations/${route}`}
          text={phishingSimulationsRouteToName(route)}
          Icon={phishingSimulationsRouteToIcon(route)}
        />
      ))}
    </VerticalLinkButtonGroup>
  );
}
