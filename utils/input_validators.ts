/*-------------------------------------------------------------------
|  Forms Validators
|
|  Purpose: REUSABLE VALIDATION OBJECTS FOR INPUTS
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'name',
  label: 'Name',
  type: 'text',
  id: 'name',
  placeholder: 'Alexei Ward',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: 'Wrong format',
    },
    maxLength: {
      value: 20,
      message: 'Length exceeded',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'Email Address',
  type: 'email',
  id: 'email',
  placeholder: 'user@mail.com',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Wrong format',
    },
  },
}

export const phone_validation = {
  name: 'phone',
  label: 'Phone Number',
  type: 'number',
  id: 'phone',
  placeholder: '202-555-0136',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      message: 'Wrong format',
    },
  },
}

export const address_validation = {
  name: 'address',
  label: 'Address',
  type: 'text',
  id: 'address',
  placeholder: '1137 Williams Avenue',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    minLength: {
      value: 10,
      message: 'Too short',
    },
  },
}

export const zip_validation = {
  name: 'zip',
  label: 'ZIP code',
  type: 'text',
  id: 'zip',
  placeholder: '10001',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^\d{5}(?:[-\s]\d{4})?$/,
      message: 'Wrong format',
    },
  },
}

export const city_validation = {
  name: 'city',
  label: 'City',
  type: 'text',
  id: 'city',
  placeholder: 'New York',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^([^0-9]*)$/,
      message: 'Chars only',
    },
    minLength: {
      value: 3,
      message: 'Too short',
    },
    maxLength: {
      value: 20,
      message: 'Length exceeded',
    },
  },
}

export const country_validation = {
  name: 'country',
  label: 'Country',
  type: 'text',
  id: 'country',
  placeholder: 'United States',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^([^0-9]*)$/,
      message: 'Chars only',
    },
    minLength: {
      value: 2,
      message: 'Too short',
    },
    maxLength: {
      value: 20,
      message: 'Length exceeded',
    },
  },
}

export const money_validation = {
  name: 'money',
  label: 'e-Money Number',
  type: 'number',
  id: 'money',
  placeholder: '238521993',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^[0-9]*$/,
      message: 'Digits only',
    },
  },
}

export const pin_validation = {
  name: 'pin',
  label: 'e-Money PIN',
  type: 'number',
  id: 'pin',
  placeholder: '6891',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /^[0-9]*$/,
      message: 'Digits only',
    },
    maxLength: {
      value: 4,
      message: 'Length exceeded',
    },
    minLength: {
      value: 4,
      message: 'Too short',
    },
  },
}
