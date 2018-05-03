var AWS = require("aws-sdk");
var fs = require('fs');
var program = require("commander");
const key = require("../../../js/modules/_config/key");

var local = "http://localhost:8000";
var remote = "https://dynamodb.us-east-1.amazonaws.com";

var table = "wom2";

var awsConfig = {
  region: "us-east-1"
};

function genKey(keySourceId, keyBookId, keySectionId, keyUnitId) {
  const SOURCE  = 10000000000; //    10 billion
  const BOOK    =   100000000; //   100 million
  const SECTION =     1000000; //     1 million
  const UNIT    =        1000; //     1 thousand

  return (SOURCE * Number.parseInt(keySourceId, 10))
       + (BOOK * Number.parseInt(keyBookId, 10))
       + (SECTION * Number.parseInt(keySectionId, 10))
       + (UNIT * Number.parseInt(keyUnitId, 10));
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-e, --endpoint <dblocation>', "Db location, either local or remote")
  .option('-v, --verify', 'Verify input files but don\'t load')
  .parse(process.argv);

if (!program.directory && program.args.length == 0) {
  console.log("No input files specified");
  process.exit(1);
}

if (!program.endpoint) {
  console.log("specify endpoint of either 'local' or 'remote'");
  process.exit(1);
}

if (program.endpoint === "remote") {
  awsConfig.endpoint = remote;
}
else {
  awsConfig.endpoint = local;
}

AWS.config.update(awsConfig);
var docClient = new AWS.DynamoDB.DocumentClient();

program.args.forEach(function(fn) {
  if (fn.indexOf(".json") === -1) {
    fn = fn + ".json";
  }
  load(table, fn, program.verify?true:false);
});

function load(table, fileName, verify) {
  var discarded = 0;

  if (verify) {
    console.log("Verifying: %s", fileName);
  }
  else {
    console.log("Loading table: %s from %s", table, fileName);
  }

  var lesson = JSON.parse(fs.readFileSync(fileName, 'utf8'));

  if (verify) {
    return;
  }

  console.log("lesson: %o", lesson);
  program.exit(1);

  let unitKey_partial = genKey(lesson.keySourceId, lesson.keyBookId, lesson.keySectionId, lesson.keyUnitId);

  lesson.paragraph.forEach((p) => {
    let discard = p.discard ? p.discard : 0;
    let params = {
        TableName: table,
        Item: {
            "unitkey": unitKey_partial + Number.parseInt(p.pid, 10),
            "book": lesson.book,
            "unit": lesson.unit,
            "pid":  p.pid,
            "text": p.text
        }
    };

    //we discard one line paragraphs for acim transcripts because most
    //of them are conversational; Continue, Yes, Indeed, You are correct, etc
    if (discard === 1 && lesson.book.startsWith("acim")) {
      discarded++;
      return;
    }

    //console.log(`unitKey_partial: ${unitKey_partial}, p: ${p.pid}, unitkey: ${params.Item.unitkey}`);

    var errorFileName = "";
    docClient.put(params, function(err, data) {
      if (err) {
        //if there are multiple errors for a file, log only the first one
        if (errorFileName !== fileName) {
          console.log("error:%s:%s", params.Item.unitkey, fileName);
          errorFileName = fileName;
        }
      }
      else {
        console.log("ok: %s", params.Item.unitkey);
      }
    });
  });

  let fne = fileName.substr(fileName.lastIndexOf("/") + 1);
  let fn = fne.substr(0, fne.length - 5);
  console.log("+%s:%s:%s:%s", fn, unitKey_partial, lesson.paragraph.length, discarded);
}

