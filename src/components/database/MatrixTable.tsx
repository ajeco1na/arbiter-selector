import { ALL_CAUSES, ALL_EFFECTS, CAUSE_LABELS, EFFECT_LABELS } from '../../data/constants';
import { StatIcon } from '../shared';
import { getLawValue } from '../../lib/law-utils';
import type { CauseId, EffectId } from '../../types';

export function MatrixTable() {
  return (
    <div className="matrix-table-wrapper">
      <h3 className="matrix-table__title">Arbiter Law Matrix</h3>
      <div className="matrix-table-container">
        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-table__corner">Effect \ Cause</th>
              {ALL_CAUSES.map(cause => (
                <th key={cause} className="matrix-table__header">
                  {CAUSE_LABELS[cause]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ALL_EFFECTS.map(effect => (
              <tr key={effect} className="matrix-table__row">
                <td className="matrix-table__label">
                  <StatIcon effectId={effect} />
                  {EFFECT_LABELS[effect]}
                </td>
                {ALL_CAUSES.map(cause => {
                  const value = getLawValue(cause as CauseId, effect as EffectId);
                  return (
                    <td
                      key={`${cause}-${effect}`}
                      className={`matrix-table__cell ${value ? 'matrix-table__cell--valid' : 'matrix-table__cell--invalid'}`}
                    >
                      {value ? (
                        <div className="matrix-table__value">
                          <span className="matrix-table__tier2">{value.tier2}</span>
                          <span className="matrix-table__arrow">→</span>
                          <span className="matrix-table__tier3">{value.tier3}</span>
                        </div>
                      ) : (
                        <span className="matrix-table__empty">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
