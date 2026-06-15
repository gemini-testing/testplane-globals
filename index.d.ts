declare global {
    const it: typeof import('testplane').it;
    const describe: typeof import('testplane').describe;
    const beforeEach: typeof import('testplane').beforeEach;
    const afterEach: typeof import('testplane').afterEach;
    const testplane: typeof import('testplane').testplane;
    const hermione: typeof import('testplane').hermione;
}

export {};
