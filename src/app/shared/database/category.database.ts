import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    {
        title: 'All',
        icon: 'description',
        value: 'evidences',
        color: 'teal',
        url: '/home/evidence'
    },
    {
        title: 'Visited',
        icon: 'visibility',
        value: 'visited',
        color: '#c2185b',
        url: '/home/visited'
    }
];
