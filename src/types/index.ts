export interface GitProfile {
    id: string;
    name: string;
    email: string;
    githubUsername: string;
    token?: string;
    isDefault?: boolean;
}

export interface GeneratorState {
    repoUrl: string;
    token: string;
    username: string;
    email: string;
}
