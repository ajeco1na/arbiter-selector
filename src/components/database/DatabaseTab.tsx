import { MatrixTable } from './MatrixTable';
import { ChampionCards } from './ChampionCards';
import { TraitDescription } from '../shared';

export function DatabaseTab() {
  return (
    <div className="database-tab">
      <TraitDescription />
      <MatrixTable />
      <ChampionCards />
    </div>
  );
}
