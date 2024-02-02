import * as yup from "yup"

export const ValidationLoginFormSchema = yup.object({
    username: yup.string().min(3, 'Должно быть минимум 3 символа').required('Поле обязательно'),
    password: yup.string().min(5, 'Должно быть минимум 5 символов').required('Поле обязательно'),
});