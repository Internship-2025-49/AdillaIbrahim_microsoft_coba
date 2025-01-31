import { test, expect } from "@playwright/test";
test("active and completed filters", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page.getByRole("textbox", { name: "What needs to be done?" }).click();
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("water the plants");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("feed the dog");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page
    .getByRole("listitem")
    .filter({ hasText: "water the plants" })
    .getByLabel("Toggle Todo")
    .check();
  await page.getByRole("link", { name: "Active" }).click();
  await page.getByRole("link", { name: "Completed" }).click();
  await page.getByText("All Active Completed").click();
  await page.getByRole("link", { name: "All" }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "water the plants" })
    .getByLabel("Toggle Todo")
    .uncheck();
});
