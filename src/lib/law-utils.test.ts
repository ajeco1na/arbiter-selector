import { describe, it, expect } from 'vitest';
import {
  isValidCombination,
  getValidEffects,
  getValidCauses,
  getLawValue,
  randomRoll,
  countValidCombinations,
  getValidEffectCount,
} from './law-utils';

describe('isValidCombination', () => {
  it('returns true for valid combinations', () => {
    expect(isValidCombination('attacks-3x', 'max-health')).toBe(true);
    expect(isValidCombination('enemy-dies', 'shield')).toBe(true);
  });

  it('returns false for invalid (null) combinations', () => {
    expect(isValidCombination('attacks-3x', 'armor-mr')).toBe(false);
    expect(isValidCombination('attacks-3x', 'chance-gold')).toBe(false);
    expect(isValidCombination('combat-start-if-rerolled', 'chance-reroll')).toBe(false);
  });
});

describe('getValidEffects', () => {
  it('returns only valid effects for a cause', () => {
    const effects = getValidEffects('attacks-3x');
    expect(effects).toContain('max-health');
    expect(effects).not.toContain('armor-mr');
    expect(effects.length).toBeGreaterThan(0);
  });

  it('returns all effects for causes with no null entries', () => {
    const effects = getValidEffects('first-time-below-40hp');
    expect(effects.length).toBe(9);
  });
});

describe('getValidCauses', () => {
  it('returns all causes for effects that are always valid', () => {
    const causes = getValidCauses('max-health');
    expect(causes.length).toBe(9);
  });

  it('excludes causes where the effect is null', () => {
    const causes = getValidCauses('armor-mr');
    expect(causes).not.toContain('attacks-3x');
    expect(causes.length).toBeLessThan(9);
  });
});

describe('getLawValue', () => {
  it('returns LawValues for valid combinations', () => {
    const value = getLawValue('enemy-dies', 'max-health');
    expect(value).not.toBeNull();
    expect(value!.tier2).toBe('10');
    expect(value!.tier3).toBe('15');
  });

  it('returns null for invalid combinations', () => {
    expect(getLawValue('attacks-3x', 'armor-mr')).toBeNull();
  });
});

describe('randomRoll', () => {
  it('returns 3 causes and some effects', () => {
    const roll = randomRoll();
    expect(roll).not.toBeNull();
    expect(roll!.causes.length).toBe(3);
    expect(roll!.effects.length).toBeGreaterThan(0);
    expect(roll!.effects.length).toBeLessThanOrEqual(3);
  });

  it('guarantees at least one valid combination exists', () => {
    for (let i = 0; i < 20; i++) {
      const roll = randomRoll();
      expect(roll).not.toBeNull();

      const hasValidCombo = roll!.causes.some(cause =>
        roll!.effects.some(effect => isValidCombination(cause, effect))
      );
      expect(hasValidCombo).toBe(true);
    }
  });
});

describe('countValidCombinations', () => {
  it('returns the correct count of valid cells', () => {
    const count = countValidCombinations();
    expect(count).toBe(72);
  });
});

describe('getValidEffectCount', () => {
  it('returns correct count per cause', () => {
    expect(getValidEffectCount('first-time-below-40hp')).toBe(9);
    expect(getValidEffectCount('attacks-3x')).toBe(6);
    expect(getValidEffectCount('combat-start-if-rerolled')).toBe(7);
  });
});
