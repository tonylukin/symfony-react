import * as yup from 'yup';
import ValidationErrors from 'backend/js/lib/ValidationErrors';
import ValidationService from 'backend/js/lib/ValidationService';

const { fieldRequired, upload } = ValidationErrors;

const ValidationSchema = yup.object().shape({
  name: yup.string().required(fieldRequired),
  routingNumber: yup
    .string()
    .required(fieldRequired)
    .test('validate', 'Invalid bank routing number', function test(val) {
      return ValidationService.bankRoutingNumber.test(val) && Boolean(this.parent.bankName);
    }),
  accountNumber: yup.string().required(fieldRequired),
  confirmAccountNumber: yup
    .string()
    .oneOf([yup.ref('accountNumber'), null], 'Account number values must be the same')
    .required(fieldRequired),
  voidedCheck: yup.array().when(['senderName', 'name'], {
    is: (senderName, name) => !senderName || senderName !== name,
    then: yup
      .array()
      .of(
        yup
          .object()
          .shape({
            name: yup.string.required,
            path: yup.string.required,
            type: yup.string.required,
            size: yup.number.required,
            lastModified: yup.number.required,
          })
          .nullable(),
      )
      .required(upload.fileRequired),
  }),
});

export default ValidationSchema;
