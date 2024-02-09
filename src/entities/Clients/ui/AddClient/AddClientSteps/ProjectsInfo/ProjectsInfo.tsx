import { UseClientCreateForm } from "entities/Clients/lib/form/useClientCreateForm";
import { FormProvider } from "react-hook-form";
import { ProjectDetails } from "entities/Clients/ui/AddClient/AddClientSteps/ProjectsInfo/Components/ProjectDetails";
import { BankDetails } from "entities/Clients/ui/AddClient/AddClientSteps/ProjectsInfo/Components/BankDetails";
import { ClientBasicInfoProps } from "entities/Clients/model/types/Client";

export const ProjectsInfo = ({current, setCurrent}: ClientBasicInfoProps) => {
    const {onSubmit, methods} = UseClientCreateForm();
    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <ProjectDetails />
            </form>
        </FormProvider>
    )
}