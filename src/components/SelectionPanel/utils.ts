interface Data {
  cpr: string
  medicines: {
    name: string
    quantity: number
    link: string
  }[]
}

export const mockedData: Data[] = [
  {
    cpr: '010124-1234',
    medicines: [
      {
        name: 'Ibuprofen 400mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Indholdsstoffer/551',
      },
      {
        name: 'Acetaminophen 325mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Diphenhydramine 25mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '150424-5678',
    medicines: [
      {
        name: 'Paracetamol 500mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Laegemiddelgrupper/Grupper/229060',
      },
      {
        name: 'Aspirin 81mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Laegemiddelgrupper/Grupper/291041',
      },
    ],
  },
  {
    cpr: '200424-9012',
    medicines: [
      {
        name: 'Loratadine 10mg',
        quantity: 5,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Omeprazole 20mg',
        quantity: 4,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '030624-2468',
    medicines: [
      {
        name: 'Acetaminophen 325mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Diphenhydramine 25mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '280724-1357',
    medicines: [
      {
        name: 'Ranitidine 150mg',
        quantity: 6,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Cetirizine 10mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Acetaminophen 325mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Diphenhydramine 25mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '110824-7890',
    medicines: [
      {
        name: 'Lisinopril 10mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Simvastatin 20mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Metformin 500mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '090924-3579',
    medicines: [
      {
        name: 'Amoxicillin 500mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Atorvastatin 20mg',
        quantity: 4,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Montelukast 10mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '131024-8025',
    medicines: [
      {
        name: 'Cephalexin 500mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Fluoxetine 20mg',
        quantity: 5,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Levothyroxine 50mcg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '050124-4680',
    medicines: [
      {
        name: 'Losartan 50mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Metoprolol 50mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '240224-7912',
    medicines: [
      {
        name: 'Ibuprofen 400mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Indholdsstoffer/551',
      },
      {
        name: 'Acetaminophen 325mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Diphenhydramine 25mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '160324-2468',
    medicines: [
      {
        name: 'Paracetamol 500mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Laegemiddelgrupper/Grupper/229060',
      },
      {
        name: 'Aspirin 81mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Laegemiddelgrupper/Grupper/291041',
      },
    ],
  },
  {
    cpr: '190424-5310',
    medicines: [
      {
        name: 'Loratadine 10mg',
        quantity: 5,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Omeprazole 20mg',
        quantity: 4,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '070524-9753',
    medicines: [
      {
        name: 'Acetaminophen 325mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Diphenhydramine 25mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '040624-4680',
    medicines: [
      {
        name: 'Ranitidine 150mg',
        quantity: 6,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Cetirizine 10mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Acetaminophen 325mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Diphenhydramine 25mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '230724-8025',
    medicines: [
      {
        name: 'Lisinopril 10mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Simvastatin 20mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Metformin 500mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '081024-1357',
    medicines: [
      {
        name: 'Amoxicillin 500mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Atorvastatin 20mg',
        quantity: 4,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Montelukast 10mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '270124-3579',
    medicines: [
      {
        name: 'Cephalexin 500mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Fluoxetine 20mg',
        quantity: 5,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Levothyroxine 50mcg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '140224-2468',
    medicines: [
      {
        name: 'Losartan 50mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Metoprolol 50mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '220324-9012',
    medicines: [
      {
        name: 'Ibuprofen 400mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Indholdsstoffer/551',
      },
      {
        name: 'Acetaminophen 325mg',
        quantity: 2,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
      {
        name: 'Diphenhydramine 25mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
      },
    ],
  },
  {
    cpr: '100424-7912',
    medicines: [
      {
        name: 'Paracetamol 500mg',
        quantity: 3,
        link: 'https://pro.medicin.dk/Laegemiddelgrupper/Grupper/229060',
      },
      {
        name: 'Aspirin 81mg',
        quantity: 1,
        link: 'https://pro.medicin.dk/Laegemiddelgrupper/Grupper/291041',
      },
    ],
  },
]
