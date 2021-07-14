var dataURL = "universidad.json";

// CLEAN CACHE
localStorage.uniData = null;

var dataTask = new Promise(function (resolve, reject) {
    if (localStorage.uniData == null || localStorage.uniData == "null" || localStorage.uniData == "undefined") {
        d3.json(dataURL, function (error, data) {
            if (error) {
              console.log(error);
              reject(error);
            }
            resolve(data);
            localStorage.uniData = JSON.stringify(data);
        });
    } else {
        resolve(JSON.parse(localStorage.uniData));
    }
});

function getApiUrl() {
    return '';
}
