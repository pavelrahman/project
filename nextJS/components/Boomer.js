import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Boomer = () => (
  <Select
    options={options}
    id='react-select-14-input'
    />
)

export default Boomer