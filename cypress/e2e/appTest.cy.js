describe("Uygulama Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Tema değişince dark/light mod uygulanmalı ve bildirim çıkmalı", () => {
    cy.get('[data-testid="theme-btn"]').click();
    cy.get("html").should("have.class", "dark");
    cy.get(".Toastify__toast").should("be.visible").and("contain.text", "Mod");
  });

  it("Dil değişince bildirim çıkmalı", () => {
    cy.get('[data-testid="lang-btn"]').click();
    cy.get(".Toastify__toast").should("be.visible");
  });

  it("Skills linkine tıklandığında sayfa #skills bölümüne scroll yapıyor", () => {
    cy.get('a[href="#skills"]').click();
    cy.get("#skills").scrollIntoView().should("be.visible");
  });

  it("Email linki mail içermeli ve görünmeli", () => {
    cy.get("a")
      .contains("@")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "mailto:");
  });
});
