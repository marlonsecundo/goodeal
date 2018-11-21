# Goodeal - Backend

## Adonis JS
## Javascript


Criação de dois recursos em um único request.

Company Model
static get schema() {
    return {
      cpnj: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      addresses: {
        type: [{
          type: Schema.Types.ObjectId,
          ref: 'Address',
          required: true,
          unique: true,
        }],
        validate: {
          isAsync: true,
          validator: validator.validateArray,
          message: 'Address is empty'
        }
      }
    }
}