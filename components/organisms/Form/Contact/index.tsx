import * as React from 'react';
import {ContainerContactForm} from "./styles";
import {Form, Formik} from 'formik'
import {Input} from "../../../atoms/Input";
import {Button} from "../../../atoms/Button/Common";
import {sendMail} from "../../../../redux/actions/mail";
import {ContactInfo} from '../../../../models/ContactInfo'
import {useDispatch} from "react-redux";
import {useIntl} from "react-intl";

export const ContactForm = () => {
    const initialValues: ContactInfo = {email: "", name: '', subject: "", message: ''};
    const dispatch = useDispatch()
    const {formatMessage: t} = useIntl()
    return (
        <ContainerContactForm>
            <Formik initialValues={initialValues} onSubmit={
                async (values, actions) => {
                    dispatch(sendMail({...values}))
                }}>
                <Form>
                    <div className={'row my-3'}>
                        <div className={'col-md-6'}>
                            <Input className={'my-4'} name={'name'} id={'name'} label={'Name'} pattern=".*\S.*"
                                   placeholder={t({id: 'name'})}
                                   required/>
                            <Input className={'my-4'} type={'email'} id="email" name="email" label={'Email'}
                                   placeholder={'email'}
                                   pattern=".*\S.*"
                                   required/>
                            <Input pattern=".*\S.*" className={'my-4'} id="subject" name="subject" label={'Subject'}
                                   placeholder={t({id: 'subject'})} required/>
                        </div>
                        <div className={'col-md-6 mb-4 pb-4'}>
                            <Input as={'textarea'} className={'mt-4'} id="message" name="message" label={'Message'}
                                   placeholder={t({id: 'message'})} pattern=".*\S.*" required/>
                        </div>
                        <div className={'col-md-12 d-flex justify-content-end'}>
                            <Button className={'flex-grow-1 w-100'} classNameButton={'text-capitalize'} type={'submit'}>
                                {t({id: "send"})}
                            </Button>
                        </div>

                    </div>
                </Form>

            </Formik>
        </ContainerContactForm>
    )
}