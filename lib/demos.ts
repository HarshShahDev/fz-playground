export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Setup',
    items: [
      {
        name: 'HTML Native Form',
        slug: 'html-native-form',
      },
      {
        name: 'File Uploads',
        slug: 'file-uploads',
      },
    ],
  },
  {
    name: 'Spam Filtering',
    items: [
      {
        name: 'Recaptcha V2',
        slug: 'recaptcha-v2',
      },
      {
        name: 'Recaptcha V3',
        slug: 'recaptcha-v3',
      },
      {
        name: 'hCaptcha',
        slug: 'hcaptcha',
      },
      {
        name: 'Botpoison',
        slug: 'botpoison',
      },
      {
        name: 'Turnstile',
        slug: 'turnstile',
      },
      {
        name: 'Honeypot',
        slug: 'honeypot',
      },
      {
        name: 'Custom Spam Words',
        slug: 'custom-spam-words',
      },
    ],
  },
  {
    name: 'Thank You Page',
    items: [
      {
        name: 'Default thank you page',
        slug: 'default-thank-you-page',
      },
      {
        name: 'Customized thank you page content',
        slug: 'customized-content',
      },
      {
        name: 'Customized thank you page URL',
        slug: 'customized-url',
      },
    ],
  },
  {
    name: 'Notifications',
    items: [
      {
        name: 'Autoresponders',
        slug: 'autoresponders',
      },
    ],
  },
];
