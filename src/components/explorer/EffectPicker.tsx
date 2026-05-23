import { useExplorer } from '../../context/ExplorerProvider';
import { StatIcon } from '../shared';
import { EFFECT_LABELS_FULL } from '../../data/constants';

export function EffectPicker() {
  const { selectedCause, selectedEffect, selectEffect, validEffects } = useExplorer();

  if (!selectedCause) {
    return (
      <div className="effect-picker effect-picker--disabled">
        <p className="effect-picker__message">Select a cause first to see available effects.</p>
      </div>
    );
  }

  return (
    <div className="effect-picker">
      <h3 className="effect-picker__title">
        Choose an Effect
        <span className="effect-picker__count">({validEffects.length} available)</span>
      </h3>
      <div className="effect-picker__list">
        {validEffects.map(effect => (
          <button
            key={effect}
            className={`effect-picker__item ${selectedEffect === effect ? 'effect-picker__item--selected' : ''}`}
            onClick={() => selectEffect(effect)}
          >
            <StatIcon effectId={effect} />
            {EFFECT_LABELS_FULL[effect]}
          </button>
        ))}
      </div>
    </div>
  );
}
