import { Ground } from '@/types';

/**
 * Available football grounds for booking
 */
export const grounds: Ground[] = [
  {
    id: 1,
    name: 'Premier Football Arena',
    location: 'Downtown Sports Complex',
    price: 50,
    size: '11-a-side',
    surface: 'Natural Grass',
    image: '🏟️',
  },
  {
    id: 2,
    name: 'City Sports Ground',
    location: 'North Park',
    price: 35,
    size: '7-a-side',
    surface: 'Artificial Turf',
    image: '⚽',
  },
  {
    id: 3,
    name: 'Elite Football Pitch',
    location: 'West End Stadium',
    price: 60,
    size: '11-a-side',
    surface: 'Hybrid Grass',
    image: '🏟️',
  },
  {
    id: 4,
    name: 'Community Football Field',
    location: 'East Side Recreation',
    price: 25,
    size: '5-a-side',
    surface: 'Artificial Turf',
    image: '⚽',
  },
];
