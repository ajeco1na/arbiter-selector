import type { CauseId, EffectId, LawValues } from '../types';
import { LAW_MATRIX } from '../data/arbiter-data';
import { ALL_CAUSES, ALL_EFFECTS } from '../data/constants';

export function isValidCombination(cause: CauseId, effect: EffectId): boolean {
  return LAW_MATRIX[cause][effect] !== null;
}

export function getValidEffects(cause: CauseId): EffectId[] {
  return ALL_EFFECTS.filter(effect => isValidCombination(cause, effect));
}

export function getValidCauses(effect: EffectId): CauseId[] {
  return ALL_CAUSES.filter(cause => isValidCombination(cause, effect));
}

export function getLawValue(cause: CauseId, effect: EffectId): LawValues | null {
  return LAW_MATRIX[cause][effect];
}

function randomPick<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function randomRoll(maxAttempts: number = 10): {
  causes: CauseId[];
  effects: EffectId[];
} | null {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const causes = randomPick(ALL_CAUSES, 3);

    const validEffectsSet = new Set<EffectId>();
    for (const cause of causes) {
      for (const effect of getValidEffects(cause)) {
        validEffectsSet.add(effect);
      }
    }

    const validEffects = Array.from(validEffectsSet);

    if (validEffects.length === 0) continue;

    const effects = randomPick(validEffects, Math.min(3, validEffects.length));

    return { causes, effects };
  }

  return {
    causes: ['attacks-3x', ...randomPick(ALL_CAUSES.filter(c => c !== 'attacks-3x'), 2)],
    effects: ['max-health', ...randomPick(getValidEffects('attacks-3x').filter(e => e !== 'max-health'), Math.min(2, getValidEffects('attacks-3x').length - 1))],
  };
}

export function countValidCombinations(): number {
  let count = 0;
  for (const cause of ALL_CAUSES) {
    for (const effect of ALL_EFFECTS) {
      if (isValidCombination(cause, effect)) count++;
    }
  }
  return count;
}

export function getValidEffectCount(cause: CauseId): number {
  return getValidEffects(cause).length;
}
