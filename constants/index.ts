/*-------------------------------------------------------------------
|  Constants
|
|  Purpose:  CONSTANTS WHICH ARE REPEATED IN MULTIPLE PLACES IN THE 
|            WHOLE PROJECT   
|
|  Returns:  -
*-------------------------------------------------------------------*/

export const DEFAULT_TITLE_META_TAG = 'Homepage'
export const DEFAULT_DESC_META_TAG =
  'Browse and purchase the best audio devices on the market'
export const RENDER_TITLE_META_TAG = (title?: string) =>
  `AudioPhile | ${title ? title : DEFAULT_TITLE_META_TAG}`
