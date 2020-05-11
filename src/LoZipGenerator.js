const indexHtml = require("./lo-contents/scripts/index");
const LoInfoXML = require("./lo-contents/scripts/LearningObjectInfo");
const activityJs = require("./lo-contents/scripts/activity");
const sdkConfigJs = require("./lo-contents/scripts/sdkConfig");

const fs = require("fs");
const JSZip = require('jszip');
const http = require("http");
const url = require("url");
const request = require('request');

class LoZipGenerator {
  constructor() {
    console.log("------------LoZipGenerator initiated------------");
    this.zip = new JSZip();
    this.downloadCounter = 0;

    ////Code to get all the resources inside media
    this.mediaMap = {
      audio: {},
      video: {},
      images: {}
    }
    this.mediaAry = [];
    const mediaFolder = __dirname + '/lo-contents/media/';
    const fs = require('fs');
    fs.readdirSync(mediaFolder).forEach(file => {
      const mediaDataFolder = __dirname + '/lo-contents/media/' + file;
      fs.readdirSync(mediaDataFolder).forEach(name => {
        this.mediaMap[file][name] = "http://localhost:3000/src/lo-contents/media/" + file + "/" + name
        this.mediaAry.push(this.mediaMap[file][name]);
      })
    })
    console.log(this.mediaMap)
    console.log(this.mediaAry)
  }

  generateZip() {
    const used = process.memoryUsage();
    for (let key in used) {
      console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }


    this.zip.file("index.html", indexHtml);
    this.zip.file("LearningObjectInfo.xml", LoInfoXML);
    this.zip.file("activity.js", activityJs);
    this.zip.file("sdkConfig.js", sdkConfigJs);




    for (var assetType in this.mediaMap) {
      for (var fileName in this.mediaMap[assetType]) {
        this.downloadCounter++;
        this.downloadFile(assetType, fileName, this.mediaMap[assetType][fileName]);
      }
    }
    let interval = setInterval(function () {
      if (this.downloadCounter == 0) {
        clearInterval(interval);
        this.downloadZip()
      }
    }.bind(this), 100);
  }

  downloadZip() {
    this.zip
      .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream('LO.zip'))
      .on('finish', function () {
        // JSZip generates a readable stream with a "end" event,
        // but is piped here in a writable stream which emits a "finish" event.
        console.log("LO.zip written.");
        console.log("------------LoZipGenerator completed------------");


        //Checking the Script memory usage
        const used = process.memoryUsage();
        for (let key in used) {
          console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        }
      });
  }

  downloadFile(folderName, fileName, url) {
    request({
      method: "GET",
      url: url,
      encoding: null // <- this one is important !
    }, function (error, response, body) {
      if (error || response.statusCode !== 200) {
        // handle error 
        console.log("ERROR####")
        return;
      }
      this.zip.file(folderName + "/" + fileName, body);
      this.downloadCounter--;
    }.bind(this));
  }
}
new LoZipGenerator().generateZip();