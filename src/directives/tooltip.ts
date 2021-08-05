import { DirectiveBinding } from 'vue/types/options'
import { VNode } from 'vue/types/umd'
import tooltip from '@/services/tooltip'

export default {
  bind (element: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    if (!binding.value) return
    tooltip.boot(element, binding)
  }
}
