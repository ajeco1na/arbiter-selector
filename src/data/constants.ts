import type { CauseId, EffectId } from '../types';

export const CAUSE_LABELS: Record<CauseId, string> = {
  'attacks-3x': 'When an Arbiter attacks 3 times',
  'combat-start-per-star': 'Combat Start: Per Arbiter star level',
  'enemy-dies': 'When an enemy dies',
  'deals-damage-10x': 'When an Arbiter deals damage 10 times',
  'combat-start-per-interest': 'Combat Start: Per interest gained',
  'every-4s': 'Every 4 seconds',
  'spends-50-mana': 'When an Arbiter spends 50 mana',
  'combat-start-if-rerolled': 'Combat Start: If rerolled last phase',
  'first-time-below-40hp': 'First time below 40% HP',
};

export const EFFECT_LABELS: Record<EffectId, string> = {
  'max-health': 'Max Health',
  'shield': 'Shield',
  'armor-mr': 'Armor + Magic Resist',
  'attack-speed': 'Attack Speed',
  'ability-power': 'Ability Power',
  'mana': 'Mana',
  'chance-gold': 'Chance of Gold',
  'chance-reroll': 'Chance of Reroll',
  'chance-leona': 'Chance of Leona',
};

export const EFFECT_LABELS_FULL: Record<EffectId, string> = {
  'max-health': 'Arbiters gain Max Health',
  'shield': 'Arbiters gain Shield',
  'armor-mr': 'Arbiters gain Armor + Magic Resist',
  'attack-speed': 'Arbiters gain Attack Speed',
  'ability-power': 'Arbiters gain Ability Power',
  'mana': 'Arbiters gain Mana',
  'chance-gold': 'Arbiters gain Chance of Gold',
  'chance-reroll': 'Arbiters gain Chance of Reroll',
  'chance-leona': 'Arbiters gain Chance of Leona',
};

export const ALL_CAUSES: CauseId[] = [
  'attacks-3x', 'combat-start-per-star', 'enemy-dies',
  'deals-damage-10x', 'combat-start-per-interest', 'every-4s',
  'spends-50-mana', 'combat-start-if-rerolled', 'first-time-below-40hp',
];

export const ALL_EFFECTS: EffectId[] = [
  'max-health', 'shield', 'armor-mr', 'attack-speed',
  'ability-power', 'mana', 'chance-gold', 'chance-reroll', 'chance-leona',
];

export const STAT_ICONS: Record<EffectId, string> = {
  'max-health': 'Health',
  'shield': 'Shield',
  'armor-mr': 'Defense',
  'attack-speed': 'AttackSpeed',
  'ability-power': 'AbilityPower',
  'mana': 'Mana',
  'chance-gold': 'Gold',
  'chance-reroll': 'Reroll',
  'chance-leona': 'Champion',
};
