/**
 * LexiFlow - English Training & Retelling Portal Logic
 */

// ==========================================================================
// 1. DATA DEFINITIONS
// ==========================================================================

const VOCABULARY = [
    { en: "access", ua: "доступ" },
    { en: "distribute (information)", ua: "поширювати (інформацію)" },
    { en: "initiate", ua: "ініціювати, починати" },
    { en: "design", ua: "проектувати" },
    { en: "install", ua: "встановлювати" },
    { en: "diverse", ua: "різноманітний" },
    { en: "consist (of)", ua: "складатися з" },
    { en: "gradually", ua: "поступово" },
    { en: "evolve", ua: "розвиватися, еволюціонувати" },
    { en: "application", ua: "програма, додаток" },
    { en: "arbitrary design", ua: "неоднорідна структура" },
    { en: "in accordance with", ua: "відповідно до" },
    { en: "requirements", ua: "вимоги" },
    { en: "open-architecture network", ua: "мережа з відкритою архітектурою" },
    { en: "smooth communication", ua: "безперешкодне спілкування" },
    { en: "protect", ua: "захищати" },
    { en: "data interchange", ua: "обмін даними" },
    { en: "adopt", ua: "приймати" },
    { en: "support", ua: "підтримка" },
    { en: "complicated code", ua: "заплутаний, складний код" },
    { en: "multiple", ua: "багато, численний" },
    { en: "transmit", ua: "передавати" },
    { en: "available", ua: "доступний, у наявності" },
    { en: "feature", ua: "властивість, характеристика" },
    { en: "bandwidth", ua: "пропускна здатність" },
    { en: "opt (for)", ua: "робити вибір на користь, віддавати перевагу" },
    { en: "frequency", ua: "частота" },
    { en: "drawback", ua: "недолік" },
    { en: "fragile", ua: "вразливий, нестійкий" },
    { en: "prone (to)", ua: "вразливий (до)" }
];

const JOURNEYS = {
    rosemary: {
        title: "✈️ Rosemary's Journey (By Plane)",
        sentences: [
            {
                label: "Trip",
                en: "Left at four fifteen a.m. by taxi, arrived late at the airport, and faced unassigned seating.",
                ua: "Виїхала о 4:15 ранку на таксі, прибула пізно в аеропорт і зіткнулася з вільним розсаджуванням (місця не були закріплені)."
            },
            {
                label: "Flight",
                en: "Ran to the gate through a huge queue. The flight had no food, but landed ten minutes early.",
                ua: "Бігла до виходу на посадку через величезну чергу. На борту не було їжі, але літак приземлився на 10 хвилин раніше."
            },
            {
                label: "Arrival",
                en: "Waited twenty minutes for luggage, took a forty-five minute bus, and reached Avignon at eleven a.m.",
                ua: "Чекала 20 хвилин на багаж, їхала 45 хвилин на автобусі й дісталася до Авіньйона об 11:00 ранку."
            },
            {
                label: "Cost & Rating",
                en: "Ticket cost sixty-three pounds. Ratings: five out of ten for both comfort and convenience.",
                ua: "Квиток коштував 63 фунти. Оцінки: 5 з 10 як за комфорт, так і за зручність."
            }
        ],
        timeline: [
            { id: "r1", text: "Left at four fifteen a.m. by taxi" },
            { id: "r2", text: "Arrived late at airport, faced unassigned seating" },
            { id: "r3", text: "Ran through huge queue to the gate" },
            { id: "r4", text: "Flight had no food, but landed ten minutes early" },
            { id: "r5", text: "Waited twenty minutes for luggage" },
            { id: "r6", text: "Took a forty-five minute bus, reached Avignon at eleven a.m." }
        ],
        checklist: [
            { id: "rc1", phrase: "Left at four fifteen a.m. by taxi", match: ["four fifteen", "4:15", "four-fifteen", "taxi"] },
            { id: "rc2", phrase: "Late at airport, unassigned seating", match: ["late", "airport", "unassigned", "seating"] },
            { id: "rc3", phrase: "Ran through a huge queue", match: ["run", "ran", "gate", "queue", "huge queue"] },
            { id: "rc4", phrase: "No food & landed ten minutes early", match: ["no food", "ten minutes early", "10 minutes early", "landed early"] },
            { id: "rc5", phrase: "Twenty minutes luggage wait", match: ["twenty minutes", "20 minutes", "luggage", "waited"] },
            { id: "rc6", phrase: "Forty-five minute bus to Avignon", match: ["forty-five", "45", "bus", "Avignon", "eleven", "11"] },
            { id: "rc7", phrase: "Ticket cost sixty-three pounds", match: ["sixty-three", "63", "pounds", "cost"] },
            { id: "rc8", phrase: "Ratings: five out of ten", match: ["five out of ten", "5 out of 10", "comfort", "convenience"] }
        ]
    },
    charles: {
        title: "🚄 Charles's Journey (By Train)",
        sentences: [
            {
                label: "Trip",
                en: "Arrived at the station at seven ten a.m. after a thirty-minute taxi ride. Found his seat and had coffee.",
                ua: "Прибув на вокзал о 7:10 ранку після 30-хвилинної поїздки на таксі. Знайшов своє місце та випив кави."
            },
            {
                label: "Train",
                en: "Travelled smoothly at three hundred and forty kilometres an hour, spending twenty-two minutes under the Channel.",
                ua: "Їхав плавно зі швидкістю 340 кілометрів на годину, провівши 22 хвилини під Ла-Маншем."
            },
            {
                label: "Arrival",
                en: "Arrived on time at two twenty p.m. directly in the city centre, skipping luggage lines and going straight to lunch.",
                ua: "Прибув вчасно о 14:20 безпосередньо в центр міста, оминувши черги за багажем та одразу відправившись на обід."
            },
            {
                label: "Cost & Rating",
                en: "Ticket cost sixty-five pounds eighty. Ratings: eight out of ten for comfort, nine out of ten for convenience.",
                ua: "Квиток коштував 65 фунтів 80 пенсів. Оцінки: 8 з 10 за комфорт, 9 з 10 за зручність."
            }
        ],
        timeline: [
            { id: "c1", text: "Arrived at station at seven ten a.m. after taxi" },
            { id: "c2", text: "Found his seat and had coffee" },
            { id: "c3", text: "Travelled at three hundred forty kilometres an hour" },
            { id: "c4", text: "Spent twenty-two minutes under the Channel" },
            { id: "c5", text: "Arrived at two twenty p.m. in the city centre" },
            { id: "c6", text: "Skipped luggage lines, went straight to lunch" }
        ],
        checklist: [
            { id: "cc1", phrase: "Station at seven ten a.m.", match: ["seven ten", "7:10", "seven-ten", "station"] },
            { id: "cc2", phrase: "Thirty-minute taxi ride", match: ["thirty-minute", "30-minute", "taxi", "ride"] },
            { id: "cc3", phrase: "Seat & coffee", match: ["seat", "coffee"] },
            { id: "cc4", phrase: "Three hundred and forty km/h", match: ["three hundred and forty", "340", "kilometres", "kilometers", "hour"] },
            { id: "cc5", phrase: "Twenty-two minutes under the Channel", match: ["twenty-two minutes", "22 minutes", "Channel", "under"] },
            { id: "cc6", phrase: "Two twenty p.m., city centre", match: ["two twenty", "2:20", "two-twenty", "centre", "center", "city"] },
            { id: "cc7", phrase: "Skip luggage, straight to lunch", match: ["skipping luggage", "skip luggage", "luggage", "lunch", "straight"] },
            { id: "cc8", phrase: "Ticket cost 65.80 & ratings 8 & 9", match: ["sixty-five", "65", "eighty", "65.80", "eight out of ten", "nine out of ten", "8", "9"] }
        ]
    }
};

const INTERNET_QA = [
    {
        q_en: "1. What is the Internet?",
        q_ua: "1. Що таке Інтернет?",
        a_en: "The Internet is a global open-architecture network that consists of multiple computers. Today, it is available everywhere, and millions of people have access to this diverse world.",
        a_ua: "Інтернет — це глобальна мережа з відкритою архітектурою, яка складається з багатьох комп'ютерів. Сьогодні він доступний скрізь, і мільйони людей мають доступ до цього різноманітного світу.",
        cloze: [
            "The Internet is a global ", { correct: "open-architecture network" }, " that ", { correct: "consists (of)", alternatives: ["consists"] }, " multiple computers. Today, it is ", { correct: "available" }, " everywhere, and millions of people have ", { correct: "access" }, " to this ", { correct: "diverse" }, " world."
        ],
        checklist: [
            { phrase: "global open-architecture network", match: ["global", "open-architecture network", "open architecture"] },
            { phrase: "consists of multiple computers", match: ["consists", "multiple", "computers"] },
            { phrase: "available everywhere", match: ["available", "everywhere"] },
            { phrase: "access to diverse world", match: ["access", "diverse", "world"] }
        ]
    },
    {
        q_en: "2. What do you use the Internet for?",
        q_ua: "2. Для чого ви використовуєте Інтернет?",
        a_en: "In my daily life, I use different applications to work and study. They help me to transmit files and distribute information to my friends.",
        a_ua: "У своєму повсякденному житті я використовую різні додатки для роботи та навчання. Вони допомагають мені передавати файли та поширювати інформацію моїм друзям.",
        cloze: [
            "In my daily life, I use different ", { correct: "applications" }, " to work and study. They help me to ", { correct: "transmit" }, " files and ", { correct: "distribute (information)", alternatives: ["distribute"] }, " to my friends."
        ],
        checklist: [
            { phrase: "use different applications", match: ["different", "applications", "apps"] },
            { phrase: "work and study", match: ["work", "study"] },
            { phrase: "transmit files", match: ["transmit", "files"] },
            { phrase: "distribute information to friends", match: ["distribute", "information", "friends"] }
        ]
    },
    {
        q_en: "3. How has the Internet changed the world?",
        q_ua: "3. Як Інтернет змінив світ?",
        a_en: "The Internet continues to evolve gradually. It changed the world because it connects people and provides great support in education and business in accordance with our requirements.",
        a_ua: "Інтернет продовжує поступово розвиватися. Він змінив світ, тому що об'єднує людей і надає чудову підтримку в освіті та бізнесі відповідно до наших вимог.",
        cloze: [
            "The Internet continues to ", { correct: "evolve" }, " ", { correct: "gradually" }, ". It changed the world because it connects people and provides great ", { correct: "support" }, " in education and business ", { correct: "in accordance with" }, " our ", { correct: "requirements" }, "."
        ],
        checklist: [
            { phrase: "evolve gradually", match: ["evolve", "gradually"] },
            { phrase: "connects people", match: ["connects", "people"] },
            { phrase: "provides support in education & business", match: ["support", "education", "business"] },
            { phrase: "in accordance with requirements", match: ["in accordance with", "requirements"] }
        ]
    },
    {
        q_en: "4. What are the pros of the Internet?",
        q_ua: "4. Які плюси Інтернету?",
        a_en: "The main features and pros of the Internet are high bandwidth and speed. Also, modern technologies protect data interchange, so our personal information is safe.",
        a_ua: "Основними характеристиками та плюсами Інтернету є висока пропускна здатність і швидкість. Крім того, сучасні технології захищають обмін даними, тому наша особиста інформація в безпеці.",
        cloze: [
            "The main ", { correct: "features" }, " and pros of the Internet are high ", { correct: "bandwidth" }, " and speed. Also, modern technologies ", { correct: "protect" }, " ", { correct: "data interchange" }, ", so our personal information is safe."
        ],
        checklist: [
            { phrase: "high bandwidth and speed", match: ["bandwidth", "speed", "high bandwidth"] },
            { phrase: "modern technologies protect", match: ["modern", "technologies", "protect"] },
            { phrase: "data interchange", match: ["data", "interchange", "data interchange"] },
            { phrase: "personal information is safe", match: ["personal", "information", "safe"] }
        ]
    },
    {
        q_en: "5. What are the cons of the Internet?",
        q_ua: "5. Які мінуси Інтернету?",
        a_en: "However, there are some cons and drawbacks. Sometimes the network is fragile and prone to errors. Also, people can spend too much time online, which is not good for health.",
        a_ua: "Проте є деякі мінуси та недоліки. Іноді мережа є вразливою і схильною до помилок. Також люди можуть проводити занадто багато часу онлайн, що шкідливо для здоров'я.",
        cloze: [
            "However, there are some cons and ", { correct: "drawbacks" }, ". Sometimes the network is ", { correct: "fragile" }, " and ", { correct: "prone (to)", alternatives: ["prone"] }, " errors. Also, people can spend too much time online, which is not good for health."
        ],
        checklist: [
            { phrase: "cons and drawbacks", match: ["cons", "drawbacks"] },
            { phrase: "network is fragile", match: ["network", "fragile"] },
            { phrase: "prone to errors", match: ["prone", "errors", "prone to errors"] },
            { phrase: "spend too much time online", match: ["spend", "too much time", "online"] },
            { phrase: "not good for health", match: ["health", "not good"] }
        ]
    }
];

// ==========================================================================
// 2. STATE MANAGER
// ==========================================================================

const State = {
    activeTab: "dashboard-tab",
    masteredWords: new Set(JSON.parse(localStorage.getItem("lf_mastered_words") || "[]")),
    
    // Sound settings
    soundsEnabled: true,

    // Vocabulary Section State
    vocabMode: "quiz-eng-ukr",
    vocabSessionList: [], // List of words for current quiz
    vocabCurrentIndex: 0,
    fcIndex: 0,
    matchingSelected: null,
    matchingMatchesCount: 0,
    matchingTimer: null,
    matchingTimeElapsed: 0,
    
    // Journey Section State
    activeJourneyKey: "rosemary",
    activeJourneyTimeline: [], // User ordered timeline
    
    // Internet Q&A Section State
    activeQaIndex: 0,
    
    // Speech Recognition
    recognition: null,
    isRecording: false,
    activeRecordingTarget: null, // "journey" or "qa"

    // Stats
    retellScores: JSON.parse(localStorage.getItem("lf_retell_scores") || '{"rosemary": 0, "charles": 0, "qa0": 0, "qa1": 0, "qa2": 0, "qa3": 0, "qa4": 0}')
};

// Sounds Helper
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playBeep(type) {
    if (!State.soundsEnabled) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        if (type === "correct") {
            osc.frequency.setValueAtTime(600, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.15);
        } else if (type === "incorrect") {
            osc.frequency.setValueAtTime(300, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.25);
        } else if (type === "click") {
            osc.frequency.setValueAtTime(800, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.05);
        }
    } catch (e) {
        console.error("Audio beep failed", e);
    }
}

// Speak Pronunciation Helper
function speakWord(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

// Save Word Progress
function saveWordMastery(word, mastered) {
    if (mastered) {
        State.masteredWords.add(word);
    } else {
        State.masteredWords.delete(word);
    }
    localStorage.setItem("lf_mastered_words", JSON.stringify([...State.masteredWords]));
    updateGlobalStats();
    renderVocabularyReference();
}

// Save Retell Score
function saveRetellScore(key, score) {
    State.retellScores[key] = Math.max(State.retellScores[key] || 0, score);
    localStorage.setItem("lf_retell_scores", JSON.stringify(State.retellScores));
    updateGlobalStats();
}

// Helper: Shuffle Array
function shuffleArray(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// ==========================================================================
// 3. UI RENDERING & TAB HANDLERS
// ==========================================================================

function switchTab(tabId) {
    playBeep("click");
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));
    
    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add("active");
    
    const targetBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
    if (targetBtn) targetBtn.classList.add("active");

    State.activeTab = tabId;
    
    // Update Page titles
    const headings = {
        "dashboard-tab": { title: "Dashboard Overview", sub: "Track your progress and select a training module." },
        "vocab-tab": { title: "Vocabulary Trainer", sub: "Learn, quiz and match English terms from your syllabus." },
        "journey-tab": { title: "Journey Story Teller", sub: "Master travel narratives, chronological ordering, and oral retellings." },
        "internet-tab": { title: "Internet Q&A Studio", sub: "Understand and retell complex explanations of the Internet." }
    };
    
    document.getElementById("page-heading").innerText = headings[tabId].title;
    document.getElementById("page-subheading").innerText = headings[tabId].sub;

    // Trigger tab-specific initialization
    if (tabId === "vocab-tab") {
        initVocabSession();
    } else if (tabId === "journey-tab") {
        initJourneySession();
    } else if (tabId === "internet-tab") {
        initInternetSession();
    }
    updateGlobalStats();
}

function updateGlobalStats() {
    // Vocab stats
    const vocabCountEl = document.getElementById("sb-vocab-count");
    const vocabPctEl = document.getElementById("stat-vocab-pct");
    const refCountEl = document.getElementById("ref-learned-count");
    
    const learnedCount = State.masteredWords.size;
    const totalCount = VOCABULARY.length;
    const vocabPct = Math.round((learnedCount / totalCount) * 100);
    
    vocabCountEl.innerText = `${learnedCount}/${totalCount}`;
    if (refCountEl) refCountEl.innerText = learnedCount;
    vocabPctEl.innerText = `${vocabPct}%`;
    
    // Journeys stats
    const journeyProgEl = document.getElementById("stat-journey-progress");
    let journeysDone = 0;
    if (State.retellScores.rosemary >= 75) journeysDone++;
    if (State.retellScores.charles >= 75) journeysDone++;
    journeyProgEl.innerText = `${journeysDone}/2`;

    // Internet QA stats
    const qaProgEl = document.getElementById("stat-internet-progress");
    let qaDone = 0;
    for (let i = 0; i < 5; i++) {
        if (State.retellScores[`qa${i}`] >= 75) qaDone++;
    }
    qaProgEl.innerText = `${qaDone}/5`;

    // Average Retelling score
    const avgScoreEl = document.getElementById("sb-speech-score");
    const scores = Object.values(State.retellScores);
    const sum = scores.reduce((a, b) => a + b, 0);
    const avg = scores.length > 0 ? Math.round(sum / scores.length) : 0;
    avgScoreEl.innerText = `${avg}%`;

    // Update Checklist items completed states
    const checkVocab = document.getElementById("check-vocab");
    if (vocabPct === 100) checkVocab.classList.add("completed");
    else checkVocab.classList.remove("completed");

    const checkJourney = document.getElementById("check-journey");
    if (journeysDone === 2) checkJourney.classList.add("completed");
    else checkJourney.classList.remove("completed");

    const checkInternet = document.getElementById("check-internet");
    if (qaDone === 5) checkInternet.classList.add("completed");
    else checkInternet.classList.remove("completed");
}

// ==========================================================================
// 4. VOCABULARY MODULE LOGIC
// ==========================================================================

function initVocabSession() {
    // Generate a session list of 10 random words
    State.vocabSessionList = shuffleArray(VOCABULARY).slice(0, 10);
    State.vocabCurrentIndex = 0;
    State.fcIndex = 0;
    
    // Show correct sub-game container
    document.getElementById("mc-container").style.display = "none";
    document.getElementById("fc-container").style.display = "none";
    document.getElementById("match-container").style.display = "none";
    
    if (State.vocabMode.startsWith("quiz")) {
        document.getElementById("mc-container").style.display = "flex";
        renderQuizQuestion();
    } else if (State.vocabMode === "flashcards") {
        document.getElementById("fc-container").style.display = "flex";
        renderFlashcard();
    } else if (State.vocabMode === "matching") {
        document.getElementById("match-container").style.display = "flex";
        initMatchingGame();
    }
}

// 4.1 Multiple Choice Quiz Engine
function renderQuizQuestion() {
    const questionWord = State.vocabSessionList[State.vocabCurrentIndex];
    const isEngToUa = State.vocabMode === "quiz-eng-ukr";
    
    // Set progress bar
    const progressPct = ((State.vocabCurrentIndex) / State.vocabSessionList.length) * 100;
    document.getElementById("mc-progress-fill").style.width = `${progressPct}%`;
    document.getElementById("mc-counter").innerText = `Question ${State.vocabCurrentIndex + 1}/${State.vocabSessionList.length}`;
    
    // Setup Audio
    const audioBtn = document.getElementById("mc-audio-btn");
    audioBtn.onclick = (e) => {
        e.stopPropagation();
        speakWord(questionWord.en);
    };

    const questionText = document.getElementById("mc-question-word");
    questionText.innerText = isEngToUa ? questionWord.en : questionWord.ua;
    
    // Distractors
    const otherWords = VOCABULARY.filter(w => w.en !== questionWord.en);
    const distractors = shuffleArray(otherWords).slice(0, 3);
    const choices = shuffleArray([questionWord, ...distractors]);
    
    const optionsGrid = document.getElementById("mc-options");
    optionsGrid.innerHTML = "";
    
    const feedbackBanner = document.getElementById("mc-feedback");
    feedbackBanner.className = "quiz-feedback-banner";
    feedbackBanner.innerText = "";

    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "mc-option";
        btn.innerText = isEngToUa ? choice.ua : choice.en;
        
        btn.addEventListener("click", () => {
            // Check if already answered
            if (optionsGrid.querySelector(".correct") || optionsGrid.querySelector(".incorrect")) return;
            
            const isCorrect = choice.en === questionWord.en;
            if (isCorrect) {
                btn.classList.add("correct");
                playBeep("correct");
                saveWordMastery(questionWord.en, true);
                feedbackBanner.innerText = "✨ Correct! Well done.";
                feedbackBanner.classList.add("show", "correct");
            } else {
                btn.classList.add("incorrect");
                playBeep("incorrect");
                saveWordMastery(questionWord.en, false);
                feedbackBanner.innerText = "❌ Incorrect. Try again.";
                feedbackBanner.classList.add("show", "incorrect");
                
                // Highlight the correct one
                Array.from(optionsGrid.children).forEach(child => {
                    const txt = child.innerText;
                    const correctVal = isEngToUa ? questionWord.ua : questionWord.en;
                    if (txt === correctVal) {
                        child.classList.add("correct");
                    }
                });
            }
            
            // Advance after delay
            setTimeout(() => {
                State.vocabCurrentIndex++;
                if (State.vocabCurrentIndex < State.vocabSessionList.length) {
                    renderQuizQuestion();
                } else {
                    // Show finish screen or reset
                    alert("Quiz Completed! A new random list of words has been generated.");
                    initVocabSession();
                }
            }, 1800);
        });
        
        optionsGrid.appendChild(btn);
    });
}

// 4.2 Flashcards Engine
function renderFlashcard() {
    const cardWord = VOCABULARY[State.fcIndex];
    
    const cardEl = document.getElementById("flashcard-element");
    cardEl.classList.remove("flipped");
    
    document.getElementById("fc-word-front").innerText = cardWord.en;
    document.getElementById("fc-word-back").innerText = cardWord.ua;
    document.getElementById("fc-counter-label").innerText = `Card ${State.fcIndex + 1}/${VOCABULARY.length}`;
    
    document.getElementById("fc-audio-btn").onclick = (e) => {
        e.stopPropagation();
        speakWord(cardWord.en);
    };

    // Keyboard trigger
    cardEl.onclick = () => {
        cardEl.classList.toggle("flipped");
        playBeep("click");
    };
}

// 4.3 Word Matching Game
function initMatchingGame() {
    // Pick 5 random words
    const subset = shuffleArray(VOCABULARY).slice(0, 5);
    const engWords = subset.map(w => ({ id: w.en, text: w.en }));
    const ukrWords = subset.map(w => ({ id: w.en, text: w.ua }));
    
    // Shuffle columns separately
    const colEng = document.getElementById("match-cols-eng");
    const colUkr = document.getElementById("match-cols-ukr");
    
    colEng.innerHTML = "";
    colUkr.innerHTML = "";
    
    shuffleArray(engWords).forEach(item => {
        const el = document.createElement("div");
        el.className = "match-item";
        el.innerText = item.text;
        el.dataset.id = item.id;
        el.dataset.lang = "en";
        el.onclick = () => handleMatchSelect(el);
        colEng.appendChild(el);
    });
    
    shuffleArray(ukrWords).forEach(item => {
        const el = document.createElement("div");
        el.className = "match-item";
        el.innerText = item.text;
        el.dataset.id = item.id;
        el.dataset.lang = "ukr";
        el.onclick = () => handleMatchSelect(el);
        colUkr.appendChild(el);
    });
    
    State.matchingMatchesCount = 0;
    State.matchingSelected = null;
    State.matchingTimeElapsed = 0;
    
    clearInterval(State.matchingTimer);
    document.getElementById("match-timer").innerText = "Time: 0.0s";
    State.matchingTimer = setInterval(() => {
        State.matchingTimeElapsed += 0.1;
        document.getElementById("match-timer").innerText = `Time: ${State.matchingTimeElapsed.toFixed(1)}s`;
    }, 100);
}

function handleMatchSelect(el) {
    if (el.classList.contains("matched")) return;
    playBeep("click");
    
    if (!State.matchingSelected) {
        State.matchingSelected = el;
        el.classList.add("selected");
        return;
    }
    
    const prev = State.matchingSelected;
    
    // If clicking same card or same language column, switch selection
    if (prev.dataset.lang === el.dataset.lang) {
        prev.classList.remove("selected");
        State.matchingSelected = el;
        el.classList.add("selected");
        return;
    }
    
    // Check if matched
    if (prev.dataset.id === el.dataset.id) {
        prev.className = "match-item matched";
        el.className = "match-item matched";
        State.matchingSelected = null;
        State.matchingMatchesCount++;
        playBeep("correct");
        saveWordMastery(el.dataset.id, true);
        
        if (State.matchingMatchesCount === 5) {
            clearInterval(State.matchingTimer);
            setTimeout(() => {
                alert(`Perfect! You matched all words in ${State.matchingTimeElapsed.toFixed(1)} seconds.`);
                initMatchingGame();
            }, 500);
        }
    } else {
        // Shaking / Red flashing
        prev.classList.add("incorrect");
        el.classList.add("incorrect");
        playBeep("incorrect");
        
        setTimeout(() => {
            prev.classList.remove("selected", "incorrect");
            el.classList.remove("selected", "incorrect");
        }, 500);
        
        State.matchingSelected = null;
    }
}

// Render vocabulary list in the side column
function renderVocabularyReference() {
    const listEl = document.getElementById("ref-vocab-list");
    const searchEl = document.getElementById("vocab-search");
    if (!listEl || !searchEl) return;
    
    const query = searchEl.value.toLowerCase();
    
    listEl.innerHTML = "";
    
    VOCABULARY.forEach(word => {
        if (word.en.toLowerCase().includes(query) || word.ua.toLowerCase().includes(query)) {
            const li = document.createElement("li");
            const isLearned = State.masteredWords.has(word.en);
            li.className = `vocab-list-item ${isLearned ? 'learned' : ''}`;
            
            li.innerHTML = `
                <div class="li-word-en">${word.en} ${isLearned ? '✓' : ''}</div>
                <div class="li-word-ua">${word.ua}</div>
            `;
            
            li.onclick = () => {
                speakWord(word.en);
            };
            
            listEl.appendChild(li);
        }
    });
}

// ==========================================================================
// 5. JOURNEY STORY STUDY MODULE LOGIC
// ==========================================================================

function initJourneySession() {
    const journey = JOURNEYS[State.activeJourneyKey];
    
    // Set Header titles
    document.getElementById("story-title").innerText = journey.title;
    
    // Render sentences list
    const container = document.getElementById("story-sentences-list");
    container.innerHTML = "";
    
    journey.sentences.forEach(s => {
        const block = document.createElement("div");
        block.className = "sentence-block";
        
        // Check show translation state
        const showTr = document.getElementById("story-translation-toggle").checked;
        
        block.innerHTML = `
            <div class="sentence-head">
                <span class="sentence-lbl">${s.label}</span>
                <button class="sentence-speaker" title="Speak Sentence">🔊</button>
            </div>
            <div class="sentence-text-en">${s.en}</div>
            <div class="sentence-text-ua" style="display: ${showTr ? 'block' : 'none'}">${s.ua}</div>
        `;
        
        block.querySelector(".sentence-speaker").onclick = (e) => {
            e.stopPropagation();
            speakWord(s.en);
        };
        
        container.appendChild(block);
    });

    // Reset Retell studio text & state
    document.getElementById("retell-textarea").value = "";
    updateRetellScore(0);
    renderRetellChecklist();

    // Render Timeline ordering game
    initTimelineGame();
}

// Timeline sorting game
function initTimelineGame() {
    const journey = JOURNEYS[State.activeJourneyKey];
    State.activeJourneyTimeline = shuffleArray(journey.timeline);
    
    renderTimelineNodes();
    document.getElementById("timeline-feedback-label").innerText = "";
}

function renderTimelineNodes() {
    const container = document.getElementById("timeline-slots");
    container.innerHTML = "";
    
    State.activeJourneyTimeline.forEach((node, index) => {
        const el = document.createElement("div");
        el.className = "timeline-node";
        el.draggable = true;
        
        el.innerHTML = `
            <div class="timeline-node-index">${index + 1}</div>
            <div class="timeline-node-text">${node.text}</div>
            <div class="timeline-node-arrows">
                <button class="arrow-btn up-arrow">▲</button>
                <button class="arrow-btn down-arrow">▼</button>
            </div>
        `;

        // Arrow sorting logic
        el.querySelector(".up-arrow").onclick = () => swapTimelineNodes(index, index - 1);
        el.querySelector(".down-arrow").onclick = () => swapTimelineNodes(index, index + 1);

        // Drag & Drop sorting logic
        el.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", index);
            el.style.opacity = "0.5";
        });

        el.addEventListener("dragend", () => {
            el.style.opacity = "1";
        });

        el.addEventListener("dragover", (e) => e.preventDefault());

        el.addEventListener("drop", (e) => {
            const dragIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
            swapTimelineNodes(dragIdx, index);
        });

        container.appendChild(el);
    });
}

function swapTimelineNodes(from, to) {
    if (to < 0 || to >= State.activeJourneyTimeline.length) return;
    playBeep("click");
    const temp = State.activeJourneyTimeline[from];
    State.activeJourneyTimeline[from] = State.activeJourneyTimeline[to];
    State.activeJourneyTimeline[to] = temp;
    renderTimelineNodes();
}

function verifyTimelineOrder() {
    const journey = JOURNEYS[State.activeJourneyKey];
    let isCorrect = true;
    
    State.activeJourneyTimeline.forEach((node, index) => {
        if (node.id !== journey.timeline[index].id) {
            isCorrect = false;
        }
    });

    const fb = document.getElementById("timeline-feedback-label");
    if (isCorrect) {
        fb.innerText = "✨ Timeline arranged correctly!";
        fb.style.color = "var(--color-emerald)";
        playBeep("correct");
    } else {
        fb.innerText = "❌ Incorrect sequence. Try ordering again.";
        fb.style.color = "var(--color-rose)";
        playBeep("incorrect");
    }
}

// Retell Studio - Checklist renderer
function renderRetellChecklist() {
    const list = document.getElementById("fact-checklist-items");
    list.innerHTML = "";
    
    const journey = JOURNEYS[State.activeJourneyKey];
    journey.checklist.forEach(item => {
        const li = document.createElement("li");
        li.className = "fact-item";
        li.id = item.id;
        li.innerText = item.phrase;
        list.appendChild(li);
    });
}

// Retell Text evaluation algorithm (shared with QA)
function evaluateRetellCoverage(text, checklist, badgeId, listPrefix) {
    const normalizedText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ");
    let mentionedCount = 0;
    
    checklist.forEach((item, index) => {
        let isMentioned = false;
        // Check if any of the keyword alternatives matches
        const matches = item.match || item.paces || [];
        for (const m of matches) {
            if (normalizedText.includes(m.toLowerCase())) {
                isMentioned = true;
                break;
            }
        }

        const el = document.getElementById(item.id || `${listPrefix}-item-${index}`);
        if (el) {
            if (isMentioned) {
                el.classList.add("mentioned");
                mentionedCount++;
            } else {
                el.classList.remove("mentioned");
            }
        }
    });

    const pct = Math.round((mentionedCount / checklist.length) * 100);
    const badge = document.getElementById(badgeId);
    if (badge) {
        badge.innerText = `${pct}% Coverage`;
        badge.className = `badge ${pct >= 75 ? 'badge-success' : ''}`;
    }
    return pct;
}

function updateRetellScore(score) {
    const badge = document.getElementById("retell-score-badge");
    badge.innerText = `${score}% Coverage`;
    if (score >= 75) {
        badge.style.backgroundColor = "var(--color-emerald-glow)";
        badge.style.color = "#34d399";
        badge.style.borderColor = "rgba(16, 185, 129, 0.3)";
    } else {
        badge.style.backgroundColor = "var(--color-accent-glow)";
        badge.style.color = "#a5b4fc";
        badge.style.borderColor = "rgba(99, 102, 241, 0.25)";
    }
}

// ==========================================================================
// 6. INTERNET Q&A STUDY MODULE LOGIC
// ==========================================================================

function initInternetSession() {
    const qa = INTERNET_QA[State.activeQaIndex];
    
    // Set titles & question flip texts
    document.getElementById("qa-card-title").innerText = qa.q_en;
    document.getElementById("qa-disp-q-en").innerText = qa.q_en;
    document.getElementById("qa-disp-q-ua").innerText = qa.q_ua;
    document.getElementById("qa-disp-a-en").innerText = qa.a_en;
    document.getElementById("qa-disp-a-ua").innerText = qa.a_ua;
    
    const cardEl = document.getElementById("qa-flip-card-element");
    cardEl.classList.remove("flipped");

    // Cloze layout generator
    generateClozeTest(qa);

    // Q&A Retell checklists
    renderQaRetellChecklist(qa);
    document.getElementById("qa-retell-textarea").value = "";
    document.getElementById("qa-retell-score-badge").innerText = "0% Coverage";
}

function generateClozeTest(qa) {
    const container = document.getElementById("cloze-paragraph");
    container.innerHTML = "";
    
    qa.cloze.forEach((part, index) => {
        if (typeof part === "string") {
            const span = document.createElement("span");
            span.innerText = part;
            container.appendChild(span);
        } else {
            // It's a blank select option
            const select = document.createElement("select");
            select.className = "cloze-select";
            select.dataset.correct = part.correct;
            if (part.alternatives) {
                select.dataset.alternatives = JSON.stringify(part.alternatives);
            }
            
            // Add a default blank option
            const defaultOpt = document.createElement("option");
            defaultOpt.value = "";
            defaultOpt.innerText = "_______";
            select.appendChild(defaultOpt);

            // Distractors
            const correctWordClean = part.correct.replace(/\s*\(.*\)\s*/, ""); // remove (of) etc.
            const otherWords = VOCABULARY.filter(w => w.en !== correctWordClean);
            const choices = shuffleArray(otherWords).slice(0, 3).map(w => w.en);
            
            // Include correct
            choices.push(part.correct);
            
            shuffleArray(choices).forEach(choice => {
                const opt = document.createElement("option");
                opt.value = choice;
                opt.innerText = choice;
                select.appendChild(opt);
            });

            container.appendChild(select);
        }
    });

    document.getElementById("cloze-feedback-label").innerText = "";
}

function verifyClozeAnswers() {
    const selects = document.querySelectorAll(".cloze-select");
    let allCorrect = true;
    
    selects.forEach(select => {
        const val = select.value;
        const correct = select.dataset.correct;
        const alternatives = select.dataset.alternatives ? JSON.parse(select.dataset.alternatives) : [];
        
        const isMatch = val === correct || alternatives.includes(val);
        
        if (isMatch) {
            select.className = "cloze-select correct";
        } else {
            select.className = "cloze-select incorrect";
            allCorrect = false;
        }
    });

    const fb = document.getElementById("cloze-feedback-label");
    if (allCorrect) {
        fb.innerText = "✨ Perfect! All vocabulary words placed correctly.";
        fb.style.color = "var(--color-emerald)";
        playBeep("correct");
    } else {
        fb.innerText = "❌ Incorrect words. Try checking your syllabus.";
        fb.style.color = "var(--color-rose)";
        playBeep("incorrect");
    }
}

function renderQaRetellChecklist(qa) {
    const container = document.getElementById("qa-fact-checklist-items");
    container.innerHTML = "";
    
    qa.checklist.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "fact-item";
        li.id = `qa-fact-item-${index}`;
        li.innerText = item.phrase;
        container.appendChild(li);
    });
}

// ==========================================================================
// 7. SPEECH RECOGNITION INTERACTION ENGINE
// ==========================================================================

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn("Speech recognition is not supported in this browser.");
        return;
    }

    State.recognition = new SpeechRecognition();
    State.recognition.continuous = true;
    State.recognition.lang = 'en-US';
    State.recognition.interimResults = true;

    State.recognition.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript + ' ';
            }
        }
        
        if (finalTranscript) {
            const targetTextarea = State.activeRecordingTarget === "journey" 
                ? document.getElementById("retell-textarea")
                : document.getElementById("qa-retell-textarea");
                
            targetTextarea.value += finalTranscript;
            triggerEvaluation();
        }
    };

    State.recognition.onerror = (e) => {
        console.error("Speech Recognition Error", e);
        stopRecording();
    };

    State.recognition.onend = () => {
        if (State.isRecording) {
            // Keep it alive if recording was not explicitly stopped
            try { State.recognition.start(); } catch (err) {}
        }
    };
}

function startRecording(target) {
    if (!State.recognition) {
        alert("Speech Recognition API is not supported in your browser (Chrome/Edge/Safari are recommended). Please type your retelling in the box instead.");
        return;
    }
    
    audioCtx.resume();
    playBeep("click");
    
    State.isRecording = true;
    State.activeRecordingTarget = target;
    
    const recordBtn = target === "journey" ? document.getElementById("record-btn") : document.getElementById("qa-record-btn");
    const statusMsg = target === "journey" ? document.getElementById("recording-status-msg") : document.getElementById("qa-recording-status-msg");
    const recordIcon = target === "journey" ? document.getElementById("record-icon") : document.getElementById("qa-record-icon");
    const recordText = target === "journey" ? document.getElementById("record-text") : document.getElementById("qa-record-text");
    
    recordBtn.className = "btn btn-danger";
    recordIcon.innerText = "🛑";
    recordText.innerText = "Stop Recording";
    statusMsg.innerText = "Listening... Speak English details clearly.";
    statusMsg.className = "recording-status active";

    try {
        State.recognition.start();
    } catch (e) {
        console.log("Recognition start error", e);
    }
}

function stopRecording() {
    State.isRecording = false;
    
    const target = State.activeRecordingTarget;
    if (!target) return;

    const recordBtn = target === "journey" ? document.getElementById("record-btn") : document.getElementById("qa-record-btn");
    const statusMsg = target === "journey" ? document.getElementById("recording-status-msg") : document.getElementById("qa-recording-status-msg");
    const recordIcon = target === "journey" ? document.getElementById("record-icon") : document.getElementById("qa-record-icon");
    const recordText = target === "journey" ? document.getElementById("record-text") : document.getElementById("qa-record-text");
    
    recordBtn.className = "btn btn-accent";
    recordIcon.innerText = "🎤";
    recordText.innerText = "Start Recording";
    statusMsg.innerText = "Recording paused. Speak or type to refine.";
    statusMsg.className = "recording-status";

    if (State.recognition) {
        try {
            State.recognition.stop();
        } catch(e) {}
    }
    State.activeRecordingTarget = null;
    playBeep("click");
}

function triggerEvaluation() {
    if (State.activeTab === "journey-tab") {
        const text = document.getElementById("retell-textarea").value;
        const journey = JOURNEYS[State.activeJourneyKey];
        const score = evaluateRetellCoverage(text, journey.checklist, "retell-score-badge", "rc");
        saveRetellScore(State.activeJourneyKey, score);
    } else if (State.activeTab === "internet-tab") {
        const text = document.getElementById("qa-retell-textarea").value;
        const qa = INTERNET_QA[State.activeQaIndex];
        const score = evaluateRetellCoverage(text, qa.checklist, "qa-retell-score-badge", "qa-fact");
        saveRetellScore(`qa${State.activeQaIndex}`, score);
    }
}

// ==========================================================================
// 8. EVENT LISTENERS SETUP
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Tab navigations
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    document.querySelectorAll(".start-training-btn").forEach(btn => {
        btn.addEventListener("click", () => switchTab(btn.dataset.target));
    });

    // Theme/Sound toggling
    document.getElementById("sound-toggle-btn").addEventListener("click", () => {
        State.soundsEnabled = !State.soundsEnabled;
        const icon = document.getElementById("sound-icon");
        icon.innerText = State.soundsEnabled ? "🔊" : "🔇";
        if (State.soundsEnabled) {
            audioCtx.resume();
            playBeep("click");
        }
    });

    // --- Vocabulary Controls ---
    document.querySelectorAll(".mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            State.vocabMode = btn.dataset.mode;
            initVocabSession();
        });
    });

    document.getElementById("vocab-reroll-btn").addEventListener("click", () => {
        playBeep("click");
        initVocabSession();
    });

    // Search reference syllabus list
    const vocabSearchEl = document.getElementById("vocab-search");
    if (vocabSearchEl) {
        vocabSearchEl.addEventListener("input", renderVocabularyReference);
    }

    // Flashcard buttons
    document.getElementById("fc-prev-btn").addEventListener("click", () => {
        playBeep("click");
        State.fcIndex = (State.fcIndex - 1 + VOCABULARY.length) % VOCABULARY.length;
        renderFlashcard();
    });
    
    document.getElementById("fc-next-btn").addEventListener("click", () => {
        playBeep("click");
        State.fcIndex = (State.fcIndex + 1) % VOCABULARY.length;
        renderFlashcard();
    });

    document.getElementById("fc-yes-btn").addEventListener("click", () => {
        playBeep("correct");
        const word = VOCABULARY[State.fcIndex];
        saveWordMastery(word.en, true);
        State.fcIndex = (State.fcIndex + 1) % VOCABULARY.length;
        renderFlashcard();
    });

    document.getElementById("fc-no-btn").addEventListener("click", () => {
        playBeep("incorrect");
        const word = VOCABULARY[State.fcIndex];
        saveWordMastery(word.en, false);
        State.fcIndex = (State.fcIndex + 1) % VOCABULARY.length;
        renderFlashcard();
    });

    document.getElementById("match-reset-btn").addEventListener("click", () => {
        playBeep("click");
        initMatchingGame();
    });

    // --- Journey Controls ---
    document.querySelectorAll(".journey-sel-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".journey-sel-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            State.activeJourneyKey = btn.dataset.journey;
            initJourneySession();
        });
    });

    document.getElementById("story-translation-toggle").addEventListener("change", (e) => {
        const show = e.target.checked;
        document.querySelectorAll(".sentence-text-ua").forEach(el => {
            el.style.display = show ? "block" : "none";
        });
    });

    document.getElementById("timeline-check-btn").addEventListener("click", verifyTimelineOrder);

    // Recording Journey Studio
    document.getElementById("record-btn").addEventListener("click", () => {
        if (State.isRecording) {
            stopRecording();
        } else {
            startRecording("journey");
        }
    });

    // Text typing Journey Studio
    document.getElementById("retell-textarea").addEventListener("input", triggerEvaluation);

    // --- Internet Q&A Controls ---
    document.querySelectorAll(".qa-menu-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".qa-menu-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            State.activeQaIndex = parseInt(btn.dataset.qindex, 10);
            initInternetSession();
        });
    });

    document.getElementById("qa-flip-card-element").addEventListener("click", () => {
        document.getElementById("qa-flip-card-element").classList.toggle("flipped");
        playBeep("click");
    });

    document.getElementById("cloze-check-btn").addEventListener("click", verifyClozeAnswers);

    // Recording Q&A Studio
    document.getElementById("qa-record-btn").addEventListener("click", () => {
        if (State.isRecording) {
            stopRecording();
        } else {
            startRecording("qa");
        }
    });

    // Text typing Q&A Studio
    document.getElementById("qa-retell-textarea").addEventListener("input", triggerEvaluation);

    // Initialize application
    initSpeechRecognition();
    renderVocabularyReference();
    updateGlobalStats();
});
