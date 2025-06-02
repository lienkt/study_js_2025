 /* bai tap reduce: count values in object 
  input = ['Truong', 'Tony', 'Hau', 'Truong', 'Truong', 'Hau'];
  output = {
    'Truong': 3,
    'Tony': 1,
    'Hau': 2
  }
  */

  /* bai tap reduce:  group object by a property
    input = [
      { name: 'Truong', age: 20 },
      { name: 'Hau', age: 20 },
      { name: 'Tony', age: 32 },
      { name: 'Duy', age: 21 },
      { name: 'Duy', age: 20 },
    ];
    output group by age
    {
      20: [
        { name: 'Truong', age: 20 },
        { name: 'Hau', age: 20 },
      ],
      32: [
        { name: 'Tony', age: 32 },
      ],
      21: [
        { name: 'Duy', age: 21 }
      ]
    }
  */

  /* bai tap reduce: concat array
   input = [
      {
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21,
      },
      {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26,
      },
      {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18,
      },
    ];
    output
    [
      'Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining'
    ]
  */
