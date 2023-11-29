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