type ProjectsType = {
  projectLink: string
  projectTitle: string
  projectPics: [
    {
      url: string
      width: number
      height: number
    },
  ]
}

export const fetchProjects = async () => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API || ''

  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query ProjectsQuery {
        portfolioProjects {
            projectLink
            projectTitle
            projectPics {
              url
              width
              height
            }
          }
        }`,
      next: { revalidate: 60 },
    }),
  })
  const projects = await response.json()
  const portfolioProjects: ProjectsType[] = projects.data.portfolioProjects
  return portfolioProjects
}
