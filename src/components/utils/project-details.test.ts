import { describe, it, expect } from 'vitest'
import projects from './project-details'

describe('project-details', () => {
  it('should export a non-empty projects array', () => {
    expect(projects).toBeDefined()
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it('should have exactly 2 projects', () => {
    expect(projects.length).toBe(2)
  })

  it('each project should have required fields', () => {
    projects.forEach((project) => {
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('tagline')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('tech')
      expect(project).toHaveProperty('impact')
    })
  })

  it('all required fields should be non-empty strings', () => {
    projects.forEach((project) => {
      expect(typeof project.title).toBe('string')
      expect(project.title.length).toBeGreaterThan(0)
      expect(typeof project.tagline).toBe('string')
      expect(project.tagline.length).toBeGreaterThan(0)
      expect(typeof project.description).toBe('string')
      expect(project.description.length).toBeGreaterThan(0)
      expect(typeof project.impact).toBe('string')
      expect(project.impact.length).toBeGreaterThan(0)
    })
  })

  it('tech arrays should be non-empty and contain strings', () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.tech)).toBe(true)
      expect(project.tech.length).toBeGreaterThan(0)
      project.tech.forEach((tech) => {
        expect(typeof tech).toBe('string')
        expect(tech.length).toBeGreaterThan(0)
      })
    })
  })

  it('github URLs should be valid when present', () => {
    projects.forEach((project) => {
      if (project.github) {
        expect(typeof project.github).toBe('string')
        expect(project.github).toMatch(/^https?:\/\/.+/)
      }
    })
  })

  it('live URLs should be valid when present', () => {
    projects.forEach((project) => {
      if (project.live) {
        expect(typeof project.live).toBe('string')
        expect(project.live).toMatch(/^https?:\/\/.+/)
      }
    })
  })

  it('details arrays should be non-empty when present', () => {
    projects.forEach((project) => {
      if (project.details) {
        expect(Array.isArray(project.details)).toBe(true)
        expect(project.details.length).toBeGreaterThan(0)
        project.details.forEach((detail) => {
          expect(typeof detail).toBe('string')
          expect(detail.length).toBeGreaterThan(0)
        })
      }
    })
  })

  it('first project should be "Auto Upgrade PR Bot"', () => {
    expect(projects[0].title).toBe('Auto Upgrade PR Bot')
  })

  it('first project should have expected tech stack', () => {
    const expectedTech = ['GitHub Actions', 'Node', 'Go', 'Python', 'CI/CD']
    expect(projects[0].tech).toEqual(expectedTech)
  })
})
