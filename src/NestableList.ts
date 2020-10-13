/**
 * Represents the passed type itself, or a recursive list of lists of that type.
 *
 * @template Type The type contained by this nestable list.
 */
export type NestableList<Type> = Type | NestableList<Type>[]
