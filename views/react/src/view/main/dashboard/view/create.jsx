
// Soft UI Dashboard React example components
import { useForm, useFieldArray } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContactForm from "./_form";
import { useHistory } from "react-router-dom";
import { contactPage } from "links/pages";
// Custom styles for the Tables

// Service
import { addContact } from "../service"
import SmartForm from "./_form";

const schema = yup.object({
    name: yup.string().required("Name cannot be blank").max(100),
    bottletime: yup.string().max(10000),
    noassociate: yup.string().max(10000),
    contact: yup.array()
        .min(1, "Create at least contact")
        .of(yup.object().shape({
            name: yup.string().required("Shift Name cannot be blank").max(100),
            hours: yup.array()
                .min(1, "Create at least hours")
                .of(yup.object().shape({
                    stime: yup.string().required("Name cannot be blank").max(100),
                    etime: yup.string().required("Name cannot be blank").max(100),
                    type: yup.string().required("Name cannot be blank").max(100),
                })),
        })),
});

function SmartFormAdd() {
    const { handleSubmit, control, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    async function onSubmitHandler(fdata) {
        await addContact(fdata).then(({ flag, data }) => {
            if (flag) {
                enqueueSnackbar("Contact add success", {
                    variant: 'success',
                });
                history.push({
                    pathname: contactPage.CONTACT_VIEW,
                    search: "?" + (data.name.replace(" ", "-").toLowerCase()),
                    state: {
                        id: data.id,
                        name: data.name
                    }
                });
            }
        })
    };
    return (
        <SmartForm
            onSubmitHandler={onSubmitHandler}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
            getValues={getValues}
        />
    );
}

export default SmartFormAdd;
