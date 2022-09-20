// import { waitFor } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'

import { SectionContainer } from './components'

test('Show App Component', () => {
  render(<SectionContainer>Hello</SectionContainer>)

  expect(screen.getByText('Hello')).toBeInTheDocument()
})
