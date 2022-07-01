import React from 'react'
import { ISuggestion } from '@models/suggestion'

interface IProps {
  suggestion: ISuggestion
}

export const Suggestion: React.FC<IProps> = ({ suggestion }) => {
  return <li>{suggestion.name}</li>
}
