module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Welcome',
      items: [
        'greeting',],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'releaseNotes/rnote-all',
        {
          type: 'category',
          label: 'Sprint Wise',
          items: [
            'releaseNotes/rnote-sp1',
            'releaseNotes/rnote-sp2',
            'releaseNotes/rnote-sp3',
            'releaseNotes/rnote-sp4',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Manuals',
      items: [
        // 'manuals',
        {
          type: 'category',
          label: 'Technical Manuals',
          items: [
            'manuals/adminManual/admin', 
            'manuals/configManual/config',],
        },
        {
          type: 'category',
          label: 'User Manuals',
          items: [
            'manuals/userManual/user',
            'manuals/userManual/comp',
            'manuals/userManual/wo',
            'manuals/userManual/inventory',
            'manuals/userManual/counters',
            'manuals/userManual/search',],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'How To',
    //   items: ['userGuide/wo',],
    // },
  ]
};
