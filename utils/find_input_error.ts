/*-------------------------------------------------------------------
|  find_input_error Function
|
|  Purpose:  FILTERS RELATED INPUT ERROR MESSAGES FROM formState ERROR
|            OBJECT.
|
|  Returns:  Error Object
*-------------------------------------------------------------------*/

export function find_input_error(errors: any, name: string) {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key: string) => {
      return Object.assign(cur, { error: errors[key] })
    }, {})
  return filtered
}
