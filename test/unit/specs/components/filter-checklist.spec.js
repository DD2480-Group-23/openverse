import FilterChecklist from '~/components/Filters/FilterChecklist'
import render from '../../test-utils/render'
import i18n from '../../test-utils/i18n'

describe('FilterChecklist', () => {
  let options = {}
  let props = null

  const $t = (key) => i18n.messages[key]

  // const eventData = {
  //   target: {
  //     id: 'foo',
  //   },
  // }

  beforeEach(() => {
    props = {
      options: [{ code: 'foo', name: 'bar', checked: false }],
      title: 'Foo',
      filterType: 'bar',
      disabled: false,
    }
    options = {
      propsData: props,
      mocks: {
        $store: {
          state: {},
        },
        $t,
      },
    }
  })

  it('should render correct contents', () => {
    const wrapper = render(FilterChecklist, options)
    expect(wrapper.find('.filters').vm).toBeDefined()
  })

  xit('should render filter visibility toggle button', () => {
    const wrapper = render(FilterChecklist, options)
    expect(wrapper.find('.filter-visibility-toggle').element).toBeDefined()
  })

  xit('visibility toggle button should be in collapsed state by default', () => {
    const wrapper = render(FilterChecklist, options)
    expect(wrapper.find('.angle-down').element).toBeDefined()
  })

  xit('hides checklist when visibility toggle button pressed twice', async () => {
    const wrapper = render(FilterChecklist, options)
    await wrapper.find('.filter-visibility-toggle').trigger('click') // should open
    await wrapper.find('.filter-visibility-toggle').trigger('click') // should close
    expect(wrapper.find('.angle-down').element).toBeDefined()
  })
})
