import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Quentin',
    lastName:  'Coudeyre',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Paris',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/qcoudeyr',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/quentincoudeyre/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:qcoudeyr@pm.me',
    },
]

const home = {
    label: 'Home',
    title: `My Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Sofware developer and linux enjoyer</>,
    subline: <>I'm Quentin, a Junior sofware developer from <InlineCode>42 School</InlineCode>.<br/>I'm a fervent <InlineCode>Linux</InlineCode> user,<br/>a <InlineCode>FOSS</InlineCode> supporter and,<br/>a convinced <InlineCode>self-hoster</InlineCode>.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a self-hosted and FOSS enthusiast with a passion for DevOps and system administration. Currently studying at 42 School, I've completed the common core and specialize in DevOps and sysadmin. I aim to become an active member of the community soon.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'French Foreign Legion Reserve',
                timeframe: '2019 - 2024',
                role: 'Reservist',
                achievements: [
                    <>Developed discipline and teamwork skills while serving as a reservist.</>
                ],
                images: []
            },
            {
                company: 'Freelance Project',
                timeframe: '2023',
                role: 'System Administrator',
                achievements: [
                    <>Deployed a Linux infrastructure with fail2ban, WAF, and a self-hosted Nextcloud suite for a professional client.</>,
                    <>Configured network settings for external accessibility and security.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: '42 School',
                description: <>Completed the common core with a focus on DevOps and system administration.</>,
            },
            {
                name: 'University of Montpellier',
                description: <>Studied electronics and embedded systems with STM32 and Arduino.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical skills',
        skills: [
            {
                title: 'DevOps & SysAdmin',
                description: <>Experienced with Ubuntu Server, virtualization (VMware ESXi, Proxmox), and monitoring tools like ELK Stack, Prometheus, and Grafana.</>,
                images: []
            },
            {
                title: 'Programming Languages',
                description: <>Proficient in C and C++. Familiar with Python, including libraries like Selenium and Pandas.</>,
                images: []
            },
            {
                title: 'Full Stack Development',
                description: <>Learning full-stack development using Django, React, and Next.js.</>,
                images: []
            },
            {
                title: 'Security & Networking',
                description: <>Installed Hashicorp Vault in Docker, Nginx with ModSecurity WAF, and configured network monitoring with Cisco ISA 550W.</>,
                images: []
            },
            {
                title: 'Personal Projects',
                description: <>Built a dashboard for a rally car using Raspberry Pi and custom Android applications.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Usefull Blog',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
