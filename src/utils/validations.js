export const validateLogin = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/i.test(values.password)) {
    errors.password = 'Enter at least one numeric digit, uppercase and lowercase letter'
  }
  return errors
}

export const validateProduct = (values) => {
  const errors = {}

  if (!values.product_name) {
    errors.product_name = 'Required'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  if (!values.style) {
    errors.style = 'Required'
  }
  if (!values.brand) {
    errors.brand = 'Required'
  }
  if (!values.product_type) {
    errors.product_type = 'Required'
  }
  if (!values.shipping_price) {
    errors.shipping_price = 'Required'
  } else if (!/^[0-9]+$/i.test(values.shipping_price)) {
    errors.shipping_price = 'Price should be a number'
  }
  return errors
}
