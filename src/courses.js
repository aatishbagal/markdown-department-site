import fm from 'front-matter'

const files = import.meta.glob('../content/courses/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const byId = {}

Object.entries(files).forEach(([path, raw]) => {
  const parts = path.split('/')
  const id = parts[3]
  const name = parts[4].replace('.md', '')
  const { attributes, body } = fm(raw)

  if (!byId[id]) {
    byId[id] = { id, sections: [] }
  }

  if (name === 'index') {
    byId[id].info = attributes
  }

  byId[id].sections.push({
    id: name,
    title: name === 'index' ? 'Overview' : attributes.title,
    order: name === 'index' ? 0 : attributes.order,
    body,
  })
})

export const courses = Object.values(byId)
  .map((course) => ({
    ...course.info,
    id: course.id,
    sections: course.sections.sort((a, b) => a.order - b.order),
  }))
  .sort((a, b) => a.order - b.order)
