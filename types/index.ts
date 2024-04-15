interface NuggetType {
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
}