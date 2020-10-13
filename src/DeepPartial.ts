/**
 * Recursively make a type's properties optional.
 *
 * @template Type The type whose properties to make optional.
 */
export type DeepPartial<Type extends object> = {
	[P in keyof Type]?: Type[P] extends object ? DeepPartial<Type[P]> : Type[P]
}
