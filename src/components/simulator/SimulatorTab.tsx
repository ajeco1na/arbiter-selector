import { SimulatorProvider, useSimulator } from '../../context/SimulatorProvider';
import { LawGrid } from './LawGrid';
import { LawResult, EmptyState } from '../shared';
import { getLawValue } from '../../lib/law-utils';
import { CAUSE_LABELS, EFFECT_LABELS } from '../../data/constants';
import type { CauseId, EffectId } from '../../types';

function SimulatorContent() {
  const { selectedCause, selectedEffect, roll } = useSimulator();

  const hasSelection = selectedCause && selectedEffect;
  const lawValue = hasSelection ? getLawValue(selectedCause as CauseId, selectedEffect as EffectId) : null;

  return (
    <div className="simulator-tab">
      <LawGrid />

      <div className="simulator-tab__actions">
        <button className="btn btn--secondary" onClick={roll}>
          🎲 Re-roll
        </button>
      </div>

      {hasSelection && lawValue ? (
        <LawResult
          causeLabel={CAUSE_LABELS[selectedCause]}
          effectLabel={EFFECT_LABELS[selectedEffect]}
          tier2={lawValue.tier2}
          tier3={lawValue.tier3}
        />
      ) : (
        <EmptyState
          title="Select a Law"
          description="Choose one cause and one effect to see the Arbiter law values."
        />
      )}
    </div>
  );
}

export function SimulatorTab() {
  return (
    <SimulatorProvider>
      <SimulatorContent />
    </SimulatorProvider>
  );
}
