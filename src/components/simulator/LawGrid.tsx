import { useSimulator } from '../../context/SimulatorProvider';
import { LawSelector } from './LawSelector';
import { StatIcon } from '../shared';
import { CAUSE_LABELS, EFFECT_LABELS } from '../../data/constants';
import type { EffectId } from '../../types';

export function LawGrid() {
  const { causes, effects, selectedCause, selectedEffect, selectCause, selectEffect } = useSimulator();

  return (
    <div className="law-grid fade-in">
      <LawSelector
        title="Causes"
        items={causes}
        labels={CAUSE_LABELS}
        selected={selectedCause}
        onSelect={selectCause}
      />

      <div className="law-grid__connector">
        <span className="law-grid__arrow">→</span>
        <span className="law-grid__label">+</span>
      </div>

      <LawSelector
        title="Effects"
        items={effects}
        labels={EFFECT_LABELS}
        selected={selectedEffect}
        onSelect={selectEffect}
        getIcon={(item) => <StatIcon effectId={item as EffectId} />}
      />
    </div>
  );
}
