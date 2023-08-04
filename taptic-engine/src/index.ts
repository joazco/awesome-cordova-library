/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 * Apache Cordova / PhoneGap Plugin to enables adding contextual haptic feedback in response to specific user actions.
 * Also, check out {@link https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine Github}
 * @requires cordova-plugin-taptic-engine
 */
export default class TapicEngineIos {
  /**
   * Use selection feedback generators to indicate a change in selection.
   */
  static selection() {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.selection();
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }
  /**
   * Use notification feedback generators to indicate successes, failures, and warnings.
   * @param type {"success" | "warning" | "error"}
   */
  static notification(type: 'success' | 'warning' | 'error') {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.notification({ type });
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }
  /**
   * Use impact feedback generators to indicate that an impact has occurred. For example, you might trigger impact feedback when a user interface object collides with something or snaps into place.
   * @param style {"light" | "medium" | "heavy" | "rigid" | "soft"}
   */
  static impact(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.impact({ style });
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }
  /**
   * Tell the taptic engine that a gesture for a selection change is starting.
   */
  static gestureSelectionStart() {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.gestureSelectionStart();
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }
  /**
   * Tell the taptic engine that a selection changed during a gesture.
   */
  static gestureSelectionChanged() {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.gestureSelectionChanged();
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }
  /**
   * Tell the taptic engine we are done with a gesture. This needs to be called lest resources are not properly recycled.
   */
  static gestureSelectionEnd() {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.selection();
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }
  /**
   * This triggers the 'Pop' effect of 'Peek & Pop', which is a bit more profound than the 'Peek' effect.
   * Codewise this is exactly the same as weakBoom, except for the function name of course.
   */
  static weakBoom(onSuccess: () => void, onFail: () => void) {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.unofficial.weakBoom(onSuccess, onFail);
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }
  /**
   * Start watching for shake gestures and call "onShake"
   * @param coords
   */
  static strongBoom(onSuccess: () => void, onFail: () => void) {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.unofficial.strongBoom(onSuccess, onFail);
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }
  /**
   * This triggers the 'Nope' effect you get when fi. force touching a home icon which doesn't have any action. It's a short burst of 3-ish 'weak booms'.
   * Codewise this is exactly the same as weakBoom and strongBoom, except for the function name of course.
   */
  static burst(onSuccess: () => void, onFail: () => void) {
    if (typeof TapticEngine !== 'undefined') {
      TapticEngine.unofficial.burst(onSuccess, onFail);
    } else {
      TapicEngineIos.warnPluginIsUnInstallOrIncompatible();
    }
  }

  static warnPluginIsUnInstallOrIncompatible() {
    console.warn('cordova-plugin-taptic-engine');
  }
}
