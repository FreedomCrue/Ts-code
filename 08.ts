type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string;
    skills: string[];
    level: Level;
}

let listDev: Developer[] = [];

function getDevelopers(): Developer[] {
    return listDev;
}

function addDeveloper(dev: Developer): void {
    listDev.push(dev);
}

function inputDev(): Developer | null {
    const tempLog: string | null = prompt('Enter login', '');
    if (tempLog === null) return null;

    const tempskills: string | null = prompt('Enter skills (Node.js, Phyton, C++)', '');
    if (tempskills === null) return null;

    const tempSkills: string[] = tempskills.split(', ');

    const templevel: string | null = prompt('Enter Level (junior, middle, senior)', '');
    if (templevel === null || !['junior', 'middle', 'senior'].includes(templevel)) {
        return null;
    }

    return { login: tempLog, skills: tempSkills, level: templevel as Level };
}

function addDeveloperPrompt(): void {
    const temp: Developer | null = inputDev();
    if (temp !== null) {
        addDeveloper(temp);
        printDevelopers();
    }
}

function printDevelopers(): void {
    const developers = getDevelopers();
    developers.forEach((element, i) => {
        console.log(`${i}.${element.login}`, element);
    });
}

addDeveloperPrompt();