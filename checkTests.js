const fs = require('fs');

const folderPath = './src/libs/components';

function validateTest(folderName) {
  const testFile = `${folderPath}/${folderName}/${folderName}.test.js`;

  return fs.lstatSync(testFile).isFile();
}

fs.readdirSync(folderPath).map((folderName) => {
  try {
    return validateTest(folderName);
  } catch (error) {
    throw new Error(`There are no tests for the component: ${folderName}.`);
  }
});
