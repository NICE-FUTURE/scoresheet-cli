class Student {

    constructor(info) {
        this.id = info.id;
        this.name = info.name;
        this.math = info.grades.math;
        this.chinese = info.grades.chinese;
        this.english = info.grades.english;
        this.programming = info.grades.programming;
        this.calTotal();
        this.calAverage();
    }

    calTotal() {
        this.total = (this.math+this.chinese+this.english+this.programming);
    }

    calAverage() {
        this.average = +(this.total/4).toFixed(2);  // 保留两位小数，需要从字符串转回数字
    }

    toString() {
        return `${this.name}|${this.math}|${this.chinese}|${this.english}|${this.programming}|${this.average}|${this.total}`;
    }
}

module.exports = Student;