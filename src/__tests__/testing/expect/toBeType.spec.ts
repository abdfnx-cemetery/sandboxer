import { execTestScript, TestResponse } from "../../../test-runner"

const fakeResponse: TestResponse = {
  status: 200,
  body: "hoi",
  headers: [],
}

describe("toBeType", () => {
  test("asserts true for valid type expectations with no negation", () => {
    return expect(
      execTestScript(
        `
          rb.expect(2).toBeType("number")
          rb.expect("2").toBeType("string")
          rb.expect(true).toBeType("boolean")
          rb.expect({}).toBeType("object")
          rb.expect(undefined).toBeType("undefined")
        `,
        fakeResponse
      )()
    ).resolves.toEqualRight([
      expect.objectContaining({
        expectResults: [
          { status: "pass", message: `Expected '2' to be type 'number'` },
          { status: "pass", message: `Expected '2' to be type 'string'` },
          { status: "pass", message: `Expected 'true' to be type 'boolean'` },
          {
            status: "pass",
            message: `Expected '[object Object]' to be type 'object'`,
          },
          {
            status: "pass",
            message: `Expected 'undefined' to be type 'undefined'`,
          },
        ],
      }),
    ])
  })

  test("asserts false for invalid type expectations with no negation", () => {
    return expect(
      execTestScript(
        `
          rb.expect(2).toBeType("string")
          rb.expect("2").toBeType("number")
          rb.expect(true).toBeType("string")
          rb.expect({}).toBeType("number")
          rb.expect(undefined).toBeType("number")
        `,
        fakeResponse
      )()
    ).resolves.toEqualRight([
      expect.objectContaining({
        expectResults: [
          { status: "fail", message: `Expected '2' to be type 'string'` },
          { status: "fail", message: `Expected '2' to be type 'number'` },
          { status: "fail", message: `Expected 'true' to be type 'string'` },
          {
            status: "fail",
            message: `Expected '[object Object]' to be type 'number'`,
          },
          {
            status: "fail",
            message: `Expected 'undefined' to be type 'number'`,
          },
        ],
      }),
    ])
  })

  test("asserts false for valid type expectations with negation", () => {
    return expect(
      execTestScript(
        `
          rb.expect(2).not.toBeType("number")
          rb.expect("2").not.toBeType("string")
          rb.expect(true).not.toBeType("boolean")
          rb.expect({}).not.toBeType("object")
          rb.expect(undefined).not.toBeType("undefined")
        `,
        fakeResponse
      )()
    ).resolves.toEqualRight([
      expect.objectContaining({
        expectResults: [
          { status: "fail", message: `Expected '2' to not be type 'number'` },
          { status: "fail", message: `Expected '2' to not be type 'string'` },
          {
            status: "fail",
            message: `Expected 'true' to not be type 'boolean'`,
          },
          {
            status: "fail",
            message: `Expected '[object Object]' to not be type 'object'`,
          },
          {
            status: "fail",
            message: `Expected 'undefined' to not be type 'undefined'`,
          },
        ],
      }),
    ])
  })

  test("asserts true for invalid type expectations with negation", () => {
    return expect(
      execTestScript(
        `
          rb.expect(2).not.toBeType("string")
          rb.expect("2").not.toBeType("number")
          rb.expect(true).not.toBeType("string")
          rb.expect({}).not.toBeType("number")
          rb.expect(undefined).not.toBeType("number")
        `,
        fakeResponse
      )()
    ).resolves.toEqualRight([
      expect.objectContaining({
        expectResults: [
          { status: "pass", message: `Expected '2' to not be type 'string'` },
          { status: "pass", message: `Expected '2' to not be type 'number'` },
          {
            status: "pass",
            message: `Expected 'true' to not be type 'string'`,
          },
          {
            status: "pass",
            message: `Expected '[object Object]' to not be type 'number'`,
          },
          {
            status: "pass",
            message: `Expected 'undefined' to not be type 'number'`,
          },
        ],
      }),
    ])
  })

  test("gives error for invalid type names without negation", () => {
    return expect(
      execTestScript(
        `
          rb.expect(2).toBeType("foo")
          rb.expect("2").toBeType("bar")
          rb.expect(true).toBeType("baz")
          rb.expect({}).toBeType("qux")
          rb.expect(undefined).toBeType("quux")
        `,
        fakeResponse
      )()
    ).resolves.toEqualRight([
      expect.objectContaining({
        expectResults: [
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
        ],
      }),
    ])
  })

  test("gives error for invalid type names with negation", () => {
    return expect(
      execTestScript(
        `
          rb.expect(2).not.toBeType("foo")
          rb.expect("2").not.toBeType("bar")
          rb.expect(true).not.toBeType("baz")
          rb.expect({}).not.toBeType("qux")
          rb.expect(undefined).not.toBeType("quux")
        `,
        fakeResponse
      )()
    ).resolves.toEqualRight([
      expect.objectContaining({
        expectResults: [
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
          {
            status: "error",
            message: `Argument for toBeType should be "string", "boolean", "number", "object", "undefined", "bigint", "symbol" or "function"`,
          },
        ],
      }),
    ])
  })
})
