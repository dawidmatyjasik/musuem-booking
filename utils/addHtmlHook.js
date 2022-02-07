import { useEffect } from 'react'

const addHtmlClass = (className) =>
  document.querySelector('html').classList.add(className)
const removeHtmlClass = (className) =>
  document.querySelector('html').classList.remove(className)

export default function useHtmlClass(className) {
  useEffect(() => {
    // Set up
    className instanceof Array
      ? className.map(addBodyClass)
      : addHtmlClass(className)

    // Clean up
    return () => {
      className instanceof Array
        ? className.map(removeBodyClass)
        : removeHtmlClass(className)
    }
  }, [className])
}
