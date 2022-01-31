module.exports = {
  content: [
    "./node_modules/@themesberg/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerText: 'var(--color-headerText)',

        primaryText: 'var(--color-primaryText)',
        primaryBg: 'var(--color-primaryBg)',
        primaryKeyBg: 'var(--color-primaryKeyBg)',
        primaryKeyShadow: 'var(--color-primaryKeyShadow)',
        
        secondaryText: 'var(--color-secondaryText)',
        secondaryBg: 'var(--color-secondaryBg)',
        secondaryKeyBg: 'var(--color-secondaryKeyBg)',
        secondaryKeyShadow: 'var(--color-secondaryKeyShadow)',
        
        tertiaryText: 'var(--color-tertiaryText)',
        tertiaryBg: 'var(--color-tertiaryBg)',
        tertiaryKeyBg: 'var(--color-tertiaryKeyBg)',
        tertiaryKeyShadow: 'var(--color-tertiaryKeyShadow)',

        neutral: 'var(--color-neutral)',
        neutralBold: 'var(--color-neutralBold)',
        neutralSoft: 'var(--color-neutralSoft)',
        onNeutralBg: 'var(--color-onNeutralBg)',
        onNeutralBgSoft: 'var(--color-onNeutralBgSoft)',
        onNeutralBgSofter: 'var(--color-onNeutralBgSofter)',

        'veryDarkBlueMain':'#3a4764',
        'veryDarkBlueAccentOne':'#232c43',
        'veryDarkBlueAccentTwo':'#182034',
        'darkBlueKeyBg':'#637097',
        'darkBlueKeyShadow':'	#404e72',
        'lightGrayishOrangeKey':'#eae3dc',
        'grayishOrangeKey':'#b4a597',
        'veryDarkGrayishBlueText':'#444b5a',
        'redKey':'#d03f2f',
        'darkRedKey':'#93261a',

        'lightGrayMain':'#e6e6e6',
        'grayishRedAccentOne':'#d1cccc',
        'veryLightGrayAccentTwo':'#ededed',
        'lightGrayishYellowKey':'#e5e4e1',
        'darkGrayishOrangeKey':'#a69d91',
        'darkCyanKey':'#377f86',
        'veryDarkCyanKey':'#1b5f65',
        'orangeKey':'#ca5502',
        'darkOrangeKey':'#893901',
        'veryDarkGrayishYellowText':'#35352c',

        'veryDarkVioletMain':'#160628',
        'veryDarkVioletAccent':'#1d0934',
        'veryDarkVioletKey':'#341c4f',
        'darkMagentaKey':'#871c9c',
        'darkVioletKey':'#58077d',
        'vividMagentaKey':'#bc15f4',
        'pureCyanKey':'#00e0d1',
        'softCyanKey':'#6cf9f2',
        'lightYellowText':'#ffe53d',
        'veryDarkBlueText': '#1b2428',
      },
      boxShadow: {
        primaryKeyShadow: 'inset 0 -3px',
        secondaryKeyShadow: 'inset 0 -3px',
        tertiaryaryKeyShadow: 'inset 0 -3px',
      },
    },
  },
  plugins: [        
    require('@themesberg/flowbite/plugin')
  ]
  ,
}
