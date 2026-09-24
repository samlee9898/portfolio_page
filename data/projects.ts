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
        title: "Golf Swing Analyzer",
        description: "Upload your golf swing video, get personalized feedback",
        demo: "https://theswinganalyzer.com/",
        tags: ["TypeSript", "React", "TailwindCSS", "shadcn", "MySQL", "Nginx", "AWS EC2", "AWS S3", "AWS Route 53", "Gemini API"],
        image: "/images/Swing_Analyzer.png",
        featured: true
    },
    {
        title: "Portfolio Page",
        description: "My personal portfolio website",
        tags: ["TypeScript", "NextJS", "TailwindCSS", "shadcn", "Vercel", "OpenAI API"],
        demo: "https://portfolio-page-lovat-six.vercel.app/",
        image: "/images/Portfolio.png",
        featured: false
    },
    {
        title: "StyleSync(Fashion Discovery App)",
        description: "Discover your personal style through quick, side-by-side choices while staying inspired by what's trending in the community.",
        demo: "https://main.d6wp2xgt6t4gv.amplifyapp.com/",
        image: "/images/StyleSync.png",
        tags: ["TypeScript", "React", "TailwindCSS", "AWS Lambda", "AWS DynamoDB", "AWS Amplify"],
        featured: true
    }
]