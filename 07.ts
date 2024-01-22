type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string;
    skills: string[];
    level: Level;
}

let listDev: Developer[] = [];

function inputDev(): Developer {
    const tempLog: string | null = prompt('Enter login', '');
    if (tempLog === null) return { login: '', skills: [], level: 'middle' };

    const tempskills: string | null = prompt('Enter skills (Node.js, Phyton, C++)', '');
    if (tempskills === null) return { login: '', skills: [], level: 'middle' };

    const tempSkills: string[] = tempskills.split(', ');

    const templevel: string | null = prompt('Enter Level (junior, middle, senior)', '');
    if (templevel === null || !['junior', 'middle', 'senior'].includes(templevel)) {
        return { login: '', skills: [], level: 'middle' };
    }

    return { login: tempLog, skills: tempSkills, level: templevel as Level };
}

function Push(): void {
    const temp: Developer = inputDev();
    if (temp.login !== '') {
        listDev.push(temp);
        Print();
    }
}

function Print(): void {
    listDev.forEach((element, i) => {
        console.log(`${i}.${element.login}`, element);
    });
}

function isValidNumber(input: string | null): boolean {
    return input !== null && !isNaN(parseInt(input));
}

Push();
