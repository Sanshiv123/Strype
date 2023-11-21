// eslint-disable-next-line @typescript-eslint/no-var-requires
require("cypress-terminal-report/src/installLogsCollector")();

// Must clear all local storage between tests to reset the state:
beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/",  {onBeforeLoad: (win) => {
        win.localStorage.clear();
        win.sessionStorage.clear();
    }});
});

function withAC(inner : (acIDSel : string) => void) : void {
    // We need a delay to make sure last DOM update has occurred:
    cy.wait(200);
    cy.get("#editor").then((eds) => {
        const ed = eds.get()[0];
        inner("#" + ed.getAttribute("data-slot-focus-id") + "_AutoCompletion");
    });
}

function focusEditorAC(): void {
    // Not totally sure why this hack is necessary, I think it's to give focus into the webpage via an initial click:
    // (on the main code container frame -- would be better to retrieve it properly but the file won't compile if we use Apps.ts and/or the store)
    cy.get("#frame_id_-3").focus();
}
describe("Built-ins", () => {
    it("Has built-ins, that narrow down when you type", () => {
        focusEditorAC();
        // Must wait for Brython to fully initialise:
        cy.wait(1000);
        cy.get("body").type(" ");
        cy.wait(500);
        cy.get("body").type("{ctrl} ");
        withAC((acIDSel) => {
            cy.get(acIDSel).should("be.visible");
            cy.get(acIDSel).contains("abs");
            cy.get(acIDSel).contains("ArithmeticError");
            cy.get(acIDSel).contains("ZeroDivisionError");
            cy.get(acIDSel).contains("zip");
            // Once we type "a", should show things beginning with A but not the others:
            cy.get("body").type("a");
            cy.get(acIDSel).contains("abs");
            cy.get(acIDSel).contains("ArithmeticError");
            cy.get(acIDSel).contains("ZeroDivisionError").should("not.exist");
            cy.get(acIDSel).contains("zip").should("not.exist");
            // Once we type "b", should show things beginning with AB but not the others:
            cy.get("body").type("b");
            cy.get(acIDSel).contains("abs");
            cy.get(acIDSel).contains("ArithmeticError").should("not.exist");
            cy.get(acIDSel).contains("ZeroDivisionError").should("not.exist");
            cy.get(acIDSel).contains("zip").should("not.exist");
            // Check docs are showing:
            cy.get(acIDSel).contains("Return the absolute value of the argument.");
        });
    });
});

describe("Modules", () => {
    it("Offers auto-complete in import frames", () => {
        focusEditorAC();
        // Must wait for Brython to fully initialise:
        cy.wait(1000);
        cy.get("body").type("{uparrow}{uparrow}i");
        cy.wait(500);
        cy.get("body").type("{ctrl} ");
        withAC((acIDSel) => {
            if (Cypress.env("mode") == "microbit") {
                cy.get(acIDSel + " .popupContainer").should("be.visible");
                cy.get(acIDSel + " .popupContainer").contains("machine");
                cy.get(acIDSel + " .popupContainer").contains("microbit");
                cy.get(acIDSel + " .popupContainer").contains("random");
                cy.get(acIDSel + " .popupContainer").contains("time");
                // Once we type "m", should show things beginning with M but not the others:
                cy.get("body").type("m");
                cy.wait(500);
                cy.get(acIDSel + " .popupContainer").contains("machine");
                cy.get(acIDSel + " .popupContainer").contains("microbit");
                cy.get(acIDSel + " .popupContainer").contains("random").should("not.exist");
                cy.get(acIDSel + " .popupContainer").contains("time").should("not.exist");
                // Once we type "i", should show things beginning with MI but not the others:
                cy.get("body").type("i");
                cy.get(acIDSel + " .popupContainer").contains("machine").should("not.exist");
                cy.get(acIDSel + " .popupContainer").contains("microbit");
                cy.get(acIDSel + " .popupContainer").contains("random").should("not.exist");
                cy.get(acIDSel + " .popupContainer").contains("time").should("not.exist");
            }
            else {
                cy.get(acIDSel + " .popupContainer").should("be.visible");
                cy.get(acIDSel + " .popupContainer").contains("antigravity");
                cy.get(acIDSel + " .popupContainer").contains("array");
                cy.get(acIDSel + " .popupContainer").contains("uuid");
                cy.get(acIDSel + " .popupContainer").contains("webbrowser");
                // Once we type "a", should show things beginning with A but not the others:
                cy.get("body").type("a");
                cy.wait(500);
                cy.get(acIDSel + " .popupContainer").contains("antigravity");
                cy.get(acIDSel + " .popupContainer").contains("array");
                cy.get(acIDSel + " .popupContainer").contains("uuid").should("not.exist");
                cy.get(acIDSel + " .popupContainer").contains("webbrowser").should("not.exist");
                // Once we type "r", should show things beginning with AR but not the others:
                cy.get("body").type("r");
                cy.get(acIDSel + " .popupContainer").contains("antigravity").should("not.exist");
                cy.get(acIDSel + " .popupContainer").contains("array");
                cy.get(acIDSel + " .popupContainer").contains("uuid").should("not.exist");
                cy.get(acIDSel + " .popupContainer").contains("webbrowser").should("not.exist");
            }
        });
    });
});
