const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const pg2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const pg3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(pg2);
  response.end();
};

const getPage3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(pg3);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;
