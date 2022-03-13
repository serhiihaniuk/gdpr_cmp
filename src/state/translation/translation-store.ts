/* eslint-disable max-len */
import {TranslationBody} from './translation-service';

export const defaultTranslation: TranslationBody = {
  intro: {
    title: 'Only on test network. Not avaliable in production. Dear User,',
    description:
      'This is a test network. Please use it only for testing purposes. Do not use it in production.',
    acceptAll: 'Go to Website',
    rejectAll: 'Reject all',
    showPurposes: 'Advanced settings',
    closeButton: 'Close',
    ownerLabel: 'Onet belongs to Ringier Axel Springer Polska sp.z o.o.',
  },
  details: {
    title: 'Advanced settings',
    closeButton: 'Save and Close',
  },
  tabs: {
    tab1: {
      back: 'Back',
      save: 'Save and close',
      menu: 'General information',
      title: 'Dear user,',
      description:
        'This is a test network. Please use it only for testing purposes. Do not use it in production.',
      acceptAll: 'Accept all',
    },
    tab2: {
      back: 'Back',
      save: 'Save and close',
      menu: 'General information',
      title: 'Dear user,',
      description:
        'This is a test network. Please use it only for testing purposes. Do not use it in production.',
      acceptAll: 'Accept all',
    },
  },
  publisherConsents: {
    title: 'Legal grounds of data processing by the Publisher (Controller’s legitimate interest)',
  },
  vendorConsents: {
    title: 'Consents for Partners',
  },
  specialPurposes: {
    title: 'Particular purposes',
    showVendors: 'Show the list of Trusted Partners of IAB',
    showCustomVendors: 'Show the list of Trusted Partners',
    purpose1: {
      title: 'Ensure security, prevent fraud, and debug',
      description:
        '<p>Your data can be used to monitor for and prevent fraudulent activity, and ensure systems and processes work properly and securely.</p>',
    },
    purpose2: {
      title: 'Technically deliver ads or content',
      description:
        '<p>Your device can receive and send information that allows you to see and interact with ads and content.</p>',
    },
  },
  features: {
    title: 'Functionalities',
    active: 'Active',
    inactive: 'Inactive',
    acceptButton: 'acceptButton_features',
    showVendors: 'Show the list of Trusted Partners of IAB',
    showCustomVendors: 'Show the list of Trusted Partners',
    feature1: {
      title: 'Alignment and connection of offline data sources',
      description:
        '<p>Data from offline data sources may be aligned with user’s online activity in the performance of at least one purpose.</p>',
    },
    feature2: {
      title: 'Connection of various devices',
      description:
        '<p>Various devices may be considered as belonging to the user or user’s household in the performance of at least one purpose.</p>',
    },
    feature3: {
      title:
        'Reception and use of automatically sent device features for the purposes of identification',
      description:
        '<p>A device may be distinguished from other devices on the basis of information sent automatically, such as IP address or browser type.</p>',
    },
  },
  specialFeatures: {
    title: 'Special functionalities',
    active: 'Active',
    inactive: 'Inactive',
    acceptButton: 'acceptButton_specialfeatures',
    showVendors: 'Show the list of Trusted Partners of IAB',
    showCustomVendors: 'Show the list of Trusted Partners',
    feature1: {
      title: 'Use precise geolocation data',
      description:
        '<p>Geolocation data may be used to determine the approximate location of the user.</p>',
    },
    feature2: {
      title: 'Actively scan device characteristics for identification',
      description:
        '<p>Geolocation data may be used to determine the approximate location of the user.</p>',
    },
    feature3: {
      title: 'Actively scan device characteristics for identification',
      description:
        '<p>Geolocation data may be used to determine the approximate location of the user.</p>',
    },
  },
  iabVendors: {
    title: 'Our Trusted Partners',
    company: 'Partner',
    offOn: 'Accept',
    description:
      '<p>Geolocation data may be used to determine the approximate location of the user.</p>',
    editingDescription: 'the conten.',
    moreChoices: 'Change settings of Trusted Partners',
    legitimateInterest: 'CLI',
    acceptButton: 'Consent',
    active: 'active_1',
    inactive: 'inactive_2',
  },
  customVendors: {
    title: 'Our Trusted Partners',
    company: 'Partner',
    offOn: 'Accept',
    description: '',
    editingDescription: '123',
    moreChoices: 'Change settings of Trusted Partners',
    legitimateInterest: 'CLI',
    acceptButton: 'Consent',
    active: 'active_2',
    inactive: 'active_2',
  },
  definitions: {
    specialPurposes: 'Particular purposes12314',
    specialFeatures: 'Special functionalities12314',
    purposes: 'Purposes12314',
    legitimateInterestPurposes: 'Controller’s Legitimate Interest12314',
    features: 'Functionalities12314',
  },
  footer: {
    message: 'Change your privacy settings by clicking',
    consentLink: 'here',
    closeButton: 'closeButton_footer',
  },
};
