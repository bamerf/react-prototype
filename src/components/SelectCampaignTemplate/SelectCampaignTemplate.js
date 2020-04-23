import React from "react";
import ModalWindow from "../Modals/ModalWindow";
import SelectCampaignHeader from "./SelectCampaignHeader";
import TemplateContainer from "./TemplateContainer";
import TemplateItem from "./TemplateItem";

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
        <TemplateItem
          title="Paypal - Suspended Account"
          description="Paypal has noticed suspicious activity and a request to login and
              stop a transaction"
          rating={3}
        />
        <TemplateItem
          title="Paypal - Suspended Account"
          description="Paypal has noticed suspicious activity and a request to login and
              stop a transaction"
          rating={2}
        />
        <TemplateItem
          title="Paypal - Suspended Account"
          description="Paypal has noticed suspicious activity and a request to login and
              stop a transaction"
          rating={4}
        />
      </TemplateContainer>
      <TemplateContainer name="System Templates">
        <TemplateItem
          title="Paypal - Suspended Account"
          description="Paypal has noticed suspicious activity and a request to login and
              stop a transaction"
          rating={0}
        />
        <TemplateItem
          title="Paypal - Suspended Account"
          description="Paypal has noticed suspicious activity and a request to login and
              stop a transaction"
          rating={1}
        />
      </TemplateContainer>
    </ModalWindow>
  );
}
