export interface ExpirationData {
    name: string
    expirationDate: Date
    quantity: number
}

export const expirationMocks: ExpirationData[] = [
    {
        name: 'Ibuprofen 400mg',
        quantity: 50,
        expirationDate: new Date('2024-12-31')
    },
    {
        name: 'Paracetamol 500mg',
        quantity: 30,
        expirationDate: new Date('2023-10-15')
    },
    {
        name: 'Aspirin 81mg',
        quantity: 20,
        expirationDate: new Date('2025-05-20')
    },
    {
        name: 'Loratadine 10mg',
        quantity: 40,
        expirationDate: new Date('2024-08-25')
    },
    {
        name: 'Omeprazole 20mg',
        quantity: 60,
        expirationDate: new Date('2024-03-10')
    },
    {
        name: 'Acetaminophen 325mg',
        quantity: 25,
        expirationDate: new Date('2024-06-15')
    },
    {
        name: 'Diphenhydramine 25mg',
        quantity: 35,
        expirationDate: new Date('2025-01-05')
    },
    {
        name: 'Ranitidine 150mg',
        quantity: 15,
        expirationDate: new Date('2023-11-30')
    },
    {
        name: 'Cetirizine 10mg',
        quantity: 45,
        expirationDate: new Date('2024-09-20')
    },
    {
        name: 'Lisinopril 10mg',
        quantity: 20,
        expirationDate: new Date('2023-07-12')
    }
];