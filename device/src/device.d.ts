interface Device {
  /** Get the version of Cordova running on the device. */
  cordova: string;
  /** Indicates that Cordova initialize successfully. */
  available: boolean;
  /**
   * The device.model returns the name of the device's model or product. The value is set
   * by the device manufacturer and may be different across versions of the same product.
   */
  model: string;
  /** Get the device's operating system name. */
  platform: string;
  /** Get the device's Universally Unique Identifier (UUID). */
  uuid: string;
  /** Get the operating system version. */
  version: string;
  /** Get the device's manufacturer. */
  manufacturer: string;
  /** Whether the device is running on a simulator. */
  isVirtual: boolean;
  /** Get the device hardware serial number. */
  serial: string;
}

declare const device: Device;
