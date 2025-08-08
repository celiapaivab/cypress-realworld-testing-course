describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.get('[data-test="hero-heading"]').contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are corret", () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })
  })

  context("Coursers section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-1").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
