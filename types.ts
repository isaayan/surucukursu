export interface NavLink {
    name: string;
    href: string;
}

export interface ServiceItem {
    id: string;
    icon: string; // Material symbol name
    title: string;
    description: string;
    colorClass: string;
    iconBgClass: string;
}

export interface LicenseClassItem {
    id: string;
    title: string;
    shortDescription: string; // For cards
    image: string;
    badge: string;
    badgeColorClass: string; // Tailwind class string for badge style
    badgeTextClass: string;
    // New Detailed Content Fields
    seoTitle: string;
    seoDescription: string;
    fullDescription: string;
    requirements: string[];
    educationProcess: string;
    keywords: string[];
}

export interface FAQItemData {
    question: string;
    answer: string;
}

export interface StatItemData {
    value: string;
    label: string;
}

export interface BlogPostData {
    id: string;
    title: string;
    description: string; // Short excerpt
    image: string;
    category: string;
    categoryColorClass: string;
    date: string; // Display string (e.g. "Sürüş Teknikleri")
    // Full Content Fields
    slug: string;
    author: string;
    content: string; // HTML string
    tags: string[];
}