// Cause IDs — match the 9 triggers
export type CauseId =
  | 'attacks-3x'
  | 'combat-start-per-star'
  | 'enemy-dies'
  | 'deals-damage-10x'
  | 'combat-start-per-interest'
  | 'every-4s'
  | 'spends-50-mana'
  | 'combat-start-if-rerolled'
  | 'first-time-below-40hp';

// Effect IDs — match the 9 buffs
export type EffectId =
  | 'max-health'
  | 'shield'
  | 'armor-mr'
  | 'attack-speed'
  | 'ability-power'
  | 'mana'
  | 'chance-gold'
  | 'chance-reroll'
  | 'chance-leona';

// Values for a single law combination (2 Arbiters vs 3 Arbiters)
export interface LawValues {
  tier2: string;
  tier3: string;
}

// The 9x9 matrix — null means invalid combination
export type ArbiterMatrix = Record<CauseId, Record<EffectId, LawValues | null>>;

// Champion reference data
export interface Champion {
  id: string;
  name: string;
  cost: number;
  secondarySynergy: string;
  role: string;
}

// Law selection state
export interface LawSelection {
  cause: CauseId | null;
  effect: EffectId | null;
}

// Simulator state
export interface SimulatorState {
  availableCauses: CauseId[];
  availableEffects: EffectId[];
  selection: LawSelection;
}

// App state for URL encoding
export interface EncodedLaw {
  cause: string;
  effect: string;
}
