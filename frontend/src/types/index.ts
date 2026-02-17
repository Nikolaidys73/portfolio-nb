export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    tags: string[];
}

export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}
