import * as yup from "yup"

export const clientBasicInfoSchema = yup.object().shape({
    firstname: yup.string().required('Имя обязательно'),
    secondname: yup.string(),
    lastname: yup.string().required('Фамилия обязательна'),
    email: yup.string().email('Неверный формат email'),
    type: yup.number(),
    comment: yup.string(),
    phones: yup.array().of(
        yup.object().shape({
            number: yup.string().required('Телефон обязателен'),
        })
    ),
});