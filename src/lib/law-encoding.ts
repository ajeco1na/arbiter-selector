import type { CauseId, EffectId } from '../types';
import { ALL_CAUSES, ALL_EFFECTS } from '../data/constants';
import { isValidCombination } from './law-utils';

export function causeToSlug(cause: CauseId): string {
  return cause;
}

export function effectToSlug(effect: EffectId): string {
  return effect;
}

export function slugToCause(slug: string): CauseId | null {
  if (ALL_CAUSES.includes(slug as CauseId)) {
    return slug as CauseId;
  }
  return null;
}

export function slugToEffect(slug: string): EffectId | null {
  if (ALL_EFFECTS.includes(slug as EffectId)) {
    return slug as EffectId;
  }
  return null;
}

export function encodeToUrl(cause: CauseId | null, effect: EffectId | null): string {
  if (!cause || !effect) return '';

  const params = new URLSearchParams();
  params.set('cause', causeToSlug(cause));
  params.set('effect', effectToSlug(effect));

  return `?${params.toString()}`;
}

export function decodeFromUrl(search?: string): {
  cause: CauseId | null;
  effect: EffectId | null;
} {
  const queryString = search ?? window.location.search;
  const params = new URLSearchParams(queryString);

  const causeSlug = params.get('cause');
  const effectSlug = params.get('effect');

  if (!causeSlug || !effectSlug) {
    return { cause: null, effect: null };
  }

  const cause = slugToCause(causeSlug);
  const effect = slugToEffect(effectSlug);

  if (cause && effect && isValidCombination(cause, effect)) {
    return { cause, effect };
  }

  return { cause: null, effect: null };
}

export function isValidUrlParams(search?: string): boolean {
  const { cause, effect } = decodeFromUrl(search);
  return cause !== null && effect !== null;
}

export function updateUrl(cause: CauseId | null, effect: EffectId | null): void {
  const query = encodeToUrl(cause, effect);
  const newUrl = query ? `${window.location.pathname}${query}` : window.location.pathname;
  window.history.replaceState({}, '', newUrl);
}
