const baseUrl = process.env_REACT_APP_BASE_URL;

export const brand = {
  qbe: `${baseUrl}/brand/cyberaware.qbe.com`,
  cyberaware: `${baseUrl}/brand/portal.cyberaware.com`,
};

export const loginUrl = `${baseUrl}/login`;

export const logoutUrl = `${baseUrl}/logout`;

export const phishingCampaignsUrl = `${baseUrl}/phishing/campaigns`;

export const getBrandUrl = () => {
  // TODO: this needs to find result based on url
  return brand.cyberaware;
  // return brand.qbe;
};
