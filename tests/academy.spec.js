const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test("loads the learning dashboard", async ({ page }) => {
  await expect(page).toHaveTitle("MarketCraft Academy");
  await expect(page.getByRole("heading", { name: /Build your market instinct/ })).toBeVisible();
  await expect(page.locator("#desk-grid .desk-card")).toHaveCount(7);
  await expect(page.locator('[data-desk="fx-foundations"]')).toContainText("READY");
  await expect(page.locator('[data-desk="fx-cash"]')).toContainText("LOCKED");
});

test("completes a lesson and awards progress", async ({ page }) => {
  await page.locator("#continue-button").click();
  const lesson = page.locator("#lesson-modal").getByRole("dialog");
  await expect(lesson).toBeVisible();
  await expect(lesson.getByRole("heading", { name: /Every FX price is a pair/ })).toBeVisible();

  for (let pageNumber = 0; pageNumber < 3; pageNumber += 1) {
    await lesson.getByRole("button", { name: /Continue/ }).click();
  }

  await expect(lesson.getByText("KNOWLEDGE CHECK", { exact: false })).toBeVisible();
  await lesson.getByRole("button", { name: /EUR 1 costs USD 1.10/ }).click();
  await expect(lesson.locator("#feedback")).toContainText("Correct");
  await lesson.getByRole("button", { name: /Complete/ }).click();

  await expect(page.locator("#xp-count")).toHaveText("100");
  await expect(page.locator("#goal-count")).toHaveText("1/3");
  await expect(page.locator("#continue-title")).toContainText("How an FX Spot Trade Works");

  const progress = await page.evaluate(() => JSON.parse(localStorage.getItem("marketcraft-progress")));
  expect(progress).toMatchObject({
    xp: 100,
    completed: ["fx-foundations"],
    completedLessons: ["fx-foundations"],
    quizAttempts: 1,
    quizCorrect: 1,
    daily: 1
  });
});

test("restores saved progress after a reload", async ({ page }) => {
  await page.evaluate(() => {
    localStorage.setItem("marketcraft-progress", JSON.stringify({
      xp: 275,
      completed: ["fx-foundations"],
      completedLessons: ["fx-foundations"],
      cfaCompleted: [],
      quizAttempts: 3,
      quizCorrect: 2,
      daily: 2
    }));
  });
  await page.reload();

  await expect(page.locator("#xp-count")).toHaveText("275");
  await expect(page.locator("#profile-level")).toHaveText("2");
  await expect(page.locator("#goal-count")).toHaveText("2/3");
  await expect(page.locator('[data-desk="fx-cash"]')).toContainText("READY");

  await page.locator('[data-view="progress"]').click();
  await expect(page.locator("#metric-xp")).toHaveText("275");
  await expect(page.locator("#metric-lessons")).toHaveText("1");
  await expect(page.locator("#metric-score")).toHaveText("67%");
});
