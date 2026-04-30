const courseBlueprints = [
  {
    category: "入门准备",
    title: "Python 简介",
    short: "认识 Python",
    goal: "知道 Python 适合做什么，并建立第一张学习地图。",
    body: ["Python 语法接近自然语言，适合新手入门，也常用于自动化、数据分析、Web、人工智能和脚本工具。", "学习 Python 不需要一次记住全部知识。更好的节奏是先会写、会运行、会看报错，再逐步补齐数据结构、函数、模块和项目能力。"],
    points: ["Python 代码通常保存在 .py 文件中。", "解释器负责运行你写的代码。", "先掌握基础语法，再进入项目练习。"],
    sample: "print(\"Python 可以帮我自动做重复的事\")",
    taskTitle: "写下学习目标",
    task: "运行示例，然后把输出文字改成你想用 Python 完成的一件事。",
    starter: "print(\"我想用 Python 做一个学习助手\")",
    hint: "先不要纠结方向是否宏大，只要写出一个真实的小目标。",
  },
  {
    category: "入门准备",
    title: "环境搭建",
    short: "安装与版本",
    goal: "理解 Python、编辑器、终端三者分别负责什么。",
    body: ["Python 是运行代码的工具，编辑器是写代码的地方，终端是输入命令的地方。三者配合起来，就能完成从编写到运行的完整流程。", "本网页内置在线运行环境，所以你可以先练语法；以后写真实项目时，再安装本机 Python 和 VS Code。"],
    points: ["python --version 可以查看版本。", "VS Code 常用于写 Python 文件。", "初学建议优先使用 Python 3。"],
    sample: "import sys\nprint(sys.version.split()[0])",
    taskTitle: "查看在线 Python 版本",
    task: "运行代码，看看网页里的 Python 版本号。",
    starter: "import sys\nprint(\"当前 Python 版本：\", sys.version.split()[0])",
    hint: "sys 是标准库模块，里面有解释器相关信息。",
  },
  {
    category: "基础语法",
    title: "第一个程序",
    short: "Hello World",
    goal: "会用 print() 输出内容，完成第一段可运行代码。",
    body: ["print() 是最常用的输出函数。括号里放文字、数字或变量，运行后会显示在结果区域。", "文字要写在英文引号里；数字可以直接写。Python 会从上到下依次执行每一行。"],
    points: ["print(\"Hello, World!\") 是经典第一行代码。", "括号和引号都建议使用英文符号。", "一行代码通常表达一个动作。"],
    sample: "print(\"Hello, World!\")\nprint(\"你好，Python！\")",
    taskTitle: "输出两句话",
    task: "把第二行改成你的学习宣言，然后运行。",
    starter: "print(\"Hello, World!\")\nprint(\"我会一步步学会 Python\")",
    hint: "只改引号里的文字就可以。",
  },
  {
    category: "基础语法",
    title: "解释器与交互模式",
    short: "运行代码",
    goal: "理解脚本文件和交互式运行的区别。",
    body: ["交互模式适合快速试一行代码，脚本文件适合保存完整程序。真实开发中，我们通常把代码写进 .py 文件，再运行整个文件。", "网页中的编辑器更像一个小脚本文件：你写好几行代码，点击运行后一次执行。"],
    points: ["交互模式常见提示符是 >>>。", ".py 文件适合保存长期使用的程序。", "短实验用交互模式，完整任务用脚本。"],
    sample: "expression = 2 + 3 * 4\nprint(expression)",
    taskTitle: "做一次小实验",
    task: "修改表达式，观察 Python 的计算结果。",
    starter: "expression = (2 + 3) * 4\nprint(expression)",
    hint: "试试去掉括号，看结果会不会变化。",
  },
  {
    category: "基础语法",
    title: "注释",
    short: "# 注释",
    goal: "会用注释解释代码意图。",
    body: ["注释是写给人看的说明，Python 不会执行它。单行注释用 # 开头。", "好注释不是重复代码，而是解释为什么这么写、下一步要注意什么。"],
    points: ["# 后面的内容不会运行。", "注释能帮助未来的自己看懂代码。", "不要把每一行都翻译成注释。"],
    sample: "# 计算一周学习总分钟数\nminutes_per_day = 30\ntotal = minutes_per_day * 7\nprint(total)",
    taskTitle: "给代码加注释",
    task: "运行代码，然后给变量含义加一行注释。",
    starter: "# 每天学习 30 分钟\nminutes_per_day = 30\ndays = 7\nprint(minutes_per_day * days)",
    hint: "注释以 # 开头，可以写中文。",
  },
  {
    category: "基础语法",
    title: "变量",
    short: "保存数据",
    goal: "会用变量保存文字、数字和计算结果。",
    body: ["变量像一个有名字的盒子。等号右边是值，左边是变量名，意思是把值保存到这个名字下面。", "变量名要清楚，推荐用小写字母和下划线，例如 total_score。"],
    points: ["name = \"小明\" 保存文字。", "age = 18 保存数字。", "变量可以被重新赋值。"],
    sample: "name = \"小明\"\nage = 18\nprint(name, age)",
    taskTitle: "介绍自己",
    task: "创建 name 和 hobby 两个变量，并输出它们。",
    starter: "name = \"小白\"\nhobby = \"学 Python\"\nprint(name)\nprint(hobby)",
    hint: "变量名不加引号，文字值要加引号。",
  },
  {
    category: "基础语法",
    title: "基本数据类型",
    short: "数字文字真假",
    goal: "认识 int、float、str、bool 这些常见类型。",
    body: ["数据类型决定一个值能做什么。整数可以计算，字符串可以拼接，布尔值常用于判断。", "type() 可以查看一个值的类型，是新手排查问题的好工具。"],
    points: ["int 表示整数。", "float 表示小数。", "str 表示字符串，bool 表示真或假。"],
    sample: "age = 18\nprice = 9.9\nname = \"Python\"\nok = True\nprint(type(age), type(price), type(name), type(ok))",
    taskTitle: "查看类型",
    task: "运行代码，再把变量改成你自己的值。",
    starter: "value = \"100\"\nprint(value)\nprint(type(value))",
    hint: "\"100\" 是字符串，不是整数 100。",
  },
  {
    category: "基础语法",
    title: "数据类型转换",
    short: "int str float",
    goal: "会在字符串、整数、小数之间转换。",
    body: ["用户输入、网页数据、文件内容经常是字符串。需要计算时，要先转换成数字。", "常用转换函数有 int()、float()、str()，转换失败通常说明内容格式不符合目标类型。"],
    points: ["int(\"18\") 得到整数 18。", "str(18) 得到字符串 \"18\"。", "float(\"3.14\") 得到小数 3.14。"],
    sample: "price = \"9.9\"\ncount = \"3\"\ntotal = float(price) * int(count)\nprint(total)",
    taskTitle: "计算字符串数字",
    task: "把字符串形式的单价和数量转换后计算总价。",
    starter: "price = \"12.5\"\ncount = \"4\"\nprint(float(price) * int(count))",
    hint: "小数用 float()，整数用 int()。",
  },
  {
    category: "基础语法",
    title: "运算符",
    short: "+ - * /",
    goal: "掌握算术、比较、逻辑三类常用运算符。",
    body: ["运算符不只用于数学计算，也用于比较和判断。比较运算会得到 True 或 False。", "逻辑运算 and、or、not 可以把多个条件组合起来。"],
    points: ["// 是整除，% 是取余。", "== 判断是否相等。", "and 表示两个条件都成立。"],
    sample: "score = 86\nprint(score >= 60)\nprint(score >= 60 and score < 90)\nprint(17 // 5, 17 % 5)",
    taskTitle: "判断偶数",
    task: "用取余判断 number 是否是偶数。",
    starter: "number = 24\nprint(number % 2 == 0)",
    hint: "一个数除以 2 的余数是 0，就说明它是偶数。",
  },
  {
    category: "数据结构",
    title: "数字 Number",
    short: "数值计算",
    goal: "熟悉整数、小数和常用数学计算。",
    body: ["Python 的数字可以直接参与计算。整数没有小数点，小数有小数点。", "计算金额、平均值、比例时通常会遇到小数；需要精确金融计算时再学习 decimal。"],
    points: ["abs(-3) 得到绝对值。", "round(3.14159, 2) 保留两位小数。", "pow(2, 3) 等价于 2 ** 3。"],
    sample: "radius = 3\narea = 3.14 * radius ** 2\nprint(round(area, 2))",
    taskTitle: "计算圆面积",
    task: "修改 radius，计算不同半径的圆面积。",
    starter: "radius = 5\narea = 3.14 * radius ** 2\nprint(round(area, 2))",
    hint: "** 表示乘方，radius ** 2 就是半径的平方。",
  },
  {
    category: "数据结构",
    title: "字符串",
    short: "文本处理",
    goal: "会创建、拼接、切片和格式化字符串。",
    body: ["字符串用于保存文本。你可以用 + 拼接，也可以用 f-string 把变量嵌入文字。", "字符串支持下标和切片，适合取出部分内容。下标从 0 开始。"],
    points: ["text[0] 取第一个字符。", "text[1:4] 取一段。", "f\"你好，{name}\" 可读性很好。"],
    sample: "name = \"小明\"\nmessage = f\"你好，{name}\"\nprint(message)\nprint(message[0:2])",
    taskTitle: "生成欢迎语",
    task: "用 f-string 输出包含姓名和城市的句子。",
    starter: "name = \"小白\"\ncity = \"上海\"\nprint(f\"你好，{name}，欢迎来到{city}\")",
    hint: "f-string 前面要有字母 f，变量写在花括号里。",
  },
  {
    category: "数据结构",
    title: "列表",
    short: "list",
    goal: "会保存一组有顺序的数据，并进行增删改查。",
    body: ["列表用 [] 表示，适合保存一组同类或相关的数据。列表是有顺序的，可以通过下标访问。", "append() 可以追加元素，len() 可以获取长度，for 循环可以逐个处理。"],
    points: ["items[0] 是第一个元素。", "items.append(value) 追加元素。", "列表内容可以修改。"],
    sample: "fruits = [\"苹果\", \"香蕉\"]\nfruits.append(\"橙子\")\nfor fruit in fruits:\n    print(fruit)",
    taskTitle: "学习清单",
    task: "建立 skills 列表，添加一个新技能并逐个输出。",
    starter: "skills = [\"变量\", \"判断\", \"循环\"]\nskills.append(\"函数\")\nfor skill in skills:\n    print(skill)",
    hint: "append() 会把新元素放到列表末尾。",
  },
  {
    category: "数据结构",
    title: "元组",
    short: "tuple",
    goal: "理解元组和列表的区别。",
    body: ["元组用 () 表示，和列表一样有顺序，但创建后通常不再修改。", "当一组数据表示固定结构时，元组很合适，比如坐标、颜色、日期片段。"],
    points: ["point = (3, 5)", "元组可以用下标读取。", "固定不变的数据优先考虑元组。"],
    sample: "point = (3, 5)\nprint(point[0])\nprint(point[1])",
    taskTitle: "保存坐标",
    task: "创建一个坐标元组，并输出 x 和 y。",
    starter: "position = (10, 20)\nx = position[0]\ny = position[1]\nprint(x, y)",
    hint: "下标从 0 开始，所以第一个值是 position[0]。",
  },
  {
    category: "数据结构",
    title: "字典",
    short: "dict",
    goal: "会用键值对保存结构化信息。",
    body: ["字典用 {} 表示，用键找到对应的值。它适合保存一个对象的多项属性。", "比如一个学生有姓名、年龄、分数，这些都可以放在同一个字典里。"],
    points: ["student[\"name\"] 读取姓名。", "字典的键通常用字符串。", "可以新增或修改键值对。"],
    sample: "student = {\"name\": \"小明\", \"score\": 88}\nstudent[\"score\"] = 92\nprint(student[\"name\"], student[\"score\"])",
    taskTitle: "个人资料卡",
    task: "创建 profile 字典，保存姓名和爱好并输出。",
    starter: "profile = {\"name\": \"小白\", \"hobby\": \"Python\"}\nprint(profile[\"name\"])\nprint(profile[\"hobby\"])",
    hint: "读取字典值时，方括号里写键名。",
  },
  {
    category: "数据结构",
    title: "集合",
    short: "set",
    goal: "理解集合去重和集合运算。",
    body: ["集合也是用 {} 创建，但它只保存不重复的元素，不关心顺序。", "集合适合去重，也适合求交集、并集、差集。"],
    points: ["set([1, 1, 2]) 会去重。", "& 求交集。", "| 求并集。"],
    sample: "a = {\"Python\", \"SQL\", \"Excel\"}\nb = {\"Python\", \"JavaScript\"}\nprint(a & b)\nprint(a | b)",
    taskTitle: "找共同技能",
    task: "运行代码，找出两个人共同会的技能。",
    starter: "me = {\"Python\", \"Excel\", \"SQL\"}\nfriend = {\"Python\", \"Java\", \"SQL\"}\nprint(me & friend)",
    hint: "& 会得到两个集合里都存在的元素。",
  },
  {
    category: "流程控制",
    title: "条件控制",
    short: "if elif else",
    goal: "会根据条件执行不同分支。",
    body: ["if 用于判断，条件成立时执行缩进代码。elif 表示另一个条件，else 表示都不成立时的默认分支。", "条件判断是程序产生差异化行为的起点。"],
    points: ["条件后面要写冒号。", "分支代码要缩进。", "多个条件按从上到下的顺序判断。"],
    sample: "score = 85\nif score >= 90:\n    print(\"优秀\")\nelif score >= 60:\n    print(\"及格\")\nelse:\n    print(\"继续加油\")",
    taskTitle: "温度提醒",
    task: "根据温度输出“热”“舒服”或“冷”。",
    starter: "temperature = 26\nif temperature >= 30:\n    print(\"热\")\nelif temperature >= 18:\n    print(\"舒服\")\nelse:\n    print(\"冷\")",
    hint: "elif 可以写多个，用来处理多档判断。",
  },
  {
    category: "流程控制",
    title: "for 循环",
    short: "遍历",
    goal: "会遍历列表、字符串和 range()。",
    body: ["for 循环适合“对一组东西逐个处理”。这组东西可以是列表、字符串、range() 生成的序列。", "循环变量每次会拿到一个新值，循环体中的代码会重复执行。"],
    points: ["for item in items: 遍历列表。", "range(5) 生成 0 到 4。", "循环体必须缩进。"],
    sample: "for i in range(5):\n    print(i + 1)",
    taskTitle: "输出 1 到 5",
    task: "用 for 循环输出 1、2、3、4、5。",
    starter: "for i in range(5):\n    print(i + 1)",
    hint: "range(5) 从 0 开始，所以输出 i + 1。",
  },
  {
    category: "流程控制",
    title: "while 循环",
    short: "条件重复",
    goal: "会在条件成立时重复执行代码。",
    body: ["while 循环适合“不知道要循环几次，但知道什么时候停”的场景。", "写 while 时要特别注意让条件最终变为 False，否则程序会一直运行。"],
    points: ["while 后面写条件。", "循环体里通常会更新变量。", "break 可以提前结束循环。"],
    sample: "count = 1\nwhile count <= 3:\n    print(count)\n    count += 1",
    taskTitle: "倒计时",
    task: "用 while 输出 3、2、1。",
    starter: "count = 3\nwhile count > 0:\n    print(count)\n    count -= 1",
    hint: "每次循环后让 count 减 1。",
  },
  {
    category: "流程控制",
    title: "break 和 continue",
    short: "控制循环",
    goal: "会提前结束循环或跳过本次循环。",
    body: ["break 会直接结束整个循环，continue 会跳过本次循环剩余代码，进入下一次循环。", "它们能让循环更灵活，但过度使用会让代码难读，初学时保持简单即可。"],
    points: ["break 常用于找到目标后停止。", "continue 常用于跳过不想处理的数据。", "优先让循环条件清晰。"],
    sample: "for number in range(1, 8):\n    if number == 4:\n        continue\n    if number == 7:\n        break\n    print(number)",
    taskTitle: "跳过偶数",
    task: "输出 1 到 6 中的奇数。",
    starter: "for number in range(1, 7):\n    if number % 2 == 0:\n        continue\n    print(number)",
    hint: "偶数对 2 取余等于 0。",
  },
  {
    category: "流程控制",
    title: "推导式",
    short: "快速生成",
    goal: "会用列表推导式简洁生成新列表。",
    body: ["推导式是 Python 很有特色的写法，可以把循环生成列表的逻辑写在一行里。", "新手可以先写普通 for 循环，理解后再改成推导式。"],
    points: ["[x * x for x in nums] 生成平方列表。", "可以加 if 做筛选。", "不要为了短而牺牲可读性。"],
    sample: "numbers = [1, 2, 3, 4]\nsquares = [n * n for n in numbers]\nprint(squares)",
    taskTitle: "生成偶数列表",
    task: "用推导式生成 1 到 10 里的偶数。",
    starter: "evens = [n for n in range(1, 11) if n % 2 == 0]\nprint(evens)",
    hint: "if n % 2 == 0 可以筛选偶数。",
  },
  {
    category: "函数模块",
    title: "函数",
    short: "def",
    goal: "会定义函数、传参和返回结果。",
    body: ["函数把一段能力封装起来，方便重复使用。参数是函数的输入，return 是函数的输出。", "好的函数通常只做一件清楚的事，名字能说明它的用途。"],
    points: ["def 定义函数。", "return 返回结果。", "调用函数时才会执行函数体。"],
    sample: "def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)",
    taskTitle: "写加法函数",
    task: "定义 add(a, b)，返回两个数的和。",
    starter: "def add(a, b):\n    return a + b\n\nprint(add(10, 20))",
    hint: "return 后面的值会成为函数调用的结果。",
  },
  {
    category: "函数模块",
    title: "lambda",
    short: "匿名函数",
    goal: "理解 lambda 适合写很短的小函数。",
    body: ["lambda 可以创建匿名函数，常用于排序、映射等需要传入函数的场景。", "如果逻辑超过一行，普通 def 函数通常更清楚。"],
    points: ["lambda x: x * 2 表示输入 x，返回 x * 2。", "lambda 没有函数名。", "复杂逻辑别硬写 lambda。"],
    sample: "double = lambda x: x * 2\nprint(double(6))",
    taskTitle: "按长度排序",
    task: "用 lambda 让单词按长度排序。",
    starter: "words = [\"python\", \"ai\", \"web\"]\nwords.sort(key=lambda word: len(word))\nprint(words)",
    hint: "sort 的 key 参数可以指定排序依据。",
  },
  {
    category: "函数模块",
    title: "装饰器",
    short: "@decorator",
    goal: "理解装饰器是在不改函数内部的情况下增强函数。",
    body: ["装饰器本质上是接收函数、返回新函数的函数。它常用于日志、权限、计时等横切逻辑。", "初学不必急着手写复杂装饰器，先看懂 @ 符号代表“包装这个函数”。"],
    points: ["@timer 写在函数定义上方。", "装饰器可以在函数前后加逻辑。", "常见于 Web 框架和测试工具。"],
    sample: "def loud(func):\n    def wrapper():\n        print(\"开始\")\n        func()\n        print(\"结束\")\n    return wrapper\n\n@loud\ndef say():\n    print(\"学习 Python\")\n\nsay()",
    taskTitle: "观察执行顺序",
    task: "运行代码，观察装饰器在原函数前后加了什么输出。",
    starter: "def marker(func):\n    def wrapper():\n        print(\"---\")\n        func()\n        print(\"---\")\n    return wrapper\n\n@marker\ndef hello():\n    print(\"hello\")\n\nhello()",
    hint: "先看输出顺序，再回头看 wrapper 里的代码。",
  },
  {
    category: "函数模块",
    title: "迭代器与生成器",
    short: "yield",
    goal: "理解逐个产生数据的思路。",
    body: ["迭代器可以一个一个拿出数据。生成器是创建迭代器的简洁方式，使用 yield 产出值。", "生成器适合处理很多数据，因为它不需要一次把所有结果放进内存。"],
    points: ["yield 会产出一个值并暂停。", "for 可以遍历生成器。", "生成器适合流式处理。"],
    sample: "def count_to_three():\n    yield 1\n    yield 2\n    yield 3\n\nfor n in count_to_three():\n    print(n)",
    taskTitle: "生成 1 到 3",
    task: "运行代码，观察生成器如何逐个产出数字。",
    starter: "def count_to_three():\n    yield 1\n    yield 2\n    yield 3\n\nfor n in count_to_three():\n    print(n)",
    hint: "函数定义应该写 def name():。",
  },
  {
    category: "函数模块",
    title: "模块",
    short: "import",
    goal: "会导入标准库模块并调用其中的能力。",
    body: ["模块是别人或自己写好的代码文件。import 可以把模块引入当前程序。", "Python 自带很多标准库模块，比如 math、random、datetime、json。"],
    points: ["import math 导入数学模块。", "from math import sqrt 只导入一个函数。", "模块让代码复用更容易。"],
    sample: "import math\nprint(math.sqrt(16))",
    taskTitle: "使用数学模块",
    task: "导入 math，计算 9 的平方根。",
    starter: "import math\nprint(math.sqrt(9))",
    hint: "sqrt 是 square root，表示平方根。",
  },
  {
    category: "函数模块",
    title: "__name__",
    short: "入口判断",
    goal: "理解脚本直接运行和被导入时的区别。",
    body: ["每个 Python 文件都有 __name__。当文件被直接运行时，它的值是 \"__main__\"。", "这常用于把测试代码或启动代码放在入口判断下面，避免被别的文件导入时自动执行。"],
    points: ["if __name__ == \"__main__\": 是常见入口写法。", "被 import 时不会进入这个分支。", "适合组织可复用模块。"],
    sample: "def main():\n    print(\"程序开始\")\n\nif __name__ == \"__main__\":\n    main()",
    taskTitle: "写入口函数",
    task: "把输出放进 main()，再通过入口判断调用。",
    starter: "def main():\n    print(\"从 main 开始运行\")\n\nif __name__ == \"__main__\":\n    main()",
    hint: "网页里这段会被直接运行，所以会执行 main()。",
  },
  {
    category: "函数模块",
    title: "命名空间与作用域",
    short: "变量范围",
    goal: "知道变量在哪里能被访问。",
    body: ["作用域决定变量的可见范围。函数内部定义的变量通常只能在函数内部使用。", "同名变量出现在不同作用域时，Python 会优先找当前局部作用域，再找外层。"],
    points: ["局部变量在函数内部。", "全局变量在文件层级。", "少用 global，优先通过参数和返回值传递数据。"],
    sample: "message = \"全局\"\n\ndef show():\n    message = \"局部\"\n    print(message)\n\nshow()\nprint(message)",
    taskTitle: "观察作用域",
    task: "运行代码，看看两个 message 分别输出什么。",
    starter: "level = \"外面\"\n\ndef demo():\n    level = \"里面\"\n    print(level)\n\ndemo()\nprint(level)",
    hint: "函数里的赋值不会自动修改外面的同名变量。",
  },
  {
    category: "输入输出",
    title: "输入和输出",
    short: "input print",
    goal: "理解 input() 和 print() 的作用。",
    body: ["print() 把结果显示出来，input() 从用户那里读取文字。注意 input() 得到的一定是字符串。", "本网页不适合交互式输入等待，所以练习里用变量模拟输入。"],
    points: ["input() 返回字符串。", "需要计算时先做类型转换。", "print() 可以输出多个值。"],
    sample: "name = \"小白\"\nprint(\"你好\", name)",
    taskTitle: "模拟输入",
    task: "把 user_input 当作用户输入，转换成数字后加 1。",
    starter: "user_input = \"18\"\nage = int(user_input)\nprint(age + 1)",
    hint: "真实脚本里可以写 age = int(input(\"年龄：\"))。",
  },
  {
    category: "输入输出",
    title: "文件 File",
    short: "读写文件",
    goal: "了解 open() 读写文本文件的基本流程。",
    body: ["文件操作让程序可以把结果保存下来，也可以读取已有数据。常见模式有 r 读取、w 写入、a 追加。", "真实项目中建议配合 with 使用，这样文件会自动关闭。网页环境可以演示临时文件。"],
    points: ["open(path, \"w\") 写文件。", "open(path, \"r\") 读文件。", "with 可以自动管理关闭。"],
    sample: "with open(\"note.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"学习 Python\")\n\nwith open(\"note.txt\", \"r\", encoding=\"utf-8\") as f:\n    print(f.read())",
    taskTitle: "写入再读取",
    task: "运行代码，观察文件内容被写入后又读出来。",
    starter: "with open(\"hello.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"你好，文件\")\n\nwith open(\"hello.txt\", \"r\", encoding=\"utf-8\") as f:\n    print(f.read())",
    hint: "with 代码块结束后，文件会自动关闭。",
  },
  {
    category: "输入输出",
    title: "with 语句",
    short: "上下文管理",
    goal: "理解 with 用来自动处理资源收尾。",
    body: ["with 常用于文件、网络连接、锁等需要“用完收尾”的资源。", "它能减少忘记关闭文件之类的错误，让代码更稳。"],
    points: ["with open(...) as f 是常见写法。", "缩进块结束后自动清理。", "比手动 close() 更不容易出错。"],
    sample: "with open(\"data.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"with 很好用\")\nprint(\"写入完成\")",
    taskTitle: "保存一句话",
    task: "用 with 写入一句你想记住的话。",
    starter: "with open(\"memo.txt\", \"w\", encoding=\"utf-8\") as file:\n    file.write(\"每天写一点代码\")\nprint(\"保存完成\")",
    hint: "文件名可以自己改，内容写在 file.write() 里。",
  },
  {
    category: "输入输出",
    title: "OS 模块",
    short: "路径目录",
    goal: "会用 os 查看目录和拼接路径。",
    body: ["os 模块提供操作系统相关能力，比如查看当前目录、列出文件、拼接路径。", "跨平台写代码时，路径拼接建议使用 os.path.join() 或 pathlib。"],
    points: ["os.getcwd() 查看当前目录。", "os.listdir() 列出文件。", "os.path.join() 拼接路径。"],
    sample: "import os\nprint(os.getcwd())\nprint(os.path.join(\"folder\", \"file.txt\"))",
    taskTitle: "查看运行目录",
    task: "运行代码，看看网页 Python 的当前目录。",
    starter: "import os\nprint(\"当前目录：\", os.getcwd())\nprint(\"目录内容：\", os.listdir(\".\"))",
    hint: "在线环境里的目录是浏览器虚拟文件系统。",
  },
  {
    category: "错误调试",
    title: "错误和异常",
    short: "try except",
    goal: "会阅读报错，并用 try/except 处理可预期错误。",
    body: ["报错不是失败，而是 Python 告诉你哪里不符合规则。先看错误类型，再看出错行。", "try/except 可以处理可能发生的异常，比如用户输入不是数字。"],
    points: ["SyntaxError 通常是语法写错。", "ValueError 常见于类型转换失败。", "except 不要把所有问题都悄悄吞掉。"],
    sample: "text = \"abc\"\ntry:\n    number = int(text)\n    print(number)\nexcept ValueError:\n    print(\"这不是合法数字\")",
    taskTitle: "处理转换错误",
    task: "修改 text，观察成功和失败两种情况。",
    starter: "text = \"42\"\ntry:\n    print(int(text) + 1)\nexcept ValueError:\n    print(\"请输入数字\")",
    hint: "把 text 改成 \"abc\"，就会进入 except。",
  },
  {
    category: "面向对象",
    title: "面向对象",
    short: "class",
    goal: "理解类、对象、属性和方法。",
    body: ["类像图纸，对象像根据图纸造出来的具体东西。属性保存对象的数据，方法表示对象能做的动作。", "面向对象适合组织复杂程序，但初学阶段先能看懂基本 class 就够了。"],
    points: ["class 定义类。", "__init__ 初始化对象。", "self 表示当前对象。"],
    sample: "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def show(self):\n        print(self.name, self.score)\n\nstudent = Student(\"小明\", 90)\nstudent.show()",
    taskTitle: "创建学生类",
    task: "运行代码，然后改一个学生姓名和分数。",
    starter: "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def show(self):\n        print(f\"{self.name}: {self.score}\")\n\nstudent = Student(\"小白\", 88)\nstudent.show()",
    hint: "Student(\"小白\", 88) 会创建一个学生对象。",
  },
  {
    category: "工程化",
    title: "虚拟环境",
    short: "venv",
    goal: "知道为什么项目要隔离依赖。",
    body: ["虚拟环境为每个项目准备独立的 Python 包空间，避免 A 项目升级库后影响 B 项目。", "在真实电脑上常用 python -m venv .venv 创建，再激活环境安装依赖。"],
    points: ["每个项目一个虚拟环境更稳。", "依赖通常记录在 requirements.txt 或 pyproject.toml。", "网页环境不需要手动创建 venv。"],
    sample: "commands = [\n    \"python -m venv .venv\",\n    \"source .venv/bin/activate\",\n    \"pip install requests\",\n]\nfor command in commands:\n    print(command)",
    taskTitle: "认识命令",
    task: "运行代码，读一遍创建虚拟环境的常见命令。",
    starter: "print(\"创建虚拟环境：python -m venv .venv\")\nprint(\"安装依赖：pip install 包名\")",
    hint: "这些是终端命令，不是 Python 语句；这里用 print 只是帮助记忆。",
  },
  {
    category: "工程化",
    title: "pip 包管理",
    short: "安装库",
    goal: "了解第三方库如何安装和记录。",
    body: ["pip 是 Python 常用包管理工具，用来安装第三方库。比如 requests、pandas、flask 都可以通过 pip 安装。", "项目交给别人运行时，要提供依赖清单，避免“我电脑能跑、你电脑不能跑”。"],
    points: ["pip install requests 安装库。", "pip freeze 可查看已安装包。", "requirements.txt 常用于记录依赖。"],
    sample: "packages = [\"requests\", \"pandas\", \"flask\"]\nfor package in packages:\n    print(\"pip install\", package)",
    taskTitle: "生成安装命令",
    task: "把 packages 里加入一个你想学的库。",
    starter: "packages = [\"requests\", \"matplotlib\"]\nfor package in packages:\n    print(\"pip install\", package)",
    hint: "网页里不能直接 pip install，这里先学习命令形式。",
  },
  {
    category: "工程化",
    title: "类型注解",
    short: "type hints",
    goal: "会给变量和函数写基础类型注解。",
    body: ["类型注解不会强制改变运行结果，但能帮助编辑器提示，也能让代码更易读。", "团队项目中，类型注解能减少误用函数参数的概率。"],
    points: ["name: str 表示字符串。", "def add(a: int, b: int) -> int 表示返回整数。", "注解是给人和工具看的说明。"],
    sample: "def greet(name: str) -> str:\n    return f\"你好，{name}\"\n\nprint(greet(\"小明\"))",
    taskTitle: "给函数加注解",
    task: "写一个带类型注解的 multiply 函数。",
    starter: "def multiply(a: int, b: int) -> int:\n    return a * b\n\nprint(multiply(3, 4))",
    hint: "-> int 表示函数预计返回整数。",
  },
  {
    category: "标准库",
    title: "标准库概览",
    short: "内置能力",
    goal: "知道标准库是 Python 自带的工具箱。",
    body: ["标准库不需要额外安装，直接 import 就能用。它覆盖日期、随机数、数学、文件、网络、压缩、日志等很多基础能力。", "学习标准库时不要死背，先知道“有这个工具”，需要时再查具体用法。"],
    points: ["math 做数学计算。", "random 生成随机数。", "datetime 处理日期时间。"],
    sample: "import math\nimport random\nfrom datetime import date\nprint(math.pi)\nprint(random.randint(1, 6))\nprint(date.today())",
    taskTitle: "试用三个标准库",
    task: "运行代码，观察数学、随机数、日期输出。",
    starter: "import random\nfrom datetime import datetime\nprint(random.choice([\"学习\", \"练习\", \"复习\"]))\nprint(datetime.now().year)",
    hint: "标准库名字通常就是 import 后面的名字。",
  },
  {
    category: "标准库",
    title: "内置函数",
    short: "常用函数",
    goal: "掌握 len、sum、max、min、sorted 等常用内置函数。",
    body: ["内置函数无需 import，可以直接使用。它们是日常写 Python 的高频工具。", "多用内置函数能让代码更短、更可靠，也更符合 Python 风格。"],
    points: ["len() 求长度。", "sum() 求和。", "sorted() 返回排序后的新列表。"],
    sample: "scores = [90, 72, 88]\nprint(len(scores))\nprint(sum(scores))\nprint(max(scores), min(scores))",
    taskTitle: "统计成绩",
    task: "计算分数数量、总分和平均分。",
    starter: "scores = [90, 72, 88, 95]\nprint(\"数量\", len(scores))\nprint(\"总分\", sum(scores))\nprint(\"平均\", sum(scores) / len(scores))",
    hint: "平均分 = 总分 / 数量。",
  },
  {
    category: "标准库",
    title: "math 模块",
    short: "数学",
    goal: "会使用常见数学函数和常量。",
    body: ["math 模块提供数学计算工具，比如平方根、向上取整、三角函数和圆周率。", "普通业务计算未必需要 math，但算法、图形、数据分析中很常见。"],
    points: ["math.sqrt() 平方根。", "math.ceil() 向上取整。", "math.pi 是圆周率。"],
    sample: "import math\nprint(math.sqrt(25))\nprint(math.ceil(3.2))\nprint(round(math.pi, 3))",
    taskTitle: "计算圆周长",
    task: "使用 math.pi 计算半径为 4 的圆周长。",
    starter: "import math\nradius = 4\nlength = 2 * math.pi * radius\nprint(round(length, 2))",
    hint: "圆周长公式是 2 * pi * r。",
  },
  {
    category: "标准库",
    title: "random 模块",
    short: "随机数",
    goal: "会生成随机整数和随机选择。",
    body: ["random 常用于抽奖、模拟、小游戏和测试数据。", "随机结果每次可能不同，如果需要复现结果，可以设置 seed。"],
    points: ["random.randint(1, 6) 模拟骰子。", "random.choice(list) 随机选一个。", "random.shuffle(list) 打乱列表。"],
    sample: "import random\nprint(random.randint(1, 6))\nprint(random.choice([\"苹果\", \"香蕉\", \"橙子\"]))",
    taskTitle: "今日任务抽签",
    task: "从任务列表中随机抽一个。",
    starter: "import random\ntasks = [\"看一课\", \"写练习\", \"复习笔记\"]\nprint(random.choice(tasks))",
    hint: "choice 的参数是一组可选择的数据。",
  },
  {
    category: "标准库",
    title: "datetime 模块",
    short: "日期时间",
    goal: "会获取当前时间并格式化显示。",
    body: ["datetime 用于处理日期和时间。你可以获取当前时间、格式化时间、计算日期差。", "日志、报表、文件命名、任务提醒都常用日期时间。"],
    points: ["datetime.now() 获取当前时间。", "strftime() 格式化时间。", "timedelta 表示时间差。"],
    sample: "from datetime import datetime, timedelta\nnow = datetime.now()\nprint(now.strftime(\"%Y-%m-%d\"))\nprint((now + timedelta(days=7)).strftime(\"%Y-%m-%d\"))",
    taskTitle: "计算一周后",
    task: "运行代码，输出今天和 7 天后的日期。",
    starter: "from datetime import datetime, timedelta\ntoday = datetime.now()\nnext_week = today + timedelta(days=7)\nprint(today.strftime(\"%Y-%m-%d\"))\nprint(next_week.strftime(\"%Y-%m-%d\"))",
    hint: "%Y 表示年，%m 表示月，%d 表示日。",
  },
  {
    category: "数据交换",
    title: "JSON",
    short: "数据交换",
    goal: "会把字典和 JSON 字符串互相转换。",
    body: ["JSON 是前后端、接口、配置文件中常见的数据格式。Python 的 json 模块可以处理它。", "字典转 JSON 用 dumps，JSON 字符串转字典用 loads。"],
    points: ["json.dumps(data) 转字符串。", "json.loads(text) 转 Python 数据。", "ensure_ascii=False 可以保留中文。"],
    sample: "import json\ndata = {\"name\": \"小明\", \"score\": 90}\ntext = json.dumps(data, ensure_ascii=False)\nprint(text)\nprint(json.loads(text)[\"name\"])",
    taskTitle: "保存资料为 JSON",
    task: "把 profile 字典转成 JSON 字符串。",
    starter: "import json\nprofile = {\"name\": \"小白\", \"skill\": \"Python\"}\nprint(json.dumps(profile, ensure_ascii=False))",
    hint: "中文显示成原文，需要 ensure_ascii=False。",
  },
  {
    category: "数据交换",
    title: "XML 解析",
    short: "XML",
    goal: "了解 XML 树形数据的基本读取方式。",
    body: ["XML 是一种树形文本格式，早期系统和部分接口仍然会用到。", "Python 标准库 xml.etree.ElementTree 可以解析简单 XML。"],
    points: ["fromstring() 从字符串解析 XML。", "find() 查找节点。", "节点的 text 是标签内容。"],
    sample: "import xml.etree.ElementTree as ET\nroot = ET.fromstring(\"<user><name>小明</name></user>\")\nprint(root.find(\"name\").text)",
    taskTitle: "读取 XML 名称",
    task: "运行代码，读取 XML 里的课程名。",
    starter: "import xml.etree.ElementTree as ET\nroot = ET.fromstring(\"<course><name>Python</name></course>\")\nprint(root.find(\"name\").text)",
    hint: "find(\"name\") 会找到 name 标签。",
  },
  {
    category: "数据交换",
    title: "CSV",
    short: "表格文本",
    goal: "会用 csv 模块读取简单表格数据。",
    body: ["CSV 是逗号分隔的文本表格，Excel 和很多数据系统都能导入导出。", "Python 的 csv 模块可以按行读取，也可以用 DictReader 按列名读取。"],
    points: ["csv.reader 读取列表行。", "csv.DictReader 读取字典行。", "StringIO 可以把字符串当文件。"],
    sample: "import csv\nfrom io import StringIO\ntext = \"name,score\\n小明,90\\n小红,88\"\nfor row in csv.DictReader(StringIO(text)):\n    print(row[\"name\"], row[\"score\"])",
    taskTitle: "读取成绩表",
    task: "运行代码，读取 CSV 里的姓名和分数。",
    starter: "import csv\nfrom io import StringIO\ntext = \"name,score\\n小白,95\\n小李,82\"\nfor row in csv.DictReader(StringIO(text)):\n    print(row[\"name\"], row[\"score\"])",
    hint: "DictReader 会把第一行当作字段名。",
  },
  {
    category: "文本处理",
    title: "正则表达式",
    short: "re",
    goal: "了解用模式匹配文本。",
    body: ["正则表达式用于在文本中查找符合规则的内容，比如手机号、邮箱、数字。", "正则很强，但也容易写得难读。简单需求优先用字符串方法，复杂匹配再用 re。"],
    points: ["re.findall() 查找所有匹配。", "\\d 表示数字。", "+ 表示一个或多个。"],
    sample: "import re\ntext = \"订单 A12 金额 88，订单 B7 金额 103\"\nprint(re.findall(r\"\\d+\", text))",
    taskTitle: "提取数字",
    task: "从文本中找出所有数字。",
    starter: "import re\ntext = \"Python3 学习 30 天，练习 100 题\"\nprint(re.findall(r\"\\d+\", text))",
    hint: "r\"\\d+\" 表示连续数字。",
  },
  {
    category: "文本处理",
    title: "StringIO",
    short: "内存文件",
    goal: "理解把字符串当作文件读写。",
    body: ["StringIO 来自 io 模块，可以在内存中模拟文本文件。", "测试 CSV、构造临时文本、避免真的写磁盘时很有用。"],
    points: ["StringIO(\"text\") 可被 read()。", "write() 可以写入内存缓冲。", "getvalue() 取出全部内容。"],
    sample: "from io import StringIO\nbuffer = StringIO()\nbuffer.write(\"第一行\\n\")\nbuffer.write(\"第二行\")\nprint(buffer.getvalue())",
    taskTitle: "写入内存文本",
    task: "用 StringIO 拼接两行文字。",
    starter: "from io import StringIO\ntext = StringIO()\ntext.write(\"Python\\n\")\ntext.write(\"学习营\")\nprint(text.getvalue())",
    hint: "\\n 表示换行。",
  },
  {
    category: "工程化",
    title: "logging 日志",
    short: "记录运行",
    goal: "会用日志记录程序状态。",
    body: ["日志比 print 更适合真实项目，因为它有级别、时间、模块等信息。", "常见级别有 debug、info、warning、error。"],
    points: ["logging.info() 记录普通信息。", "logging.warning() 记录警告。", "basicConfig 设置日志格式和级别。"],
    sample: "import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info(\"程序启动\")\nlogging.warning(\"这是一个提醒\")",
    taskTitle: "输出日志",
    task: "运行代码，观察 info 和 warning 日志。",
    starter: "import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info(\"开始学习\")\nlogging.warning(\"记得保存进度\")",
    hint: "默认级别可能过滤 debug，所以先用 INFO。",
  },
  {
    category: "系统网络",
    title: "sys 模块",
    short: "解释器信息",
    goal: "会读取 Python 运行参数和版本信息。",
    body: ["sys 模块提供解释器相关信息，比如版本、命令行参数、模块搜索路径。", "写命令行工具时，sys.argv 很常见。"],
    points: ["sys.version 查看版本。", "sys.argv 读取命令行参数。", "sys.path 是模块搜索路径。"],
    sample: "import sys\nprint(sys.version.split()[0])\nprint(len(sys.path))",
    taskTitle: "查看解释器信息",
    task: "运行代码，输出版本和路径数量。",
    starter: "import sys\nprint(\"版本\", sys.version.split()[0])\nprint(\"搜索路径数量\", len(sys.path))",
    hint: "sys.path 内容很多，先看数量即可。",
  },
  {
    category: "系统网络",
    title: "subprocess 模块",
    short: "运行命令",
    goal: "了解 Python 可以调用系统命令。",
    body: ["subprocess 用于从 Python 启动外部程序或命令。它很强大，也要谨慎处理用户输入，避免安全风险。", "在线环境限制较多，这里只演示简单命令形式。"],
    points: ["subprocess.run() 执行命令。", "capture_output=True 捕获输出。", "不要直接执行不可信输入。"],
    sample: "import subprocess\nresult = subprocess.run([\"python\", \"--version\"], capture_output=True, text=True)\nprint(result.stdout or result.stderr)",
    taskTitle: "认识 subprocess",
    task: "运行示例，查看当前环境是否允许调用命令。",
    starter: "import subprocess\nresult = subprocess.run([\"python\", \"--version\"], capture_output=True, text=True)\nprint(result.stdout or result.stderr)",
    hint: "浏览器环境可能限制部分系统命令，这是正常的。",
  },
  {
    category: "系统网络",
    title: "urllib",
    short: "网络请求",
    goal: "了解标准库也能发起 HTTP 请求。",
    body: ["urllib 是 Python 标准库里的网络请求工具。真实项目中很多人也会使用更友好的 requests。", "网络请求可能受浏览器或服务器跨域限制，学习时先理解流程。"],
    points: ["urlopen() 打开网址。", "read() 读取响应内容。", "网络代码要考虑超时和异常。"],
    sample: "print(\"urllib 可用于请求网页，真实环境中使用 urllib.request.urlopen(url)\")",
    taskTitle: "理解请求流程",
    task: "运行提示文字，记住请求网页的大致步骤。",
    starter: "steps = [\"准备 URL\", \"发送请求\", \"读取响应\", \"处理数据\"]\nfor step in steps:\n    print(step)",
    hint: "在线运行器不一定允许任意网络请求，所以这里用流程练习。",
  },
  {
    category: "系统网络",
    title: "网络编程",
    short: "socket",
    goal: "认识客户端、服务器和端口的概念。",
    body: ["网络编程关注两台机器如何通信。服务器监听端口，客户端连接服务器并交换数据。", "底层可以用 socket，高层 Web 开发通常用 Flask、FastAPI、Django 等框架。"],
    points: ["IP 找机器，端口找程序。", "客户端发请求，服务器给响应。", "实际网络代码要处理断开、超时、协议。"],
    sample: "concepts = {\"IP\": \"找到机器\", \"端口\": \"找到程序\", \"协议\": \"约定格式\"}\nfor key, value in concepts.items():\n    print(key, value)",
    taskTitle: "记住三个概念",
    task: "运行代码，输出网络编程的三个基础概念。",
    starter: "for word in [\"客户端\", \"服务器\", \"端口\"]:\n    print(word)",
    hint: "先理解概念，比一上来写 socket 更重要。",
  },
  {
    category: "系统网络",
    title: "SMTP 发送邮件",
    short: "邮件",
    goal: "了解 Python 自动发送邮件的基本组成。",
    body: ["SMTP 是发送邮件的协议。Python 可以通过 smtplib 登录邮箱服务器并发送邮件。", "真实使用时需要邮箱授权码、服务器地址、端口和安全连接。不要把密码写进公开代码。"],
    points: ["smtplib 负责连接 SMTP 服务器。", "email.message 可构造邮件内容。", "账号密码应放在环境变量。"],
    sample: "config = [\"SMTP 服务器\", \"端口\", \"发件人\", \"授权码\", \"收件人\"]\nfor item in config:\n    print(item)",
    taskTitle: "列出邮件配置",
    task: "运行代码，记住自动发邮件需要哪些信息。",
    starter: "items = [\"smtp.example.com\", \"465\", \"sender@example.com\", \"receiver@example.com\"]\nfor item in items:\n    print(item)",
    hint: "这里不真的发邮件，只学习配置组成。",
  },
  {
    category: "并发",
    title: "多线程 threading",
    short: "并发任务",
    goal: "理解线程可以让多个等待型任务交替推进。",
    body: ["线程适合处理 I/O 等待较多的任务，比如同时下载多个网页。", "CPU 密集计算不一定适合多线程，因为 Python 有 GIL 限制，后面可以学习 multiprocessing 或异步。"],
    points: ["threading.Thread 创建线程。", "start() 启动线程。", "join() 等待线程结束。"],
    sample: "import threading\n\ndef work(name):\n    print(\"任务\", name)\n\nthreads = [threading.Thread(target=work, args=(i,)) for i in range(3)]\nfor t in threads:\n    t.start()\nfor t in threads:\n    t.join()",
    taskTitle: "启动多个线程",
    task: "运行代码，观察多个任务输出。",
    starter: "import threading\n\ndef hello(index):\n    print(\"hello\", index)\n\nthreads = [threading.Thread(target=hello, args=(i,)) for i in range(3)]\nfor thread in threads:\n    thread.start()\nfor thread in threads:\n    thread.join()",
    hint: "args=(i,) 里的逗号表示这是一个单元素元组。",
  },
  {
    category: "并发",
    title: "queue 队列",
    short: "任务排队",
    goal: "理解队列适合在线程之间传递任务。",
    body: ["queue.Queue 是线程安全的队列，常用于生产者消费者模型。", "一个线程放任务，另一个线程取任务处理，这样可以把流程拆开。"],
    points: ["put() 放入数据。", "get() 取出数据。", "empty() 判断是否为空。"],
    sample: "import queue\njobs = queue.Queue()\njobs.put(\"学习\")\njobs.put(\"练习\")\nwhile not jobs.empty():\n    print(jobs.get())",
    taskTitle: "处理任务队列",
    task: "向队列放入 3 个任务，再逐个取出。",
    starter: "import queue\ntasks = queue.Queue()\nfor task in [\"读\", \"写\", \"跑\"]:\n    tasks.put(task)\nwhile not tasks.empty():\n    print(tasks.get())",
    hint: "队列先进先出，先放进去的先被取出。",
  },
  {
    category: "并发",
    title: "asyncio 异步",
    short: "async await",
    goal: "理解异步适合大量等待型任务。",
    body: ["asyncio 使用事件循环管理异步任务。async 定义协程，await 等待异步操作。", "它常用于网络请求、爬虫、服务端高并发 I/O。"],
    points: ["async def 定义协程。", "await 等待另一个协程。", "asyncio.run() 启动事件循环。"],
    sample: "import asyncio\n\nasync def main():\n    await asyncio.sleep(0.1)\n    print(\"异步完成\")\n\nawait main()",
    taskTitle: "运行异步函数",
    task: "运行代码，观察 await 等待后输出。",
    starter: "import asyncio\n\nasync def say():\n    await asyncio.sleep(0.1)\n    print(\"hello asyncio\")\n\nawait say()",
    hint: "Pyodide 支持顶层 await，所以这里可以直接 await。",
  },
  {
    category: "数据库",
    title: "MySQL",
    short: "关系数据库",
    goal: "认识 Python 连接 MySQL 的基本流程。",
    body: ["MySQL 是常见关系数据库。Python 可以通过 mysql-connector 或 PyMySQL 连接数据库，执行 SQL。", "真实连接需要服务器地址、用户名、密码、数据库名。练习阶段先理解连接、执行、提交、关闭的流程。"],
    points: ["connect 创建连接。", "cursor 执行 SQL。", "commit 提交修改。"],
    sample: "steps = [\"连接数据库\", \"创建游标\", \"执行 SQL\", \"提交或读取结果\", \"关闭连接\"]\nfor step in steps:\n    print(step)",
    taskTitle: "记住数据库流程",
    task: "运行代码，输出 Python 操作数据库的常见步骤。",
    starter: "for step in [\"connect\", \"cursor\", \"execute\", \"commit\", \"close\"]:\n    print(step)",
    hint: "网页里没有 MySQL 服务器，所以先学习流程。",
  },
  {
    category: "数据库",
    title: "MongoDB",
    short: "文档数据库",
    goal: "了解文档数据库和关系数据库的区别。",
    body: ["MongoDB 保存的是类似 JSON 的文档，适合结构变化较多的数据。", "Python 通常使用 pymongo 连接 MongoDB。它和字典、列表的思维比较接近。"],
    points: ["文档类似 Python 字典。", "集合类似一组文档。", "查询条件也常写成字典。"],
    sample: "document = {\"name\": \"小明\", \"skills\": [\"Python\", \"SQL\"]}\nprint(document[\"name\"])\nprint(document[\"skills\"])",
    taskTitle: "模拟文档",
    task: "创建一个类似 MongoDB 文档的字典并输出字段。",
    starter: "user = {\"name\": \"小白\", \"level\": 1, \"tags\": [\"new\", \"python\"]}\nprint(user[\"name\"])\nprint(user[\"tags\"])",
    hint: "MongoDB 文档结构和 Python 字典很像。",
  },
  {
    category: "Web方向",
    title: "CGI 编程",
    short: "早期 Web",
    goal: "了解 CGI 是早期 Web 程序运行方式。",
    body: ["CGI 让服务器可以调用脚本生成网页内容，是较早的 Web 编程方式。", "现代 Python Web 开发通常使用 Flask、Django、FastAPI，而不是手写 CGI。"],
    points: ["CGI 关注请求和响应。", "脚本输出 HTML。", "现代项目优先学习 Web 框架。"],
    sample: "html = \"<h1>Hello Python Web</h1>\"\nprint(\"Content-Type: text/html\")\nprint()\nprint(html)",
    taskTitle: "生成 HTML 字符串",
    task: "运行代码，看看脚本如何输出网页内容。",
    starter: "title = \"Python Web\"\nprint(f\"<h1>{title}</h1>\")",
    hint: "网页本质上也是字符串内容，只是浏览器会把它渲染出来。",
  },
  {
    category: "Web方向",
    title: "uWSGI 部署",
    short: "部署概念",
    goal: "知道开发服务器和生产部署不是一回事。",
    body: ["uWSGI 常用于部署 Python Web 应用，把 Web 服务器和 Python 应用连接起来。", "初学先写会 Flask 或 FastAPI，再学习 Nginx、uWSGI、Gunicorn 等部署组件。"],
    points: ["开发环境重在方便调试。", "生产环境重在稳定、安全、性能。", "部署包含进程管理、日志、反向代理。"],
    sample: "deploy_parts = [\"Web 框架\", \"应用服务器\", \"反向代理\", \"日志监控\"]\nfor part in deploy_parts:\n    print(part)",
    taskTitle: "认识部署组件",
    task: "运行代码，输出 Web 部署常见组件。",
    starter: "for part in [\"Flask/FastAPI\", \"uWSGI/Gunicorn\", \"Nginx\"]:\n    print(part)",
    hint: "先把它当成路线图，不需要马上掌握配置。",
  },
  {
    category: "第三方库",
    title: "requests",
    short: "HTTP 请求",
    goal: "了解 requests 是更易用的网络请求库。",
    body: ["requests 是常用第三方库，语法比 urllib 更友好。它适合调用 API、下载网页、提交表单。", "真实使用前需要 pip install requests。网页环境可能没有预装，所以这里用伪代码理解结构。"],
    points: ["requests.get(url) 发送 GET 请求。", "response.json() 解析 JSON 响应。", "请求要设置超时并处理异常。"],
    sample: "print(\"import requests\")\nprint(\"response = requests.get(url, timeout=10)\")\nprint(\"data = response.json()\")",
    taskTitle: "写请求步骤",
    task: "运行代码，记住调用 API 的基本顺序。",
    starter: "steps = [\"准备 URL\", \"requests.get\", \"检查状态码\", \"解析 JSON\"]\nfor step in steps:\n    print(step)",
    hint: "requests 是第三方库，本网页不一定能直接导入。",
  },
  {
    category: "第三方库",
    title: "Selenium",
    short: "浏览器自动化",
    goal: "了解自动控制浏览器的用途。",
    body: ["Selenium 可以控制真实浏览器点击、输入、截图，常用于自动化测试和需要浏览器渲染的采集任务。", "它比普通 HTTP 请求更重，只有页面必须被浏览器执行时才考虑。"],
    points: ["WebDriver 控制浏览器。", "find_element 找元素。", "click 和 send_keys 模拟操作。"],
    sample: "steps = [\"启动浏览器\", \"打开网页\", \"查找元素\", \"点击或输入\", \"关闭浏览器\"]\nfor step in steps:\n    print(step)",
    taskTitle: "理解自动化流程",
    task: "运行代码，输出 Selenium 的常见流程。",
    starter: "for step in [\"open\", \"find\", \"click\", \"type\", \"close\"]:\n    print(step)",
    hint: "Selenium 需要浏览器驱动，不适合直接在这个在线编辑器里跑。",
  },
  {
    category: "第三方库",
    title: "Scrapy 与爬虫",
    short: "采集框架",
    goal: "理解爬虫、解析、存储三步。",
    body: ["爬虫用于自动获取公开网页数据。Scrapy 是专业爬虫框架，适合较大规模采集。", "写爬虫要尊重 robots、版权、频率限制和网站规则。"],
    points: ["请求网页。", "解析需要的数据。", "保存为文件或数据库。"],
    sample: "pipeline = [\"请求\", \"解析\", \"清洗\", \"保存\"]\nfor step in pipeline:\n    print(step)",
    taskTitle: "设计采集流程",
    task: "运行代码，记住爬虫项目的基础流水线。",
    starter: "steps = [\"下载页面\", \"提取标题\", \"保存 CSV\"]\nfor step in steps:\n    print(step)",
    hint: "真正采集前，先确认网站允许这样做。",
  },
  {
    category: "第三方库",
    title: "pyecharts",
    short: "可视化",
    goal: "了解 Python 可以生成交互式图表。",
    body: ["pyecharts 用来生成 ECharts 图表，适合把数据做成网页图形。", "数据分析结果常需要可视化，图表能帮助人更快看出趋势和差异。"],
    points: ["柱状图适合比较。", "折线图适合看趋势。", "饼图适合看占比。"],
    sample: "data = {\"Python\": 90, \"SQL\": 70, \"Excel\": 80}\nfor name, value in data.items():\n    print(name, \"#\" * (value // 10))",
    taskTitle: "文本柱状图",
    task: "用字符画一个简单柱状图。",
    starter: "scores = {\"A\": 3, \"B\": 5, \"C\": 2}\nfor name, value in scores.items():\n    print(name, \"*\" * value)",
    hint: "先理解数据到图形的映射，再学具体库。",
  },
  {
    category: "AI方向",
    title: "Python 与 OpenAI",
    short: "AI API",
    goal: "了解 Python 调用 AI 接口的基本流程。",
    body: ["Python 常被用于调用 AI 模型接口、处理文本、构建聊天机器人和自动化助手。", "真实调用需要 API Key、SDK、模型名、提示词和错误处理。密钥不要写进公开网页或代码仓库。"],
    points: ["准备密钥。", "选择模型。", "发送输入并读取输出。"],
    sample: "steps = [\"读取 API Key\", \"创建客户端\", \"发送提示词\", \"处理回复\"]\nfor step in steps:\n    print(step)",
    taskTitle: "设计 AI 调用流程",
    task: "运行代码，输出调用 AI API 的基本步骤。",
    starter: "for step in [\"prompt\", \"model\", \"response\"]:\n    print(step)",
    hint: "先学流程；真正接入时再配置密钥和 SDK。",
  },
  {
    category: "AI方向",
    title: "AI 绘画",
    short: "图像生成",
    goal: "了解文本生成图片的一般工作流。",
    body: ["AI 绘画通常把文字提示词发送给图像模型，模型返回图片。Python 可以负责批量生成、保存和整理结果。", "提示词越具体，越容易得到符合目标的图像；同时要尊重版权和平台规则。"],
    points: ["提示词描述主体、风格、背景。", "程序可以批量管理生成任务。", "结果通常保存为图片文件。"],
    sample: "prompt = {\"subject\": \"Python 学习海报\", \"style\": \"清爽\", \"color\": \"绿色\"}\nfor key, value in prompt.items():\n    print(key, value)",
    taskTitle: "写提示词结构",
    task: "运行代码，理解提示词可以拆成几个字段。",
    starter: "prompt = [\"主体：学习 Python\", \"风格：简洁\", \"用途：课程封面\"]\nfor item in prompt:\n    print(item)",
    hint: "先把需求拆清楚，再交给模型。",
  },
  {
    category: "数据分析",
    title: "statistics",
    short: "统计",
    goal: "会计算均值、中位数等基础统计量。",
    body: ["statistics 是标准库里的统计模块，适合做轻量统计。", "数据分析的第一步常常是看平均值、中位数、最大值、最小值。"],
    points: ["mean() 平均值。", "median() 中位数。", "stdev() 标准差。"],
    sample: "import statistics\nscores = [80, 90, 75, 100]\nprint(statistics.mean(scores))\nprint(statistics.median(scores))",
    taskTitle: "分析分数",
    task: "计算一组分数的平均值和中位数。",
    starter: "import statistics\nscores = [88, 92, 76, 100, 84]\nprint(\"平均\", statistics.mean(scores))\nprint(\"中位数\", statistics.median(scores))",
    hint: "中位数比平均值更不容易被极端值影响。",
  },
  {
    category: "数据分析",
    title: "量化入门",
    short: "金融数据",
    goal: "理解量化是用程序和数据辅助投资研究。",
    body: ["量化通常会处理价格序列、收益率、指标、回测等内容。Python 在量化领域很常见。", "这类方向需要金融常识和风险意识，学习时优先做历史数据分析，不把示例当投资建议。"],
    points: ["收益率 = 新价格 / 旧价格 - 1。", "移动平均常用于平滑趋势。", "回测不等于未来收益。"],
    sample: "prices = [10, 11, 10.5, 12]\nreturns = []\nfor i in range(1, len(prices)):\n    returns.append(prices[i] / prices[i - 1] - 1)\nprint(returns)",
    taskTitle: "计算收益率",
    task: "运行代码，计算相邻价格之间的变化率。",
    starter: "prices = [100, 103, 101, 108]\nfor i in range(1, len(prices)):\n    print(round(prices[i] / prices[i - 1] - 1, 4))",
    hint: "round(x, 4) 可以保留 4 位小数。",
  },
  {
    category: "安全工具",
    title: "hashlib",
    short: "哈希",
    goal: "了解哈希用于摘要和校验。",
    body: ["哈希函数会把数据转换成固定长度摘要。相同输入得到相同摘要，不同输入通常得到不同摘要。", "它常用于文件校验、密码相关流程和数据指纹。密码存储需要加盐和专业方案，不能只简单 md5。"],
    points: ["sha256 是常见安全哈希算法。", "encode() 把字符串转字节。", "hexdigest() 得到十六进制摘要。"],
    sample: "import hashlib\ntext = \"hello\"\ndigest = hashlib.sha256(text.encode()).hexdigest()\nprint(digest)",
    taskTitle: "生成摘要",
    task: "修改 text，观察摘要如何变化。",
    starter: "import hashlib\ntext = \"Python\"\nprint(hashlib.sha256(text.encode()).hexdigest())",
    hint: "输入只改一点，哈希结果也会完全不同。",
  },
  {
    category: "序列化",
    title: "pickle",
    short: "保存对象",
    goal: "了解 Python 对象序列化。",
    body: ["pickle 可以把 Python 对象保存成字节，再恢复回来。它适合保存 Python 内部数据，但不适合和其他语言交换。", "不要加载不可信来源的 pickle 文件，因为它可能执行危险代码。"],
    points: ["pickle.dumps() 序列化为字节。", "pickle.loads() 反序列化。", "不可信数据不要用 pickle 读取。"],
    sample: "import pickle\ndata = {\"name\": \"小明\", \"score\": 90}\nblob = pickle.dumps(data)\nprint(pickle.loads(blob))",
    taskTitle: "保存并恢复对象",
    task: "运行代码，把字典序列化后再恢复。",
    starter: "import pickle\nitems = [\"Python\", \"SQL\"]\nblob = pickle.dumps(items)\nprint(pickle.loads(blob))",
    hint: "pickle 的结果是 bytes，不是普通文本。",
  },
  {
    category: "实战方向",
    title: "Markdown",
    short: "文档生成",
    goal: "了解 Markdown 适合写技术文档。",
    body: ["Markdown 是轻量标记语言，常用于 README、博客、笔记和文档站。", "Python 可以批量生成 Markdown 文档，也能把数据报告输出成 Markdown。"],
    points: ["# 表示标题。", "- 表示列表。", "``` 包裹代码块。"],
    sample: "title = \"Python 学习笔记\"\nitems = [\"变量\", \"循环\", \"函数\"]\nprint(f\"# {title}\")\nfor item in items:\n    print(f\"- {item}\")",
    taskTitle: "生成学习笔记",
    task: "用 Python 输出一段 Markdown 列表。",
    starter: "topics = [\"字符串\", \"列表\", \"字典\"]\nprint(\"# 今日复习\")\nfor topic in topics:\n    print(f\"- {topic}\")",
    hint: "生成文本是 Python 自动化的常见用途。",
  },
  {
    category: "实战方向",
    title: "PyQt 桌面应用",
    short: "GUI",
    goal: "认识 Python 也能写桌面窗口程序。",
    body: ["PyQt 是 Python 桌面 GUI 库，可以创建窗口、按钮、输入框等界面。", "桌面应用需要事件循环，和命令行脚本的思维不完全一样。"],
    points: ["窗口负责显示界面。", "按钮点击触发事件。", "事件循环让界面持续响应。"],
    sample: "widgets = [\"窗口\", \"按钮\", \"文本框\", \"事件\"]\nfor widget in widgets:\n    print(widget)",
    taskTitle: "认识 GUI 元素",
    task: "运行代码，输出常见桌面界面元素。",
    starter: "for item in [\"QApplication\", \"QWidget\", \"QPushButton\"]:\n    print(item)",
    hint: "PyQt 需要本机图形环境，这里先学习概念。",
  },
  {
    category: "实战方向",
    title: "综合实例",
    short: "小项目",
    goal: "把变量、列表、循环、判断和函数组合起来。",
    body: ["小项目训练的是组合能力。你不需要一下写出大系统，先把输入、处理、输出三步走通。", "下面的例子会统计成绩，判断是否及格，并计算平均分。"],
    points: ["用列表保存数据。", "用函数封装统计逻辑。", "用循环逐个处理。"],
    sample: "def report(scores):\n    for score in scores:\n        print(score, \"及格\" if score >= 60 else \"继续加油\")\n    print(\"平均分\", sum(scores) / len(scores))\n\nreport([92, 58, 76, 88])",
    taskTitle: "成绩统计器",
    task: "把 scores 改成你自己的 4 个分数，然后运行。",
    starter: "def report(scores):\n    for score in scores:\n        print(score, \"及格\" if score >= 60 else \"继续加油\")\n    print(\"平均分\", sum(scores) / len(scores))\n\nreport([92, 58, 76, 88])",
    hint: "先改 report([...]) 里的数字即可。",
  },
  {
    category: "复习测验",
    title: "Python 测验",
    short: "自测",
    goal: "用小测验检查基础知识是否串起来。",
    body: ["测验不是为了证明你会了，而是帮你发现哪里还需要回头看。", "看到错题不要急，回到对应课程再运行几次示例，通常就能补上。"],
    points: ["变量用于保存数据。", "if 用于判断。", "for 用于遍历。", "函数用于复用代码。"],
    sample: "answers = {\n    \"保存数据\": \"变量\",\n    \"重复执行\": \"循环\",\n    \"复用代码\": \"函数\",\n}\nfor question, answer in answers.items():\n    print(question, \"=>\", answer)",
    taskTitle: "补全知识卡片",
    task: "在字典里再添加一个知识点，比如“处理错误”。",
    starter: "cards = {\"保存数据\": \"变量\", \"做判断\": \"if\", \"重复\": \"循环\"}\ncards[\"处理错误\"] = \"try/except\"\nfor key, value in cards.items():\n    print(key, value)",
    hint: "字典可以用 cards[\"新键\"] = \"新值\" 添加内容。",
  },
];

const lessons = courseBlueprints.map((lesson, index) => ({
  ...lesson,
  title: `第 ${index + 1} 课：${lesson.title}`,
}));

const categories = ["全部", ...new Set(lessons.map((lesson) => lesson.category))];
const lessonsPerPage = 10;

const completions = [
  { label: "print", insert: "print()", detail: "输出内容", type: "函数", cursorOffset: -1 },
  { label: "input", insert: "input()", detail: "读取用户输入", type: "函数", cursorOffset: -1 },
  { label: "len", insert: "len()", detail: "获取长度", type: "函数", cursorOffset: -1 },
  { label: "range", insert: "range()", detail: "生成数字序列", type: "函数", cursorOffset: -1 },
  { label: "int", insert: "int()", detail: "转整数", type: "函数", cursorOffset: -1 },
  { label: "float", insert: "float()", detail: "转小数", type: "函数", cursorOffset: -1 },
  { label: "str", insert: "str()", detail: "转字符串", type: "函数", cursorOffset: -1 },
  { label: "type", insert: "type()", detail: "查看类型", type: "函数", cursorOffset: -1 },
  { label: "sum", insert: "sum()", detail: "求和", type: "函数", cursorOffset: -1 },
  { label: "max", insert: "max()", detail: "最大值", type: "函数", cursorOffset: -1 },
  { label: "min", insert: "min()", detail: "最小值", type: "函数", cursorOffset: -1 },
  { label: "sorted", insert: "sorted()", detail: "排序并返回新列表", type: "函数", cursorOffset: -1 },
  { label: "append", insert: "append()", detail: "列表追加元素", type: "方法", cursorOffset: -1 },
  { label: "items", insert: "items()", detail: "遍历字典键值对", type: "方法", cursorOffset: -1 },
  { label: "keys", insert: "keys()", detail: "获取字典键", type: "方法", cursorOffset: -1 },
  { label: "values", insert: "values()", detail: "获取字典值", type: "方法", cursorOffset: -1 },
  { label: "if", insert: "if condition:\n    ", detail: "条件判断", type: "片段" },
  { label: "elif", insert: "elif condition:\n    ", detail: "追加条件分支", type: "片段" },
  { label: "else", insert: "else:\n    ", detail: "默认分支", type: "片段" },
  { label: "for", insert: "for item in items:\n    ", detail: "遍历一组数据", type: "片段" },
  { label: "while", insert: "while condition:\n    ", detail: "条件循环", type: "片段" },
  { label: "def", insert: "def function_name():\n    ", detail: "定义函数", type: "片段" },
  { label: "class", insert: "class ClassName:\n    def __init__(self):\n        ", detail: "定义类", type: "片段" },
  { label: "try", insert: "try:\n    \nexcept Exception as error:\n    print(error)", detail: "异常处理", type: "片段", cursorOffset: -35 },
  { label: "with open", insert: "with open(\"file.txt\", \"r\", encoding=\"utf-8\") as file:\n    content = file.read()", detail: "读取文件", type: "片段", cursorOffset: -22 },
  { label: "import", insert: "import ", detail: "导入模块", type: "关键字" },
  { label: "from", insert: "from module import name", detail: "从模块导入", type: "关键字", cursorOffset: -18 },
  { label: "return", insert: "return ", detail: "返回函数结果", type: "关键字" },
  { label: "True", insert: "True", detail: "布尔真", type: "值" },
  { label: "False", insert: "False", detail: "布尔假", type: "值" },
  { label: "None", insert: "None", detail: "空值", type: "值" },
  { label: "break", insert: "break", detail: "结束循环", type: "关键字" },
  { label: "continue", insert: "continue", detail: "跳过本次循环", type: "关键字" },
  { label: "lambda", insert: "lambda x: x", detail: "匿名函数", type: "关键字", cursorOffset: -1 },
  { label: "list comprehension", insert: "[item for item in items]", detail: "列表推导式", type: "片段", cursorOffset: -1 },
  { label: "main", insert: "if __name__ == \"__main__\":\n    main()", detail: "脚本入口", type: "片段" },
];

const codeExplanationMap = {
  "print()": "把括号里的内容显示到运行结果里。多个内容可以用英文逗号分开输出。",
  "input()": "等待用户输入文字。注意它拿到的一定是字符串，需要计算时要先转成数字。",
  "len()": "计算长度，比如列表里有几个元素、字符串里有几个字符。",
  "range()": "生成一段数字序列，常和 for 循环一起用。range(5) 会产生 0 到 4。",
  "int()": "把内容转换成整数，例如 int(\"18\") 会得到数字 18。",
  "float()": "把内容转换成小数，例如 float(\"3.14\") 会得到 3.14。",
  "str()": "把内容转换成字符串，方便拼接或输出。",
  "type()": "查看一个值的数据类型，新手排查变量时很好用。",
  "sum()": "把一组数字加起来，常用于计算总分、总价。",
  "max()": "从一组数据里找最大值。",
  "min()": "从一组数据里找最小值。",
  "sorted()": "返回排序后的新列表，不会直接改掉原列表。",
  "round()": "四舍五入。round(value, 2) 表示保留两位小数。",
  "abs()": "取绝对值，例如 abs(-3) 得到 3。",
  "pow()": "计算乘方，pow(2, 3) 等价于 2 ** 3。",
  "set()": "创建集合，常用来去重。",
  "list()": "创建列表，或把可迭代对象转换成列表。",
  "dict()": "创建字典，保存键值对数据。",
  "open()": "打开文件。常和 with 一起使用，避免忘记关闭文件。",
  "file.write()": "向文件写入文字。",
  "file.read()": "读取文件里的全部文字。",
  "append()": "列表方法，把新元素追加到列表末尾。",
  "items()": "字典方法，取出每一组键和值，常写成 for key, value in data.items()。",
  "keys()": "字典方法，取出所有键。",
  "values()": "字典方法，取出所有值。",
  "sort()": "列表方法，直接把原列表排序。",
  "split()": "字符串方法，把字符串按分隔符切成列表。不写分隔符时，默认按空白切分。",
  "encode()": "字符串方法，把文字转换成字节，哈希、网络传输时常见。",
  "hexdigest()": "哈希对象方法，把摘要结果显示成十六进制字符串。",
  "strftime()": "日期时间方法，把时间格式化成指定样子的字符串。",
  "now()": "获取当前日期时间。",
  "today()": "获取今天的日期。",
  "randint()": "生成指定范围内的随机整数，两端都可能取到。",
  "choice()": "从列表等序列里随机挑一个元素。",
  "sqrt()": "计算平方根。",
  "ceil()": "向上取整，例如 3.2 会变成 4。",
  "dumps()": "把 Python 数据转换成 JSON 字符串。",
  "loads()": "把 JSON 字符串转换回 Python 数据。",
  "fromstring()": "把 XML 字符串解析成可以查找节点的对象。",
  "find()": "查找一个子节点或匹配项。",
  "findall()": "查找所有符合条件的内容。",
  "getcwd()": "获取当前工作目录。",
  "listdir()": "列出某个目录里的文件和文件夹。",
  "join()": "拼接路径或字符串。路径拼接时比手写斜杠更稳。",
  "run()": "执行外部命令，来自 subprocess 模块。",
  "start()": "启动线程。",
  "join_thread()": "等待线程执行结束。代码里写作 thread.join() 或 t.join()。",
  "put()": "队列方法，把任务或数据放进队列。",
  "get()": "队列方法，从队列取出一个任务或数据。",
  "empty()": "队列方法，判断队列是否为空。",
  "sleep()": "暂停一小段时间；在 asyncio 里需要 await。",
  "mean()": "计算平均值。",
  "median()": "计算中位数。",
  "dumps_pickle()": "把 Python 对象序列化成字节。代码里写作 pickle.dumps()。",
  "loads_pickle()": "把 pickle 字节恢复成 Python 对象。代码里写作 pickle.loads()。",
  "sys.version.split()[0]": "拆成三步看：sys.version 是完整版本字符串；.split() 按空格切成列表；[0] 取列表第一个元素，也就是简短版本号。",
  "sys.version": "sys 模块里的版本字符串，包含 Python 版本、编译信息等。",
  "sys.path": "Python 查找模块时会搜索的路径列表。",
  "__name__": "当前文件的特殊变量。直接运行时通常等于 \"__main__\"。",
  "__main__": "表示当前脚本是被直接运行的入口文件。",
  "__init__": "创建对象时自动调用的初始化方法。",
  "self": "类方法里的当前对象，表示“这个具体对象自己”。",
};

const state = {
  current: 0,
  completed: new Set(JSON.parse(localStorage.getItem("python-camp-completed") || "[]")),
  pyodide: null,
  loadingRuntime: false,
  query: "",
  category: "全部",
  page: 1,
  autocomplete: {
    items: [],
    selected: 0,
    start: 0,
    end: 0,
    open: false,
  },
};

const elements = {
  lessonList: document.querySelector("#lessonList"),
  prevPage: document.querySelector("#prevPage"),
  nextPage: document.querySelector("#nextPage"),
  pageInfo: document.querySelector("#pageInfo"),
  categoryList: document.querySelector("#categoryList"),
  lessonSearch: document.querySelector("#lessonSearch"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonBody: document.querySelector("#lessonBody"),
  completeLesson: document.querySelector("#completeLesson"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  prevLesson: document.querySelector("#prevLesson"),
  nextLesson: document.querySelector("#nextLesson"),
  taskTitle: document.querySelector("#taskTitle"),
  taskDescription: document.querySelector("#taskDescription"),
  runtimeStatus: document.querySelector("#runtimeStatus"),
  codeEditor: document.querySelector("#codeEditor"),
  autocompleteList: document.querySelector("#autocompleteList"),
  runCode: document.querySelector("#runCode"),
  resetCode: document.querySelector("#resetCode"),
  showHint: document.querySelector("#showHint"),
  hintBox: document.querySelector("#hintBox"),
  output: document.querySelector("#output"),
  clearOutput: document.querySelector("#clearOutput"),
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getVisibleLessons() {
  const query = state.query.trim().toLowerCase();
  return lessons
    .map((lesson, index) => ({ lesson, index }))
    .filter(({ lesson }) => {
      const matchesCategory = state.category === "全部" || lesson.category === state.category;
      const haystack = `${lesson.title} ${lesson.short} ${lesson.category} ${lesson.goal}`.toLowerCase();
      return matchesCategory && (!query || haystack.includes(query));
    });
}

function renderCategories() {
  elements.categoryList.innerHTML = categories
    .map((category) => {
      const active = category === state.category ? " active" : "";
      return `<button class="category-chip${active}" data-category="${category}">${category}</button>`;
    })
    .join("");
}

function getPageCount(visibleLessons = getVisibleLessons()) {
  return Math.max(1, Math.ceil(visibleLessons.length / lessonsPerPage));
}

function clampPage(visibleLessons = getVisibleLessons()) {
  state.page = Math.min(Math.max(1, state.page), getPageCount(visibleLessons));
}

function syncPageToCurrentLesson() {
  const visibleLessons = getVisibleLessons();
  const visibleIndex = visibleLessons.findIndex(({ index }) => index === state.current);
  if (visibleIndex >= 0) {
    state.page = Math.floor(visibleIndex / lessonsPerPage) + 1;
  }
}

function renderPager(visibleLessons) {
  const pageCount = getPageCount(visibleLessons);
  const total = visibleLessons.length;
  elements.pageInfo.textContent = total ? `第 ${state.page} / ${pageCount} 页` : "第 0 / 0 页";
  elements.prevPage.disabled = state.page <= 1;
  elements.nextPage.disabled = state.page >= pageCount || total === 0;
}

function renderLessonList() {
  const visibleLessons = getVisibleLessons();
  clampPage(visibleLessons);
  renderPager(visibleLessons);

  if (!visibleLessons.length) {
    elements.lessonList.innerHTML = `<p class="empty-state">没有找到课程，换个关键词试试。</p>`;
    return;
  }

  const pageStart = (state.page - 1) * lessonsPerPage;
  const pageLessons = visibleLessons.slice(pageStart, pageStart + lessonsPerPage);

  elements.lessonList.innerHTML = pageLessons
    .map(({ lesson, index }) => {
      const active = index === state.current ? " active" : "";
      const done = state.completed.has(index) ? "✓" : "";
      return `
        <button class="lesson-tab${active}" data-index="${index}">
          <span class="lesson-index">${index + 1}</span>
          <span>
            <strong>${lesson.title.replace(/^第 \d+ 课：/, "")}</strong>
            <span>${lesson.category} · ${lesson.short}</span>
          </span>
          <span class="done-mark">${done}</span>
        </button>
      `;
    })
    .join("");
}

function renderProgress() {
  const done = state.completed.size;
  elements.progressText.textContent = `${done}/${lessons.length}`;
  elements.progressBar.style.width = `${(done / lessons.length) * 100}%`;
}

function normalizeCall(match) {
  const name = match.replace(/\($/, "");
  if (name.endsWith(".join") && /\bthread|^t$/i.test(name.split(".")[0])) {
    return "join_thread()";
  }
  if (name === "pickle.dumps") return "dumps_pickle()";
  if (name === "pickle.loads") return "loads_pickle()";
  return `${name.split(".").pop()}()`;
}

function addExplanation(items, seen, term, detail) {
  if (!term || seen.has(term)) return;
  seen.add(term);
  items.push({ term, detail });
}

function explainCall(call) {
  const normalized = normalizeCall(call);
  if (codeExplanationMap[normalized]) return codeExplanationMap[normalized];

  const cleanCall = call.replace(/\($/, "()");
  if (codeExplanationMap[cleanCall]) return codeExplanationMap[cleanCall];

  if (call.includes(".")) {
    const [objectName, methodName] = call.replace(/\($/, "").split(".").slice(-2);
    return `${methodName}() 是 ${objectName} 对象上的方法，意思是“让这个对象执行一个动作”。`;
  }

  return `${call.replace(/\($/, "()")} 是一次函数调用：函数名后面加括号，Python 就会执行这个函数。`;
}

function getCodeExplanations(code) {
  const explanations = [];
  const seen = new Set();

  if (code.includes("sys.version.split()[0]")) {
    addExplanation(explanations, seen, "sys.version.split()[0]", codeExplanationMap["sys.version.split()[0]"]);
  }

  for (const importMatch of code.matchAll(/^\s*(import\s+[A-Za-z_][\w.]*|from\s+[A-Za-z_][\w.]*\s+import\s+[\w*, ]+)/gm)) {
    addExplanation(
      explanations,
      seen,
      importMatch[1],
      "导入模块或模块里的工具。导入后，后面的代码才能使用它提供的函数、类或变量。"
    );
  }

  for (const special of ["__name__", "__main__", "__init__", "self", "sys.version", "sys.path"]) {
    if (code.includes(special)) {
      addExplanation(explanations, seen, special, codeExplanationMap[special]);
    }
  }

  for (const indexMatch of code.matchAll(/\b[A-Za-z_][\w.]*\[[^\]]+\]/g)) {
    const term = indexMatch[0];
    const detail = term.includes(":")
      ? "方括号里的冒号表示切片，用来取出列表或字符串中的一段内容。"
      : "方括号表示按下标取值。[0] 是取第一个元素，因为 Python 从 0 开始编号。";
    addExplanation(explanations, seen, term, detail);
  }

  for (const callMatch of code.matchAll(/\b[A-Za-z_][\w.]*\(/g)) {
    const call = callMatch[0];
    addExplanation(explanations, seen, call.replace(/\($/, "()"), explainCall(call));
  }

  return explanations.slice(0, 12);
}

function renderCodeExplanations(lesson) {
  const explanations = getCodeExplanations(`${lesson.sample}\n${lesson.starter}`);
  if (!explanations.length) return "";

  return `
    <section class="code-breakdown" aria-label="代码拆解">
      <h3>代码拆解</h3>
      <div class="breakdown-list">
        ${explanations
          .map(
            ({ term, detail }) => `
              <div class="breakdown-item">
                <code>${escapeHtml(term)}</code>
                <p>${escapeHtml(detail)}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLesson() {
  const lesson = lessons[state.current];
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonBody.innerHTML = `
    <div class="lesson-meta">
      <span>${lesson.category}</span>
      <span>${lesson.short}</span>
    </div>
    <h3>学习目标</h3>
    <p>${lesson.goal}</p>
    ${lesson.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <ul>${lesson.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    <pre class="code-sample"><code>${escapeHtml(lesson.sample)}</code></pre>
    ${renderCodeExplanations(lesson)}
  `;
  elements.taskTitle.textContent = lesson.taskTitle;
  elements.taskDescription.textContent = lesson.task;
  elements.codeEditor.value = lesson.starter;
  elements.hintBox.textContent = lesson.hint;
  elements.hintBox.hidden = true;
  closeAutocomplete();
  elements.completeLesson.checked = state.completed.has(state.current);
  elements.prevLesson.disabled = state.current === 0;
  elements.nextLesson.textContent = state.current === lessons.length - 1 ? "回到第一课" : "下一课";
  renderLessonList();
  renderProgress();
}

function saveProgress() {
  localStorage.setItem("python-camp-completed", JSON.stringify([...state.completed]));
}

function setStatus(message, isError = false) {
  elements.runtimeStatus.textContent = message;
  elements.runtimeStatus.classList.toggle("error", isError);
}

function getCurrentWordRange() {
  const cursor = elements.codeEditor.selectionStart;
  const value = elements.codeEditor.value;
  const beforeCursor = value.slice(0, cursor);
  const match = beforeCursor.match(/[A-Za-z_][A-Za-z0-9_ ]*$/);
  if (!match) {
    return { start: cursor, end: cursor, word: "" };
  }

  const rawWord = match[0];
  const word = rawWord.includes(" ") ? rawWord.trimStart() : rawWord;
  const leadingSpaces = rawWord.length - rawWord.trimStart().length;
  return {
    start: cursor - rawWord.length + leadingSpaces,
    end: cursor,
    word,
  };
}

function getAutocompleteMatches(word, force = false) {
  const query = word.toLowerCase();
  if (!force && query.length < 1) {
    return [];
  }

  return completions
    .filter((item) => item.label.toLowerCase().startsWith(query))
    .concat(completions.filter((item) => !item.label.toLowerCase().startsWith(query) && item.label.toLowerCase().includes(query)))
    .slice(0, 9);
}

function closeAutocomplete() {
  state.autocomplete.open = false;
  state.autocomplete.items = [];
  elements.autocompleteList.hidden = true;
  elements.autocompleteList.innerHTML = "";
}

function renderAutocomplete() {
  if (!state.autocomplete.items.length) {
    closeAutocomplete();
    return;
  }

  elements.autocompleteList.hidden = false;
  elements.autocompleteList.innerHTML = state.autocomplete.items
    .map((item, index) => {
      const active = index === state.autocomplete.selected ? " active" : "";
      return `
        <button class="autocomplete-item${active}" type="button" data-index="${index}" role="option" aria-selected="${index === state.autocomplete.selected}">
          <span class="autocomplete-main">
            <span class="autocomplete-label">${escapeHtml(item.label)}</span>
            <span class="autocomplete-detail">${escapeHtml(item.detail)}</span>
          </span>
          <span class="autocomplete-type">${escapeHtml(item.type)}</span>
        </button>
      `;
    })
    .join("");
}

function updateAutocomplete(force = false) {
  const range = getCurrentWordRange();
  const items = getAutocompleteMatches(range.word, force);
  state.autocomplete = {
    items,
    selected: 0,
    start: range.start,
    end: range.end,
    open: items.length > 0,
  };
  renderAutocomplete();
}

function applyCompletion(item = state.autocomplete.items[state.autocomplete.selected]) {
  if (!item) return;

  const editor = elements.codeEditor;
  const before = editor.value.slice(0, state.autocomplete.start);
  const after = editor.value.slice(state.autocomplete.end);
  editor.value = `${before}${item.insert}${after}`;

  const cursor = before.length + item.insert.length + (item.cursorOffset || 0);
  editor.focus();
  editor.selectionStart = editor.selectionEnd = Math.max(before.length, cursor);
  closeAutocomplete();
}

async function ensurePyodide() {
  if (state.pyodide) {
    return state.pyodide;
  }

  if (state.loadingRuntime) {
    while (state.loadingRuntime && !state.pyodide) {
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
    return state.pyodide;
  }

  state.loadingRuntime = true;
  setStatus("加载 Python");

  try {
    state.pyodide = await loadPyodide({
      stdout: (text) => {
        elements.output.textContent += `${text}\n`;
      },
      stderr: (text) => {
        elements.output.textContent += `${text}\n`;
      },
    });
    setStatus("Python 已就绪");
    return state.pyodide;
  } catch (error) {
    setStatus("加载失败", true);
    elements.output.textContent =
      "Python 运行环境加载失败。请检查网络后刷新页面，或稍后再试。\n\n" + error.message;
    throw error;
  } finally {
    state.loadingRuntime = false;
  }
}

async function runCode() {
  elements.output.textContent = "";
  elements.runCode.disabled = true;
  elements.runCode.textContent = "运行中";

  try {
    const pyodide = await ensurePyodide();
    const result = await pyodide.runPythonAsync(elements.codeEditor.value);
    if (result !== undefined) {
      elements.output.textContent += String(result);
    }
    if (!elements.output.textContent.trim()) {
      elements.output.textContent = "代码运行成功，没有输出。试试加一行 print(...)。";
    }
  } catch (error) {
    elements.output.textContent += `\n出错了：${error.message}`;
  } finally {
    elements.runCode.disabled = false;
    elements.runCode.textContent = "运行";
  }
}

elements.lessonList.addEventListener("click", (event) => {
  const tab = event.target.closest(".lesson-tab");
  if (!tab) return;
  state.current = Number(tab.dataset.index);
  renderLesson();
});

elements.prevPage.addEventListener("click", () => {
  state.page -= 1;
  renderLessonList();
});

elements.nextPage.addEventListener("click", () => {
  state.page += 1;
  renderLessonList();
});

elements.categoryList.addEventListener("click", (event) => {
  const chip = event.target.closest(".category-chip");
  if (!chip) return;
  state.category = chip.dataset.category;
  state.page = 1;
  renderCategories();
  renderLessonList();
});

elements.lessonSearch.addEventListener("input", () => {
  state.query = elements.lessonSearch.value;
  state.page = 1;
  renderLessonList();
});

elements.completeLesson.addEventListener("change", () => {
  if (elements.completeLesson.checked) {
    state.completed.add(state.current);
  } else {
    state.completed.delete(state.current);
  }
  saveProgress();
  renderLessonList();
  renderProgress();
});

elements.prevLesson.addEventListener("click", () => {
  state.current = Math.max(0, state.current - 1);
  syncPageToCurrentLesson();
  renderLesson();
});

elements.nextLesson.addEventListener("click", () => {
  state.current = (state.current + 1) % lessons.length;
  syncPageToCurrentLesson();
  renderLesson();
});

elements.resetCode.addEventListener("click", () => {
  elements.codeEditor.value = lessons[state.current].starter;
  elements.output.textContent = "代码已重置，点击“运行”试试看。";
  closeAutocomplete();
});

elements.showHint.addEventListener("click", () => {
  elements.hintBox.hidden = !elements.hintBox.hidden;
});

elements.clearOutput.addEventListener("click", () => {
  elements.output.textContent = "";
});

elements.runCode.addEventListener("click", runCode);

elements.autocompleteList.addEventListener("mousedown", (event) => {
  event.preventDefault();
  const item = event.target.closest(".autocomplete-item");
  if (!item) return;
  applyCompletion(state.autocomplete.items[Number(item.dataset.index)]);
});

elements.codeEditor.addEventListener("click", () => {
  closeAutocomplete();
});

elements.codeEditor.addEventListener("blur", () => {
  setTimeout(closeAutocomplete, 120);
});

elements.codeEditor.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.code === "Space") {
    event.preventDefault();
    updateAutocomplete(true);
    return;
  }

  if (state.autocomplete.open) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      state.autocomplete.selected = (state.autocomplete.selected + 1) % state.autocomplete.items.length;
      renderAutocomplete();
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      state.autocomplete.selected =
        (state.autocomplete.selected - 1 + state.autocomplete.items.length) % state.autocomplete.items.length;
      renderAutocomplete();
      return;
    }

    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      applyCompletion();
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeAutocomplete();
      return;
    }
  }

  if (event.key === "Tab") {
    event.preventDefault();
    updateAutocomplete(true);
    if (state.autocomplete.open) {
      return;
    }

    const start = elements.codeEditor.selectionStart;
    const end = elements.codeEditor.selectionEnd;
    const value = elements.codeEditor.value;
    elements.codeEditor.value = `${value.slice(0, start)}    ${value.slice(end)}`;
    elements.codeEditor.selectionStart = elements.codeEditor.selectionEnd = start + 4;
  }

  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    runCode();
  }
});

renderCategories();
renderLesson();
window.addEventListener("load", () => {
  if (typeof loadPyodide === "function") {
    ensurePyodide();
  } else {
    setStatus("等待网络", true);
  }
});
