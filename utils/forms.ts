export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Alexei Ward',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value: /^[a-zA-Z0-9_.-]*$/,
      message: 'wrong format',
    },
    maxLength: {
      value: 20,
      message: 'length exceeded',
    },
  },
}
export const email_validation = {
  name: 'email',
  label: 'email',
  type: 'email',
  id: 'email',
  placeholder: 'user@mail.com',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'wrong format',
    },
  },
}
export const phone_validation = {}
export const address_validation = {}
export const zip_validation = {}
export const city_validation = {}
export const country_validation = {}
export const money_validation = {}
export const pin_validation = {}
