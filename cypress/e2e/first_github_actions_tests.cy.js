describe("Cypress GitHub Actions Demo", { tags: "@smoke" }, () => {
  beforeEach(() => {
    cy.visit("https://tredgate.com/pmtool");
  });
  it("Open PMtool and fill username", { tags: "@e2e" }, () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });

  it("Login Header Check", () => {
    cy.get("h3.form-title").should("be.visible");
  });

  it("Login Button check", () => {
    cy.get(".btn").should("be.visible");
  });
});
