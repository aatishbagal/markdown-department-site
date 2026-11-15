export const site = {
  institute: 'Your Institute Name',
  department: 'Department of Your Subject',
  intro: 'Course information and faculty for the Department of Your Subject at Your Institute Name.',
  about: [
    'Write a short description of the department here. You can mention when it was started, the programmes it offers and what students can expect.',
    'Add a second paragraph if you need one, or remove it. Each entry in this list becomes one paragraph on the home page.',
  ],
  facts: [
    { value: '0000', label: 'Year the department started' },
    { value: '000', label: 'Students' },
    { value: '00', label: 'Faculty members' },
  ],
  address: ['Your Institute Name', 'Street address', 'City, State, Postal code'],
  links: [
    { label: 'Department page', url: 'https://example.com/department' },
    { label: 'Institute website', url: 'https://example.com' },
  ],
  committee: {
    name: 'Student activities',
    description: 'Describe a student club or committee here, or set committee to null to hide this section.',
    label: 'Visit the club website',
    url: 'https://example.com/club',
  },
  websiteAbout: [
    'This website collects course information for the department in one place. Each course has its own page for the syllabus, practicals, schedule, staff, policies and resources, and the faculty page lists the teaching staff.',
    'Course pages are written as markdown files, so adding a course means adding a folder.',
  ],
  coursesHeading: 'Courses',
  coursesIntro: 'Course information for the current semester.',
  facultyProfileUrl: 'https://example.com/faculty/',
  logoLight: '',
  logoDark: '',
}
