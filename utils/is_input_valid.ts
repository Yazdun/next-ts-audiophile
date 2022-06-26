export const is_input_valid = (err: object) => {
  if (Object.keys(err).length > 0) return true
  return false
}
