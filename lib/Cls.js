var question = require('cli-interact').question;
var Student = require('./Student');

class Cls {

    constructor() {
        this.stus = [];
        this.subjects = {'语文':'chinese', '数学':'math', '英语':'english', '编程':'programming'};
    }

    addStu() {
        var info = this.getValidInfo();
        this.stus.push(new Student(info));
    }

    calTotalAverage() {
        this.average = +(this.stus.reduce((acc, cur) => acc+cur.total, 0)/this.stus.length).toFixed(2);  // 保留两位小数
    }

    calTotalMiddle() {
        var totals = [];
        this.stus.forEach(element => {
            totals.push(element.total);
        })
        totals.sort((a, b) => a-b);
        if (totals.length%2 == 0) {  // 为偶数
            this.middle = +((totals[Math.floor(totals.length/2)-1]+totals[totals.length/2]) / 2).toFixed(2);  // 保留两位小数
        } else {
            this.middle = totals[Math.floor(totals.length/2)];
        }
    }

    toString() {
        var ids = this.getValidIds();
        
        this.calTotalAverage();
        this.calTotalMiddle();

        var summary = '成绩单\n\
姓名|数学|语文|英语|编程|平均分|总分\n\
========================\n'
        for (let item of this.stus) {
            if (ids.includes(item.id)) summary += item.toString()+'\n';
        }
        summary += '========================\n';
        summary += '全班总分平均数：'+this.average+'\n';
        summary += '全班总分中位数：'+this.middle+'\n';

        return summary;
    }

    getValidInfo() {
        var info = question('请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：\n').split(', ');
        var name = info[0], id = info[1];
        var grades = {};
        for (let i=2; i<info.length; i++) {
            let [sub, grade] = info[i].split(": ");
            grades[this.subjects[sub]] = +grade;  // 中文名称转换为英文名称，分数从字符串转为数字
        }
        // 如果 格式 不正确
        while (info.length != 6 || Object.keys(grades).sort().toString() !== Object.values(this.subjects).sort().toString()) {  // 格式不正确
            info = question('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n').split(', ');
            name = info[0], id = info[1];
            grades = {};
            for (let i=2; i<info.length-2; i++) {
                let [sub, grade] = info[i].split(": ");
                grades[this.subjects[sub]] = +grade;  // 中文名称转换为英文名称，分数从字符串转为数字
            }
        }
        console.log(`学生${name}的成绩被添加`);
        return {name, id, grades};
    }

    getValidIds() {
        var ids = question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n').split(', ');
        // 如果 格式 不正确
        while (ids.length <= 0 || ids.length > this.stus.length) {  // 格式不正确
            ids = question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n').split(', ');
        }
        return ids;
    }
}

// var cls = new Cls();
// cls.addStu();

module.exports = Cls;