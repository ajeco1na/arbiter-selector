import { useExplorer } from '../../context/ExplorerProvider';
import { ALL_CAUSES, CAUSE_LABELS } from '../../data/constants';

export function CausePicker() {
  const { selectedCause, selectCause } = useExplorer();

  return (
    <div className="cause-picker">
      <h3 className="cause-picker__title">Choose a Cause</h3>
      <div className="cause-picker__list">
        {ALL_CAUSES.map(cause => (
          <button
            key={cause}
            className={`cause-picker__item ${selectedCause === cause ? 'cause-picker__item--selected' : ''}`}
            onClick={() => selectCause(cause)}
          >
            {CAUSE_LABELS[cause]}
          </button>
        ))}
      </div>
    </div>
  );
}
