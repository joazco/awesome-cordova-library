import LocalStorage from '../src';

class LocalStorageMock {
  public store: {
    [key: string]: string;
  };
  constructor() {
    this.store = {};
  }

  public clear() {
    this.store = {};
  }

  public getItem(key: string) {
    return this.store[key] || undefined;
  }

  public setItem(key: string, value: string) {
    this.store[key] = value.toString();
  }

  public removeItem(key: string) {
    delete this.store[key];
  }
}
beforeEach(() => {
  /* tslint:disable-next-line:no-any */
  (global as any).localStorage = new LocalStorageMock();
});

const data = {
  data: 1,
};

test('Test setItem/getItem on local Storage', () => {
  LocalStorage.setItem('test', data);
  expect(LocalStorage.getItem('test')).toStrictEqual(data);
});

test('Test removeItem', () => {
  LocalStorage.removeItem('test');
  expect(LocalStorage.getItem('test')).toStrictEqual(null);
});

test('Test clear', () => {
  LocalStorage.setItem('test', data);
  LocalStorage.clear();
  expect(LocalStorage.getItem('test')).toStrictEqual(null);
});
