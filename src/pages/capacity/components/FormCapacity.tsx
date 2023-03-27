import { Dispatch, FC, SetStateAction } from 'react'
import { Formik, Form, Field, FormikProps } from 'formik'
import { ICapacityData, initialValuesCapacityForm, validatioSchemaCapacityForm } from '../../../core/models/capacityModels';
import { Input, Row, Col, FormGroup, Label, FormFeedback } from 'reactstrap';
import { transformDataTocm3 } from '../../../shared/helpers/utilitis';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useCapacityContext } from '../../../shared/contexts/capacityContext';
import ButtonCustom from '../../../shared/components/ButtonCustom';

const FormCapacity: FC<IFormCapacityComponent> = ({ data, setCapacityState, onSubmit }) => {

    // hooks
    const navigate = useNavigate();
    const { info } = useCapacityContext()

    /**handle change state on key up */
    const handleChangeStateOnKeyUp = (
        values: ICapacityData
    ) => {
        setCapacityState && setCapacityState(values);
    }

    return (
        <section>
            <Formik
                enableReinitialize
                initialValues={initialValuesCapacityForm(data)}
                validationSchema={validatioSchemaCapacityForm}
                onSubmit={(values) => onSubmit({...values, disponible: info?.disponible}, navigate)}
            >
                {({ values, errors, resetForm, isSubmitting}: FormikProps<ICapacityData>) => {
                    return (
                        <Form id='formCapacities' onKeyUp={() => {
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
                                            value={info?.disponible}
                                            disabled
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={6}>
                                    <ButtonCustom
                                        type='button'
                                        color='info'
                                        className='button-clear w-100 btn-light'
                                        outline
                                        loading={isSubmitting}
                                        onClick={() => {
                                            resetForm();
                                        }}
                                    >
                                        {'Limpiar'}
                                    </ButtonCustom>
                                </Col>
                                <Col sm={12} md={6}>
                                    <ButtonCustom
                                        type='submit'
                                        className='button-save w-100'
                                        loading={isSubmitting}
                                        disabled={transformDataTocm3(values?.lts, values?.mlts, values?.cm3) > values?.capacidadtotal}>
                                        {'Guardar'}
                                    </ButtonCustom>
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
    data: ICapacityData,
    onSubmit: (values: ICapacityData, navegate: NavigateFunction) => void
    setCapacityState?: Dispatch<SetStateAction<ICapacityData>>
}

export default FormCapacity