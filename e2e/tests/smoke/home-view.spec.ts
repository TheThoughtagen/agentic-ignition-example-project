import { test, expect } from "../../fixtures/perspective";

const commissionedProject =
  process.env.PERSPECTIVE_PROJECT ||
  process.env.IGNITION_PROJECT ||
  "example-project";

test.describe("Commissioned Perspective project", () => {
  test("Home view is mapped at / for example-project", async ({
    perspective,
  }) => {
    expect(commissionedProject).toBe("example-project");

    await perspective.openPage("/");
    await perspective.waitForPageContent();

    await expect(
      perspective.pageLabelWithText("Agentic Ignition example")
    ).toBeVisible({ timeout: 10_000 });
    await expect(
      perspective.pageLabelWithText("Gateway session is live.")
    ).toBeVisible();
  });
});
