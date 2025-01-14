const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ addBase, addUtilities, addComponents, theme }) {},
  {
    theme: {
      screens: {
        // If you need more info about this, check https://uiux.egovframe.go.kr/guide/style/style_05.html
        // ~600px: mobile
        mobile: '360px',
        // 601px ~ 1024px: tablet
        tablet: '601px',
        // 1025px ~: desktop
        desktop: '1025px',
      },
      extend: {
        colors: {
          primary: {
            DEFAULT: '#246BEB',
            0: '#FFFFFF',
            5: '#EFF5FF',
            10: '#D3E1FB',
            20: '#A7C4F7',
            30: '#7CA6F3',
            40: '#5089EF',
            50: '#246BEB',
            60: '#1D56BC',
            70: '#16408D',
            80: '#0E2B5E',
            90: '#07152F',
            100: '#000000',
          },
          secondary: {
            DEFAULT: '#003675',
            0: '#FFFFFF',
            5: '#EDF1F5',
            10: '#CDD7E4',
            20: '#B4C4D6',
            30: '#99B0CB',
            40: '#2A5C96',
            50: '#003675',
            60: '#002B5E',
            70: '#002046',
            80: '#00162F',
            90: '#000B17',
            100: '#000000',
          },
          gray: {
            0: '#FFFFFF',
            5: '#F8F8F8',
            10: '#F0F0F0',
            20: '#E4E4E4',
            30: '#D8D8D8',
            40: '#C6C6C6',
            50: '#8E8E8E',
            60: '#717171',
            70: '#555555',
            80: '#2D2D2D',
            90: '#1D1D1D',
            100: '#000000',
          },
          point: {
            DEFAULT: '#E71825',
            0: '#FFFFFF',
            5: 'FDF2F3',
            10: 'FBD6D8',
            20: 'F5A3A8',
            30: 'F1747C',
            40: 'EC4651',
            50: 'E71825',
            60: 'B9131E',
            70: '8B0E16',
            80: '5C0A0F',
            90: '2E0507',
            100: '#000000',
          },
          danger: {
            DEFAULT: '#EB003B',
            5: '#FEECF0',
            10: '#FCD4DE',
            20: '#F799B1',
            30: '#F36689',
            40: '#EF3E5E',
            50: '#EB003B',
            60: '#D50136',
            70: '#8D0023',
            80: '#5E0018',
            90: '#2F000C',
          },
          warning: {
            DEFAULT: '#FFB724',
            5: '#FFF8E9',
            10: '#FFEAC1',
            20: '#FFE2A7',
            30: '#FFD47C',
            40: '#FFC550',
            50: '#FFB724',
            60: '#98690A',
            70: '#66490E',
            80: '#4D370B',
            90: '#332507',
          },
          success: {
            DEFAULT: '#008A1E',
            5: '#EEF7F0',
            10: '#CEE9D4',
            20: '#B2DCBB',
            30: '#8CCA99',
            40: '#33A14B',
            50: '#008A1E',
            60: '#006E18',
            70: '#005312',
            80: '#00370C',
            90: '#002207',
          },
          info: {
            DEFAULT: '#2768FF',
            5: '#E9F0FF',
            10: '#D4E1FF',
            20: '#A9C3FF',
            30: '#7DA4FF',
            40: '#5286FF',
            50: '#2768FF',
            60: '#1F53CC',
            70: '#173E99',
            80: '#0C1F4D',
            90: '#040A1A',
          },
          navy: {
            5: '#F1F1F9',
            10: '#D3D5ED',
            20: '#A7AEDA',
            30: '#7B82C8',
            40: '#4F57B5',
            50: '#232EA3',
            60: '#1C25B2',
            70: '#151C62',
            80: '#0E1241',
            90: '#070921',
          },
          blue: {
            5: '#F0F3FF',
            10: '#D2DCFE',
            20: '#A4B8FE',
            30: '#7795FD',
            40: '#4A71FC',
            50: '#1C4EFC',
            60: '#163ECA',
            70: '#112F97',
            80: '#0B1F65',
            90: '#061032',
          },
          'royal-blue': {
            5: '#EBF5FF',
            10: '#C7E3FF',
            20: '#8FC8FF',
            30: '#56ACFF',
            40: '#0D76AE',
            50: '#0D76AE',
            60: '#0A5AA6',
            70: '#04407F',
            80: '#002B55',
            90: '#00152A',
          },
          'sky-blue': {
            5: '#F0F8FF',
            10: '#D4F3FE',
            20: '#A9E6FC',
            30: '#7DDAFB',
            40: '#52CDFA',
            50: '#27C1F8',
            60: '#1F9AC6',
            70: '#177495',
            80: '#0F4D63',
            90: '#082732',
          },
          aqua: {
            5: '#E7FDFD',
            10: '#CEFBFB',
            20: '#9CF6F6',
            30: '#6BF2F2',
            40: '#39EDED',
            50: '#08E8E8',
            60: '#06BABA',
            70: '#058C8C',
            80: '#035D5D',
            90: '#022F2F',
          },
          teal: {
            5: '#EDF8F8',
            10: '#CEEEED',
            20: '#9DD7D7',
            30: '#6DC3C3',
            40: '#3CAEAE',
            50: '#0B9B98',
            60: '#097C7C',
            70: '#075D5D',
            80: '#043E3E',
            90: '#021F1F',
          },
          green: {
            5: '#EEF7EE',
            10: '#CCE6CC',
            20: '#99CC99',
            30: '#66B366',
            40: '#339933',
            50: '#008000',
            60: '#006600',
            70: '#004D00',
            80: '#003300',
            90: '#001A00',
          },
          'lime-green': {
            5: '#F3FCF3',
            10: '#D6F5D6',
            20: '#ADEBAD',
            30: '#84E184',
            40: '#5BD75B',
            50: '#32CD32',
            60: '#28A428',
            70: '#1E7B1E',
            80: '#145214',
            90: '#0A290A',
          },
          lime: {
            5: '#F7FEA',
            10: '#EEFEDA',
            20: '#DCFFAB',
            30: '#CEFE83',
            40: '#BCF95D',
            50: '#A1F524',
            60: '#8BD013',
            70: '#6A9B16',
            80: '#476912',
            90: '#23570D',
          },
          olive: {
            5: '#F8F8ED',
            10: '#EBEBCC',
            20: '#D6D699',
            30: '#C2C266',
            40: '#ADAD33',
            50: '#999900',
            60: '#7A7A00',
            70: '#5C5C00',
            80: '#3D3D00',
            90: '#1F1F00',
          },
          yellow: {
            5: '#FFFBE5',
            10: '#FFF4CC',
            20: '#FFEE99',
            30: '#FFE566',
            40: '#FFD033',
            50: '#FFD400',
            60: '#CCA300',
            70: '#A38200',
            80: '#665200',
            90: '#332900',
          },
          gold: {
            5: '#FDF7E9',
            10: '#FAEFD3',
            20: '#F5DFA7',
            30: '#F1CF7A',
            40: '#ECBF4E',
            50: '#E7AF22',
            60: '#B98C1B',
            70: '#8B6915',
            80: '#5C460E',
            90: '#2E2307',
          },
          'saddle-brown': {
            5: '#F8F2ED',
            10: '#ECDCCD',
            20: '#D9B99C',
            30: '#C6966A',
            40: '#B37439',
            50: '#A05107',
            60: '#804106',
            70: '#603104',
            80: '#402003',
            90: '#201001',
          },
          brown: {
            5: '#F9F2F0',
            10: '#EED8D3',
            20: '#DCB0A7',
            30: '#CB897C',
            40: '#B96150',
            50: '#A83A24',
            60: '#862E1D',
            70: '#652316',
            80: '#43170E',
            90: '#220C07',
          },
          'dark-red': {
            5: '#FAEFF0',
            10: '#F1CED0',
            20: '#E39D9F',
            30: '#D56C6F',
            40: '#C73A3F',
            50: '#B9090F',
            60: '#94070C',
            70: '#6F0509',
            80: '#4A0306',
            90: '#250203',
          },
          red: {
            5: '#FEF1F1',
            10: '#FCCBCC',
            20: '#F99999',
            30: '#F56666',
            40: '#F23B3B',
            50: '#EE0000',
            60: '#BE0000',
            70: '#8F0000',
            80: '#5F0000',
            90: '#300000',
          },
          orange: {
            5: '#FFF4F0',
            10: '#FFD4CC',
            20: '#FFB899',
            30: '#FF9C66',
            40: '#FF8033',
            50: '#FF6400',
            60: '#CC5000',
            70: '#993C00',
            80: '#662800',
            90: '#331400',
          },
          coral: {
            5: '#FFF8F5',
            10: '#FFE6DC',
            20: '#FFCDB8',
            30: '#FFB495',
            40: '#FF9B71',
            50: '#FE8052',
            60: '#CB6642',
            70: '#984D31',
            80: '#663321',
            90: '#331A10',
          },
          salmon: {
            5: '#FFF1F0',
            10: '#FFE3E0',
            20: '#FFCBC1',
            30: '#FEACA3',
            40: '#FE9184',
            50: '#FD7565',
            60: '#CA5E51',
            70: '#97463D',
            80: '#652F28',
            90: '#321714',
          },
          'hot-pink': {
            5: '#FFF5FC',
            10: '#FFE3F5',
            20: '#FFC4EC',
            30: '#FFAAE2',
            40: '#FF8DD9',
            50: '#FF6FCE',
            60: '#CC59A5',
            70: '#99437C',
            80: '#662C53',
            90: '#331629',
          },
          pink: {
            5: '#FFF0F8',
            10: '#FFD0E9',
            20: '#FFA1D4',
            30: '#FF72BE',
            40: '#FF43A9',
            50: '#FF1493',
            60: '#CC1076',
            70: '#990C58',
            80: '#66083B',
            90: '#33041D',
          },
          fuchsia: {
            5: '#FDF2FD',
            10: '#F901F9',
            20: '#F2A3F2',
            30: '#EC75EC',
            40: '#E547E5',
            50: '#DF19DF',
          },
          purple: {
            5: '#F5EEF7',
            10: '#E1CCE6',
            20: '#C499CC',
            30: '#A666B3',
            40: '#893399',
            50: '#600080',
            60: '#4D0066',
            70: '#3A004D',
            80: '#260033',
            90: '#13001A',
          },
          'blue-violet': {
            5: '#F4EFFA',
            10: '#DED1F1',
            20: '#BDA2E3',
            30: '#9B74D4',
            40: '#7A45C6',
            50: '#5917B8',
            60: '#471293',
            70: '#350E6E',
            80: '#24094A',
            90: '#120525',
          },
        },
        fontSize: {
          'display-l': ['66px', { lineHeight: '150%', letterSpacing: '1px' }],
          'display-m': ['50px', { lineHeight: '150%', letterSpacing: '1px' }],
          'display-s': ['40px', { lineHeight: '150%', letterSpacing: '1px' }],
          'display-l-mobile': [
            '40px',
            { lineHeight: '150%', letterSpacing: '1px' },
          ],
          'display-m-mobile': [
            '32px',
            { lineHeight: '150%', letterSpacing: '1px' },
          ],
          'display-s-mobile': [
            '25px',
            { lineHeight: '150%', letterSpacing: '1px' },
          ],

          // Heading
          'heading-l': ['50px', { lineHeight: '150%', letterSpacing: '1px' }],
          'heading-m': ['40px', { lineHeight: '150%', letterSpacing: '1px' }],
          'heading-s': ['32px', { lineHeight: '150%', letterSpacing: '1px' }],
          'heading-l-mobile': [
            '40px',
            { lineHeight: '150%', letterSpacing: '1px' },
          ],
          'heading-m-mobile': [
            '32px',
            { lineHeight: '150%', letterSpacing: '1px' },
          ],
          'heading-s-mobile': [
            '25px',
            { lineHeight: '150%', letterSpacing: '1px' },
          ],

          // Title
          'title-xxl': ['32px', { lineHeight: '150%', letterSpacing: '1px' }],
          'title-xl': ['25px', { lineHeight: '150%' }],
          'title-l': ['21px', { lineHeight: '150%' }],
          'title-m': ['19px', { lineHeight: '150%' }],
          'title-s': ['17px', { lineHeight: '150%' }],
          'title-xs': ['15px', { lineHeight: '150%' }],
          'title-xxl-mobile': [
            '25px',
            { lineHeight: '150%', letterSpacing: '1px' },
          ],
          'title-xl-mobile': ['25px', { lineHeight: '150%' }],
          'title-l-mobile': ['21px', { lineHeight: '150%' }],
          'title-m-mobile': ['19px', { lineHeight: '150%' }],
          'title-s-mobile': ['17px', { lineHeight: '150%' }],
          'title-xs-mobile': ['15px', { lineHeight: '150%' }],

          // Body
          'body-l': ['19px', { lineHeight: '150%' }],
          'body-m': ['17px', { lineHeight: '150%' }],
          'body-s': ['15px', { lineHeight: '150%' }],
          'body-l-mobile': ['19px', { lineHeight: '150%' }],
          'body-m-mobile': ['17px', { lineHeight: '150%' }],
          'body-s-mobile': ['15px', { lineHeight: '150%' }],

          // Detail
          'detail-l': ['17px', { lineHeight: '150%' }],
          'detail-m': ['15px', { lineHeight: '150%' }],
          'detail-s': ['13px', { lineHeight: '150%' }],
          'detail-l-mobile': ['17px', { lineHeight: '150%' }],
          'detail-m-mobile': ['15px', { lineHeight: '150%' }],
          'detail-s-mobile': ['13px', { lineHeight: '150%' }],

          // Label
          'label-l': ['19px', { lineHeight: '150%' }],
          'label-m': ['17px', { lineHeight: '150%' }],
          'label-s': ['15px', { lineHeight: '150%' }],
          'label-xs': ['13px', { lineHeight: '150%' }],
          'label-l-mobile': ['19px', { lineHeight: '150%' }],
          'label-m-mobile': ['17px', { lineHeight: '150%' }],
          'label-s-mobile': ['15px', { lineHeight: '150%' }],
          'label-xs-mobile': ['13px', { lineHeight: '150%' }],

          // Link
          'link-l': ['19px', { lineHeight: '150%' }],
          'link-m': ['17px', { lineHeight: '150%' }],
          'link-s': ['15px', { lineHeight: '150%' }],
          'link-l-mobile': ['19px', { lineHeight: '150%' }],
          'link-m-mobile': ['17px', { lineHeight: '150%' }],
          'link-s-mobile': ['15px', { lineHeight: '150%' }],
        },
        fontWeight: {
          regular: 400,
          bold: 700,
        },
        spacing: {
          0: '0px',
          1: '2px',
          2: '4px',
          3: '8px',
          4: '12px',
          5: '16px',
          6: '20px',
          7: '24px',
          8: '32px',
          9: '40px',
          10: '48px',
        },
        borderRadius: {
          0: '0',
          1: '2px',
          2: '4px',
          3: '6px',
          4: '8px',
          5: '12px',
          6: '16px',
          7: '20px',
          8: '24px',
          9: '40px',
        },
      },
    },
  },
);
