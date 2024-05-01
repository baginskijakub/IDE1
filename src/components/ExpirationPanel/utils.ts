export interface ExpirationData {
  name: string
  expirationDate: Date
  quantity: number
  link: string
}

export const expirationMocks: ExpirationData[] = [
  {
    name: 'Ibuprofen 400mg',
    quantity: 50,
    expirationDate: new Date('2024-12-31'),
    link: 'https://pro.medicin.dk/Medicin/Indholdsstoffer/551',
  },
  {
    name: 'Paracetamol 500mg',
    quantity: 30,
    expirationDate: new Date('2023-10-15'),
    link: 'https://pro.medicin.dk/Laegemiddelgrupper/Grupper/229060',
  },
  {
    name: 'Aspirin 81mg',
    quantity: 20,
    expirationDate: new Date('2025-05-20'),
    link: 'https://pro.medicin.dk/Laegemiddelgrupper/Grupper/291041',
  },
  {
    name: 'Loratadine 10mg',
    quantity: 40,
    expirationDate: new Date('2024-08-25'),
    link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
  },
  {
    name: 'Omeprazole 20mg',
    quantity: 60,
    expirationDate: new Date('2024-03-10'),
    link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
  },
  {
    name: 'Acetaminophen 325mg',
    quantity: 25,
    expirationDate: new Date('2024-06-15'),
    link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
  },
  {
    name: 'Diphenhydramine 25mg',
    quantity: 35,
    expirationDate: new Date('2025-01-05'),
    link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
  },
  {
    name: 'Ranitidine 150mg',
    quantity: 15,
    expirationDate: new Date('2023-11-30'),
    link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
  },
  {
    name: 'Cetirizine 10mg',
    quantity: 45,
    expirationDate: new Date('2024-09-20'),
    link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
  },
  {
    name: 'Lisinopril 10mg',
    quantity: 20,
    expirationDate: new Date('2023-07-12'),
    link: 'https://pro.medicin.dk/Medicin/Praeparater/3027',
  },
]
