# Guide: Adding Your Department Data

This guide explains how to replace the placeholder content with your own. You only need to edit text files. No component code has to change.

## Where things live

| What | File or folder |
| --- | --- |
| Department name, institute name, home page text, address, links, logo paths | `src/site.js` |
| Faculty list | `src/faculty.js` |
| Courses | `content/courses` |
| Logos | `public` |
| Colours | `src/index.css`, at the top of the file |
| Browser tab title | `index.html` |

## 1. Set up the project

```
npm install
npm run dev
```

Keep the development server running. The page refreshes when you save a file.

## 2. Edit the department details

Open `src/site.js`. Each field is described below.

| Field | What it does |
| --- | --- |
| `institute` | Institute name, shown under the department name in the header |
| `department` | Department name, shown in the header and as the home page heading |
| `intro` | One line under the home page heading |
| `about` | List of paragraphs for the About the department section |
| `facts` | List of value and label pairs shown as numbers. Use an empty list to hide them |
| `address` | List of address lines. Use an empty list together with empty links to hide the Location section |
| `links` | List of label and url pairs shown in the Location section |
| `committee` | A student club or committee section with name, description, label and url. Set it to `null` to hide the section |
| `websiteAbout` | List of paragraphs for the About this website section |
| `coursesHeading` | Heading of the courses page |
| `coursesIntro` | Text under the courses heading, for example the programme and semester |
| `facultyProfileUrl` | Start of the profile address for each faculty member. Leave it empty to show names without links |
| `logoLight` and `logoDark` | Logo file names inside `public`. Leave both empty for no logo |

Example of a facts list with one entry:

```
facts: [{ value: '1995', label: 'Year the department started' }],
```

Also change the `title` in `index.html`, which is the text shown on the browser tab.

## 3. Add a logo

1. Put your logo in the `public` folder, for example `public/logo.png`.
2. In `src/site.js` set `logoLight: 'logo.png'` and `logoDark: 'logo.png'`. Do not put a slash at the start of the name.
3. If your logo is dark and hard to see on the dark theme, add a second version with light colours, for example `public/logo-dark.png`, and set `logoDark: 'logo-dark.png'`.

The light logo is used in the light theme and the dark logo in the dark theme. If you set only one of them, it is used for both themes. A logo height of about 100 pixels or more gives a sharp result.

## 4. Edit the faculty list

Open `src/faculty.js`. Each person is one line.

```
{ id: '1', name: 'Dr. First Professor', designation: 'Professor' },
```

| Field | Meaning |
| --- | --- |
| `id` | A unique value for each person. It is added to the end of `facultyProfileUrl` to make the profile link |
| `name` | The name shown on the page |
| `designation` | The group heading. People with the same designation are grouped together |

Groups appear in the order in which a designation first appears in the list, so put the senior designations first. The page adds an s to the end of the designation for the heading, so write it in the singular, for example `Professor`.

If your institute has no public profile pages, set `facultyProfileUrl` to an empty text and the names will be shown without links.

## 5. Add a course

Every folder inside `content/courses` becomes one course. The folder name is the course identifier, so use lower case words joined with hyphens, for example `data-structures`.

The easiest way to add a course is to copy an existing folder and edit the files.

### The overview file

`index.md` holds the details of the course at the top between two lines of three hyphens, then the overview text.

```
---
title: Data Structures
code: CS201
credits: 4
semester: III
category: Core
summary: Arrays, lists, trees and graphs with practical implementation.
order: 1
---

# Data Structures

Overview text goes here.
```

| Field | Meaning |
| --- | --- |
| `title` | Course name, shown on the card and in the sidebar |
| `code` | Course code, shown on the card and used by search |
| `credits` | A number, shown on the card as credits |
| `semester` | Semester label, for your own use in tables |
| `category` | A short label shown as a tag on the card, such as Core or Elective |
| `summary` | One or two sentences shown on the card |
| `order` | A number. Courses are listed from the lowest to the highest |

Write each field on one line. If a value contains a colon, put the whole value in double quotes.

### The section files

Every other markdown file in the folder is a section of the course page. It needs only a `title` and an `order` at the top.

```
---
title: Syllabus
order: 1
---

# Syllabus

Content goes here.
```

The `title` is the name in the sidebar and the `order` decides the position, from lowest to highest. The overview from `index.md` is always first.

The template uses these section files: `syllabus.md`, `practicals.md`, `schedule.md`, `staff.md`, `policies.md` and `resources.md`.

### Add or remove a section

- To add a section, create a new markdown file in the course folder, for example `projects.md`, with a `title` and an `order`. It appears in the sidebar by itself.
- To remove a section, delete its file.
- To rename a section, change its `title`.
- Different courses can have different sections. A course does not need all of them.

### Remove a course

Delete its folder.

## 6. Writing the content

Content is written in markdown. The most useful parts are shown below.

| To get | Write |
| --- | --- |
| A heading | `## Heading` |
| A bold word | `**word**` |
| A bullet list | A line starting with `- ` |
| A numbered list | A line starting with `1. ` |
| A link | `[text](https://example.com)` |
| A table | See the example below |

A table has a header line, a line of three hyphens per column, and one line per row, with the columns separated by vertical bars:

```
| Week | Topic |
| --- | --- |
| 1 | Introduction |
| 2 | Arrays |
```

Start each section file with a single `#` heading so all sections look alike, and use `##` for headings inside it.

## 7. Change the colours

At the top of `src/index.css` there are two sets of colour variables, one for the light theme and one for the dark theme. Change the accent colour to match your institute. Keep enough contrast between the text and the background so the pages stay readable.

## 8. Build and publish

```
npm run build
```

Upload the contents of the `dist` folder to your static host. For GitHub Pages, publish the `dist` folder with a deployment action or a `gh-pages` branch.

## Common problems

| Problem | Cause and fix |
| --- | --- |
| A course does not appear | The folder is not directly inside `content/courses`, or `index.md` is missing |
| A section does not appear | The file has no `title` and `order` at the top |
| The page is blank after a change | There is a mistake in the front matter. Check that the three hyphen lines are present and each field is on one line |
| The logo is missing | The file name in `src/site.js` does not match the file in `public`, or it starts with a slash |
| The theme or last page seems stuck | The browser has saved values. Clear the site data for the page in the browser |
