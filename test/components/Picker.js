import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Picker from '../../components/Picker'

function setup() {
  const props = {
    onChange: expect.createSpy(),
    options: ['funny', 'mildly interesting'],
    value: 'test',
  }

  const renderer = TestUtils.createRenderer()
  renderer.render(
    <Picker {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer,
  }
}

describe('components', () => {

  describe('Picker', ()=> {

    it('initial render', ()=> {
      const { output } = setup()
      expect(output.type).toBe('span')
      expect(output.props.children.length).toBe(2)

      const [h1, select] = output.props.children
      expect(h1.props.children).toBe('test')

      const options = select.props.children
      expect(options.length).toBe(2)

      const [optOne, optTwo] = options
      expect(optOne.props.children).toBe('funny')
      expect(optOne.props.value).toBe('funny')

      expect(optTwo.props.children).toBe('mildly interesting')
      expect(optTwo.props.value).toBe('mildly interesting')

    })

    it('select onChange should call onChange', ()=> {
      const { output, props } = setup()
      const select = output.props.children[1]
      const mockEvent = {target: {value: "mock"}}
      select.props.onChange(mockEvent)
      expect(props.onChange).toHaveBeenCalled()
    })

  })

})
