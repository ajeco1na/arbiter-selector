import { MatrixTable } from './MatrixTable';
import { ChampionCards } from './ChampionCards';

export function DatabaseTab() {
  return (
    <div className="database-tab">
      <MatrixTable />
      <ChampionCards />
    </div>
  );
}
