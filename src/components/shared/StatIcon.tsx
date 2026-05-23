import type { EffectId } from '../../types';
import { HealthIcon } from '../../icons/HealthIcon';
import { ShieldIcon } from '../../icons/ShieldIcon';
import { DefenseIcon } from '../../icons/DefenseIcon';
import { AttackSpeedIcon } from '../../icons/AttackSpeedIcon';
import { AbilityPowerIcon } from '../../icons/AbilityPowerIcon';
import { ManaIcon } from '../../icons/ManaIcon';
import { GoldIcon } from '../../icons/GoldIcon';
import { RerollIcon } from '../../icons/RerollIcon';
import { ChampionIcon } from '../../icons/ChampionIcon';

const ICON_MAP: Record<EffectId, typeof HealthIcon> = {
  'max-health': HealthIcon,
  'shield': ShieldIcon,
  'armor-mr': DefenseIcon,
  'attack-speed': AttackSpeedIcon,
  'ability-power': AbilityPowerIcon,
  'mana': ManaIcon,
  'chance-gold': GoldIcon,
  'chance-reroll': RerollIcon,
  'chance-leona': ChampionIcon,
};

interface StatIconProps {
  effectId: EffectId;
  size?: number;
}

export function StatIcon({ effectId, size = 14 }: StatIconProps) {
  const Icon = ICON_MAP[effectId];
  if (!Icon) return null;
  return <Icon size={size} className="stat-icon" />;
}
