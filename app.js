const ASSET_ROOT = "../ai-course-map-assets";

const continents = [
  { id: "intro", name: "启程之森", x: 50, y: 49, unlocked: true },
  { id: "tools", name: "工具晶城", x: 25, y: 27 },
  { id: "algorithms", name: "算法王城", x: 72, y: 27 },
  { id: "projects", name: "项目港湾", x: 74, y: 78 },
  { id: "advanced", name: "进阶研究院", x: 27, y: 78 }
];

const lessons = [
  {
    id: "ai-square", name: "AI 启程广场", kicker: "第一站 · 建立直觉", x: 50, y: 51,
    art: "02_intro_continent/locations/01_ai_square/ai_square_bg.png",
    description: "先不急着钻进公式。我们从生活里的智能现象出发，认识人工智能能做什么、不能做什么。",
    goals: ["区分人工智能、机器学习与普通程序", "用输入—处理—输出描述一个智能系统", "找到身边 3 个 AI 应用"]
  },
  {
    id: "concept-town", name: "概念小镇", kicker: "第二站 · 认识家族", x: 76, y: 44,
    art: "02_intro_continent/locations/02_concept_town/concept_town_bg.png",
    description: "走进 AI、机器学习、深度学习与大模型的概念小镇，看清它们之间的包含关系。",
    goals: ["画出四个核心概念的关系", "理解大模型为何属于深度学习", "避免常见概念混用"]
  },
  {
    id: "rule-castle", name: "规则城堡", kicker: "第三站 · 程序如何判断", x: 66, y: 18,
    art: "02_intro_continent/locations/03_rule_castle/rule_castle_bg.png",
    description: "在规则城堡里，用 if–else 搭出最朴素的决策系统，感受规则程序的力量与边界。",
    goals: ["理解条件与分支", "把自然语言规则写成流程", "比较规则系统与学习系统"]
  },
  {
    id: "ml-camp", name: "机器学习营地", kicker: "第四站 · 从数据中学习", x: 29, y: 20,
    art: "02_intro_continent/locations/04_ml_camp/ml_camp_bg.png",
    description: "数据、标签、训练、预测——在营地里亲眼看见一个模型是怎样被“训练”出来的。",
    goals: ["认识样本、特征与标签", "理解训练与预测两个阶段", "建立模型不是答案而是函数的直觉"]
  },
  {
    id: "visual-lab", name: "可视化实验室", kicker: "第五站 · 让数据说话", x: 24, y: 45,
    art: "02_intro_continent/locations/05_visual_lab/统一素材.png",
    description: "把抽象的数据变成看得见的图形，在观察、比较与提问中形成数据直觉。",
    goals: ["选择合适的基础图表", "从图中发现趋势与异常", "避免误导性的可视化"]
  },
  {
    id: "game-portal", name: "聚类传送门", kicker: "第六站 · 无监督学习", x: 79, y: 70,
    art: "02_intro_continent/locations/06_game_portal/game_portal_bg.png",
    description: "进入没有标签的星图，亲手放置聚类中心，让星灵按照距离形成自己的部落。",
    goals: ["理解聚类与分类的区别", "体验 K-means 的分配与更新", "观察算法如何迭代至收敛"]
  },
  {
    id: "course-port", name: "课程港口", kicker: "第七站 · 整理与启航", x: 49, y: 81,
    art: "02_intro_continent/locations/07_course_port/course_port_bg.png",
    description: "回望完整课程航线，把零散知识装进行囊，并为下一片大陆设定学习目标。",
    goals: ["浏览课程总思维导图", "整理第一章知识卡片", "选择下一段学习航线"]
  }
];

const lessonDetails = {
  "ai-square": {
    duration: "8 分钟",
    activityTitle: "哪些应用真的在“学习”？",
    content: [
      '<div class="concept-box"><strong>人工智能是什么？</strong><p>人工智能不是某一种固定技术，而是一类目标：让机器完成通常需要人类智能的任务，例如感知、理解语言、推理、决策与生成内容。</p></div>',
      '<div class="concept-box"><strong>机器学习是什么？</strong><p>机器学习是实现人工智能的一条重要路径。程序不再只依赖工程师写完每条规则，而是从数据与经验中找到可用于新情况的规律。</p></div>',
      '<div class="formula-line">经验（数据） → 学习算法 → 模型 → 对新样本作出预测</div>',
      '<div class="concept-box"><strong>先记住这个边界</strong><p>“会自动运行”不等于“会学习”。计算器和固定温控器很聪明、很有用，但它们通常执行预先写好的确定规则；推荐系统会根据大量行为数据调整预测，更符合机器学习的特征。</p></div>'
    ].join("")
  },
  "concept-town": {
    duration: "9 分钟",
    activityTitle: "点亮四座概念建筑",
    content: [
      '<div class="concept-box"><strong>四层包含关系</strong><p>人工智能是最宽的目标集合；机器学习是其中“从数据中学习”的方法；深度学习是机器学习中使用多层神经网络的一类方法；大语言模型通常是用海量文本训练的深度学习模型。</p></div>',
      '<div class="formula-line">人工智能 ⊃ 机器学习 ⊃ 深度学习 ⊃ 大语言模型（常见情形）</div>',
      '<div class="concept-box"><strong>模型不等于算法</strong><p>学习算法像“训练方法”，负责从数据中寻找规律；模型是训练结束后得到的结果，可写成输入到输出的映射 f(x)。同一种算法在不同数据上会得到不同模型。</p></div>'
    ].join("")
  },
  "rule-castle": {
    duration: "10 分钟",
    activityTitle: "设计一个好瓜判断器",
    content: [
      '<div class="concept-box"><strong>先用规则完成一次判断</strong><p>假设我们观察西瓜的色泽、根蒂和敲击声。工程师可以手写规则：“青绿，并且根蒂蜷缩，并且敲声浊响 → 好瓜”。这是一棵最简单的决策树。</p></div>',
      '<div class="formula-line">if 青绿 ∧ 蜷缩 ∧ 浊响 → 好瓜；else → 暂不推荐</div>',
      '<div class="concept-box"><strong>规则系统的边界</strong><p>规则透明、容易解释，但现实里的例外很多。机器学习会把许多有标签的样本交给算法，让算法从“假设空间”中选择更能解释数据、也更可能适用于新样本的规则。</p></div>'
    ].join("")
  },
  "ml-camp": {
    duration: "12 分钟",
    activityTitle: "重建模型训练流水线",
    content: [
      '<div class="concept-box"><strong>一行数据就是一个样本</strong><p>“色泽=青绿、根蒂=蜷缩、敲声=浊响、结果=好瓜”是一条记录。色泽等描述是特征，特征的取值是属性值；“好瓜”是我们希望预测的标签。</p><div class="term-list"><span>样本 instance</span><span>特征 feature</span><span>标签 label</span></div></div>',
      '<div class="concept-box"><strong>训练与预测是两个阶段</strong><p>训练时，算法读取训练集并得到模型；预测时，模型接收未见过的新样本并输出结果。分类预测离散类别，回归预测连续数值。</p></div>',
      '<div class="formula-line">训练：D → algorithm → f　　预测：ŷ = f(x_new)</div>',
      '<div class="concept-box"><strong>真正的目标是泛化</strong><p>背下训练集不是本事。一个好模型要能对未见过的新样本做出合理判断，这种能力叫“泛化能力”。</p></div>'
    ].join("")
  },
  "visual-lab": {
    duration: "8 分钟",
    activityTitle: "从两张图里读出数据线索",
    content: [
      '<div class="concept-box"><strong>画图是建模前的侦察</strong><p>数据可视化帮助我们检查样本数量、类别是否失衡、特征是否有明显差异，也能尽早发现缺失值和异常值。图表不能代替模型，但能帮助我们提出更好的问题。</p></div>',
      '<div class="concept-box"><strong>示例数据集</strong><p>营地收集了 20 个西瓜样本，其中 12 个好瓜、8 个坏瓜；色泽统计为青绿 9 个、乌黑 6 个、浅白 5 个。切换视图，观察“标签分布”和“特征分布”回答的是不同问题。</p></div>'
    ].join("")
  },
  "course-port": {
    duration: "5 分钟",
    activityTitle: "装好你的启航行囊",
    content: [
      '<div class="concept-box"><strong>第一课小结</strong><p>现在你已经能从“固定规则”走到“数据驱动”：把现实对象整理成样本，用特征描述它，用标签定义目标，让算法从训练集获得模型，再用新样本检验泛化能力。</p></div>',
      '<div class="formula-line">现实问题 → 数据表示 → 学习模型 → 新样本预测 → 评价与改进</div>',
      '<div class="concept-box"><strong>下一步</strong><p>后续课程会继续回答：模型为什么会犯错？怎样划分训练集与测试集？怎样避免过拟合？不同算法的归纳偏好又是什么？</p></div>',
      '<img class="mindmap-preview" src="../总体思维导图.png" alt="机器学习课程总体思维导图">'
    ].join("")
  }
};

const activityTemplates = {
  "ai-square": () => [
    '<div class="choice-grid">',
    '<button class="choice-card" data-action="toggle-ai" data-value="face"><b>手机人脸解锁</b>从大量人脸样本中学习识别特征</button>',
    '<button class="choice-card" data-action="toggle-ai" data-value="thermostat"><b>固定温控器</b>低于 20℃ 开机，高于 24℃ 关机</button>',
    '<button class="choice-card" data-action="toggle-ai" data-value="recommend"><b>视频推荐</b>根据观看行为预测你可能喜欢的内容</button>',
    '<button class="choice-card" data-action="toggle-ai" data-value="calculator"><b>普通计算器</b>严格按照确定算法完成加减乘除</button>',
    '</div><button class="activity-submit" data-action="check-ai">提交判断</button>'
  ].join(""),
  "concept-town": () => [
    '<div class="reveal-grid">',
    '<button class="reveal-card" data-action="reveal-concept" data-value="ai"><b>AI 总城</b><span>目标层：让机器表现出感知、推理、语言或决策能力。</span></button>',
    '<button class="reveal-card" data-action="reveal-concept" data-value="ml"><b>机器学习森林</b><span>方法层：从数据与经验中改进表现，是实现 AI 的一条路径。</span></button>',
    '<button class="reveal-card" data-action="reveal-concept" data-value="dl"><b>深度学习塔</b><span>技术层：使用多层神经网络自动学习复杂表示。</span></button>',
    '<button class="reveal-card" data-action="reveal-concept" data-value="llm"><b>大模型核心城</b><span>应用层：在海量文本上训练，学习预测与生成语言。</span></button>',
    '</div>'
  ].join(""),
  "rule-castle": () => [
    '<div class="simulator">',
    '<label>色泽<select data-rule="color"><option value="green">青绿</option><option value="black">乌黑</option><option value="white">浅白</option></select></label>',
    '<label>根蒂<select data-rule="root"><option value="curled">蜷缩</option><option value="stiff">硬挺</option><option value="slight">稍蜷</option></select></label>',
    '<label>敲声<select data-rule="sound"><option value="dull">浊响</option><option value="crisp">清脆</option><option value="heavy">沉闷</option></select></label>',
    '</div><div class="sim-result" data-sim-result>调整特征，然后运行规则</div>',
    '<button class="activity-submit" data-action="run-rule">运行判断</button>'
  ].join(""),
  "ml-camp": () => [
    '<p>按正确顺序点击五张流程卡：</p><div class="pipeline">',
    '<button class="step-card" data-action="pipeline-step" data-value="predict">预测新样本</button>',
    '<button class="step-card" data-action="pipeline-step" data-value="collect">收集样本</button>',
    '<button class="step-card" data-action="pipeline-step" data-value="test">测试泛化</button>',
    '<button class="step-card" data-action="pipeline-step" data-value="label">整理特征与标签</button>',
    '<button class="step-card" data-action="pipeline-step" data-value="train">训练得到模型</button>',
    '</div><div class="pipeline-answer" data-pipeline-answer>你的顺序会出现在这里</div>',
    '<button class="activity-reset" data-action="pipeline-reset">重新排列</button>'
  ].join(""),
  "visual-lab": () => [
    '<div class="chart-tabs"><button class="chart-tab" data-action="chart-view" data-value="labels">标签分布</button><button class="chart-tab" data-action="chart-view" data-value="features">色泽分布</button></div>',
    '<div class="mini-chart" data-chart><span>选择一种视图开始观察</span></div>'
  ].join(""),
  "course-port": () => [
    '<div class="check-list">',
    '<button class="check-card" data-action="toggle-summary" data-value="terms">□ 我能解释样本、特征和标签</button>',
    '<button class="check-card" data-action="toggle-summary" data-value="flow">□ 我能说出训练到预测的流程</button>',
    '<button class="check-card" data-action="toggle-summary" data-value="generalization">□ 我知道泛化比记住训练集更重要</button>',
    '</div>'
  ].join("")
};

const state = {
  completed: new Set(JSON.parse(localStorage.getItem("ai-map-progress") || "[]")),
  activeLesson: null,
  activity: null,
  toastTimer: null
};

const clusterPoints = [
  { id: "A1", x: 17, y: 20 }, { id: "A2", x: 24, y: 28 }, { id: "A3", x: 16, y: 35 },
  { id: "A4", x: 30, y: 18 }, { id: "A5", x: 28, y: 39 },
  { id: "B1", x: 43, y: 68 }, { id: "B2", x: 50, y: 78 }, { id: "B3", x: 56, y: 65 },
  { id: "B4", x: 45, y: 84 }, { id: "B5", x: 59, y: 80 },
  { id: "C1", x: 73, y: 20 }, { id: "C2", x: 82, y: 29 }, { id: "C3", x: 90, y: 17 },
  { id: "C4", x: 77, y: 39 }, { id: "C5", x: 90, y: 36 }
];

const clusterColors = ["青蓝星群", "玫红星群", "琥珀星群", "紫晶星群"];

const gameState = {
  k: null,
  phase: "k",
  centers: [],
  assignments: [],
  iteration: 0,
  movement: null
};

const app = document.querySelector("#app");
const dialog = document.querySelector(".lesson-dialog");
const clusterGame = document.querySelector(".cluster-game");

function nodeButton(item, status, kind) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `map-node is-${status}`;
  button.style.left = `${item.x}%`;
  button.style.top = `${item.y}%`;
  button.dataset.id = item.id;
  button.dataset.kind = kind;
  button.setAttribute("aria-label", `${item.name}${status === "locked" ? "，尚未解锁" : "，点击进入"}`);
  button.innerHTML = `<span class="node-label">${item.name}</span>`;
  return button;
}

function renderWorld() {
  app.replaceChildren(document.querySelector("#world-template").content.cloneNode(true));
  const hotspots = app.querySelector(".world-hotspots");
  continents.forEach(item => hotspots.append(nodeButton(item, item.unlocked ? "active" : "locked", "continent")));
}

function lessonStatus(index) {
  if (state.completed.has(lessons[index].id)) return "done";
  if (index === 0 || state.completed.has(lessons[index - 1].id)) return "active";
  return "locked";
}

function renderContinent() {
  app.replaceChildren(document.querySelector("#continent-template").content.cloneNode(true));
  const hotspots = app.querySelector(".lesson-hotspots");
  lessons.forEach((item, index) => hotspots.append(nodeButton(item, lessonStatus(index), "lesson")));
  updateProgress();
}

function updateProgress() {
  const completedCount = lessons.filter(item => state.completed.has(item.id)).length;
  const count = app.querySelector("[data-progress-count]");
  const bar = app.querySelector("[data-progress-bar]");
  if (count) count.textContent = completedCount;
  if (bar) bar.style.width = `${(completedCount / lessons.length) * 100}%`;
}

function navigate(route) {
  const screen = app.querySelector(".screen");
  if (screen) screen.classList.add("is-transitioning");
  window.setTimeout(() => {
    location.hash = route;
    renderRoute();
  }, screen ? 380 : 0);
}

function renderRoute() {
  const route = location.hash.replace("#", "") || "world";
  route === "intro" ? renderContinent() : renderWorld();
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function activityFeedback(message) {
  dialog.querySelector("[data-activity-feedback]").textContent = message;
}

function markActivityComplete(message) {
  state.activity.complete = true;
  const status = dialog.querySelector("[data-activity-status]");
  status.textContent = "挑战完成";
  status.classList.add("is-complete");
  dialog.querySelector("[data-action='complete-lesson']").disabled = false;
  activityFeedback(message || "做得好，你已经掌握这一站的核心。");
}

function renderPipelineAnswer() {
  const labels = { collect: "收集样本", label: "整理特征与标签", train: "训练得到模型", test: "测试泛化", predict: "预测新样本" };
  const answer = dialog.querySelector("[data-pipeline-answer]");
  answer.textContent = state.activity.pipeline.length ? state.activity.pipeline.map(value => labels[value]).join(" → ") : "你的顺序会出现在这里";
}

function handleActivity(action, control) {
  if (!state.activity || !action) return false;

  if (action === "toggle-ai") {
    const value = control.dataset.value;
    state.activity.selected.has(value) ? state.activity.selected.delete(value) : state.activity.selected.add(value);
    control.classList.toggle("is-selected");
    return true;
  }

  if (action === "check-ai") {
    const selected = [...state.activity.selected].sort().join(",");
    if (selected === ["face", "recommend"].sort().join(",")) {
      markActivityComplete("判断正确：关键不在于“自动”，而在于系统是否从数据中获得并调整规律。");
    } else {
      activityFeedback("再想一步：哪些系统会利用大量历史样本改变未来判断？");
    }
    return true;
  }

  if (action === "reveal-concept") {
    control.classList.add("is-open");
    state.activity.revealed.add(control.dataset.value);
    if (state.activity.revealed.size === 4) markActivityComplete("四座建筑已点亮：它们是逐层收窄的概念，不是四个互不相关的名词。");
    else activityFeedback(`已点亮 ${state.activity.revealed.size} / 4 座建筑。`);
    return true;
  }

  if (action === "run-rule") {
    const color = dialog.querySelector("[data-rule='color']").value;
    const root = dialog.querySelector("[data-rule='root']").value;
    const sound = dialog.querySelector("[data-rule='sound']").value;
    const isGood = color === "green" && root === "curled" && sound === "dull";
    const signature = `${color}-${root}-${sound}`;
    state.activity.runs.add(signature);
    dialog.querySelector("[data-sim-result]").textContent = isGood ? "判断结果：好瓜 ✓" : "判断结果：暂不推荐 —— 有条件没有满足";
    if (state.activity.runs.size >= 2) markActivityComplete("你已经测试了至少两个样本。规则很清楚，但新情况一多，手写规则就会迅速变复杂。");
    else activityFeedback("再改变至少一个特征运行一次，观察规则输出如何变化。");
    return true;
  }

  if (action === "pipeline-step") {
    const expected = ["collect", "label", "train", "test", "predict"];
    const value = control.dataset.value;
    if (state.activity.pipeline.includes(value)) return true;
    if (value !== expected[state.activity.pipeline.length]) {
      activityFeedback("顺序还差一点：先获得经验数据，再谈训练和预测。已为你保留当前正确步骤。");
      return true;
    }
    state.activity.pipeline.push(value);
    control.classList.add("is-picked");
    renderPipelineAnswer();
    if (state.activity.pipeline.length === expected.length) markActivityComplete("流程正确！测试集模拟“没见过的新样本”，用来检查模型的泛化能力。");
    else activityFeedback(`已接好 ${state.activity.pipeline.length} / 5 个环节。`);
    return true;
  }

  if (action === "pipeline-reset") {
    state.activity.pipeline = [];
    dialog.querySelectorAll(".step-card").forEach(item => item.classList.remove("is-picked"));
    renderPipelineAnswer();
    activityFeedback("流水线已清空，从第一步重新开始。");
    return true;
  }

  if (action === "chart-view") {
    const view = control.dataset.value;
    state.activity.views.add(view);
    dialog.querySelectorAll(".chart-tab").forEach(item => item.classList.toggle("is-active", item === control));
    const chart = dialog.querySelector("[data-chart]");
    const values = view === "labels"
      ? [{ label: "好瓜 12", value: 92 }, { label: "坏瓜 8", value: 62 }]
      : [{ label: "青绿 9", value: 90 }, { label: "乌黑 6", value: 60 }, { label: "浅白 5", value: 50 }];
    chart.innerHTML = values.map(item => `<div class="bar" style="height:${item.value}px"><span>${item.label}</span></div>`).join("");
    if (state.activity.views.size === 2) markActivityComplete("两种视图都已观察：标签图检查类别平衡，特征图展示输入数据的构成。");
    else activityFeedback("这张图展示的是数据的一个侧面，再切换另一种视图。");
    return true;
  }

  if (action === "quiz-option") {
    const question = control.closest("[data-question]");
    question.querySelectorAll(".quiz-option").forEach(item => item.classList.remove("is-selected", "is-correct", "is-wrong"));
    control.classList.add("is-selected");
    state.activity.answers[question.dataset.question] = control.dataset.value;
    return true;
  }

  if (action === "submit-quiz") {
    const correct = { q1: "feature", q2: "generalize", q3: "program" };
    if (Object.keys(state.activity.answers).length < 3) {
      activityFeedback("还有题目没有作答，检查一下三个守门机关。");
      return true;
    }
    let score = 0;
    dialog.querySelectorAll("[data-question]").forEach(question => {
      const id = question.dataset.question;
      question.querySelectorAll(".quiz-option").forEach(option => {
        if (option.dataset.value === correct[id]) option.classList.add("is-correct");
        if (option.classList.contains("is-selected") && option.dataset.value !== correct[id]) option.classList.add("is-wrong");
      });
      if (state.activity.answers[id] === correct[id]) score += 1;
    });
    if (score === 3) markActivityComplete("3 / 3，全对！你已经拿到通往课程港口的通行证。");
    else activityFeedback(`答对 ${score} / 3。绿色是正确答案，修正选择后再提交一次。`);
    return true;
  }

  if (action === "toggle-summary") {
    const value = control.dataset.value;
    if (state.activity.checked.has(value)) {
      state.activity.checked.delete(value);
      control.classList.remove("is-checked");
      control.textContent = `□ ${control.textContent.slice(2)}`;
    } else {
      state.activity.checked.add(value);
      control.classList.add("is-checked");
      control.textContent = `☑ ${control.textContent.slice(2)}`;
    }
    if (state.activity.checked.size === 3) markActivityComplete("行囊整理完毕！你已经完成第一课的完整学习闭环。");
    else activityFeedback(`已确认 ${state.activity.checked.size} / 3 项能力。`);
    return true;
  }

  return false;
}

function gameMessage(message) {
  clusterGame.querySelector("[data-game-message]").textContent = message;
}

function renderClusterBoard() {
  const pointsLayer = clusterGame.querySelector(".cluster-points");
  const centersLayer = clusterGame.querySelector(".cluster-centers");

  pointsLayer.innerHTML = clusterPoints.map((point, index) => {
    const assignment = gameState.assignments[index];
    const clusterClass = Number.isInteger(assignment) ? ` cluster-${assignment}` : "";
    const seedClass = gameState.centers.some(center => center.sourceId === point.id) ? " is-seed" : "";
    return `<button class="star-point${clusterClass}${seedClass}" type="button" data-action="select-seed" data-point-id="${point.id}" style="left:${point.x}%;top:${100 - point.y}%" aria-label="星灵 ${point.id}"></button>`;
  }).join("");

  centersLayer.innerHTML = gameState.centers.map((center, index) =>
    `<div class="cluster-center cluster-${index}" style="left:${center.x}%;top:${100 - center.y}%"><span>${index + 1}</span></div>`
  ).join("");
}

function renderClusterLegend() {
  const legend = clusterGame.querySelector("[data-cluster-legend]");
  if (!gameState.assignments.length) {
    legend.innerHTML = '<div class="legend-item"><span>星群尚未划分</span><b>--</b></div>';
    return;
  }
  legend.innerHTML = Array.from({ length: gameState.k }, (_, index) => {
    const count = gameState.assignments.filter(value => value === index).length;
    return `<div class="legend-item"><span><i class="legend-swatch cluster-${index}"></i>${clusterColors[index]}</span><b>${count} 只</b></div>`;
  }).join("");
}

function renderGameState() {
  renderClusterBoard();
  renderClusterLegend();

  clusterGame.querySelector("[data-stat-k]").textContent = gameState.k || "?";
  clusterGame.querySelector("[data-stat-move]").textContent = gameState.movement === null ? "--" : gameState.movement.toFixed(2);
  clusterGame.querySelector("[data-game-iteration]").textContent = gameState.iteration;

  clusterGame.querySelectorAll("[data-action='choose-k']").forEach(button => {
    button.classList.toggle("is-selected", Number(button.dataset.k) === gameState.k);
  });

  const order = ["k", "seed", "assign", "update"];
  const currentIndex = gameState.phase === "complete" ? order.length : order.indexOf(gameState.phase);
  clusterGame.querySelectorAll("[data-game-step]").forEach(step => {
    const index = order.indexOf(step.dataset.gameStep);
    step.classList.toggle("is-current", index === currentIndex);
    step.classList.toggle("is-done", index < currentIndex);
  });

  const phaseLabel = clusterGame.querySelector("[data-game-phase]");
  const nextButton = clusterGame.querySelector("[data-action='game-next']");
  const finishButton = clusterGame.querySelector("[data-action='finish-game']");
  const insightTitle = clusterGame.querySelector("[data-insight-title]");
  const insightText = clusterGame.querySelector("[data-insight-text]");

  if (gameState.phase === "k") {
    phaseLabel.textContent = "等待选择 K";
    nextButton.textContent = "请先选择 K = 3";
    nextButton.disabled = true;
    insightTitle.textContent = "什么是聚类？";
    insightText.textContent = "聚类是一种无监督学习：数据只有特征，没有预先给出的标签。算法尝试让同组样本更相似、不同组样本差异更大。";
  } else if (gameState.phase === "seed") {
    phaseLabel.textContent = "布置初始信标";
    nextButton.textContent = gameState.centers.length === gameState.k ? "按最近距离划分星群 →" : `还需选择 ${gameState.k - gameState.centers.length} 个中心`;
    nextButton.disabled = gameState.centers.length !== gameState.k;
    insightTitle.textContent = "初始化会影响结果";
    insightText.textContent = "K-means 需要先放置 K 个初始中心。把中心放得分散一些，通常更容易找到自然形成的群体。";
  } else if (gameState.phase === "assign") {
    phaseLabel.textContent = "重新计算归属";
    nextButton.textContent = "按最近距离重新划分 →";
    nextButton.disabled = false;
    insightTitle.textContent = "分配步骤";
    insightText.textContent = "计算每个样本到各中心的距离，并把它分给最近的中心。这一步固定中心、更新成员归属。";
  } else if (gameState.phase === "update") {
    phaseLabel.textContent = "等待移动信标";
    nextButton.textContent = "把信标移到群体中心 →";
    nextButton.disabled = false;
    insightTitle.textContent = "更新步骤";
    insightText.textContent = "对每一组成员求平均位置，把聚类中心移动到那里。这一步固定成员归属、更新中心。";
  } else {
    phaseLabel.textContent = "星群已经稳定";
    nextButton.textContent = "聚类完成 ✓";
    nextButton.disabled = true;
    finishButton.hidden = false;
    insightTitle.textContent = "收敛完成";
    insightText.textContent = "当成员归属不再改变、中心也几乎不再移动时，算法收敛。你刚刚亲手完成了一次 K-means 聚类。";
  }

  if (gameState.phase !== "complete") finishButton.hidden = true;
}

function resetClusterGame() {
  gameState.k = null;
  gameState.phase = "k";
  gameState.centers = [];
  gameState.assignments = [];
  gameState.iteration = 0;
  gameState.movement = null;
  gameMessage("先观察星图，你认为这里有几个自然形成的群体？");
  renderGameState();
}

function chooseClusterK(k) {
  gameState.k = k;
  gameState.centers = [];
  gameState.assignments = [];
  gameState.iteration = 0;
  gameState.movement = null;
  if (k === 3) {
    gameState.phase = "seed";
    gameMessage("判断正确：星图上有三个较明显的密集区域。现在点击三只相距较远的星灵，作为初始中心。");
  } else {
    gameState.phase = "k";
    gameMessage(k < 3 ? "K 太小会把两个自然群体硬挤在一起。再观察一次星图。" : "K 太大会拆开本来紧密的一群。试试更简洁的划分。");
  }
  renderGameState();
}

function chooseClusterSeed(pointId) {
  if (gameState.phase !== "seed" || gameState.centers.length >= gameState.k) return;
  if (gameState.centers.some(center => center.sourceId === pointId)) return;
  const point = clusterPoints.find(item => item.id === pointId);
  gameState.centers.push({ x: point.x, y: point.y, sourceId: point.id });
  gameMessage(gameState.centers.length === gameState.k ? "三个初始信标就位。下一步，让每只星灵寻找离自己最近的信标。" : `已放置 ${gameState.centers.length} / ${gameState.k} 个信标。`);
  renderGameState();
}

function assignClusters() {
  gameState.assignments = clusterPoints.map(point => {
    let bestIndex = 0;
    let bestDistance = Infinity;
    gameState.centers.forEach((center, index) => {
      const distance = Math.hypot(point.x - center.x, point.y - center.y);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    return bestIndex;
  });
  gameState.centers = gameState.centers.map(center => ({ x: center.x, y: center.y }));
  gameState.iteration += 1;
  gameState.phase = "update";
  gameMessage("星灵已经按最近距离归队。现在移动信标，让它站到本群成员的平均位置。");
  renderGameState();
}

function updateClusterCenters() {
  let totalMovement = 0;
  const newCenters = gameState.centers.map((center, index) => {
    const members = clusterPoints.filter((_, pointIndex) => gameState.assignments[pointIndex] === index);
    if (!members.length) return center;
    const next = {
      x: members.reduce((sum, point) => sum + point.x, 0) / members.length,
      y: members.reduce((sum, point) => sum + point.y, 0) / members.length
    };
    totalMovement += Math.hypot(next.x - center.x, next.y - center.y);
    return next;
  });
  gameState.centers = newCenters;
  gameState.movement = totalMovement / gameState.k;

  if (gameState.movement < 0.35 && gameState.iteration >= 2) {
    gameState.phase = "complete";
    gameMessage("中心位置几乎不再变化，三个星群已经收敛。聚类任务完成！");
  } else {
    gameState.phase = "assign";
    gameMessage("信标已经移动。成员最近的信标可能改变，再执行一次“划分 → 更新”。");
  }
  renderGameState();
}

function advanceClusterGame() {
  if (gameState.phase === "seed" || gameState.phase === "assign") assignClusters();
  else if (gameState.phase === "update") updateClusterCenters();
}

function openClusterGame(lesson) {
  state.activeLesson = lesson;
  dialog.hidden = true;
  clusterGame.hidden = false;
  resetClusterGame();
}

function finishLesson(lesson) {
  const wasDone = state.completed.has(lesson.id);
  state.completed.add(lesson.id);
  localStorage.setItem("ai-map-progress", JSON.stringify([...state.completed]));
  dialog.hidden = true;
  clusterGame.hidden = true;
  renderContinent();
  const index = lessons.findIndex(item => item.id === lesson.id);
  showToast(wasDone ? "这一站的知识已经重新温习。" : index === lessons.length - 1 ? "启程之森探索完成！新的大陆即将开放。" : `探索完成，“${lessons[index + 1].name}”已解锁！`);
}

function openLesson(lesson) {
  state.activeLesson = lesson;
  const details = lessonDetails[lesson.id];
  const isDone = state.completed.has(lesson.id);
  state.activity = {
    complete: isDone,
    selected: new Set(),
    revealed: new Set(),
    runs: new Set(),
    pipeline: [],
    views: new Set(),
    answers: {},
    checked: new Set()
  };
  dialog.querySelector(".lesson-dialog__art").style.backgroundImage = `url("${ASSET_ROOT}/${lesson.art}")`;
  dialog.querySelector("[data-dialog-kicker]").textContent = lesson.kicker;
  dialog.querySelector("[data-dialog-title]").textContent = lesson.name;
  dialog.querySelector("[data-dialog-description]").textContent = lesson.description;
  dialog.querySelector("[data-dialog-duration]").textContent = details.duration;
  dialog.querySelector("[data-dialog-goals]").innerHTML = lesson.goals.map(goal => `<span>✦ ${goal}</span>`).join("");
  dialog.querySelector("[data-dialog-content]").innerHTML = details.content;
  dialog.querySelector("[data-activity-title]").textContent = details.activityTitle;
  dialog.querySelector("[data-activity-body]").innerHTML = activityTemplates[lesson.id]();
  dialog.querySelector("[data-activity-feedback]").textContent = isDone ? "这一站已经完成，你仍可再次操作复习。" : "";
  const status = dialog.querySelector("[data-activity-status]");
  status.textContent = isDone ? "已完成" : "待完成";
  status.classList.toggle("is-complete", isDone);
  const completeButton = dialog.querySelector("[data-action='complete-lesson']");
  completeButton.disabled = !isDone;
  completeButton.innerHTML = isDone ? "结束回顾 <span aria-hidden='true'>✓</span>" : "完成本站 <span aria-hidden='true'>→</span>";
  dialog.dataset.theme = lesson.id;
  dialog.hidden = false;
  dialog.querySelector(".lesson-scroll").scrollTop = 0;
}

document.addEventListener("click", event => {
  const node = event.target.closest(".map-node");
  if (node) {
    if (node.classList.contains("is-locked")) {
      showToast(node.dataset.kind === "continent" ? "这片大陆仍被迷雾笼罩，先完成“启程之森”吧。" : "先完成上一站，通往这里的道路就会亮起。 ");
      return;
    }
    if (node.dataset.kind === "continent") navigate("intro");
    else {
      const lesson = lessons.find(item => item.id === node.dataset.id);
      lesson.id === "game-portal" ? openClusterGame(lesson) : openLesson(lesson);
    }
    return;
  }

  const actionControl = event.target.closest("[data-action]");
  const action = actionControl?.dataset.action;
  if (handleActivity(action, actionControl)) return;
  if (action === "world") navigate("world");
  if (action === "close-scene") dialog.hidden = true;
  if (action === "close-game") clusterGame.hidden = true;
  if (action === "choose-k") chooseClusterK(Number(actionControl.dataset.k));
  if (action === "select-seed") chooseClusterSeed(actionControl.dataset.pointId);
  if (action === "game-next") advanceClusterGame();
  if (action === "reset-game") resetClusterGame();
  if (action === "finish-game" && state.activeLesson) finishLesson(state.activeLesson);
  if (action === "reset") {
    state.completed.clear();
    localStorage.removeItem("ai-map-progress");
    renderContinent();
    showToast("探索进度已重置，可以重新出发了。 ");
  }
  if (action === "complete-lesson" && state.activeLesson) {
    finishLesson(state.activeLesson);
  }
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!clusterGame.hidden) clusterGame.hidden = true;
  else if (!dialog.hidden) dialog.hidden = true;
});

if (!location.hash) history.replaceState(null, "", "#world");
renderRoute();
