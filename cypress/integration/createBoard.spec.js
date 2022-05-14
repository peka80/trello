import navigation from "../pages/navigation.json";
import registerModal from "../pages/registerPage.json";
import loginModal from "../pages/loginModal.json";
import myBoards from "../pages/myBoardsPage.json";
import boardsPage from "../pages/boardListPage.json";
import taskModal from "../pages/taskModal.json";

describe("Create board", () => {
  it("register new user", () => {
    cy.visit("");
    cy.get(navigation.loginBtn, { timeout: 30000 }).click();
    cy.get(loginModal.signUpAnchor).click();
    cy.get(registerModal.emailInput).type("peka@mailinator.com");
    cy.get(registerModal.passInput).type("peka1234");
    cy.get(registerModal.signUpBtn).eq(1).click();
    cy.get(navigation.profileBtn).should("be.visible").click();
    cy.get(navigation.logoutBtn).click();
  });

  it("login created user", () => {
    cy.visit("");
    cy.get(navigation.loginBtn).click();
    cy.get(loginModal.emailInput).clear().type("peka@mailinator.com");
    cy.get(loginModal.passInput).clear().type("peka1234");
    cy.get(loginModal.logInBtn).eq(0).click();
  });

  it("create board", () => {
    cy.wait(4000);
    cy.get(myBoards.newBoardDiv).click();
    cy.get(myBoards.boardNameInput).clear().type("cypress test board");
    cy.get(myBoards.saveBtn).click();
  });

  it("create List", () => {
    cy.get(boardsPage.createListDiv).click();
    cy.get(boardsPage.nameListInput).clear().type("cypress list");
    cy.get(boardsPage.saveListBtn).click();
  });

  it("create task", () => {
    cy.get(boardsPage.createTaskH5).click();
    cy.get(boardsPage.taskTitleTextarea).clear().type("cypress task");
    cy.get(boardsPage.addTaskBtn).click();
  });

  it("delete task", () => {
    cy.get(boardsPage.taskDiv).click();
    cy.get(taskModal.taskOptionSvg).click();
    cy.get(taskModal.deleteTaskSpan).click();
  });

  it("delete list", () => {
    cy.get(boardsPage.listOptionsDiv).click();
    cy.get(boardsPage.deleteListSpan).click();
  });

  it("delete board", () => {
    cy.get(boardsPage.boardOptionsDiv).click();
    cy.get(boardsPage.deleteBoardSpan).click();
  });

  it("logout", () => {
    cy.get(navigation.profileBtn).click();
    cy.get(navigation.logoutBtn).click();
  });
});
