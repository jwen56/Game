// 玄幻种族及其血脉与能力
const races = [
    { 
        name: "龙族", 
        bloodline: "苍炎龙息", 
        abilities: [
            { min: 0, max: 30, description: "只能吐出微弱火星，几乎没有杀伤力。" },
            { min: 30, max: 60, description: "能吐出短暂的龙焰，在近距离造成灼伤。" },
            { min: 60, max: 80, description: "掌握高温龙焰屏障，能抵挡并焚烧攻击。" },
            { min: 80, max: 90, description: "龙焰灵活如臂使，能灼烧大面积目标。" },
            { min: 90, max: 100, description: "化身苍焰之王，焚尽万物，无物可挡。" }
        ],
        appearances: [
            { min: 0, max: 30, description: "瞳孔微红，指尖偶现淡淡的鳞光。" },
            { min: 30, max: 60, description: "瞳孔如赤焰，皮肤泛出银鳞光泽。" },
            { min: 60, max: 80, description: "额头浮现小龙角，指尖冒出微焰。" },
            { min: 80, max: 90, description: "全身缠绕龙焰，眼神如烈焰般跳动。" },
            { min: 90, max: 100, description: "成为苍焰化身，炽红龙角高耸，全身如火焰般燃烧。" }
        ]
    },
    { 
        name: "凤族", 
        bloodline: "赤羽涅槃", 
        abilities: [
            { min: 0, max: 30, description: "火焰只能愈合小伤口，且持续时间短。" },
            { min: 30, max: 60, description: "能通过火焰短暂恢复身体状态。" },
            { min: 60, max: 80, description: "掌握火焰重生，能在重伤时恢复活力。" },
            { min: 80, max: 90, description: "操控火羽进行攻击，并在死亡时复生。" },
            { min: 90, max: 100, description: "不灭火焰随身环绕，涅槃后力量更为强大。" }
        ],
        appearances: [
            { min: 0, max: 30, description: "眼中偶现微光，皮肤上有火羽的纹理。" },
            { min: 30, max: 60, description: "双目如金日，身体散发温暖的光辉。" },
            { min: 60, max: 80, description: "火羽飘舞，气息如炽热烈焰。" },
            { min: 80, max: 90, description: "全身缠绕火焰，眼神如烈日灼人。" },
            { min: 90, max: 100, description: "如涅槃火神，身体与火焰一体，死亡也无法停止他的步伐。" }
        ]
    },
    { 
        name: "夜族", 
        bloodline: "幽冥幻影", 
        abilities: [
            { min: 0, max: 30, description: "只能在黑暗中短暂隐匿，但容易被察觉。" },
            { min: 30, max: 60, description: "掌握影遁，能自由穿梭于阴影之间。" },
            { min: 60, max: 80, description: "操控影子进行攻击，同时可完全隐形。" },
            { min: 80, max: 90, description: "能将黑暗实体化，用影子束缚敌人。" },
            { min: 90, max: 100, description: "成为暗影之主，掌控影界，无人能察觉其存在。" }
        ],
        appearances: [
            { min: 0, max: 30, description: "皮肤略带淡紫色，眼眸深邃但普通。" },
            { min: 30, max: 60, description: "双目漆黑无光，身体在阴影中若隐若现。" },
            { min: 60, max: 80, description: "皮肤如夜幕，能够融入黑暗，眼中泛冷光。" },
            { min: 80, max: 90, description: "身体如影子般模糊，双眼散发出邪魅之光。" },
            { min: 90, max: 100, description: "完全虚无，与影子融为一体，如幽冥幻影般无法触碰。" }
        ]
    },
    { 
        name: "海族", 
        bloodline: "潮汐之主", 
        abilities: [
            { min: 0, max: 30, description: "只能操控微弱水流，影响极小。" },
            { min: 30, max: 60, description: "能召唤小潮汐，进行基础水流攻击。" },
            { min: 60, max: 80, description: "可召唤海浪和海洋生物协助作战。" },
            { min: 80, max: 90, description: "操控深海力量，能引发大规模海啸。" },
            { min: 90, max: 100, description: "成为海洋主宰，召唤海怪并操控潮汐摧毁一切。" }
        ],
        appearances: [
            { min: 0, max: 30, description: "发丝微带湿润，皮肤泛蓝。" },
            { min: 30, max: 60, description: "头发如水草漂浮，眼中泛起微波。" },
            { min: 60, max: 80, description: "全身散发海洋气息，皮肤如同深海般湛蓝。" },
            { min: 80, max: 90, description: "身体似水流动，眼眸如海潮翻涌。" },
            { min: 90, max: 100, description: "如同海洋化身，周身环绕潮汐之力。" }
        ]
    },
    { 
        name: "精灵族", 
        bloodline: "自然之魂", 
        abilities: [
            { min: 0, max: 30, description: "只能控制少量植物，影响范围极小。" },
            { min: 30, max: 60, description: "能与植物共鸣，加速其生长。" },
            { min: 60, max: 80, description: "可召唤森林生物协助战斗，并操控大片植物。" },
            { min: 80, max: 90, description: "能将森林变为自己的武器，与自然融为一体。" },
            { min: 90, max: 100, description: "成为自然之主，创造并摧毁任何自然生物。" }
        ],
        appearances: [
            { min: 0, max: 30, description: "耳尖微长，皮肤上有淡淡的叶脉纹理。" },
            { min: 30, max: 60, description: "身体散发出植物的香气，眼中如碧波荡漾。" },
            { min: 60, max: 80, description: "皮肤浮现树叶纹路，举手投足之间植物随动。" },
            { min: 80, max: 90, description: "全身与森林一体，眼神如同自然之灵。" },
            { min: 90, max: 100, description: "掌控整个森林，成为自然之主，万物皆听命于他。" }
        ]
    }
];


// 性格库
const personalities = ["勇敢", "温柔", "聪慧", "执着", "冷静", "热情"];

// 姓名库
const maleGivenNames = ["辰风", "凌霄", "天渊", "羽天", "星澜", "烨炫"];
const femaleGivenNames = ["瑶光", "月曦", "灵珑", "雪影", "璇玑", "锦瑟"];
const familyNames = ["东方", "西门", "南宫", "北冥", "云", "叶", "墨"];

// 子女数组和状态变量
let children = [];
let pregnancy = null;
let year = 0;
let offspringCount = 0;
let empressFamilyName = "";
let empressGivenName = "";
let eraName = "";

// 设置女帝信息
function setEmpressInfo() {
    empressFamilyName = document.getElementById("empressFamilyName").value.trim();
    empressGivenName = document.getElementById("empressGivenName").value.trim();
    eraName = document.getElementById("eraName").value.trim();

    if (empressFamilyName && empressGivenName && eraName) {
        document.getElementById("empressDisplay").textContent = `${empressFamilyName}${empressGivenName}`;
        document.getElementById("eraDisplay").textContent = eraName;
        document.getElementById("nameForm").style.display = "none";
        document.getElementById("empressInfo").style.display = "block";
        initializeGame();
    } else {
        alert("请完整输入女帝的姓、名和年号！");
    }
}

// 初始化游戏
function initializeGame() {
    generateTargets(); // 生成攻略对象
    renderChildren();  // 渲染子女列表
    updatePregnancyStatus(); // 更新怀孕状态
}

// 推进年份
function nextYear() {
    year++;
    document.getElementById("year").textContent = year;

    children.forEach(child => child.age++); // 子女年龄增加

    if (pregnancy && pregnancy.dueYear === year) {
        giveBirth(pregnancy); // 孩子出生
        pregnancy = null; // 重置怀孕状态
        updatePregnancyStatus(); // 更新怀孕状态
    }

    generateTargets(); // 每年生成新攻略对象
    renderChildren(); // 更新子女列表
}

// 生成年度攻略对象
function generateTargets() {
    const targetsContainer = document.getElementById("targets");
    targetsContainer.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        const target = generateCharacter();
        const button = document.createElement("button");
        button.textContent = `攻略 ${target.name} (${target.race.name})`;
        button.onclick = () => attemptPregnancy(target);
        targetsContainer.appendChild(button);
    }
}

// 生成玄幻人物
function generateCharacter() {
    const familyName = familyNames[Math.floor(Math.random() * familyNames.length)];
    const givenName = maleGivenNames[Math.floor(Math.random() * maleGivenNames.length)];
    const race = races[Math.floor(Math.random() * races.length)];

    return {
        name: `${familyName}${givenName}`,
        race,
        bloodline: race.bloodline,
        ability: race.ability,
        appearance: race.appearance
    };
}

// 尝试怀孕
function attemptPregnancy(target) {
    if (pregnancy) {
        alert("当前已有怀孕状态，请等待孩子出生后再尝试！");
        return;
    }

    const success = Math.random() < 0.7; // 70% 怀孕成功率
    if (success) {
        const isTwins = Math.random() < 0.1; // 10% 双胞胎概率
        pregnancy = { target, dueYear: year + 1, isTwins }; // 孩子一年后出生
        updatePregnancyStatus();

        let message;
        if (isTwins) {
            // 双胞胎吉兆描述
            message = `
                女帝怀上了双胞胎！
                这是一种罕见的天兆，被认为是灵族血脉的完全激发。
                据传，当双胞胎降生时，
                天地之间会产生共鸣，星辰的轨迹将因他们改变，
                命运的洪流将向他们倾斜，新的时代或将因他们开启。`;
        } else {
            message = `成功怀孕！孩子将在第 ${year + 1} 年出生。`;
        }
        alert(message);
    } else {
        alert("生育尝试失败，请来年再试。");
    }
}


// 根据血脉浓度获取外貌与能力
function getAppearanceAndAbility(race, concentration) {
    const appearance = race.appearances.find(a => concentration >= a.min && concentration <= a.max).description;
    const ability = race.abilities.find(a => concentration >= a.min && concentration <= a.max).description;
    return { appearance, ability };
}


// 孩子出生逻辑
function giveBirth(pregnancy) {
    const childrenToCreate = pregnancy.isTwins ? 2 : 1; // 判断是否双胞胎
    let firstChildConcentration = null; // 存储第一个孩子的血脉浓度

    for (let i = 0; i < childrenToCreate; i++) {
        let concentration;

        if (i === 0 || !firstChildConcentration) {
            // 双胞胎第一个孩子或单生孩子的正常浓度计算
            concentration = pregnancy.isTwins ? calculateHighPotentialConcentration() : calculateBloodlineConcentration();
            firstChildConcentration = concentration; // 记录第一个孩子的浓度
        } else {
            // 双胞胎第二个孩子的特殊逻辑
            if (firstChildConcentration > 95 && Math.random() < 0.5) {
                concentration = 5; // 50% 概率只有 5% 的血脉浓度
            } else {
                concentration = calculateBloodlineConcentration(); // 正常浓度计算
            }
        }

        const { appearance, ability } = getAppearanceAndAbility(pregnancy.target.race, concentration);
        const gender = Math.random() < 0.5 ? "男" : "女"; // 随机生成性别

        // 创建子女对象
        const child = {
            name: generateChildName(gender),
            gender,
            race: pregnancy.target.race.name,
            bloodline: pregnancy.target.bloodline,
            ability,
            appearance,
            bloodlineConcentration: concentration,
            personality: personalities[Math.floor(Math.random() * personalities.length)],
            age: 0,
            parents: [`${empressFamilyName}${empressGivenName}`, pregnancy.target.name]
        };

        children.push(child); // 添加子女到数组中
    }

    renderChildren(); // 更新子女列表
}

// 双胞胎有更高概率获取 90% 以上血脉浓度的计算函数
function calculateHighPotentialConcentration() {
    const random = Math.random(); // 生成 0-1 的随机数

    if (random < 0.05) {
        return Math.floor(Math.random() * 11) + 90; // 5% 概率 90-100%
    } else if (random < 0.2) {
        return Math.floor(Math.random() * 11) + 80; // 15% 概率 80-90%
    } else {
        return Math.floor(Math.random() * 21) + 60; // 60-80%（最常见）
    }
}


// 生成子女姓名
function generateChildName(gender) {
    const namePool = gender === "男" ? maleGivenNames : femaleGivenNames;
    const givenName = namePool[Math.floor(Math.random() * namePool.length)];
    return `${empressFamilyName}${givenName}`; // 姓氏随母亲
}

// 计算血脉浓度
function calculateBloodlineConcentration() {
    const random = Math.random(); // 生成 0-1 的随机数

    if (random < 0.1) {
        return Math.floor(Math.random() * 31); // 0-30%
    } else if (random < 0.3) {
        return Math.floor(Math.random() * 31) + 30; // 30-60%
    } else if (random < 0.7) {
        return Math.floor(Math.random() * 21) + 60; // 60-80%（最常见）
    } else if (random < 0.9) {
        return Math.floor(Math.random() * 11) + 80; // 80-90%
    } else {
        return Math.floor(Math.random() * 11) + 90; // 90-100%（极其稀有）
    }
}


// 更新怀孕状态显示
function updatePregnancyStatus() {
    const status = pregnancy
        ? `怀孕中，预产期：第 ${pregnancy.dueYear} 年${pregnancy.isTwins ? "（双胞胎）" : ""}`
        : "无";
    document.getElementById("pregnancyStatus").textContent = status;
}


// 渲染子女列表
function renderChildren() {
    const childrenList = document.getElementById("childrenList");
    childrenList.innerHTML = "";

    children.forEach(child => {
        const { location } = getLocationAndStatus(child); // 获取地点

        const div = document.createElement("div");
        div.textContent = `${child.name} (${child.race} - ${child.age}岁 - ${location})`;
        div.onclick = () => showChildDetails(child); // 点击后展示详细信息
        childrenList.appendChild(div);
    });
}


// 当前孩子的 亲兄弟姐妹 和 异父兄弟姐妹
function getSiblings(child) {
    const sameParents = []; // 存储亲兄弟姐妹（同父同母）
    const halfSiblings = []; // 存储异父兄弟姐妹（同母异父）

    children.forEach(sibling => {
        if (sibling === child) return; // 跳过自己

        if (sibling.parents[0] === child.parents[0]) { // 判断是否同母
            if (sibling.parents[1] === child.parents[1]) {
                sameParents.push(sibling.name); // 亲兄弟姐妹
            } else {
                halfSiblings.push(sibling.name); // 异父兄弟姐妹
            }
        }
    });

    // 生成兄弟姐妹信息字符串
    let siblingInfo = "";
    if (sameParents.length > 0) {
        siblingInfo += `<p>亲兄弟姐妹：${sameParents.join("，")}</p>`;
    }
    if (halfSiblings.length > 0) {
        siblingInfo += `<p>异父兄弟姐妹：${halfSiblings.join("，")}</p>`;
    }
    if (siblingInfo === "") {
        siblingInfo = "<p>暂无兄弟姐妹。</p>";
    }

    return siblingInfo;
}

// 根据孩子年龄获取地点和状态的函数
function getLocationAndStatus(child) {
    const age = child.age;
    let location, status, activity;

    if (age <= 6) {
        location = "皇宫";
        const activities = [
            `与同龄贵族（如 ${generateRandomNPC()} 的长子或侄子）玩耍`,
            "与神兽幼崽玩耍",
            "学习灵族礼仪",
            "在皇宫花园中追逐神奇的元素精灵"
        ];
        activity = getRandomActivity(activities);
        status = `
            <strong>童年阶段：</strong><br>
            这是孩子最无忧无虑的时期，他们在皇宫中成长，享受着天真烂漫的童年。<br>
            <strong>活动：</strong>${activity}<br>
            <strong>家庭生活：</strong>他们的父亲可能是高阶魔法师、王族成员，或种族族长，是未来希望的象征。
        `;
    } else if (age <= 18) {
        location = "万灵书院";
        const activities = [
            "参与禁地探险",
            "参加种族竞争",
            "参加魔法大比拼",
            "准备每年一次的跨大陆比赛"
        ];
        activity = getRandomActivity(activities);
        status = `
            <strong>学习与探索阶段：</strong><br>
            在万灵书院，孩子们学习魔法、武技、炼金术和召唤术。<br>
            <strong>活动：</strong>${activity}<br>
            <strong>学科：</strong>空间法术、时间法术、符文和炼金术。
        `;
    } else if (age <= 27) {
        const places = ["九幽深渊", "星辰秘地", "昆吾山脉", "浮空岛", "幻月海"];
        location = places[Math.floor(Math.random() * places.length)];
        const activities = [
            "成为探险者，寻找上古秘宝",
            "作为百晓生，收集家族和大陆的信息",
            "作为符文师，为遗迹铭刻符文",
            "作为吟游诗人，传颂英雄的故事"
        ];
        activity = getRandomActivity(activities);
        status = `
            <strong>冒险与成长阶段：</strong><br>
            他们离开了书院，踏上自己的冒险之旅。<br>
            <strong>活动：</strong>${activity}<br>
            <strong>关键事件：</strong>可能在昆吾山脉与巨龙签订灵魂契约，或在幻月海中迷失数月，却意外获得神秘力量。
        `;
    } else {
        const options = [
            { location: "灵风谷", status: "成家立业，与同龄人结为伴侣，共享平凡生活。" },
            { location: "落霞城", status: "经营一家小店，过着平凡的生活。" },
            { location: "万灵书院", status: "成为导师，传授冒险经验，并带领学生探索禁地。" },
            { location: "未知之地", status: "继续游历世界，寻找未知的力量。" },
            { location: "无尽虚空", status: "不知所踪，传说他们进入了次元中开始新的冒险。" }
        ];
        const chosenOption = options[Math.floor(Math.random() * options.length)];
        location = chosenOption.location;
        status = chosenOption.status;
    }

    return { location, status };
}

// 随机选择一个活动
function getRandomActivity(activities) {
    return activities[Math.floor(Math.random() * activities.length)];
}

// 随机生成 NPC 名字
function generateRandomNPC() {
    const familyNames = ["萧", "林", "慕容", "东方", "叶"];
    const givenNames = ["霖", "辰", "雪", "瑶", "星"];
    const family = familyNames[Math.floor(Math.random() * familyNames.length)];
    const given = givenNames[Math.floor(Math.random() * givenNames.length)];
    return `${family}${given}`;
}



// 随机生成 NPC 名字，用于描述与贵族玩耍或结婚状态
function generateRandomNPC() {
    const familyNames = ["萧", "林", "慕容", "东方", "叶"];
    const givenNames = ["霖", "辰", "雪", "瑶", "星"];
    const family = familyNames[Math.floor(Math.random() * familyNames.length)];
    const given = givenNames[Math.floor(Math.random() * givenNames.length)];
    return `${family}${given}`;
}



// 展示子女详情
function showChildDetails(child) {
    const siblings = getSiblings(child); // 获取兄弟姐妹信息
    const { location, status } = getLocationAndStatus(child); // 获取地点和状态

    const detailsContent = `
        <h3>${child.name}</h3>
        <p><strong>性别：</strong>${child.gender}</p>
        <p><strong>年龄：</strong>${child.age}岁</p>
        <p><strong>种族：</strong>${child.race}</p>
        <p><strong>血脉：</strong>${child.bloodline} (${child.bloodlineConcentration}%)</p>
        <p><strong>性格：</strong>${child.personality}</p>
        <p><strong>地点：</strong>${location}</p>
        <p><strong>能力：</strong>${child.ability}</p>
        <p><strong>外貌：</strong>${child.appearance}</p>
        <p><strong>状态：</strong><br>${status}</p>
        <p><strong>父亲：</strong>${child.parents[1]}</p>
        <h4>兄弟姐妹：</h4>
        ${siblings}
    `;
    document.getElementById("detailsContent").innerHTML = detailsContent;
    document.getElementById("detailsModal").classList.remove("hidden");
}


// 关闭详情弹窗
function closeModal() {
    document.getElementById("detailsModal").classList.add("hidden");
}
