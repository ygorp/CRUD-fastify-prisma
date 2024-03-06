export interface User {
    id: string;
    name: string;
    email: string;
}

export interface UserCreate {
    name: string;
    email: string;
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>;
}