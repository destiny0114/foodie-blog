import { Post } from "@models/Post";

export const sortByDate = (a: Post, b: Post) => new Date(b.formatter.date).getTime() - new Date(a.formatter.date).getTime();

export const slugify = (text: string) => text.replace(/\s+/g, "-").toLowerCase();

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
