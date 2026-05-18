import type { ReactNode } from 'react';

interface LawResultProps {
  causeLabel: string;
  effectLabel: string;
  tier2: string;
  tier3: string;
  icon?: ReactNode;
}

export function LawResult({ causeLabel, effectLabel, tier2, tier3, icon }: LawResultProps) {
  return (
    <div className="law-result fade-in">
      <div className="law-result__header">
        {icon && <span className="law-result__icon">{icon}</span>}
        <div>
          <p className="law-result__cause">{causeLabel}</p>
          <p className="law-result__effect">{effectLabel}</p>
        </div>
      </div>
      <div className="law-result__values">
        <div className="law-result__tier">
          <span className="law-result__tier-label">2 Arbiters</span>
          <span className="law-result__value">{tier2}</span>
        </div>
        <div className="law-result__divider">→</div>
        <div className="law-result__tier law-result__tier--strong">
          <span className="law-result__tier-label">3 Arbiters</span>
          <span className="law-result__value">{tier3}</span>
        </div>
      </div>
    </div>
  );
}

export type { LawResultProps };
