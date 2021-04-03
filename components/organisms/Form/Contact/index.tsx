import * as React from 'react';
import {ContainerContactForm} from "./styles";
import {Form, Formik} from 'formik'
import {Input} from "../../../atoms/Input";
import {Button} from "../../../atoms/Button/Common";
import {sendMail} from "../../../../redux/actions/mail";
import {ContactInfo} from '../../../../models/ContactInfo'
import {useDispatch} from "react-redux";

export const ContactForm = () => {
    const initialValues: ContactInfo = {email: "", name: '', subject: "", message: ''};
    const dispatch = useDispatch()
    return (
        <ContainerContactForm>
            <Formik initialValues={initialValues} onSubmit={
                async (values, actions) => {
                    console.log('pasa')
                 dispatch(sendMail({...values}))

            }}>
                <Form>
                    <div className={'row my-3'}>
                        <div className={'col-md-6'}>
                            <Input className={'my-4'} name={'name'} id={'name'} label={'Name'} pattern=".*\S.*"
                                   placeholder={'Name'}
                                   required/>
                            <Input className={'my-4'} type={'email'} id="email" name="email" label={'Email'}
                                   placeholder={'Email'}
                                   pattern=".*\S.*"
                                   required/>
                            <Input pattern=".*\S.*" className={'my-4'} id="subject" name="subject" label={'Subject'}
                                   placeholder={'Subject'} required/>
                        </div>
                        <div className={'col-md-6 mb-4 pb-4'}>
                            <Input as={'textarea'} className={'mt-4'} id="message" name="message" label={'Message'}
                                   placeholder={'Message'}  pattern=".*\S.*" required/>
                        </div>
                        <div className={'col-md-12 d-flex justify-content-end'}>
                            <Button className={'flex-grow-1 w-100'} type={'submit'}>
                                Send
                            </Button>
                        </div>

                    </div>
                </Form>

            </Formik>
        </ContainerContactForm>
    )
}