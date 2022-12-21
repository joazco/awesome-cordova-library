declare const useNavigationBar: () => {
    setUp: (autoHideNavigationBar: boolean) => Promise<void>;
    hideNavigationBar: () => Promise<void>;
};
export default useNavigationBar;
