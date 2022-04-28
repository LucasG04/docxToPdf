var mammoth = require('mammoth');
var pdf = require('html-pdf');

const convertFile = (inputPath, outputPath) => new Promise(async (resolve, reject) => {
  const html = await mammoth.convertToHtml({ path: inputPath });
  pdf.create(html.value).toFile(outputPath, function (err, res) {
    if (err) {
      reject(err);
      return;
    }
    resolve(res);
  });
})

const convertBuffer = (buffer) => new Promise(async (resolve, reject) => {
  const html = await mammoth.convertToHtml({ buffer: buffer });
  pdf.create(html.value).toBuffer((err, buffer) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(buffer);
  });
})

module.exports = {
    convertFile,
    convertBuffer
};
