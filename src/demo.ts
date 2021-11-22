import { runTestScript } from "./index";
import { TestResponse } from "./test-runner";

const dummyResponse: TestResponse = {
  status: 200,
  body: "hoi",
  headers: [],
};
// eslint-disable-next-line prettier/prettier
(async () => {
  console.dir(
    await runTestScript(
      `
    rb.test("Arithmetic operations and toBe", () => {
      const size = 500 + 500;
      rb.expect(size).toBe(1000);
      rb.expect(size - 500).toBe(500);
      rb.expect(size * 4).toBe(4000);
      rb.expect(size / 4).toBe(250);
    });
    rb.test("toBeLevelxxx", () => {
      rb.expect(200).toBeLevel2xx();
      rb.expect(204).toBeLevel2xx();
      rb.expect(300).not.toBeLevel2xx();
      rb.expect(300).toBeLevel3xx();
      rb.expect(304).toBeLevel3xx();
      rb.expect(204).not.toBeLevel3xx();
      rb.expect(401).toBeLevel4xx();
      rb.expect(404).toBeLevel4xx();
      rb.expect(204).not.toBeLevel4xx();
      rb.expect(501).toBeLevel5xx();
      rb.expect(504).toBeLevel5xx();
      rb.expect(204).not.toBeLevel5xx();
    });
    rb.test("toBeType", () => {
      rb.expect("hello").toBeType("string");
      rb.expect(10).toBeType("number");
      rb.expect(true).toBeType("boolean");
      rb.expect("deffonotanumber").not.toBeType("number");
    });
    rb.test("toHaveLength", () => {
      const arr = [1, 2, 3];
      rb.expect(arr).toHaveLength(3);
      rb.expect(arr).not.toHaveLength(4);
    });
    `,
      dummyResponse
    ),
    {
      depth: 100,
    }
  );
})();
