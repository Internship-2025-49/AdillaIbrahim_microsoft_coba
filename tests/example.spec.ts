import { test, expect } from "@playwright/test";
test.describe("New Todo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  test("active and completed filters", async ({ page }) => {
    const todoInput = page.getByPlaceholder("What needs to be done?");
    await todoInput.fill("water the plants");
    await todoInput.press("Enter");
    await todoInput.fill("feed the dog");
    await todoInput.press("Enter");
    await page
      .locator("li")
      .filter({ hasText: "water the plants" })
      .getByLabel("Toggle Todo")
      .check();
    await page.getByRole("link", { name: "Active" }).click();
    await expect(page.getByTestId("todo-title")).toContainText("feed the dog");
    await page.getByRole("link", { name: "Completed" }).click();
    await expect(page.getByTestId("todo-title")).toContainText(
      "water the plants"
    );
  });

  test("text field is cleared when item is added", async ({ page }) => {
    const todoInput = page.getByPlaceholder("What needs to be done?");
    await todoInput.fill("water the plants");
    await todoInput.press("Enter");
    await expect(page.getByPlaceholder("What needs to be done?")).toBeEmpty();
  });
});

// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
