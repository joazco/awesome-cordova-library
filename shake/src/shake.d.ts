/**
 * This plugin allows you to use the native sharing window of your mobile device.
 */
interface ShakeInterface {
  startWatch: (onShake: () => void, sensitivity?: number, onError?: () => void) => void;
  stopWatch: () => void;
}

declare var shake: ShakeInterface;
