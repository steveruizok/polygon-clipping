import polygonClipping from "../src"

describe("end to end", () => {
  it.only("should work", () => {
    const result = polygonClipping.union([
      [
        [
          [0, 0],
          [10, 0],
          [10, 10],
          [0, 10],
        ],
      ],
      [
        [
          [5, 5],
          [15, 5],
          [15, 15],
          [5, 15],
        ],
      ],
    ])

    expect(result).toMatchObject([
      [
        [
          [0, 0],
          [10, 0],
          [10, 5],
          [15, 5],
          [15, 15],
          [5, 15],
          [5, 10],
          [0, 10],
          [0, 0],
        ],
      ],
    ])
  })
})
