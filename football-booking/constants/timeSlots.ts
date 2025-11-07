import { TimeSlot } from '@/types';

/**
 * Available time slots for booking football grounds
 */
export const TIME_SLOTS: readonly TimeSlot[] = [
  { value: '08:00', label: '08:00 AM - 09:00 AM' },
  { value: '09:00', label: '09:00 AM - 10:00 AM' },
  { value: '10:00', label: '10:00 AM - 11:00 AM' },
  { value: '11:00', label: '11:00 AM - 12:00 PM' },
  { value: '14:00', label: '02:00 PM - 03:00 PM' },
  { value: '15:00', label: '03:00 PM - 04:00 PM' },
  { value: '16:00', label: '04:00 PM - 05:00 PM' },
  { value: '17:00', label: '05:00 PM - 06:00 PM' },
  { value: '18:00', label: '06:00 PM - 07:00 PM' },
  { value: '19:00', label: '07:00 PM - 08:00 PM' },
] as const;
