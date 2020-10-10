import { useState } from "react"

import { useObserveSize } from "./useObserveSize"
import { tuple } from "./tuple"

/**
 * Do something based on the bounds of an element. This hook will trigger a state update whenever the bounds of the watched element changes. Don't use this in any element that changes size frequently, unless you want to slow the page down a lot.
 *
 * @param options The aspects of the bounds to watch. Defaults to all of them if not passed, or only the specified ones if any are passed.
 * @returns A tuple containing the ref callback and the last size of the component to which the ref is attached.
 */
export function useMeasure(
	{
		width = false,
		height = false
	}: {
		width?: boolean
		height?: boolean
	} = { width: true, height: true }
) {
	const [bounds, setBounds] = useState<ClientRect>({
		bottom: 0,
		height: 0,
		left: 0,
		right: 0,
		top: 0,
		width: 0
	})

	const ref = useObserveSize(
		(entries) => {
			const target = entries[0]?.target

			if (!target) {
				return
			}

			const newBounds = target.getBoundingClientRect()

			if (
				(width && bounds.width !== newBounds.width) ||
				(height && bounds.height !== newBounds.height)
			) {
				setBounds(newBounds)
			}
		},
		[bounds, width, height]
	)

	return tuple(ref, bounds)
}
