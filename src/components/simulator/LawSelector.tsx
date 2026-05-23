import type { ReactNode } from 'react';
import type { CauseId, EffectId } from '../../types';

interface LawSelectorProps<T extends CauseId | EffectId> {
  title: string;
  items: T[];
  labels: Record<CauseId, string> | Record<EffectId, string>;
  selected: T | null;
  onSelect: (item: T) => void;
  getIcon?: (item: T) => ReactNode;
}

export function LawSelector<T extends CauseId | EffectId>({
  title,
  items,
  labels,
  selected,
  onSelect,
  getIcon,
}: LawSelectorProps<T>) {
  return (
    <div className="law-selector">
      <h3 className="law-selector__title">{title}</h3>
      <div className="law-selector__list">
        {items.map(item => (
          <button
            key={item}
            className={`law-selector__card ${selected === item ? 'law-selector__card--selected' : ''}`}
            onClick={() => onSelect(item)}
          >
            {getIcon?.(item)}
            <span className="law-selector__label">{labels[item as keyof typeof labels]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
