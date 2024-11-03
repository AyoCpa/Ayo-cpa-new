export interface NuggetType {
    name: string;
    _id: string;
}

export interface BlogType {
    _id: string;
    category: NuggetType;
    title: string;
    tags: NuggetType[];
    isFeatured: boolean;
    content: string;
    slug: string;
    author: string;
    image: string;
    createdAt: string;
    keywords: string;
    description: string;
}

export interface BlogTypeEntry {
    _id: string;
    category: string;
    title: string;
    tags: string[];
    isFeatured: boolean;
    content: string;
    slug: string;
    author: string;
    image: string;
    createdAt: string;
    keywords: string;
    description: string;
}

