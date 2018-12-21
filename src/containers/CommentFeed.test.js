import React, { Component } from 'react'
import { render } from 'react-testing-library'
import CommentFeed from './CommentFeed'

describe(CommentFeed, () => {
  const props = { header: "Comment Feed", comments: [] }

  it("renders the CommentFeed", () => {
    const { queryByText } = render(<CommentFeed {...props} />)
    const header = queryByText(props.header)
    expect(header.innerHTML).toBe(props.header)
  })
})
