
export interface User {
    name: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
    token?: string;
}

export const list: User[] = [
    {
        name: 'Adithya',
        handle: 'Adhi',
        password: 'password',
        email: 'parimia@newpaltz.edu',
        pic: 'https://randomuser.me/api/portraits/men/1.jpg',
        id: 1,
    },
    {
        name: 'Sasi',
        handle: 'sasi',
        password: 'password',
        email: 'maddinenis2@newpaltz.com',
        pic: 'https://randomuser.me/api/portraits/men/2.jpg',
        id: 2,
    },
    {
        name: 'Ramu',
        handle: 'ram',
        password: 'password',
        email: 'malempar2@newpaltz.edu',
        pic: 'https://randomuser.me/api/portraits/women/3.jpg',
        id: 3,
    },
];
