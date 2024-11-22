// Modify the Resource interface to include a key property
export interface Resource {
  key: number; // Add this line
  name: string;
  description: string;
  url: string;
  creator: string;
  website?: string;
  github?: string;
  category: string[];
  rating: number;
}

export const resources: Resource[] = [
  {
    key: 1, // Add unique key
    name: "Docker",
    description: "Containerization platform for modern applications",
    url: "https://www.docker.com",
    creator: "Docker Inc.",
    website: "https://www.docker.com",
    github: "https://github.com/docker",
    category: ["DEVOPS", "CONTAINERS"],
    rating: 5
  },
  {
    key: 2, // Add unique key
    name: "Visual Studio Code",
    description: "Popular open-source code editor",
    url: "https://code.visualstudio.com",
    creator: "Microsoft",
    website: "https://code.visualstudio.com",
    github: "https://github.com/microsoft/vscode",
    category: ["DEVELOPMENT", "TOOLS"],
    rating: 5
  },
  {
    key: 3,
    name: "Next.js",
    description: "React framework for production-grade applications",
    url: "https://nextjs.org",
    creator: "Vercel",
    website: "https://nextjs.org",
    github: "https://github.com/vercel/next.js",
    category: ["FRAMEWORK", "REACT"],
    rating: 5
  },
  {
    key: 4,
    name: "TailwindCSS",
    description: "Utility-first CSS framework",
    url: "https://tailwindcss.com",
    creator: "Tailwind Labs",
    website: "https://tailwindcss.com",
    github: "https://github.com/tailwindlabs/tailwindcss",
    category: ["CSS", "FRAMEWORK"],
    rating: 5
  },
  {
    key: 5,
    name: "PostgreSQL",
    description: "Advanced open-source database",
    url: "https://www.postgresql.org",
    creator: "PostgreSQL Global Development Group",
    website: "https://www.postgresql.org",
    github: "https://github.com/postgres/postgres",
    category: ["DATABASE", "BACKEND"],
    rating: 5
  },
  {
    key: 6,
    name: "TypeScript",
    description: "JavaScript with syntax for types",
    url: "https://www.typescriptlang.org",
    creator: "Microsoft",
    website: "https://www.typescriptlang.org",
    github: "https://github.com/microsoft/TypeScript",
    category: ["LANGUAGE", "JAVASCRIPT"],
    rating: 5
  },
  {
    key: 7,
    name: "React",
    description: "JavaScript library for building user interfaces",
    url: "https://reactjs.org",
    creator: "Facebook",
    website: "https://reactjs.org",
    github: "https://github.com/facebook/react",
    category: ["FRONTEND", "JAVASCRIPT"],
    rating: 5
  },
  {
    key: 8,
    name: "Git",
    description: "Distributed version control system",
    url: "https://git-scm.com",
    creator: "Linus Torvalds",
    website: "https://git-scm.com",
    github: "https://github.com/git/git",
    category: ["TOOLS", "VERSION-CONTROL"],
    rating: 5
  },
  {
    key: 9,
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine",
    url: "https://nodejs.org",
    creator: "Node.js Foundation",
    website: "https://nodejs.org",
    github: "https://github.com/nodejs/node",
    category: ["RUNTIME", "JAVASCRIPT"],
    rating: 5
  },
  {
    key: 10,
    name: "MongoDB",
    description: "Document-oriented NoSQL database",
    url: "https://www.mongodb.com",
    creator: "MongoDB Inc.",
    website: "https://www.mongodb.com",
    github: "https://github.com/mongodb/mongo",
    category: ["DATABASE", "NOSQL"],
    rating: 4
  },
  {
    key: 11,
    name: "Python",
    description: "High-level programming language",
    url: "https://www.python.org",
    creator: "Python Software Foundation",
    website: "https://www.python.org",
    github: "https://github.com/python/cpython",
    category: ["LANGUAGE", "BACKEND"],
    rating: 5
  },
  {
    key: 12,
    name: "Kubernetes",
    description: "Container orchestration platform",
    url: "https://kubernetes.io",
    creator: "Google",
    website: "https://kubernetes.io",
    github: "https://github.com/kubernetes/kubernetes",
    category: ["DEVOPS", "CONTAINERS"],
    rating: 5
  },
  {
    key: 13,
    name: "Redis",
    description: "In-memory data structure store",
    url: "https://redis.io",
    creator: "Redis Labs",
    website: "https://redis.io",
    github: "https://github.com/redis/redis",
    category: ["DATABASE", "CACHE"],
    rating: 4
  },
  {
    key: 14,
    name: "Jenkins",
    description: "Open-source automation server",
    url: "https://www.jenkins.io",
    creator: "Jenkins Community",
    website: "https://www.jenkins.io",
    github: "https://github.com/jenkinsci/jenkins",
    category: ["DEVOPS", "CI-CD"],
    rating: 4
  },
  {
    key: 15,
    name: "Vue.js",
    description: "Progressive JavaScript framework",
    url: "https://vuejs.org",
    creator: "Evan You",
    website: "https://vuejs.org",
    github: "https://github.com/vuejs/vue",
    category: ["FRONTEND", "JAVASCRIPT"],
    rating: 4
  },
  {
    key: 16,
    name: "GraphQL",
    description: "Query language for APIs",
    url: "https://graphql.org",
    creator: "Facebook",
    website: "https://graphql.org",
    github: "https://github.com/graphql/graphql-spec",
    category: ["API", "BACKEND"],
    rating: 4
  },
  {
    key: 17,
    name: "AWS",
    description: "Cloud computing platform",
    url: "https://aws.amazon.com",
    creator: "Amazon",
    website: "https://aws.amazon.com",
    github: "https://github.com/aws",
    category: ["CLOUD", "DEVOPS"],
    rating: 5
  },
  {
    key: 18,
    name: "Rust",
    description: "Systems programming language",
    url: "https://www.rust-lang.org",
    creator: "Mozilla",
    website: "https://www.rust-lang.org",
    github: "https://github.com/rust-lang/rust",
    category: ["LANGUAGE", "SYSTEMS"],
    rating: 5
  },
  {
    key: 19,
    name: "Elasticsearch",
    description: "Distributed search and analytics engine",
    url: "https://www.elastic.co",
    creator: "Elastic",
    website: "https://www.elastic.co",
    github: "https://github.com/elastic/elasticsearch",
    category: ["SEARCH", "DATABASE"],
    rating: 4
  },
  {
    key: 20,
    name: "Flutter",
    description: "UI toolkit for mobile applications",
    url: "https://flutter.dev",
    creator: "Google",
    website: "https://flutter.dev",
    github: "https://github.com/flutter/flutter",
    category: ["MOBILE", "FRAMEWORK"],
    rating: 4
  }
];
