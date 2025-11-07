import { Ground } from './ground';

/**
 * Represents a booking made by a user
 */
export interface Booking {
  /** Unique identifier for the booking */
  id: string;
  /** Reference to the booked ground */
  ground: Ground;
  /** Name of the person making the booking */
  playerName: string;
  /** Date of the booking in ISO format */
  bookingDate: string;
  /** Time slot for the booking (e.g., "08:00", "14:00") */
  bookingTime: string;
  /** Timestamp when the booking was created */
  createdAt: Date;
}

/**
 * Form data for creating a new booking
 */
export interface BookingFormData {
  /** Name of the person making the booking */
  playerName: string;
  /** Date of the booking */
  bookingDate: string;
  /** Time slot for the booking */
  bookingTime: string;
}

/**
 * Available time slots for booking
 */
export interface TimeSlot {
  /** Time value (e.g., "08:00") */
  value: string;
  /** Display label (e.g., "08:00 AM - 09:00 AM") */
  label: string;
}
