使用 `npm install` 安装依赖
使用 `npm test` 运行测试
使用 `node lib/main.js` 启动程序

测试截图：
[](results/npm-test-screenshot.png)

运行截图：
[](results/node-main-1.png)
[](results/node-main-2.png)
[](results/node-main-3.png)

结构和关系：
<object data="results/tasking-picture.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="results/tasking-picture.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="results/tasking-picture.pdf">Download PDF</a>.</p>
    </embed>
</object>

-----
以下是原说明

#  练习 - 学生成绩单-命令行版
## 需求描述
我们现在做一个命令行应用。当程序启动的时候，我们会看到一个命令行的主界面：
```
1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：
```
如果我们输入1，那么界面就会变成：
```
请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：
```
如果输入格式不正确，就返回：
```
请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：
```
如果输入格式正确就会返回
```
学生xxx的成绩被添加
```
然后打印
```
1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：
```
等于回到了主界面。 
如果我们在主界面输入了2，那么界面就会变成：
```
请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：
```
如果我们输入的不正确，就会打印：
```
请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：
```
如果输入的格式正确，则会打印成绩单并回到主界面。
```
成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
张三|75|95|80|80|82.5|330
李四|85|80|70|90|81.25|325
========================
全班总分平均数：xxx
全班总分中位数：xxx
```
如果我们输入的学号不存在，该学号在计算时就会被忽略。

## 作业要求
1. 画 Task 图；
1. 编写测试代码；
1. 使用同步 IO。

## 如何使用

首先初次下载完需要安装依赖：
```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。

## 参考资料
1. [npm 下载安装](https://github.com/npm/npm)
2. [node 下载安装](https://github.com/creationix/nvm)
3. [jasmine用法](http://jasmine.github.io/2.4/introduction.html)
4. [git用法1](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/docs/02%20%E5%9C%A8%20Windows%20%E5%B9%B3%E5%8F%B0%E5%BF%85%E8%A3%9D%E7%9A%84%E4%B8%89%E5%A5%97%20Git%20%E5%B7%A5%E5%85%B7.markdown)
5. [git用法2](https://try.github.io/levels/1/challenges/1)
6. [git简易指南](http://gitref.org/zh/index.html)
7. [github用法](https://guides.github.com/activities/hello-world/)
1. [像机器一样思考](https://www.zybuluo.com/jtong/note/403738)

## 答题流程
- 请用户仔细阅读题目要求和题目描述

- 在命令行中使用以下命令在用户本地任意目录下clone此题目库
```
git clone repo_of_this_template
```
NOTE：如果提示git命令未找到请先阅读参考资料
- 用任意编辑器打开clone下来的文件夹，内部会存在两个文件夹
```
spec  //测试文件夹
src   //源文件
```
`请在src文件下的main.js文件内实现main函数`

- 完成函数后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
```
 git remote set-url origin my_url
```
- 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏 
- 获取分支
- 提交
- 等待结果


## 如何本地运行

首先初次下载完需要安装依赖：

```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。
