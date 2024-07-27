// OrderSummaryPanel.test.js
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrderSummaryPanel from '../../src/components/OrderSummaryPanel.vue'
import { cartStore } from '../../cartStore.js'
import router from '../../src/router/index.js' // Import the existing router

describe('OrderSummaryPanel.vue', () => {
    beforeEach(() => {
      cartStore.items = [
        {
          name: 'Coca-Cola®',
          size: 'medium',
          quantity: 2,
          totalPrice: 2.18,
        },
      ]
    })
  
    afterEach(() => {
      cartStore.items = []
    })

    it('displays the correct number of items in the cart', async () => {
      const wrapper = mount(OrderSummaryPanel, {
        global: {
          plugins: [router],
        },
      })
  
      await router.isReady()
  
      expect(wrapper.find('.wrapper-total-items-in-cart p').text()).toBe('2 item(s)')
    })

    it('displays correct subtotal', async () => {
      const wrapper = mount(OrderSummaryPanel, {
        global: {
          plugins: [router],
        },
      })
  
      await router.isReady()

        expect(wrapper.find('.cart-sub-total-js').text()).toBe('$2.18')
    })

    it('displays correct tax', async () => {
      const wrapper = mount(OrderSummaryPanel, {
        global: {
          plugins: [router],
        },
      })
  
      await router.isReady()

        expect(wrapper.find('.cart-tax-js').text()).toBe('$0.20')
    })

    it('displays grand total', async () => {
      const wrapper = mount(OrderSummaryPanel, {
        global: {
          plugins: [router],
        },
      })
  
      await router.isReady()

        expect(wrapper.find('.cart-grand-js').text()).toBe('$2.38')
    })
})