import { createContext, useContext, useState, useCallback, type ReactNode, useEffect } from 'react';
import type { CauseId, EffectId } from '../types';
import { decodeFromUrl, updateUrl } from '../lib/law-encoding';
import { getValidEffects } from '../lib/law-utils';

interface ExplorerContextValue {
  selectedCause: CauseId | null;
  selectedEffect: EffectId | null;
  selectCause: (cause: CauseId) => void;
  selectEffect: (effect: EffectId) => void;
  clearSelection: () => void;
  validEffects: EffectId[];
}

const ExplorerContext = createContext<ExplorerContextValue | null>(null);

export function ExplorerProvider({ children }: { children: ReactNode }) {
  const initial = decodeFromUrl();

  const [selectedCause, setSelectedCause] = useState<CauseId | null>(initial.cause);
  const [selectedEffect, setSelectedEffect] = useState<EffectId | null>(initial.effect);

  const validEffects = selectedCause ? getValidEffects(selectedCause) : [];

  useEffect(() => {
    updateUrl(selectedCause, selectedEffect);
  }, [selectedCause, selectedEffect]);

  const selectCause = useCallback((cause: CauseId) => {
    setSelectedCause(prev => {
      if (prev === cause) return null;
      return cause;
    });
    setSelectedEffect(null);
  }, []);

  const selectEffect = useCallback((effect: EffectId) => {
    setSelectedEffect(prev => prev === effect ? null : effect);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedCause(null);
    setSelectedEffect(null);
  }, []);

  return (
    <ExplorerContext.Provider value={{
      selectedCause,
      selectedEffect,
      selectCause,
      selectEffect,
      clearSelection,
      validEffects,
    }}>
      {children}
    </ExplorerContext.Provider>
  );
}

export function useExplorer() {
  const ctx = useContext(ExplorerContext);
  if (!ctx) throw new Error('useExplorer must be used within ExplorerProvider');
  return ctx;
}
