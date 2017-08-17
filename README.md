Refinements for node paths

## Tags

`FPath`, `Dir`, and `File` perform no checks. Use to tag after checking.

## Refinements
`Abs` and `Rel` check using node's `path.isAbsolute`.

## Helper types

`Path<A>` is aliased to `Refined<string, FPath & A>`

## `path` module reexports

Node `path` members have been reexported with refined types.
