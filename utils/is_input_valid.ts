/*-------------------------------------------------------------------
|  is_input_valid Function
|
|  Purpose:  CHECKS IF INPUT'S VALUE IS VALID BASED ON AN ERROR OBJECT
|
|  Returns:  Boolean
*-------------------------------------------------------------------*/

export const is_input_valid = (err: object) => {
  if (Object.keys(err).length > 0) return true
  return false
}
