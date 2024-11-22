import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {

    const person = {
        firstName: 'Quentin',
        lastName:  'Coudeyre',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Europe/Paris',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'French']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: false,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
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
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.label"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
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
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: t("about.work.experiences.1.company"),
                    timeframe: t("about.work.experiences.1.timeframe"),
                    role: t("about.work.experiences.1.role"),
                    achievements: t("about.work.experiences.1.achievements").split(";"),
                    images: [ ]
                },
                {
                    company: t("about.work.experiences.2.company"),
                    timeframe: t("about.work.experiences.2.timeframe"),
                    role: t("about.work.experiences.2.role"),
                    achievements: t("about.work.experiences.2.achievements").split(";"),
                    images: [ ]
                }
            ]
        },
        studies: {
            display: true, // set to false to hide this section
            title: t("about.studies.title"),
            institutions: [
                {
                    name: t("about.studies.institutions.1.name"),
                    description: <>{t("about.studies.institutions.1.description")}</>,
                },
                {
                    name: t("about.studies.institutions.2.name"),
                    description: <>{t("about.studies.institutions.2.description")}</>,
                }
            ]
        },
        technical: {
            display: true,
            title: t("about.technical.title"),
            skills: [
                {
                    title: t("about.technical.skills.1.title"),
                    description: t("about.technical.skills.1.description"),
                    images: []
                },
                {
                    title: t("about.technical.skills.2.title"),
                    description: t("about.technical.skills.2.description"),
                    images: []
                },
                {
                    title: t("about.technical.skills.3.title"),
                    description: t("about.technical.skills.3.description"),
                    images: []
                },
                {
                    title: t("about.technical.skills.4.title"),
                    description: t("about.technical.skills.4.description"),
                    images: []
                },
                {
                    title: t("about.technical.skills.5.title"),
                    description: t("about.technical.skills.5.description"),
                    images: []
                }
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
        images: []
    }

    const resources = {
        label: t("resources.label"),
        title: t("resources.title"),
        description: t("resources.description", {name: person.name}),
        images: []
    }

    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery,
		resources,
    }
};

export { createI18nContent };
