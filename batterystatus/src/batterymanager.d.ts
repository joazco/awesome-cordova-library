interface BatteryManager {
  charging: boolean;
  level: number;
  onlevelchange: (status: Pick<BatteryManager, 'charging' | 'level'>) => void | null;
}
