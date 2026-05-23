import { ExplorerProvider, useExplorer } from '../../context/ExplorerProvider';
import { CausePicker } from './CausePicker';
import { EffectPicker } from './EffectPicker';
import { LawResult, CopyButton, StatIcon } from '../shared';
import { getLawValue } from '../../lib/law-utils';
import { CAUSE_LABELS, EFFECT_LABELS_FULL } from '../../data/constants';
import type { EffectId } from '../../types';

function ExplorerContent() {
  const { selectedCause, selectedEffect } = useExplorer();

  const hasSelection = selectedCause && selectedEffect;
  const lawValue = hasSelection ? getLawValue(selectedCause, selectedEffect) : null;

  return (
    <div className="explorer-tab">
      <div className="explorer-tab__selectors">
        <CausePicker />
        <EffectPicker />
      </div>

      {hasSelection && lawValue ? (
        <div className="explorer-tab__result">
          <LawResult
            causeLabel={CAUSE_LABELS[selectedCause]}
            effectLabel={EFFECT_LABELS_FULL[selectedEffect]}
            tier2={lawValue.tier2}
            tier3={lawValue.tier3}
            icon={<StatIcon effectId={selectedEffect as EffectId} size={20} />}
          />
          <CopyButton />
        </div>
      ) : (
        <div className="explorer-tab__empty">
          <p className="explorer-tab__hint">
            {!selectedCause
              ? 'Select a cause to begin exploring Arbiter laws.'
              : 'Now select an effect to see the values.'}
          </p>
        </div>
      )}
    </div>
  );
}

export function ExplorerTab() {
  return (
    <ExplorerProvider>
      <ExplorerContent />
    </ExplorerProvider>
  );
}
