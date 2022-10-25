interface Navigator {
  getBattery?: () => Promise<BatteryManager>;
}
