/**
 * This plugin allows you to use the native sharing window of your mobile device.
 */
interface TapticEngineInterface {
  selection: () => void;
  notification: (options: { type: 'success' | 'warning' | 'error' }) => void;
  impact: (options: { style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' }) => void;
  gestureSelectionStart: () => void;
  gestureSelectionChanged: () => void;
  gestureSelectionEnd: () => void;
  unofficial: {
    weakBoom: (onSuccess: () => void, onFail: () => void) => void;
    strongBoom: (onSuccess: () => void, onFail: () => void) => void;
    burst: (onSuccess: () => void, onFail: () => void) => void;
  };
}

declare const TapticEngine: TapticEngineInterface;
