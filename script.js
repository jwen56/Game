let year = 0;
let offspringCount = 0;
let familyTreeData = "graph TD\n  女帝[女帝]";
let children = [];
let characters = [];
let pregnancy = null; // 记录怀孕状态

const races = [
    { name: "鸟族", bloodline: "风之翼" },
    { name: "人族", bloodline: "王者之心" },
    { name: "精灵族", bloodline: "自然之灵" },
    { name: "龙族", bloodline: "龙焰之怒" },
    { name: "兽族", bloodline: "荒野之力" },
    { name: "海族", bloodline: "潮汐之子" },
    { name: "影族", bloodline: "夜幕之影" }
];

function nextYear() {
    year++;
    document.getElementById("year").textContent = year;

    if (pregnancy && pregnancy.dueYear === year) {
        giveBirth(pregnancy);
        pregnancy = null;
        updatePregnancyStatus();
    }

    generateTargets();
    renderChildren();
}

function generateTargets() {
    const targetsContainer = document.getElementById("targets");
    targetsContainer.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        const target = generateCharacter();
        const button = document.createElement("button");
        button.textContent = `攻略 ${target.name} (${target.race})`;
        button.onclick = () => attemptPregnancy(target);
        targetsContainer.appendChild(button);
    }
}

function generateCharacter() {
    const race = races[Math.floor(Math.random() * races.length)];
    const name = `角色${Math.floor(Math.random() * 100)}`;
    return { name, race: race.name, bloodline: race.bloodline };
}

function attemptPregnancy(target) {
    if (pregnancy) {
        alert("当前已有怀孕状态，请等待孩子出生后再尝试！");
        return;
    }

    const success = Math.random() < 0.7; // 70% 成功率
    if (success) {
        pregnancy = { target, dueYear: year + 1 };
        updatePregnancyStatus();
        alert(`成功怀孕！孩子将在第 ${year + 1} 年出生。`);
    } else {
        alert("生育尝试失败，请来年再试。");
    }
}

function giveBirth(pregnancy) {
    offspringCount++;
    document.getElementById("offspring").textContent = offspringCount;

    const child = {
        name: `子女${offspringCount}`,
        race: pregnancy.target.race,
        bloodline: pregnancy.target.bloodline,
        parents: ["女帝", pregnancy.target.name]
    };

    children.push(child);
    updateFamilyTree(child);
    renderChildren();
}

function updatePregnancyStatus() {
    const status = pregnancy ? `怀孕中，预产期：第 ${pregnancy.dueYear} 年` : "无";
    document.getElementById("pregnancyStatus").textContent = status;
}

function updateFamilyTree(child) {
    familyTreeData += `\n  ${child.name}[${child.name} (${child.race})] --> 女帝`;
    familyTreeData += `\n  ${child.name} --> ${pregnancy.target.name}`;
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
        div.textContent = `${child.name} (${child.race})`;
        div.onclick = () => showDetails(child);
        childrenList.appendChild(div);
    });
}

function showDetails(character) {
    const detailsContent = document.getElementById("detailsContent");
    detailsContent.innerHTML = `
        <h3>${character.name}</h3>
        <p>种族：${character.race}</p>
        <p>血脉：${character.bloodline}</p>
        <p>父母：${character.parents.join(" 和 ")}</p>
    `;
    document.getElementById("detailsModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("detailsModal").classList.add("hidden");
}

nextYear();
