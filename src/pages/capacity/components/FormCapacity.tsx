import { FC } from 'react'
import { Formik, Form, Field, FormikProps } from 'formik'
import { ICapacityData, initialValuesCapacityForm, validatioSchemaCapacityForm } from '../../../core/models/capacityModels'
import { useCapacityContext } from '../../../shared/contexts/capacityContext';
import { Input, Row, Col, FormGroup, Label, Button, FormFeedback } from 'reactstrap';
import { transformDataTocm3 } from '../../../shared/helpers/utilitis';

const FormCapacity: FC<IFormCapacityComponent> = ({ }) => {

    const { setCapacityState, capacityState } = useCapacityContext();

    /**handle change state on key up */
    const handleChangeStateOnKeyUp = (values: ICapacityData) => {
        setCapacityState(values);
    }

    return (
        <section>
            <Formik
                enableReinitialize={false}
                initialValues={initialValuesCapacityForm(capacityState)}
                validationSchema={validatioSchemaCapacityForm}
                onSubmit={() => { }}
            >
                {({ values, errors, resetForm, setFieldValue }: FormikProps<ICapacityData>) => {
                    console.log(errors, values)
                    return (
                        <Form id='formCapacities' onKeyUp={() => {
                            setFieldValue('disponible', (values?.capacidadtotal) - transformDataTocm3(values?.lts, values?.mlts, values?.cm3));
                            handleChangeStateOnKeyUp(values);
                        }} >
                            <Row>
                                <Col sm={12} md={6}>
                                    <FormGroup>
                                        <Label>{'Capacidad total cm3: '.toUpperCase()}</Label>
                                        <Field
                                            as={Input}
                                            type="number"
                                            name="capacidadtotal"
                                            invalid={!!errors?.capacidadtotal}
                                        />
                                        <FormFeedback tooltip style={{ display: !!errors?.capacidadtotal ? 'block' : 'none' }}>
                                            {errors?.capacidadtotal}
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>{'Agregar lts: '.toUpperCase()}</Label>
                                        <Field
                                            as={Input}
                                            type="number"
                                            name="lts"
                                            invalid={!!errors?.lts}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>{'Agregar mlts: '.toUpperCase()}</Label>
                                        <Field
                                            as={Input}
                                            type="number"
                                            name="mlts"
                                            invalid={!!errors?.mlts}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>{'Agregar cm3: '.toUpperCase()}</Label>
                                        <Field
                                            as={Input}
                                            type="number"
                                            name="cm3"
                                            invalid={!!errors?.cm3}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={12}>
                                    <FormGroup>
                                        <Label>{'Total Disponible cm3: '.toUpperCase()}</Label>
                                        <Field
                                            as={Input}
                                            type="number"
                                            name="disponible"
                                            value={values?.disponible <= 0 ? 0 : values?.disponible}
                                            disabled
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={6}>
                                    <Button
                                        type='button'
                                        color='info'
                                        className='button-clear w-100 btn-light'
                                        outline
                                        onClick={() => {
                                            resetForm();
                                            setCapacityState({ ...values, disponible: 0 })
                                        }}
                                    >
                                        {'Limpiar'}
                                    </Button>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Button
                                        type='submit'
                                        className='button-save w-100'
                                        disabled={transformDataTocm3(values?.lts, values?.mlts, values?.cm3) > capacityState?.capacidadtotal}>
                                        {'Guardar'}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )
                }}

            </Formik>
        </section>
    )
}

interface IFormCapacityComponent {

}

export default FormCapacity