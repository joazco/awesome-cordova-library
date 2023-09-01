const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

const defaultFullScreen = (data) => {
  if (typeof data.fullscreen === "undefined") {
    data.fullscreen = false;
  }
};

const defaultValueStatusbar = (data) => {
  if (typeof data.statusbar === "undefined") {
    data.statusbar = {};
  }
  if (typeof data.statusbar.show === "undefined") {
    data.statusbar.show = true;
  }
  if (typeof data.statusbar.backgroundColor === "undefined") {
    data.statusbar.backgroundColor = "#ffffff";
  }
  if (typeof data.statusbar.overlaysWebView === "undefined") {
    data.statusbar.overlaysWebView = true;
  }
  if (typeof data.statusbar.contentStyle === "undefined") {
    data.statusbar.contentStyle = "default";
  }
};

const defaultScreenOrientation = (data) => {
  if (typeof data.screenOrientation === "undefined") {
    data.screenOrientation = "any";
  }
};

const defaultSplashScreen = (data) => {
  if (typeof data.splashscreen === "undefined") {
    data.splashscreen = {};
  }
  if (typeof data.splashscreen.fadeSplashscreen === "undefined") {
    data.splashscreen.fadeSplashscreen = true;
  }
  if (typeof data.splashscreen.fadeSplashscreenDuration === "undefined") {
    data.splashscreen.fadeSplashscreenDuration = 750;
  }
  if (typeof data.splashscreen.splashscreenDelay === "undefined") {
    data.splashscreen.splashscreenDelay = 3000;
  }
};

const defaultAuthor = (data) => {
  if (typeof data.author === "undefined") {
    data.author = {
      email: "",
      link: "",
      name: "",
    };
  }
};

const generateConfigJSONFromTypescript = () => {
  return new Promise((resolve, reject) => {
    exec(
      `node ${path.resolve(
        __dirname,
        "../../node_modules/typescript/bin/tsc config.ts --skipLibCheck --outDir hooks/modules"
      )}`,
      (error) => {
        if (error) {
          reject(
            `File hooks/modules/copyconfig.js line 60.
             \nError to build config.ts.
             \nError: ${error}`
          );
          return;
        }
        const data = require("./config.js").default;
        defaultFullScreen(data);
        defaultValueStatusbar(data);
        defaultScreenOrientation(data);
        defaultSplashScreen(data);
        defaultAuthor(data);
        fs.writeFile(
          path.resolve(__dirname, "../../config.json"),
          JSON.stringify(data),
          resolve
        );
      }
    );
  });
};

const copyFiles = () => {
  try {
    fs.copyFileSync(
      path.resolve(__dirname, "../../config.json"),
      path.resolve(__dirname, "../../src/config.json")
    );
  } catch (error) {
    throw new Error(
      `File hooks/modules/copyconfig.js line 88. 
      \nError to build copy config.js on src folder.
      \nError: ${error}`
    );
  }
};

const execCopyConfig = () => {
  try {
    if (fs.existsSync(path.resolve(__dirname, "../../config.ts"))) {
      return generateConfigJSONFromTypescript().then(copyFiles);
    } else {
      copyFiles();
      return Promise.resolve();
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = execCopyConfig;