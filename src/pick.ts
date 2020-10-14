/**
 * Get a version of the passed object which includes only the properties with the passed keys.
 *
 * @template Type The type of object from which properties are being picked.
 * @template Key The keys that should be picked.
 * @param obj The object from which to pick the values.
 * @param keys The keys whose values to pick.
 * @returns A version of the object with only the specified keys.
 */
export function pick<Type extends object, Key extends keyof Type>(
	obj: Type,
	...keys: Key[]
): Pick<Type, Key>
/**
 * Get a version of the passed object which includes only the properties with keys that match the passed RegExp.
 *
 * @template Type The type of object from which properties are being picked.
 * @param obj The object from which to pick the values whose keys match the pattern.
 * @param pattern The pattern against which to test keys for those whose values to pick.
 * @returns A version of the object with only the keys matching the RegExp.
 */
export function pick<Type extends object>(obj: Type, pattern: RegExp): Partial<Type>

export function pick<T extends object, K extends keyof T>(
	obj: T,
	patternOrKey: K | RegExp,
	...keys: K[]
) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const ret: any = {}

	if (patternOrKey instanceof RegExp) {
		Object.keys(obj).forEach((k) => {
			if (patternOrKey.test(k)) {
				ret[k] = obj[k as keyof T]
			}
		})
	} else {
		for (const k of [patternOrKey, ...keys]) {
			ret[k] = obj[k]
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return ret
}
