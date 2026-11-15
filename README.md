# Markdown Department Site

A simple website template for a university department. It has a home page about the department, a searchable course section where every course is written in markdown, and a faculty directory. It runs in the browser only, so it needs no server or database and can be hosted on any static host.

All text in this template is placeholder text. Replace it with the details of your own department using the guide in GUIDE.md.

## Features

- Home page with department description, key facts, location and links, a student club section and an about section
- Course list with search and bookmarks
- One page per course with a sidebar of sections: overview, syllabus, practicals, schedule, staff, policies and resources
- Courses written as markdown files, so adding a course means adding a folder
- Faculty page grouped by designation with search
- Light and dark themes, light by default
- The browser remembers the theme, bookmarks, the last course and section viewed, and the current page on refresh
- Optional logo, optional home page sections, and a layout that works on phones

## Quick start

You need Node.js 18 or newer.

```
npm install
npm run dev
```

Open the address shown in the terminal. To make a production build:

```
npm run build
npm run preview
```

The build is written to the `dist` folder.

## Folder structure

```
content/courses/        one folder per course, each with markdown files
public/                 static files such as logos
src/site.js             department name, home page text, address, links, logo paths
src/faculty.js          the faculty list
src/components/         React components
src/index.css           styles and the colour variables for both themes
```

## Customising

Everything that belongs to one department lives in four places: `src/site.js`, `src/faculty.js`, `content/courses` and `public`. The components and styles do not need to change for a new department. Step by step instructions are in GUIDE.md.

## Deploying

The site is static and uses relative paths, so the contents of the `dist` folder can be uploaded to GitHub Pages, Netlify, Vercel, Cloudflare Pages or any web server, including inside a sub folder.

## Technology

- React 19 for the interface
- Vite for development and building
- react-markdown and remark-gfm to turn markdown into React elements
- front-matter to read the details at the top of each markdown file
- lucide-react for icons
- Plain CSS with variables for the light and dark themes

## Limits

- Content is static, so a change needs a rebuild and a new deployment
- There is no login, so course pages are public
- There is no router, so pages do not have their own web addresses
- Bookmarks and settings are stored in one browser on one device

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for the full text.
