import React, { Component } from 'react'
import { render } from 'react-testing-library'
import CommentFeed from './CommentFeed'

describe(CommentFeed, () => {
  let props = { header: "Comment Feed", comments: [] }

  it("renders the CommentFeed", () => {
    const { queryByText } = render(<CommentFeed {...props} />)
    const header = queryByText(props.header)
    expect(header.innerHTML).toBe(props.header)
  })

  it("renders the comment list", () => {
    const { container } = render(<CommentFeed {...props} />)
    const commentNodes = container.querySelectorAll('.Comment')
    expect(commentNodes.length).toBe(props.comments.length)
  })

  it("renders the comment list with some entries", () => {
    let comments = [
      {
        author: "Wilson",
        text: "Get me off this island",
      },
      {
        author: "Max Headroom",
        text: "Wh-wh-what'd you say again"
      }
    ]

    props = { header: "Comment Feed", comments }
    
    const { container } = render(<CommentFeed {...props} />)
    const commentNodes = container.querySelectorAll('.Comment')
    expect(commentNodes.length).toBe(props.comments.length)
  })
})
