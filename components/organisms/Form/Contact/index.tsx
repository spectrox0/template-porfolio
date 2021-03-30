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
                            <Input className={'my-4'} name={'name'} id={'name'} label={'Name'} placeholder={'Name'} />
                            <Input className={'my-4'}  id="email" name="email"  label={'Email'} placeholder={'Email'}/>
                            <Input className={'my-4'}  id="subject" name="subject"  label={'Subject'} placeholder={'Subject'}/>
                        </div>
                        <div className={'col-md-6 mb-4 pb-4'}>
                            <Input as={'textarea'} className={'mt-4'} id="message" name="message"  label={'Message'} placeholder={'Message'}/>
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