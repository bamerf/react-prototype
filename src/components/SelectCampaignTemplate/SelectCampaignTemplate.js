import React from "react";
import ModalWindow from "../Modals/ModalWindow";
import Button from "../Button/Button";
import SelectCampaignHeader from "./SelectCampaignHeader";
import TemplateContainer from "./TemplateContainer";
import TemplateItem from "./TemplateItem";

const myTemplates = [
  {
    title: "Bank Transfer",
    description: "Internal Bank Transfer Phishing Simulation",
    rating: 3,
  },
  {
    title: "Internal IT Support",
    description: "Internal IT Support Request",
    rating: 4,
  },
  {
    title: "Bank Transfer",
    description: "Internal Bank Transfer Phishing Simulation",
    rating: 1,
  },
];

const systemTemplates = [
  {
    title: "Xero Login",
    description: "Request to restet XERO login",
    rating: 2,
  },
  {
    title: "Google Password Expired",
    description: "Google Apps password has expired",
    rating: 4,
  },
  {
    title: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
    rating: 1,
  },
  {
    title: "Xero Login",
    description: "Request to restet XERO login",
    rating: 3,
  },
  {
    title: "Google Password Expired",
    description: "Google Apps password has expired",
    rating: 3,
  },
  {
    title: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
    rating: 1,
  },
  {
    title: "Xero Login",
    description: "Request to restet XERO login",
    rating: 4,
  },
  {
    title: "Google Password Expired",
    description: "Google Apps password has expired",
    rating: 0,
  },
  {
    title: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
    rating: 2,
  },
];

export default function SelectCampaignTemplate({ open, callBack }) {
  return (
    <ModalWindow
      open={open}
      callBack={callBack}
      title="Select Campaign Template"
      width={1000}
    >
      <SelectCampaignHeader />
      <TemplateContainer name="Your Templates">
        {myTemplates.map((template) => (
          <TemplateItem
            title={template.title}
            description={template.description}
            rating={template.rating}
          >
            {" "}
            <Button thick={true} kind="primary">
              Select
            </Button>
          </TemplateItem>
        ))}
      </TemplateContainer>
      <TemplateContainer name="System Templates">
        {systemTemplates.map((template) => (
          <TemplateItem
            title={template.title}
            description={template.description}
            rating={template.rating}
          >
            {" "}
            <Button thick={true} kind="primary">
              Select
            </Button>
          </TemplateItem>
        ))}
      </TemplateContainer>
    </ModalWindow>
  );
}
