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
    errors.product_name = 'Product name is required'
  }
  if (!values.description) {
    errors.description = 'Product description is required'
  }
  if (!values.style) {
    errors.style = 'Product style is required'
  }
  if (!values.brand) {
    errors.brand = 'Product brand is required'
  }
  if (!values.product_type) {
    errors.product_type = 'Product type is required'
  }
  if (!values.shipping_price) {
    errors.shipping_price = 'Shipping price is required'
  }
  if (!values.note) {
    errors.note = 'Product note is required'
  }
  if (!values.url) {
    errors.url = 'Product url is required'
  }

  return errors
}
