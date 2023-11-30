// copy from folder examples:
// - - -
const snap7 = require("napi-snap7");

const client = new snap7.S7Client();

const time = (ms) => console.log("| Execution time : %d ms", ms);

const res = client.ConnectTo("192.168.172.2", 0, 1);

// Reading 100 bytes from DB 510 starts at 0
//                Area identifier (0x84 - S7AreaDB)
//                |    DB number if area = S7AreaDB, otherwise ignored
//                |    |   Offset to start
//                |    |   |   Amount of words to read
//                |    |   |   |     Word size (0x02 - Byte (8 bit))
//                |    |   |   |     |
client.ReadArea(0x84, 42, 0, 4, 0x02, (err, data) => {
    if (err) return console.log(client.ErrorText(err));
    console.log("Data", data);
    time(client.ExecTime());
    client.Disconnect();
});
// - - -
// in this implementation, errors are not highlighted, but the code does not work either:
/*
const {S7Client} = require('napi-snap7');
const {ConnectTo, Disconnect, ErrorText, ExecTime, ReadArea} = new S7Client();
const time = (ms) => console.log("| Execution time : %d ms", ms);
const res = ConnectTo("192.168.172.2", 0, 1);
console.log('ConnectTo', res);
ReadArea(0x84, 42, 0, 4, 0x02, (err, data) => {
    if (err) return console.log(ErrorText(err));
    console.log("Data", data);
    time(ExecTime());
    Disconnect();
});
*/
// - - -