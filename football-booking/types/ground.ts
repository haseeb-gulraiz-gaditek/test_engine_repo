/**
 * Represents a football ground available for booking
 */
export interface Ground {
  /** Unique identifier for the ground */
  id: number;
  /** Name of the football ground */
  name: string;
  /** Physical location/address of the ground */
  location: string;
  /** Hourly rate in dollars */
  price: number;
  /** Ground size (e.g., "11-a-side", "7-a-side", "5-a-side") */
  size: string;
  /** Surface type (e.g., "Natural Grass", "Artificial Turf", "Hybrid Grass") */
  surface: string;
  /** Emoji representation for visual display */
  image: string;
}
