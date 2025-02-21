import { navigator } from './navigator'
import { document } from './document'
import { isBrowser, win } from '../env'
import { raf, caf } from './raf'
import { getComputedStyle } from './getComputedStyle'
import { DATE } from '../constants'

export const window = isBrowser ? win : {
  navigator,
  document
}

if (!isBrowser) {
  const globalProperties = [
    ...Object.getOwnPropertyNames(global || win),
    ...Object.getOwnPropertySymbols(global || win)
  ]

  globalProperties.forEach(property => {
    if (property === 'atob') return
    if (!Object.prototype.hasOwnProperty.call(window, property)) {
      window[property] = global[property]
    }
  })

  ;(document as any).defaultView = window
}

if (process.env.TARO_ENV && process.env.TARO_ENV !== 'h5') {
  (window as any).requestAnimationFrame = raf;
  (window as any).cancelAnimationFrame = caf;
  (window as any).getComputedStyle = getComputedStyle;
  (window as any).addEventListener = function () {};
  (window as any).removeEventListener = function () {}
  if (!(DATE in window)) {
    (window as any).Date = Date
  }
  (window as any).setTimeout = function (...args: Parameters<typeof setTimeout>) {
    return setTimeout(...args)
  }
  ;(window as any).clearTimeout = function (...args: Parameters<typeof clearTimeout>) {
    return clearTimeout(...args)
  }
}
