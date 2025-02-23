import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DashboardPage from '../DashboardPage.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(DashboardPage, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
