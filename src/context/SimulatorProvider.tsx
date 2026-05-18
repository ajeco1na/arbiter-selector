import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { CauseId, EffectId } from '../types';
import { randomRoll } from '../lib/law-utils';

interface SimulatorState {
  causes: CauseId[];
  effects: EffectId[];
  selectedCause: CauseId | null;
  selectedEffect: EffectId | null;
}

interface SimulatorContextValue extends SimulatorState {
  roll: () => void;
  selectCause: (cause: CauseId) => void;
  selectEffect: (effect: EffectId) => void;
  resetSelection: () => void;
}

const SimulatorContext = createContext<SimulatorContextValue | null>(null);

export function SimulatorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SimulatorState>(() => {
    const roll = randomRoll();
    return {
      causes: roll?.causes ?? [],
      effects: roll?.effects ?? [],
      selectedCause: null,
      selectedEffect: null,
    };
  });

  const roll = useCallback(() => {
    const newRoll = randomRoll();
    if (newRoll) {
      setState({
        causes: newRoll.causes,
        effects: newRoll.effects,
        selectedCause: null,
        selectedEffect: null,
      });
    }
  }, []);

  const selectCause = useCallback((cause: CauseId) => {
    setState(prev => ({
      ...prev,
      selectedCause: prev.selectedCause === cause ? null : cause,
    }));
  }, []);

  const selectEffect = useCallback((effect: EffectId) => {
    setState(prev => ({
      ...prev,
      selectedEffect: prev.selectedEffect === effect ? null : effect,
    }));
  }, []);

  const resetSelection = useCallback(() => {
    setState(prev => ({ ...prev, selectedCause: null, selectedEffect: null }));
  }, []);

  return (
    <SimulatorContext.Provider value={{ ...state, roll, selectCause, selectEffect, resetSelection }}>
      {children}
    </SimulatorContext.Provider>
  );
}

export function useSimulator() {
  const ctx = useContext(SimulatorContext);
  if (!ctx) throw new Error('useSimulator must be used within SimulatorProvider');
  return ctx;
}
