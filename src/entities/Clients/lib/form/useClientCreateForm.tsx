    import { SubmitHandler, useForm } from 'react-hook-form';
    import { ProjectLegals } from "entities/Clients/model/types/Client";
    import { useUpdateClientMutation } from "entities/Clients/model/service/Clients";
    import { notification } from "antd";

    export const UseClientCreateForm = () => {
        const currentUserId = localStorage.getItem('currentCreateClient')
        const [updateClientMutation, { isLoading }] = useUpdateClientMutation();
        const [api, contextHolder] = notification.useNotification();
        const methods = useForm({
            defaultValues: {
                legals: [{
                    name: '',
                    fullName: '',
                    shortName: '',
                    ogrn: '',
                    inn: '',
                    legalAdress: '',
                    postAdress: '',
                    status: true,
                    banksDetails: [{  // Include banksDetails here
                        bankName: '',
                        checkingAccount: '',
                        correspondentAccount: '',
                        bankAdress: '',
                        bankInn: '',
                        bankDescription: ''
                    }]
                }],
            }
        });

        const onSubmit: SubmitHandler<{legals: ProjectLegals[]}> = async (data) => {
            console.log(data)
            try {
                const { legals } = data;
                console.log(currentUserId)
                const clientDataToUpdate = legals[0]; // assuming you are updating the first legal entity
                const response = await updateClientMutation({ id: currentUserId, ...clientDataToUpdate });
                const openNotification = () => {
                    api.open({
                        message: 'Клиент создан',
                        description:
                            'Клиент был успешно создан!',
                        duration: 5000,
                    });
                };
            } catch (error) {
                const openNotification = () => {
                    api.open({
                        message: 'Ошибка создания',
                        description:
                            'Упс! Что то пошло не так',
                        duration: 5000,
                    });
                };
            }
        }

        return {
            methods,
            onSubmit: methods.handleSubmit(onSubmit),
        }
    }