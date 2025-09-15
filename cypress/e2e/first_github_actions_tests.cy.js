describe("Cypress GitHub Actions Demo", () => {
  it("Open PMtool and fill username", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });
});
