import { focusableSelector } from "./Constants"

/**
 * Get all the children of a passed element that are focusable.
 *
 * @param element The element whose children should be checked. Defaults to `document.body`.
 * @returns The focusable children of the passed element.
 */
export function getFocusableChildren(element: HTMLElement | SVGElement = document.body) {
	return Array.from(element.querySelectorAll(focusableSelector))
}
