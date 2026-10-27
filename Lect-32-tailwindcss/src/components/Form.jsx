import React from 'react'
import { Tooltip, Toast, Popover } from 'bootstrap'

function Form() {
  return (
    <div>
        <div>
  <label for="sizesSelectSmall" class="form-label">Small select</label>
  <select class="form-control form-control-sm" id="sizesSelectSmall">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div>
  <label for="sizesSelectDefault" class="form-label">Default select</label>
  <select class="form-control" id="sizesSelectDefault">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div>
  <label for="sizesSelectLarge" class="form-label">Large select</label>
  <select class="form-control form-control-lg" id="sizesSelectLarge">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
    </div>
  )
}

export default Form