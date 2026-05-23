import { champions } from '../../data/arbiter-data';

export function ChampionCards() {
  return (
    <div className="champion-cards">
      <h3 className="champion-cards__title">Arbiter Champions</h3>
      <div className="champion-cards__grid">
        {champions.map(champ => (
          <div key={champ.id} className="champion-card fade-in">
            <div
              className="champion-card__splash"
              style={{ backgroundImage: `url(${champ.splashUrl})` }}
            >
              <div className="champion-card__header">
                <span className="champion-card__cost">{champ.cost}g</span>
                <span className="champion-card__role">{champ.role}</span>
              </div>
              <div className="champion-card__footer">
                <h4 className="champion-card__name">{champ.name}</h4>
                <p className="champion-card__synergy">{champ.secondarySynergy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
