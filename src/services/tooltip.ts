import $ from 'jquery'
import { DirectiveBinding } from 'vue/types/options'

export default {
  boot (element: HTMLElement, binding: DirectiveBinding) {
    element.setAttribute('data-toggle', 'tooltip')
    element.setAttribute('data-placement', 'top')
    element.setAttribute('title', binding.value)
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  },

  dispose (event: any): void {
    $(event.target).tooltip('dispose')
  },

  remove (): void {
    $('.tooltip').remove()
  }
}
