test("greeting environment variable should be available", () => {
    expect(process.env.greeting).toEqual("hi");
});
