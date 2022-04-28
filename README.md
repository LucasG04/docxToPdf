# docxToPdf

Converts a docx file to a pdf file.

Advantages:
- No external dependencies needed (like Libre Office)
- No HTTP request to APIs

Disadvantage:
- Works only for simple docx files

## Usage

```javascript
var fs = require('fs/promises');
var convertFile = require('./index').convertFile;
var convertBuffer = require('./index').convertBuffer;

async function file() {
    var path = require('path');     
    var file = path.join(__dirname, 'demo.docx'); 
    await convertFile(file, 'file.pdf')
}

async function buffer() {
    var path = require('path');     
    var file = path.join(__dirname, 'demo.docx'); 
    var buf = (await fs.readFile(file)).buffer
    var res = await convertBuffer(buf);
    fs.writeFile('buf.pdf', res)
}

file()
buffer()
```
