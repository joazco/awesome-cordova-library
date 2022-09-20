export declare type InAppBrowserOptions = Partial<{
    location: 'yes' | 'no';
    hidden: 'yes' | 'no';
    beforeload: 'yes' | 'post' | 'no';
    clearcache: 'yes' | 'no';
    clearsessioncache: 'yes' | 'no';
    closebuttoncaption: string;
    closebuttoncolor: string;
    footer: 'yes' | 'no';
    footercolor: string;
    hardwareback: 'yes' | 'no';
    hidenavigationbuttons: 'yes' | 'no';
    hideurlbar: 'yes' | 'no';
    navigationbuttoncolor: string;
    toolbarcolor: string;
    lefttoright: 'yes' | 'no';
    zoom: 'yes' | 'no';
    mediaPlaybackRequiresUserAction: 'yes' | 'no';
    shouldPauseOnSuspend: 'yes' | 'no';
    useWideViewPort: 'yes' | 'no';
    fullscreen: 'yes' | 'no';
    cleardata: 'yes' | 'no';
    disallowoverscroll: 'yes' | 'no';
    toolbar: 'yes' | 'no';
    toolbartranslucent: 'yes' | 'no';
    enableViewportScale: 'yes' | 'no';
    allowInlineMediaPlayback: 'yes' | 'no';
    presentationstyle: 'pagesheet' | 'formsheet' | 'fullscreen';
    transitionstyle: 'fliphorizontal' | 'crossdissolve' | 'coververtical';
    toolbarposition: 'top' | 'bottom';
    hidespinner: 'yes' | 'no';
}>;
export declare type InAppBrowserType = {
    addEventListener: (eventname: 'loadstart' | 'loadstop' | 'loaderror' | 'beforeload' | 'message', callback: () => void) => void;
    removeEventListener: (eventname: 'loadstart' | 'loadstop' | 'loaderror' | 'beforeload' | 'message', callback: () => void) => void;
    close: () => void;
    show: () => void;
    hide: () => void;
    executeScript: (details: {
        file?: string;
        code?: string;
    }, callback: () => void) => void;
    insertCSS: (details: {
        file?: string;
        code?: string;
    }, callback: () => void) => void;
};
