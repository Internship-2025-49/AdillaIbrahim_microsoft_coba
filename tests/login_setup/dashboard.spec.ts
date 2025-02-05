import { test, expect } from "@playwright/test";
import { STORAGE_STATE } from "../../playwright.config";

test.use({ storageState: STORAGE_STATE });

test("should show search", async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Main_Page");
  await expect(
    page.getByRole("button", { name: "Personal tools" })
  ).toBeVisible();
  await page.getByRole("searchbox", { name: "Search Wikipedia" }).click();
});
