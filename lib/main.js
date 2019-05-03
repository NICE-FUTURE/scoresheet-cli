var Cls = require('./Cls');
var getNumber = require('cli-interact').getNumber;

function main() {
    var cls = new Cls();
    var option = 3;

    do {
        console.log(`1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：`);
        // break; // 运行单元测试
        option = getNumber();
        switch (option) {
            case 1: cls.addStu(); break;
            case 2: console.log(cls.toString()); break;
            case 3: console.log("退出"); break;
            default: console.log("选项无效，请重试"); break;
        }
    } while(option != 3);
}

main();

module.exports = main;