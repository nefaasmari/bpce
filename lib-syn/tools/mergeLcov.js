const glob = require('glob');
const fs = require('fs');
const path = require('path');
 
const getLcovFiles = function (src) {
  return new Promise((resolve) => {
    glob(`${src}/**/lcov.info`, (error, result) => {
      if (error) resolve([]);
      resolve(result);
    });
  });
};
 
(async function () {
  const files = await getLcovFiles('coverage');
  const mergedReport = files.reduce((mergedReport, currFile) => (mergedReport += fs.readFileSync(currFile)), '');
  await fs.writeFile(path.resolve('./coverage/lcov.info'), mergedReport, (err) => {
    if (err) {
      console.log('Error during merge lcov .');
      throw err;
    }
    console.log('Merge lcov file has been created.');
  });
})();