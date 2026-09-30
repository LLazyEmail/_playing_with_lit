import type { NomoretogoEmailData } from '../../types.js';

const BASE_IMAGE =
  'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/';

const WEEKLY_MENU_URL =
  'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI3NSZkPXo4YjBvMHg=.vMbsF-YBfJsfs5alpGwYRVvY46OMHSZIvNRQBabJRIc';

export const nomoretogoData: NomoretogoEmailData = {
  title: 'Korean Barbecue Beef | Pork Schnitzel | Bahn Mi Meatball Skewers',
  date: 'April 22nd, 2021',
  weeklyMenuUrl: WEEKLY_MENU_URL,
  introText:
    "We have a very diverse line-up of meals for this week. Kicking off the week we have a delicious flaky salmon with creamy chipotle sauce. Followed by Korean Barbecue Beef, a quick and outstanding dinner! And oh my- the Saucy Shrimp Salad is amazing! Don't miss the Pork Schnitzel with German Spaetzle. Overall, my family was blown away by this week and I hope yours is too. Enjoy!!",
  signature: 'Happy Cooking,\u00a0\nStacey, Sloane, and\u00a0the No More To-Go Team',
  recipes: [
    {
      imageUrl: `${BASE_IMAGE}recipe5.jpeg`,
      imageAlt: 'Grilled Salmon with Chipotle Cream Sauce',
      title: 'Grilled Salmon with Chipotle Cream Sauce',
      subtitle: 'over Potato Poblano Hash\u00a0and Broccolini',
      linkUrl:
        'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI3NyZkPXg4YThzNWw=.5EZ2YvXBDSr5PVkwh4GWCdJID0-pOGdh9L7xp4JMJ08',
    },
    {
      imageUrl: `${BASE_IMAGE}recipe4.jpeg`,
      imageAlt: 'Korean Barbecue Beef',
      title: 'Korean Barbecue Beef',
      subtitle: 'with Sesame Rice Noodles\nand Spicy Pickled Cucumbers and Carrots',
      linkUrl:
        'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI3OSZkPWwwcjRnNXE=.mSuqCzlUp90haEWchocSmhjYNDWkS0ekN-j3JX9Q_zQ',
    },
    {
      imageUrl: `${BASE_IMAGE}recipe6.jpeg`,
      imageAlt: 'Saucy Grilled Shrimp',
      title: 'Saucy Grilled Shrimp',
      subtitle: 'and a Corn and Radish Salad\nwith Avocado Dressing',
      linkUrl:
        'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4MSZkPWEybjZ2NWE=.ZNIgmmi6FTsGd-0jooca-DM-Znm2AhsssGDZsE0cBn0',
    },
    {
      imageUrl: `${BASE_IMAGE}recipe2.jpeg`,
      imageAlt: 'Pork Schnitzel',
      title: 'Pork Schnitzel',
      subtitle: 'with German Spaetzle\nand Green Beans',
      linkUrl:
        'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4MiZkPXMwajFkNnk=.8I5D4n7gtfmzuGZiriGRhZHeQLEWahZokr2rEih7l-s',
    },
    {
      imageUrl: `${BASE_IMAGE}recipe1.jpeg`,
      imageAlt: 'Chipotle Cream Skillet Chicken',
      title: 'Chipotle Cream Skillet Chicken',
      subtitle: 'over Rice and Snap Peas',
      linkUrl:
        'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4MyZkPWoweTNkMnY=.CZMYEt1NLJMvifvHlshzUDUIx2GdM_OI3eoDf4kOCI0',
    },
    {
      imageUrl: `${BASE_IMAGE}recipe3.jpeg`,
      imageAlt: 'Bahn Mi Meatball Skewers',
      title: 'Bahn Mi Meatball Skewers',
      subtitle: '',
      linkUrl:
        'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4NCZkPWwxazJ5Mmk=.RIl2-ItpqAdqgUI30NcBt0XRKSXfuEqpAnuUlWbDXIo',
    },
  ],
  ctaUrl:
    'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4NiZkPWI4aDRhNHk=.4o0ove8bzzXqKuKx_LfiJpa6v9YIFKCjEDd2VWNMHus',
  ingredientsSpotlight:
    'Saffron: Gives traditional Tandoori its famous yellow coloring. This week we are using it in the marinade for the Yogurt Spiced Chicken. It can be pretty expensive, so turmeric is a good alternative, providing the same color and very comparable taste.',
  weekendPrepText:
    'Free up your evening and get a little chopping and prep work done this weekend. Slice and Dice: Cut the vegetables and store in zippered bags or divided containers.',
  makeAheadText:
    'Make Ahead and Refrigerate: Make the sauce; Cook the noodles; Make the dressing; Make the spaetzle; Cook the rice.',
  facebookGroupUrl:
    'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4NyZkPWk1dDVmNGo=.4xn_5-6HMExtTo3xZ_Ln6RjQkfRky6mhHhF8JlatA5w',
  helpUrl:
    'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4OSZkPXMwZDVyOHA=.8-LFEsk4bUN_iLltde13xeu2Odr968iC9CMsJcRPdTE',
  unsubscribeUrl:
    'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzY2OSZkPWo3eTJlNHY=.Ec_fY2NpMcOTAMs-XIr1n9exawt8fd3IsksWtSJ2kak',
};
