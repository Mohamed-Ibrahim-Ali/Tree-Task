/** Example file/folder data. */


export const files = [
  {
    name: '[ 1000000000 ] Assets',
    type: 'folder',
    children: [
      {
        name: '[ 1100000000 ] Current Assets',
        type: 'folder',
        children: [
          {
            name: '[ 1110000000 ] Cash and cash equivalents',
            type: 'folder',
            children: [
              { name: '[ 1111000000 ] Banks Accounts', type: 'file' },
              { name: '[ 1111100000 ] Cib Acount', type: 'file' },
            ]
          },
          { name: '[ 1111100000 ] Petty Cash - Ahmed Shoki', type: 'file' },
          { name: '[ 1111100000 ] ADIB Account', type: 'file' }
        ]
      }
    ]
  },
  {
    name: '[ 1111000000 ] Computers & Network',
    type: 'folder',
    children: [
      {
        name: '[ 2110000000 ]  Accrued Commissions',
        type: 'folder',
        children: [
          { name: '[ 2111000000 ] Staff Commissions', type: 'file' },
          { name: '[ 2110000000 ] Vendors', type: 'file' }
        ]
      }
    ]
  },
  {
    name: '[ 1110000000 ] Intangible Assets',
    type: 'folder',
    children: [
      { name: '[ 2111000000 ] Accounts Payable & Accrued Expenses', type: 'file' },
      { name: '[ 2111000000 ] Transportation Vendors', type: 'file' }
    ]
  }
];
