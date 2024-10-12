let year = 0;
let offspringCount = 0;
let familyTreeData = "graph TD\n  女帝[女帝]";
let children = [];
let characters = [];

const races = [
    { name: "鸟族", bloodline: "风之翼", ancestorBloodline: "神风之羽" },
    { name: "人族", bloodline: "王者之心", ancestorBloodline: "远古君王" },
    { name: "精灵族", bloodline: "自然之灵", ancestorBloodline: "古树之魂" },
    { name: "龙族", bloodline: "龙焰之怒", ancestorBloodline: "混沌之焰" },
    { name: "兽族", bloodline: "荒野之力", ancestorBloodline: "洪荒之魄" },
    { name: "海族", bloodline: "潮汐之子", ancestorBloodline: "深海之王" },
    { name: "影族", bloodline: "夜幕之影", ancestorBloodline: "黑暗君王" }
];

const events = [
    { text: "送来珍贵礼物。", effect: 10 },
    { text: "参加庆典，共度美好时光。", effect: 15 },
    { text: "公开批评女帝的决定。", effect: -20 },
    { text: "拒绝了联盟提议。", effect: -10 },
    { text: "请求与女帝进行试炼。", effect: 5 },
    { text: "在战斗中支持了女帝。", effect: 20 },
    { text: "暗中协助敌人，对女帝构成威胁。", effect: -30 },
    { text: "提出婚姻联盟，增加信任。", effect: 25 },
    { text: "在宫廷中散播谣言。", effect: -15 }
];

function nextYear() {
    year++;
    document.getElementById("year").textContent = year;
    generateRandomEvent();
    generateTargets();
    updateResumes();
    removeOldCharacters();
    renderChildren();
}

function generateTargets() {
    const targetsContainer = document.getElementById("targets");
    targetsContainer.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        const target = generateTarget();
        const button = document.createElement("button");
        button.textContent = `攻略 ${target.name} (${target.race}) - 好感度：${target.affection}`;
        button.onclick = () => mate(target);
        targetsContainer.appendChild(button);
    }
}

function generateTarget() {
    const race = races[Math.floor(Math.random() * races.length)];
    const name = generateName();
    const event = events[Math.floor(Math.random() * events.length)];
    const affection = event.effect;
    const character = {
        name,
        race: race.name,
        bloodline: race.bloodline,
        birthYear: year,
        interactions: [],
        affection,
        resume: `种族：${race.name}，血脉：${race.bloodline}，事件：${event.text}`
    };
    characters.push(character);
    return character;
}

function generateName() {
    const names = ["艾尔", "卡洛", "莉雅", "维恩", "泽洛", "塔尔", "菲娜"];
    return names[Math.floor(Math.random() * names.length)];
}

function mate(target) {
    offspringCount++;
    document.getElementById("offspring").textContent = offspringCount;
    const child = { name: `子女${offspringCount}`, ...target };
    children.push(child);
    target.interactions.push(year);
    target.affection += 10;
    updateFamilyTree(child);
    renderChildren();
    updateResumes();
}

function generateRandomEvent() {
    const event = events[Math.floor(Math.random() * events.length)];
    document.getElementById("eventLog").textContent = `第 ${year} 年：${event.text}`;
    if (characters.length > 0) {
        const target = characters[Math.floor(Math.random() * characters.length)];
        target.affection += event.effect;
    }
    updateResumes();
}

function updateFamilyTree(child) {
    familyTreeData += `\n  ${child.name}[${child.name} (${child.race})] --> 女帝`;
    renderFamilyTree();
}

function renderFamilyTree() {
    mermaid.render("familyTreeGraph", familyTreeData, (svgCode) => {
        document.getElementById("familyTree").innerHTML = svgCode;
    });
}

function renderChildren() {
    const childrenList = document.getElementById("childrenList");
    childrenList.innerHTML = "";

    children.forEach((child) => {
        const div = document.createElement("div");
        div.textContent = `${child.name} (${child.race}) - 血脉：${child.bloodline}`;
        childrenList.appendChild(div);
    });
}

function updateResumes() {
    const resumesContainer = document.getElementById("resumes");
    resumesContainer.innerHTML = "";

    characters.forEach((character) => {
        const div = document.createElement("div");
        div.textContent = `${character.name} - ${character.resume} - 好感度：${character.affection}`;
        resumesContainer.appendChild(div);
    });
}

function removeOldCharacters() {
    characters = characters.filter(character => {
        const lastInteraction = character.interactions.slice(-1)[0] || character.birthYear;
        return year - lastInteraction <= 20;
    });
}

nextYear();
renderFamilyTree();
