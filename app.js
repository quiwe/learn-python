const lessons = [
  {
    title: "第 1 课：和 Python 打招呼",
    short: "print 输出",
    goal: "知道代码会按顺序执行，并用 print() 在屏幕上输出文字。",
    body: [
      "Python 是一种适合新手入门的编程语言。你写下命令，Python 按从上到下的顺序执行。",
      "最常见的第一行代码是 print()。括号里放什么，运行后就会显示什么。文字要放在英文引号里。",
    ],
    points: ["print(\"你好\") 会输出“你好”。", "英文括号、英文引号很重要。", "一行代码通常做一件小事。"],
    sample: "print(\"你好，Python！\")\nprint(\"我开始学编程了\")",
    taskTitle: "输出两句话",
    task: "运行代码，然后把第二行改成你自己的学习宣言。",
    starter: "print(\"你好，Python！\")\nprint(\"我会一步步学会它\")",
    hint: "只改引号里的文字即可，例如 print(\"今天先学会输出\")。",
  },
  {
    title: "第 2 课：变量是有名字的盒子",
    short: "变量",
    goal: "学会用变量保存文字和数字，理解变量名可以反复使用。",
    body: [
      "变量像一个贴了名字的盒子。你可以把文字、数字放进去，后面再用这个名字取出来。",
      "等号 = 的意思不是数学里的相等，而是“把右边的值放进左边这个变量”。",
    ],
    points: ["name = \"小明\" 保存文字。", "age = 18 保存数字。", "print(name) 会输出变量里保存的内容。"],
    sample: "name = \"小明\"\nage = 18\nprint(name)\nprint(age)",
    taskTitle: "介绍自己",
    task: "创建 name 和 hobby 两个变量，并用 print() 输出它们。",
    starter: "name = \"小白\"\nhobby = \"学 Python\"\nprint(name)\nprint(hobby)",
    hint: "变量名不要加引号；变量里的文字需要加引号。",
  },
  {
    title: "第 3 课：数字计算",
    short: "运算",
    goal: "会用 Python 做加减乘除，并把计算结果保存到变量里。",
    body: [
      "Python 可以当计算器用。加法是 +，减法是 -，乘法是 *，除法是 /。",
      "复杂一点的计算可以先保存到变量，再输出结果。这样代码更清楚，也更容易修改。",
    ],
    points: ["total = 20 + 5", "price * count 可以计算总价。", "括号可以改变计算顺序。"],
    sample: "price = 8\ncount = 3\ntotal = price * count\nprint(total)",
    taskTitle: "计算水果总价",
    task: "苹果每个 6 元，买 5 个。写代码计算并输出总价。",
    starter: "price = 6\ncount = 5\ntotal = price * count\nprint(total)",
    hint: "先保存单价和数量，再用乘法得到 total。",
  },
  {
    title: "第 4 课：让程序做判断",
    short: "if 判断",
    goal: "理解 if 的作用，能根据条件执行不同代码。",
    body: [
      "程序不只是从头跑到尾，它还能判断。if 后面跟条件，条件成立就执行缩进里的代码。",
      "else 表示“否则”。注意冒号和缩进，它们是 Python 判断语句的关键格式。",
    ],
    points: ["if score >= 60: 表示分数至少 60。", "缩进通常是 4 个空格。", "else 后面也要写冒号。"],
    sample: "score = 85\nif score >= 60:\n    print(\"及格\")\nelse:\n    print(\"继续加油\")",
    taskTitle: "判断温度",
    task: "如果 temperature 大于等于 30，输出“有点热”；否则输出“很舒服”。",
    starter: "temperature = 31\nif temperature >= 30:\n    print(\"有点热\")\nelse:\n    print(\"很舒服\")",
    hint: "if 那一行和 else 那一行末尾都有英文冒号。",
  },
  {
    title: "第 5 课：重复做事",
    short: "循环",
    goal: "会用 for 循环重复执行代码，理解 range() 生成次数。",
    body: [
      "如果一件事要做很多遍，不需要复制很多行代码。for 循环可以让 Python 自动重复。",
      "range(5) 会产生 0、1、2、3、4，一共 5 次。循环体里的代码同样需要缩进。",
    ],
    points: ["for i in range(3): 会循环 3 次。", "i 是每次循环的编号。", "循环适合批量输出、累加、处理列表。"],
    sample: "for i in range(5):\n    print(\"第\", i + 1, \"次练习\")",
    taskTitle: "输出 1 到 5",
    task: "用 for 循环输出 1、2、3、4、5。",
    starter: "for i in range(5):\n    print(i + 1)",
    hint: "range(5) 从 0 开始，所以输出时可以用 i + 1。",
  },
  {
    title: "第 6 课：列表保存一组数据",
    short: "列表",
    goal: "理解列表是一排数据，能遍历列表里的每一项。",
    body: [
      "列表可以保存多个值，比如一周计划、购物清单、考试成绩。列表用方括号 [] 表示。",
      "你可以用 for item in list 的方式，一个一个取出列表里的内容。",
    ],
    points: ["fruits = [\"苹果\", \"香蕉\"]", "fruits[0] 取第 1 个元素。", "for fruit in fruits: 可以遍历整个列表。"],
    sample: "fruits = [\"苹果\", \"香蕉\", \"橙子\"]\nfor fruit in fruits:\n    print(fruit)",
    taskTitle: "打印学习清单",
    task: "建立一个 skills 列表，包含 3 个你想学的 Python 技能，然后逐个输出。",
    starter: "skills = [\"变量\", \"判断\", \"循环\"]\nfor skill in skills:\n    print(skill)",
    hint: "列表里的文字之间用英文逗号分隔。",
  },
  {
    title: "第 7 课：函数封装一段能力",
    short: "函数",
    goal: "会定义简单函数，并通过参数让函数处理不同数据。",
    body: [
      "函数是一段可以反复使用的代码。你先用 def 定义它，需要时再调用它。",
      "参数像函数的入口。把不同的值传进去，函数就能做类似但不完全相同的事。",
    ],
    points: ["def say_hi(name): 定义函数。", "函数体需要缩进。", "say_hi(\"小明\") 是调用函数。"],
    sample: "def say_hi(name):\n    print(\"你好，\" + name)\n\nsay_hi(\"小明\")\nsay_hi(\"小红\")",
    taskTitle: "写一个加法函数",
    task: "定义 add(a, b)，让它输出 a + b 的结果，然后调用一次。",
    starter: "def add(a, b):\n    print(a + b)\n\nadd(3, 5)",
    hint: "函数定义后不会自动执行，记得在下面调用 add(3, 5)。",
  },
  {
    title: "第 8 课：做一个小项目",
    short: "综合练习",
    goal: "把变量、列表、循环、判断组合起来，完成一个迷你成绩统计。",
    body: [
      "真正写程序时，你会把很多小知识拼在一起。不要急，先把问题拆成几步。",
      "这个小项目会统计成绩列表，输出每个成绩是否及格，并计算平均分。",
    ],
    points: ["用列表保存所有成绩。", "用循环逐个判断是否及格。", "用 sum(scores) / len(scores) 计算平均分。"],
    sample: "scores = [92, 58, 76]\nfor score in scores:\n    if score >= 60:\n        print(score, \"及格\")\n    else:\n        print(score, \"继续加油\")\n\naverage = sum(scores) / len(scores)\nprint(\"平均分\", average)",
    taskTitle: "成绩统计器",
    task: "运行项目代码，然后把 scores 改成你自己的 4 个分数。",
    starter: "scores = [92, 58, 76, 88]\nfor score in scores:\n    if score >= 60:\n        print(score, \"及格\")\n    else:\n        print(score, \"继续加油\")\n\naverage = sum(scores) / len(scores)\nprint(\"平均分\", average)",
    hint: "只改 scores = [...] 里的数字也可以完成练习。",
  },
];

const state = {
  current: 0,
  completed: new Set(JSON.parse(localStorage.getItem("python-camp-completed") || "[]")),
  pyodide: null,
  loadingRuntime: false,
};

const elements = {
  lessonList: document.querySelector("#lessonList"),
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

function renderLessonList() {
  elements.lessonList.innerHTML = lessons
    .map((lesson, index) => {
      const active = index === state.current ? " active" : "";
      const done = state.completed.has(index) ? "✓" : "";
      return `
        <button class="lesson-tab${active}" data-index="${index}">
          <span class="lesson-index">${index + 1}</span>
          <span>
            <strong>${lesson.title.replace(/^第 \d 课：/, "")}</strong>
            <span>${lesson.short}</span>
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

function renderLesson() {
  const lesson = lessons[state.current];
  elements.lessonTitle.textContent = lesson.title;
  elements.lessonBody.innerHTML = `
    <h3>学习目标</h3>
    <p>${lesson.goal}</p>
    ${lesson.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <ul>${lesson.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    <pre class="code-sample"><code>${escapeHtml(lesson.sample)}</code></pre>
  `;
  elements.taskTitle.textContent = lesson.taskTitle;
  elements.taskDescription.textContent = lesson.task;
  elements.codeEditor.value = lesson.starter;
  elements.hintBox.textContent = lesson.hint;
  elements.hintBox.hidden = true;
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
  renderLesson();
});

elements.nextLesson.addEventListener("click", () => {
  state.current = (state.current + 1) % lessons.length;
  renderLesson();
});

elements.resetCode.addEventListener("click", () => {
  elements.codeEditor.value = lessons[state.current].starter;
  elements.output.textContent = "代码已重置，点击“运行”试试看。";
});

elements.showHint.addEventListener("click", () => {
  elements.hintBox.hidden = !elements.hintBox.hidden;
});

elements.clearOutput.addEventListener("click", () => {
  elements.output.textContent = "";
});

elements.runCode.addEventListener("click", runCode);

elements.codeEditor.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
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

renderLesson();
window.addEventListener("load", () => {
  if (typeof loadPyodide === "function") {
    ensurePyodide();
  } else {
    setStatus("等待网络", true);
  }
});
