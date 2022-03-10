
export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
}

export const list: User[] = [
    {
        firstName: 'Adithya',
        lastName: 'Parimi',
        handle: 'Adhi',
        password: 'password',
        email: 'parimia@newpaltz.edu',
        pic: 'https://randomuser.me/api/portraits/men/1.jpg',
        id: 1,
    },
    {
        firstName: 'Sasi',
        lastName: 'Maddineni',
        handle: 'sasi',
        password: 'password',
        email: 'maddinenis2@newpaltz.com',
        pic: 'https://randomuser.me/api/portraits/men/2.jpg',
        id: 2,
    },
    {
        firstName: 'Ramu',
        lastName: 'Malemapati',
        handle: 'ram',
        password: 'password',
        email: 'malempar2@newpaltz.edu',
        pic: 'https://randomuser.me/api/portraits/women/3.jpg',
        id: 3,
    },
];
