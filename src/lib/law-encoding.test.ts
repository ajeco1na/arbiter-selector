import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  causeToSlug,
  effectToSlug,
  slugToCause,
  slugToEffect,
  encodeToUrl,
  decodeFromUrl,
  isValidUrlParams,
  updateUrl,
} from './law-encoding';
import type { CauseId, EffectId } from '../types';

describe('causeToSlug / effectToSlug', () => {
  it('returns the same string (identity for kebab-case IDs)', () => {
    expect(causeToSlug('attacks-3x')).toBe('attacks-3x');
    expect(effectToSlug('max-health')).toBe('max-health');
  });
});

describe('slugToCause / slugToEffect', () => {
  it('returns the ID for valid slugs', () => {
    expect(slugToCause('attacks-3x')).toBe('attacks-3x');
    expect(slugToEffect('max-health')).toBe('max-health');
  });

  it('returns null for invalid slugs', () => {
    expect(slugToCause('invalid-cause')).toBeNull();
    expect(slugToEffect('invalid-effect')).toBeNull();
    expect(slugToCause('')).toBeNull();
  });
});

describe('encodeToUrl', () => {
  it('returns query string for valid selections', () => {
    const url = encodeToUrl('attacks-3x', 'max-health');
    expect(url).toBe('?cause=attacks-3x&effect=max-health');
  });

  it('returns empty string if either is null', () => {
    expect(encodeToUrl(null, 'max-health')).toBe('');
    expect(encodeToUrl('attacks-3x', null)).toBe('');
    expect(encodeToUrl(null, null)).toBe('');
  });
});

describe('decodeFromUrl', () => {
  it('decodes valid URL parameters', () => {
    const result = decodeFromUrl('?cause=attacks-3x&effect=max-health');
    expect(result.cause).toBe('attacks-3x');
    expect(result.effect).toBe('max-health');
  });

  it('returns nulls for missing parameters', () => {
    const result = decodeFromUrl('');
    expect(result.cause).toBeNull();
    expect(result.effect).toBeNull();
  });

  it('returns nulls for invalid cause slug', () => {
    const result = decodeFromUrl('?cause=invalid&effect=max-health');
    expect(result.cause).toBeNull();
    expect(result.effect).toBeNull();
  });

  it('returns nulls for invalid combination (null in matrix)', () => {
    const result = decodeFromUrl('?cause=attacks-3x&effect=armor-mr');
    expect(result.cause).toBeNull();
    expect(result.effect).toBeNull();
  });
});

describe('isValidUrlParams', () => {
  it('returns true for valid params', () => {
    expect(isValidUrlParams('?cause=attacks-3x&effect=max-health')).toBe(true);
  });

  it('returns false for invalid params', () => {
    expect(isValidUrlParams('?cause=invalid&effect=max-health')).toBe(false);
    expect(isValidUrlParams('')).toBe(false);
  });
});

describe('updateUrl', () => {
  const replaceStateMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal('location', { pathname: '/arbiter-selector/' });
    vi.stubGlobal('history', { replaceState: replaceStateMock });
    replaceStateMock.mockClear();
  });

  it('updates the browser URL', () => {
    updateUrl('attacks-3x', 'max-health');
    expect(replaceStateMock).toHaveBeenCalledWith(
      {},
      '',
      '/arbiter-selector/?cause=attacks-3x&effect=max-health'
    );
  });

  it('clears query string when both are null', () => {
    updateUrl(null, null);
    expect(replaceStateMock).toHaveBeenCalledWith(
      {},
      '',
      '/arbiter-selector/'
    );
  });
});

describe('roundtrip encode/decode', () => {
  it('encode then decode returns original values', () => {
    const cause: CauseId = 'enemy-dies';
    const effect: EffectId = 'shield';

    const encoded = encodeToUrl(cause, effect);
    const decoded = decodeFromUrl(encoded);

    expect(decoded.cause).toBe(cause);
    expect(decoded.effect).toBe(effect);
  });
});
