import { test as teardown, expect } from "@playwright/test";
import { STORAGE_STATE } from "../../playwright.config";

teardown("logout", async ({ browser }) => {
  const context = await browser.newContext({ storageState: STORAGE_STATE });
  const page = await context.newPage();

  await page.goto("/");
  await page.getByRole("button", { name: "Personal tools" }).click();
  await page.getByRole("link", { name: "Log out" }).click();
  await expect(page.getByRole("heading", { name: "Log out" })).toBeVisible();

  await context.storageState({ path: STORAGE_STATE });

  await context.close();
});
