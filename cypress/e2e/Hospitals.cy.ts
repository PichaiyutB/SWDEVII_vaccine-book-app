describe("Hospitals", () => {
  it("Should fetch video and count at least 3 image", () => {
    cy.visit("/");
    cy.get("video").should("be.visible");
    cy.get("video").should("not.have.prop", "paused", true);
    cy.wait(5000);
    cy.get("button").contains("Pause").click();
    cy.get("video").should("have.prop", "paused", true);
    cy.get("button").contains("Select Hospital").click();
    //wait for loading img and change route
    cy.wait(2000);
    cy.url().should("include", "/hospital");
    cy.get("img").should("have.length.at.least", 3);
  });
});
