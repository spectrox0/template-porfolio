import * as React from 'react';
import {ContainerContactForm} from "./styles";
import {Form, Formik, Field} from 'formik'
import {Input} from "../../../atoms/Input";
import {Button} from "../../../atoms/Button/Common";

interface FormValues {
    email: string,
    name: string,
    subject: string,
    message: string,
}

export const ContactForm = () => {
    const initialValues: FormValues = {email: "", name: '', subject: "", message: ''};

    return (
        <ContainerContactForm>
            <Formik initialValues={initialValues} onSubmit={(values, actions) => {

            }}>
                <Form>
                    <div className={'row my-3'}>
                        <div className={'col-md-6'}>
                            <Input className={'my-2'} name={'name'} id={'name'} label={'Name'} placeholder={'Name'} />
                        </div>
                        <div className={'col-md-6'}>
                            <Input className={'my-2'}  id="email" name="email"  label={'Email'} placeholder={'Email'}/>
                        </div>
                        <div className={'col-md-12'}>
                            <Input className={'my-2'}  id="subject" name="subject"  label={'Subject'} placeholder={'Subject'}/>
                        </div>
                        <div className={'col-md-12'}>
                            <Input className={'my-2'}    id="message" name="message"  label={'Message'} placeholder={'Message'}/>
                        </div>
                        <div className={'col-md-12'}>
                            <Button type={'submit'}>
                                Send
                            </Button>
                        </div>

                    </div>
                </Form>

            </Formik>
        </ContainerContactForm>
    )
}