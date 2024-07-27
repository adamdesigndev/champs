import { describe, it , expect , beforeEach, afterEach } from "vitest";
import { mount } from '@vue/test-utils'
import OrderSummaryPanel from "../../src/components/OrderSummaryPanel.vue";
import { cartStore } from "../../cartStore";
import { creatRouter, createWebHistory } from 'vue-router'

