type project = {
    title: string;
    description: string;
    repo?: string;
    demo?: string;
    image?: string;
    tags?: string[]
    featured: boolean
}

export const PROJECTS: project[] = [
    {
        title: "StyleSync(Fashion Discovery App)",
        description: "Discover your personal style through quick, side-by-side choices while staying inspired by what's trending in the community.",
        demo: "https://main.d6wp2xgt6t4gv.amplifyapp.com/",
        image: "/images/StyleSync.png",
        tags: ["Typescript", "React", "TailwindCSS", "AWS Lambda", "AWS DynamoDB", "AWS Amplify"],
        featured: true
    },
    {
        title: "Portfolio Page",
        description: "My personal portfolio website",
        tags: ["Typescript", "NextJS", "TailwindCSS", "Shadcn", "Vercel"],
        featured: false
    },
    {
        title: "Golf Swing Analyzer",
        description: "Coming soon. Tech stack is tentative",
        tags: ["Typescript", "NextJS", "TailwindCSS", "Shadcn", "PrismaORM", "MySQL", "Python", "OpenCV", "PyTorch"],
        featured: false
    }
]