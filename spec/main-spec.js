let sinon = require("sinon");
let main = require("../lib/main");
var Student = require('../lib/Student');
var Cls = require('../lib/Cls');

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

});

describe('Student', () => {

    it('should get a student object with attributes: chinese, math, english, programming, total, average', () => {
        var info1 = { name: 'stu1', id: '001', grades: { programming: 50, english: 60, math: 60, chinese: 50 } };
        var stu1 = new Student(info1);
        expect(stu1.name).toBe('stu1');
        expect(stu1.id).toBe('001');
        expect(stu1.chinese).toBe(50);
        expect(stu1.math).toBe(60);
        expect(stu1.english).toBe(60);
        expect(stu1.programming).toBe(50);
        expect(stu1.total).toBe(220);
        expect(stu1.average).toBe(55);        
    })

    it('should return scores summary of student', () => {
        var info1 = { name: 'stu1', 
                      id: '001', 
                      grades: { 
                          programming: 50, 
                          english: 60, 
                          math: 60, 
                          chinese: 50 
                      } 
                    };
        var stu1 = new Student(info1);
        expect(stu1.toString()).toBe('stu1|60|50|60|50|55|220');
    })
})

describe('Cls', () => {
    var cls = new Cls();
    it('should add one student', () => {
        for (let i=0; i<3; i++) {
            cls.addStu();
        }
        // stu1, 001, 语文: 50, 数学: 60, 英语: 60, 编程: 50
        // stu2, 002, 语文: 60, 数学: 77, 英语: 66, 编程: 80
        // stu3, 003, 语文: 62, 数学: 37, 英语: 46, 编程: 86.5
        var stus = cls.stus;
        expect(stus.length).toBe(3);
        // 姓名|数学|语文|英语|编程|平均分|总分
        expect(stus[0].toString()).toBe('stu1|60|50|60|50|55|220');
        expect(stus[1].toString()).toBe('stu2|77|60|66|80|70.75|283');
        expect(stus[2].toString()).toBe('stu3|37|62|46|86.5|57.88|231.5');
    })

    it("should calculate the class's average score", () => {
        cls.calTotalAverage()
        expect(cls.average).toBe(244.83);  // 两位小数，四舍五入
    })

    it("should calculate the class's middle score", () => {
        cls.calTotalMiddle()
        expect(cls.middle).toBe(231.5);  // 两位小数，四舍五入
    })

    it("should return the score sheet", () => {
        // 001, 002, 003
        expect(cls.toString()).toBe(
`成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================
stu1|60|50|60|50|55|220
stu2|77|60|66|80|70.75|283
stu3|37|62|46|86.5|57.88|231.5
========================
全班总分平均数：244.83
全班总分中位数：231.5
`
        );
    })
})

