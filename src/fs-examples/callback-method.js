import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// fs.writeFileSync(__dirname + '/sample.txt', "hello world overwritten");
// fs.appendFileSync(__dirname + '/sample.txt', "\nhello world appended");

// fs.writeFileSync(path.join(__dirname, 'my_json_file.json'), JSON.stringify({message: "hello world"}));


// //read files
// const data_sync = fs.readFileSync(__dirname + '/sample.txt', 'utf8');
// const data_sync_2 = fs.readFileSync(path.join(__dirname, 'my_json_file.json'), 'utf8');

fs.readFile(path.join(__dirname, 'my_json_file.json'), 'utf8', (err, data) => {
    if(err) console.log(err);
    else console.log(data);
});

//async in-order

fs.writeFile(path.join(__dirname, 'my_json_file_2.json'), JSON.stringify({message: "hello world 2"}), (err, data) => {
    console.log("done writing to file");
    fs.readFile(path.join(__dirname, 'my_json_file_2.json'), 'utf8', (err, data) => {
        if(err) console.log(err);
        else {
            fs.unlink(path.join(__dirname, 'my_json_file_2.json'), (err) => {});
        }
    });
});


//promises - avoid callback hell

