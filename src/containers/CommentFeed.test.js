import React, { Component } from 'react'
import { render, Simulate } from 'react-testing-library'
import CommentFeed from './CommentFeed'

const createProps = props => ({
  header: 'Comment Feed',
  comments: [
    {
      author: "Wilson",
      text: "Get me off this island",
    },
    {
      author: "Max Headroom",
      text: "Wh-wh-what'd you say again"
    },
  ],
  createComment: jest.fn(),
  ...props,
})

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

  it("allows the user to add a comment", () => {
    const newComment = { author: "Claudius", comment: "Who spiked this punch?" }
    let props = createProps()
    const { container, getByLabelText } = render(<CommentFeed {...props} />)
    const authorNode = getByLabelText("Author")
    const textNode = getByLabelText("Comment")
    const formNode = container.querySelector("form")

    authorNode.value = newComment.author
    textNode.value = newComment.text

    Simulate.change(authorNode)
    Simulate.change(textNode)
    Simulate.submit(formNode)

    expect(props.createComment).toHaveBeenCalledTimes(1)
    expect(props.createComment).toHaveBeenCalledWith(newComment)
  })
})
