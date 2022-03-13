export interface TranslationBody {
  intro: {
    title: string;
    description: string;
    acceptAll: string;
    rejectAll?: string;
    showPurposes: string;
    closeButton: string;
    ownerLabel: string;
  };
  details: Details;
  tabs: {
    tab1: CMPTranslationTab;
    tab2: CMPTranslationTab;
  };
  publisherConsents: Title;
  vendorConsents: Title;
  specialPurposes: {
    title: string;
    showVendors: string;
    showCustomVendors: string;
    purpose1: Purpose;
    purpose2: Purpose;
  };
  features: Feature;
  specialFeatures: Feature;
  iabVendors: TranslationVendor;
  customVendors: TranslationVendor;
  definitions: {
    specialPurposes: string;
    specialFeatures: string;
    purposes: string;
    legitimateInterestPurposes: string;
    features: string;
  };
  footer: {
    message: string;
    consentLink: string;
    closeButton: string;
  };
}

export interface CMPTranslationTab {
  back: string;
  save: string;
  menu: string;
  title: string;
  description: string;
  acceptAll?: string;
}

export interface Title {
  title: string;
}

export interface Details {
  title: string;
  closeButton: string;
}

export interface Purpose {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  active: string;
  inactive: string;
  acceptButton: string;
  showVendors: string;
  showCustomVendors: string;
  feature1: FeatureDesc;
  feature2: FeatureDesc;
  feature3: FeatureDesc;
}

type FeatureDesc = Purpose;

interface TranslationVendor {
  title: string;
  company: string;
  offOn: string;
  description: string;
  editingDescription: string;
  moreChoices: string;
  legitimateInterest: string;
  acceptButton: string;
  active: string;
  inactive: string;
}
