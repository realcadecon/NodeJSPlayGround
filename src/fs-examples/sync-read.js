import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__dirname);
// console.log(__filename);

// fs.writeFileSync(__dirname + '/sample.txt', "hello world overwritten");
// fs.appendFileSync(__dirname + '/sample.txt', "\nhello world appended");

// fs.writeFileSync(path.join(__dirname, 'my_json_file.json'), JSON.stringify({message: "hello world"}));


// //read files
// const data_sync = fs.readFileSync(__dirname + '/sample.txt', 'utf8');
// const data_sync_2 = fs.readFileSync(path.join(__dirname, 'my_json_file.json'), 'utf8');


// //delete files
// fs.writeFileSync(__dirname + '/sample1.txt', "hello world to be deleted");
// const data_sync_3 = fs.readFileSync(path.join(__dirname, 'sample1.txt'), 'utf8');
// console.log('\n' + data_sync_3);
// fs.unlinkSync(__dirname + '/sample1.txt');

// const sampleExists = fs.existsSync(__dirname + '/sample.txt'); //false
// console.log('\n' + sampleExists);

// console.log(data_sync);
// console.log('\n' + data_sync_2);

// const contents = fs.readdirSync(__dirname);
// console.log(contents);

// const stats = fs.lstatSync(path.join(__dirname, 'sample.txt'));
// console.log(stats);
