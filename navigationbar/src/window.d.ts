interface Window {
  navigationbar: {
    setUp: (autoHideNavigationBar: boolean, successCallback: () => void, errorCallback: () => void) => void;
    hideNavigationBar: (successCallback: () => void, errorCallback: () => void) => void;
  };
}
