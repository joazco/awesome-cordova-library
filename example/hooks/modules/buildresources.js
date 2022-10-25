const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

function overrideColorsXML() {
  if (fs.existsSync(`${__dirname}/../../platforms/android`)) {
    fs.copyFileSync(
      `${__dirname}/../../resources/colors.xml`,
      `${__dirname}/../../platforms/android/app/src/main/res/values/colors.xml`
    );
  }
}

function overrideIconSplashScreen() {
  if (fs.existsSync(`${__dirname}/../../platforms/android`)) {
    fs.copyFileSync(
      `${__dirname}/../../resources/splash.xml`,
      `${__dirname}/../../platforms/android/app/src/main/res/drawable/ic_cdv_splashscreen.xml`
    );
  }
}

function execBuildResources() {
  return new Promise((resolve, reject) => {
    const cordovaResPath = path.resolve(
      process.cwd(),
      "./node_modules/cordova-res/bin/cordova-res"
    );
    exec(`${cordovaResPath}`, (error) => {
      if (error) {
        reject();
        return;
      }
      overrideColorsXML();
      overrideIconSplashScreen();
      resolve();
    });
  });
}

module.exports = execBuildResources;
