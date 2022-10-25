# @awesome-cordova-library/geolocation

This plugin provides information about the device's location, such as latitude and longitude.

[Cordova documentation](https://cordova.apache.org/docs/en/11.x/reference/cordova-plugin-geolocation/index.html)

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

## Installation

```sh
npm i @awesome-cordova-library/geolocation
# Optionnal if you don't use cordova
cordova plugin add cordova-plugin-geolocation
```

## Vanilla

### Declaration

```typescript
class Geolocation {
  static getCurrentPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ): void;
  static watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ): number;
  static clearWatch(watchId: number): void;
}
```

### Usages

```typescript
import Geolocation from '@awesome-cordova-library/geolocation';

Geolocation.getCurrentPosition(
  () => {},
  () => {},
  {},
);
const watchid = Geolocation.watchPosition(
  () => {},
  () => {},
  {},
);
Geolocation.clearWatch(watchid);
```

## React

### Declaration

```typescript
const useGeolocation: () => {
  getCurrentPosition: (options?: PositionOptions) => Promise<GeolocationPosition>;
  watchPosition: (
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions,
  ) => number;
  clearWatch: (watchId: number) => void;
};
```

### Usages

```typescript
import { useState } from 'react';
import useGeolocation from '@awesome-cordova-library/geolocation/lib/react';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<GeolocationPosition | undefined>();
  const { getCurrentPosition } = useGeolocation();

  return (
    <div>
      {position && (
        <div>
          <p>
            Latitude: {position.coords.latitude} <br /> Longitude: {position.coords.longitude}
          </p>
        </div>
      )}
      <div>
        <button
          onClick={() => {
            setLoading(true);
            getCurrentPosition()
              .then((p) => {
                setPosition(p);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          Get current position
        </button>
      </div>
    </div>
  );
}
```
