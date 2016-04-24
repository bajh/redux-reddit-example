import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Posts from '../../components/Posts'

function setup(posts = []) {
  const renderer = TestUtils.createRenderer()

  renderer.render(<Posts posts={posts} />)

  let output = renderer.getRenderOutput()

  return {output, renderer}
}

describe('components', () => {

  describe('posts', () => {
    it('render message with no posts', () => {
      const { output } = setup()
      expect(output.type).toBe('div')
      expect(output.props.className).toBe('posts')

      expect(output.props.children.length).toBe(2)
      const [div, ul] = output.props.children
      expect(div.type).toBe('div')
      expect(div.props.children).toBe('No posts!')
      expect(ul.props.children).toEqual([])
    })

    it('render message with posts', () => {
      let postOne = 'Out-of-body experience',
        postTwo = 'TIL a group of rabbits is called a fluffle'
      let postProps = [postOne, postTwo].map((post) => ({title: post}))
      const { output } = setup(postProps)
      expect(output.type).toBe('div')
      expect(output.props.className).toBe('posts')

      expect(output.props.children.length).toBe(2)
      const [blank, ul] = output.props.children
      // First child should be undefined ('No Posts' message not displayed)
      expect(typeof blank).toBe('undefined')
      expect(ul.type).toBe('ul')

      // The ul should have two child posts
      expect(ul.props.children.length).toBe(2)
      const posts = ul.props.children
      expect(posts[0].props.children).toBe(postOne)
      expect(posts[1].props.children).toBe(postTwo)
    })
  })

})
