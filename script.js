const STORAGE_KEY = "shenxian-lake-column-hat";

const COLUMN_ORDER = [
  "洞见",
  "演讲",
  "科学说",
  "主题报道",
  "人物",
  "校长专栏",
  "书院",
  "i思享",
];

const departments = {
  洞见: {
    description: "适合喜欢时事、财经、文化评论，能采访也能编辑来稿，工作量可接受4分。",
  },
  演讲: {
    description: "适合喜欢案头整理、润色文稿，工作量约1分，偏好已有演讲稿。",
  },
  科学说: {
    description: "适合对前沿科学感兴趣，喜欢采访、策划与科普表达，工作量可接受4分。",
  },
  主题报道: {
    description: "适合能扛5分工作量，喜欢热点深度、活动策划、信息整理、问卷设计。",
  },
  人物: {
    description: "适合喜欢倾听、采访、写人物故事，工作量约3分。",
  },
  校长专栏: {
    description: "适合偏好安静整理校长演讲稿，工作量约1分。",
  },
  书院: {
    description: "适合对书院生活、教育、成长感兴趣，喜欢采访老师同学，工作量约3分。",
  },
  i思享: {
    description: "适合喜欢观点思辨、来稿编辑、采访约稿，工作量约2分。",
  },
};

const WORKLOAD_QUESTION_INDEX = 6;

const questions = [
  {
    id: 1,
    multiple: true,
    question: "你最感兴趣的题材是？",
    options: [
      {
        label: "A",
        text: "时事、财经、文化现象",
        scores: { 洞见: 3 },
      },
      {
        label: "B",
        text: "前沿科学进展",
        scores: { 科学说: 3 },
      },
      {
        label: "C",
        text: "青年热点话题",
        scores: { 主题报道: 3 },
      },
      {
        label: "D",
        text: "人物成长故事",
        scores: { 人物: 3, 校长专栏: 1 },
      },
      {
        label: "E",
        text: "大学生活",
        scores: { 书院: 3 },
      },
      {
        label: "F",
        text: "思想观点、思辨延展",
        scores: { i思享: 3, 洞见: 1, 演讲: 1 },
      },
    ],
  },
  {
    id: 2,
    multiple: true,
    question: "你最喜欢的稿件形式是？",
    options: [
      {
        label: "A",
        text: "采访",
        scores: { 人物: 2, 书院: 2, 科学说: 2, 洞见: 1 },
      },
      {
        label: "B",
        text: "来稿/观点编辑",
        scores: { i思享: 3, 洞见: 2, 演讲: 3, 校长专栏: 3 },
      },
      {
        label: "C",
        text: "活动记录/策划",
        scores: { 主题报道: 3, 书院: 1 },
      },
      {
        label: "D",
        text: "独立撰稿",
        scores: { 洞见: 2, 主题报道: 2, 人物: 2, i思享: 1 },
      },
    ],
  },
  {
    id: 3,
    multiple: true,
    question: "你更擅长哪类工作？",
    options: [
      {
        label: "A",
        text: "提问与倾听",
        scores: { 人物: 2, 书院: 2, 科学说: 2, 洞见: 1 },
      },
      {
        label: "B",
        text: "活动策划与执行",
        scores: { 主题报道: 3, 书院: 1 },
      },
      {
        label: "C",
        text: "逻辑分析与评论",
        scores: { 洞见: 3, i思享: 1 },
      },
      {
        label: "D",
        text: "故事写作",
        scores: { 人物: 3, 书院: 1 },
      },
      {
        label: "E",
        text: "观点提炼",
        scores: { 演讲: 3, 校长专栏: 3, i思享: 3, 洞见: 1 },
      },
    ],
  },
  {
    id: 4,
    multiple: false,
    question: "你更喜欢独立完成还是团队协作？",
    options: [
      {
        label: "A",
        text: "独立安静整理",
        scores: { 演讲: 3, 校长专栏: 3, i思享: 1 },
      },
      {
        label: "B",
        text: "小组脑暴策划",
        scores: { 主题报道: 2, 洞见: 2, 科学说: 2 },
      },
      {
        label: "C",
        text: "两人采访搭档",
        scores: { 人物: 2, 书院: 2, 科学说: 2 },
      },
    ],
  },
  {
    id: 5,
    multiple: true,
    question: "面对学者教授，你更愿意？",
    options: [
      {
        label: "A",
        text: "约访对话",
        scores: { 人物: 2, 科学说: 2, 洞见: 2 },
      },
      {
        label: "B",
        text: "听讲座并整理演讲",
        scores: { 演讲: 3, 校长专栏: 3, i思享: 3 },
      },
      {
        label: "C",
        text: "邀请主持读书会/观影会/座谈会",
        scores: { 主题报道: 3 },
      },
    ],
  },
  {
    id: 6,
    multiple: false,
    question: "你对活动（观影会、围读会、主题调研等）的态度是？",
    options: [
      {
        label: "A",
        text: "非常喜欢，愿意策划",
        scores: { 主题报道: 3, 书院: 1 },
      },
      {
        label: "B",
        text: "愿意参与记录",
        scores: { 主题报道: 2, 书院: 2 },
      },
      {
        label: "C",
        text: "不太喜欢，更喜欢写稿",
        scores: { 洞见: 2, 人物: 2, i思享: 2 },
      },
      {
        label: "D",
        text: "完全不想，偏好案头",
        scores: { 演讲: 3, 校长专栏: 3, i思享: 1 },
      },
    ],
  },
  {
    id: 7,
    multiple: false,
    question: "你每期能接受的工作量大概是？",
    options: [
      {
        label: "A",
        text: "1分左右",
        scores: { 演讲: 3, 校长专栏: 3, i思享: 2 },
      },
      {
        label: "B",
        text: "2分左右",
        scores: { i思享: 3, 演讲: 2, 校长专栏: 2, 人物: 1, 书院: 1 },
      },
      {
        label: "C",
        text: "3分左右",
        scores: { 人物: 3, 书院: 3, i思享: 2, 洞见: 1, 科学说: 1 },
      },
      {
        label: "D",
        text: "4分左右",
        scores: { 洞见: 3, 科学说: 3, 主题报道: 2, 人物: 1, 书院: 1 },
      },
      {
        label: "E",
        text: "5分左右",
        scores: { 主题报道: 3, 洞见: 2, 科学说: 2 },
      },
    ],
  },
];

const state = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  screen: "home",
};

const els = {};

function emptyScores() {
  return {
    洞见: 0,
    演讲: 0,
    科学说: 0,
    主题报道: 0,
    人物: 0,
    校长专栏: 0,
    书院: 0,
    i思享: 0,
  };
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function normalizeAnswer(raw, question) {
  if (!question) return null;
  const maxIndex = question.options.length - 1;
  const toValidIndex = (value) =>
    Number.isInteger(value) && value >= 0 && value <= maxIndex ? value : null;

  if (question.multiple) {
    const list = Array.isArray(raw) ? raw : Number.isInteger(raw) ? [raw] : [];
    const unique = [];
    list.forEach((value) => {
      const index = toValidIndex(value);
      if (index !== null && !unique.includes(index)) unique.push(index);
    });
    return unique.length ? unique : null;
  }

  if (Array.isArray(raw)) {
    return raw.length === 1 ? toValidIndex(raw[0]) : null;
  }
  return toValidIndex(raw);
}

function hasAnswer(answer) {
  if (Array.isArray(answer)) return answer.length > 0;
  return Number.isInteger(answer);
}

function isOptionSelected(answer, optionIndex) {
  if (Array.isArray(answer)) return answer.includes(optionIndex);
  return answer === optionIndex;
}

function selectedOptionIndices(answer) {
  if (Array.isArray(answer)) return answer;
  if (Number.isInteger(answer)) return [answer];
  return [];
}

function saveProgress() {
  const payload = {
    currentQuestion: state.currentQuestion,
    answers: state.answers,
    screen: state.screen,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    /* private mode / blocked storage */
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.answers)) return null;
    return data;
  } catch (error) {
    return null;
  }
}

function initializeQuiz() {
  els.screenHome = document.getElementById("screen-home");
  els.screenQuiz = document.getElementById("screen-quiz");
  els.screenResult = document.getElementById("screen-result");
  els.startBtn = document.getElementById("start-btn");
  els.prevBtn = document.getElementById("prev-btn");
  els.nextBtn = document.getElementById("next-btn");
  els.restartBtn = document.getElementById("restart-btn");
  els.shareBtn = document.getElementById("share-btn");
  els.progressNum = document.getElementById("progress-num");
  els.progressFill = document.getElementById("progress-fill");
  els.progressText = document.getElementById("progress-text");
  els.questionIndex = document.getElementById("question-index");
  els.questionText = document.getElementById("question-text");
  els.options = document.getElementById("options");
  els.quizCard = document.getElementById("quiz-card");
  els.quizPageNo = document.getElementById("quiz-page-no");
  els.resultHeadline = document.getElementById("result-headline");
  els.resultDesc = document.getElementById("result-desc");
  els.scoreBars = document.getElementById("score-bars");
  els.shareToast = document.getElementById("share-toast");

  els.startBtn.addEventListener("click", startQuiz);
  els.prevBtn.addEventListener("click", previousQuestion);
  els.nextBtn.addEventListener("click", nextQuestion);
  els.restartBtn.addEventListener("click", restartQuiz);
  els.shareBtn.addEventListener("click", shareResult);

  const saved = loadProgress();
  if (saved && saved.answers.length === questions.length) {
    state.answers = questions.map((question, index) =>
      normalizeAnswer(saved.answers[index], question)
    );
    state.currentQuestion = clampQuestionIndex(saved.currentQuestion);
    if (saved.screen === "result" && state.answers.every(hasAnswer)) {
      showScreen("result");
      showResult();
      return;
    }
    if (saved.screen === "quiz") {
      showScreen("quiz");
      renderQuestion();
      return;
    }
  }

  showScreen("home");
}

function clampQuestionIndex(value) {
  const n = Number(value);
  if (!Number.isInteger(n)) return 0;
  return Math.min(Math.max(n, 0), questions.length - 1);
}

function showScreen(name) {
  state.screen = name;
  const map = {
    home: els.screenHome,
    quiz: els.screenQuiz,
    result: els.screenResult,
  };
  Object.entries(map).forEach(([key, node]) => {
    const active = key === name;
    node.classList.toggle("is-active", active);
    node.hidden = !active;
    node.setAttribute("aria-hidden", active ? "false" : "true");
  });
  saveProgress();
}

function startQuiz() {
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const index = state.currentQuestion;
  const q = questions[index];
  const total = questions.length;
  const human = index + 1;

  els.progressNum.textContent = `${pad2(human)} / ${pad2(total)}`;
  els.progressFill.style.width = `${(human / total) * 100}%`;
  els.progressText.textContent = `第 ${human} 题，共 ${total} 题`;
  els.questionIndex.textContent = `Q. ${pad2(human)}`;
  els.questionText.textContent = q.question;
  els.quizPageNo.textContent = pad2(human);

  els.options.innerHTML = "";
  q.options.forEach((option, optionIndex) => {
    const id = `q${q.id}-opt${optionIndex}`;
    const label = document.createElement("label");
    label.className = "option";
    label.htmlFor = id;
    if (isOptionSelected(state.answers[index], optionIndex)) {
      label.classList.add("is-selected");
    }

    const input = document.createElement("input");
    input.type = q.multiple ? "checkbox" : "radio";
    input.name = `question-${q.id}`;
    input.id = id;
    input.value = String(optionIndex);
    input.checked = isOptionSelected(state.answers[index], optionIndex);
    input.addEventListener("change", () => selectAnswer(optionIndex));

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = option.label;

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = option.text;

    const check = document.createElement("span");
    check.className = "option-check";
    check.setAttribute("aria-hidden", "true");

    label.append(input, letter, text, check);
    els.options.appendChild(label);
  });

  els.prevBtn.disabled = index === 0;
  els.nextBtn.disabled = !hasAnswer(state.answers[index]);

  if (index === total - 1) {
    els.nextBtn.textContent = "查看我的结果 →";
    els.nextBtn.setAttribute("aria-label", "查看我的结果");
  } else {
    els.nextBtn.textContent = "下一题 →";
    els.nextBtn.setAttribute("aria-label", "下一题");
  }

  els.quizCard.classList.remove("is-leaving");
  void els.quizCard.offsetWidth;
  els.quizCard.style.animation = "none";
  void els.quizCard.offsetWidth;
  els.quizCard.style.animation = "";
}

function selectAnswer(optionIndex) {
  const q = questions[state.currentQuestion];
  if (q.multiple) {
    const next = [];
    els.options.querySelectorAll("input").forEach((input, i) => {
      if (input.checked) next.push(i);
    });
    state.answers[state.currentQuestion] = next.length ? next : null;
  } else {
    state.answers[state.currentQuestion] = optionIndex;
  }
  saveProgress();

  const selected = state.answers[state.currentQuestion];
  els.options.querySelectorAll(".option").forEach((node, i) => {
    const on = isOptionSelected(selected, i);
    node.classList.toggle("is-selected", on);
    const input = node.querySelector("input");
    if (input) input.checked = on;
  });

  els.nextBtn.disabled = !hasAnswer(selected);
}

function nextQuestion() {
  if (!hasAnswer(state.answers[state.currentQuestion])) return;
  if (state.currentQuestion === questions.length - 1) {
    showScreen("result");
    showResult();
    return;
  }
  state.currentQuestion += 1;
  saveProgress();
  renderQuestion();
}

function previousQuestion() {
  if (state.currentQuestion === 0) return;
  state.currentQuestion -= 1;
  saveProgress();
  renderQuestion();
}

function calculateScores() {
  const scores = emptyScores();
  state.answers.forEach((answer, questionIndex) => {
    selectedOptionIndices(answer).forEach((optionIndex) => {
      const option = questions[questionIndex].options[optionIndex];
      if (!option) return;
      Object.entries(option.scores).forEach(([name, value]) => {
        scores[name] += value;
      });
    });
  });
  return scores;
}

function resolvePlacement(scores) {
  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.entries(scores)
    .filter(([, score]) => score === maxScore)
    .map(([name]) => name);

  if (winners.length === 1) {
    return {
      primary: winners[0],
      alternatives: [],
      tied: false,
      scores,
      maxScore,
    };
  }

  const workloadQuestion = questions[WORKLOAD_QUESTION_INDEX];
  const workloadIndex = state.answers[WORKLOAD_QUESTION_INDEX];
  const workloadScores =
    Number.isInteger(workloadIndex) && workloadQuestion.options[workloadIndex]
      ? workloadQuestion.options[workloadIndex].scores
      : {};

  const ranked = [...winners].sort((a, b) => {
    const prefA = workloadScores[a] || 0;
    const prefB = workloadScores[b] || 0;
    if (prefB !== prefA) return prefB - prefA;
    return COLUMN_ORDER.indexOf(a) - COLUMN_ORDER.indexOf(b);
  });

  return {
    primary: ranked[0],
    alternatives: ranked.slice(1),
    tied: true,
    scores,
    maxScore,
  };
}

function showResult() {
  const scores = calculateScores();
  const placement = resolvePlacement(scores);
  const winnerSet = new Set([placement.primary, ...placement.alternatives]);

  if (!placement.tied) {
    els.resultHeadline.innerHTML = `<h2 class="column-name">${placement.primary}</h2>`;
    els.resultDesc.textContent = departments[placement.primary].description;
  } else {
    const alts = placement.alternatives
      .map((name) => `<span class="alt-name">${name}</span>`)
      .join("");
    els.resultHeadline.innerHTML = `
      <div class="result-split">
        <div class="split-block">
          <p class="split-label">主栏目</p>
          <h2 class="column-name">${placement.primary}</h2>
        </div>
        <div class="split-block">
          <p class="split-label">备选栏目</p>
          <div class="alts">${alts}</div>
        </div>
      </div>
    `;
    const descParts = [placement.primary, ...placement.alternatives].map((name) => {
      return `${name}：${departments[name].description}`;
    });
    els.resultDesc.textContent = descParts.join(" ");
  }

  const maxBar = Math.max(placement.maxScore, 1);
  els.scoreBars.innerHTML = "";
  COLUMN_ORDER.forEach((name) => {
    const value = scores[name];
    const row = document.createElement("div");
    row.className = "score-bar";
    if (winnerSet.has(name) && value === placement.maxScore) {
      row.classList.add("is-winner");
    }

    row.innerHTML = `
      <span class="score-name">${name}</span>
      <div class="bar">
        <div class="bar-fill" style="width: 0%"></div>
      </div>
      <span class="score-number">${value}</span>
    `;
    els.scoreBars.appendChild(row);

    requestAnimationFrame(() => {
      const fill = row.querySelector(".bar-fill");
      fill.style.width = `${(value / maxBar) * 100}%`;
    });
  });

  els.shareBtn.dataset.shareText = buildShareText(placement);
}

function buildShareText(placement) {
  if (!placement.tied) {
    return `我在「神仙湖畔杂志社栏目分院帽」测出了【${placement.primary}】！你适合哪个栏目？`;
  }
  const alts = placement.alternatives.join("、");
  return `我在「神仙湖畔杂志社栏目分院帽」测出了主栏目【${placement.primary}】，备选【${alts}】！你适合哪个栏目？`;
}

function restartQuiz() {
  state.currentQuestion = 0;
  state.answers = Array(questions.length).fill(null);
  state.screen = "home";
  els.shareToast.hidden = true;
  showScreen("home");
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    /* ignore */
  }
}

async function shareResult() {
  const text = els.shareBtn.dataset.shareText || "我完成了「神仙湖畔杂志社栏目分院帽」。";
  if (navigator.share) {
    try {
      await navigator.share({ title: "神仙湖畔杂志社栏目分院帽", text });
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  const copied = await copyText(text);
  els.shareToast.hidden = false;
  els.shareToast.textContent = copied ? "结果已复制" : "复制失败，请手动复制结果文案";
  window.setTimeout(() => {
    els.shareToast.hidden = true;
  }, 2400);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (err) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }
}

document.addEventListener("DOMContentLoaded", initializeQuiz);
