import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField,  MenuItem, Typography, Divider, Fab, InputAdornment, } from '@material-ui/core';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types'
import Axios from 'axios';
import { url } from '../config/config';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 50,
        // lineHeight:1
        backgroundColor: '#eee',
        [theme.breakpoints.down('sm')]: {
            // width: 'inherit',
            padding: 3
            // overflowX:'auto'
        }
    },
    paper: {
        padding: 15,
        marginBottom: 12,
        [theme.breakpoints.down('sm')]: {
            width: 'inherit',
            padding: 0
            // overflowX:'auto'
        }

    },
    textField: {
        margin: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: '25ch',
    },
    heading: {
        marginTop: 50,
        marginBottom: 50
    },
    divider: {
        margin: '12px 0'
    },
    selectLang: {
        margin: theme.spacing(1),
        width: '20ch',
    },
    noLang: {
        margin: theme.spacing(1),
        width: '20ch',
    }
}));



function FormMain3(props) {
    const sty = useStyles();
    const history = useHistory()

    const blood = [
        'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+', 'O-', 'O+', 'Unknown'
    ]
    const Religion = [
        'Hinduism',
        'Islam',
        'Christianity',
        'Sikhism',
        'Buddhism',
        'Jainism',
        'Unaffiliated',
        'Others',
    ]
    function isSubject(ref, msg) {
        return Yup.mixed().test({
            name: 'isSubject',
            exclusive: false,
            message: msg || 'require b',
            params: {
                reference: ref.path,
            },
            test: function (value) {
                return this.resolve(ref) ? value ? true : false : true
            },
        });
    }
    Yup.addMethod(Yup.number, 'isSubject', isSubject);
    const schema = Yup.object().shape({
        fatherName: Yup.string().required('Required'),
        fatherKaj: Yup.string().required('Required'),
        motherName: Yup.string().required('Required'),
        motherKaj: Yup.string().required('Required'),
        guardianName: Yup.string().required('Required'),
        guardianRelation: Yup.string().required('Required'),
        guardianNo: Yup.string().length(10, 'Invalid').required('Required'),
        x: Yup.boolean(),
        MIncome: Yup.number().required('Required'),
        gender: Yup.string().required('Required'),
        maritalStatus: Yup.string().required('Required'),
        blood: Yup.string().required('Required'),
        religion: Yup.string().required('Required'),
        nationality: Yup.string().required('Required'),
    })

    return (

        <Formik
            initialValues={{
                gender: 'Male',
                maritalStatus: 'Single',
                blood: '',
                religion: '',
                nationality: "Indian",
                pwd: 'No',
                x: true,
                fatherName: "",
                fatherKaj: "",
                motherName: "",
                motherKaj: "",
                guardianName: "",
                guardianRelation: "",
                guardianNo: "",
                MIncome: "",
                AddressP: "",
                PSP: "",
                pinP: "",
                cityP: "",
                stateP: '',
                countryP: 'India',
                AddressX: "",
                PSPX: "",
                pinPX: "",
                cityPX: "",
                statePX: '',
                countryPX: '',



            }}

            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                const PA = {
                    address: values.AddressX,
                    policeStation: values.PSPX,
                    pin: values.pinPX,
                    city: values.cityPX,
                    state: values.statePX,
                    country: values.countryPX,
                }
                const presentAddress = {
                    address: values.AddressP,
                    policeStation: values.PSP,
                    pin: values.pinP,
                    city: values.cityP,
                    state: values.stateP,
                    country: values.countryP,
                }
                const permanentAddress = values.x ? presentAddress : PA

                const data = {
                    gender: values.gender,
                    maritalStatus: values.maritalStatus,
                    blood: values.blood,
                    religion: values.religion,
                    nationality: values.nationality,
                    pwd: values.pwd,
                    permanentAddressSame: values.x,

                    father: {
                        name: values.fatherName,
                        occupation: values.fatherKaj,
                    },
                    mother: {
                        name: values.motherName,
                        occupation: values.motherKaj,
                    },
                    guardian: {
                        name: values.guardianName,
                        number: values.guardianNo,
                        relation: values.guardianRelation,
                    },
                    familyIncome: values.MIncome,
                    presentAddress,
                    permanentAddress
                }
                console.log(data);

                Axios.post(`${url}/api/student/${props.id}/family`, 
                // Axios.put(`${url}/api/student/5180825396`,
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }, credentials: 'include',
                    }
                ).then((resp) => {
                    console.log(resp);
                    if (resp.data.success === true) {
                        setSubmitting(false);
                        localStorage.setItem('step', 3)
                        props.success(3);

                    }
                    if (resp.data.error === true) {
                        setSubmitting(false);
                        alert(resp.data.message)
                    }
                }
                ).catch(r => console.log(r))

            }}

            validationSchema={schema}
        >
            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                } = props;
                return (

                    <Form>
                        <Typography variant='h6'>Personal Details</Typography>
                        <div>
                            <Field
                                name="gender"
                                required
                                select
                                className={sty.textField}
                                as={TextField}
                                label="Select Gender"
                                error={errors.gender && touched.gender}
                                helperText={(errors.gender && touched.gender) && errors.gender}
                            >
                                <MenuItem value='Male'>
                                    Male
                                </MenuItem>
                                <MenuItem value='Female'>
                                    Female
                                </MenuItem>
                                <MenuItem value='TG'>
                                    TG
                                </MenuItem>
                            </Field>
                            <Field
                                name="maritalStatus"
                                select
                                className={sty.textField}
                                error={errors.maritalStatus && touched.maritalStatus}
                                helperText={(errors.maritalStatus && touched.maritalStatus) && errors.maritalStatus}
                                as={TextField}
                                label="Select Marital Status"
                            >
                                <MenuItem value='Single'>
                                    Single
                            </MenuItem>
                                <MenuItem value='Married'>
                                    Married
                            </MenuItem>


                            </Field>
                            <Field
                                name="blood"
                                select
                                className={sty.textField}
                                error={errors.blood && touched.blood}
                                helperText={(errors.blood && touched.blood) && errors.blood}
                                as={TextField}
                                label="Select Blood Group"
                            >
                                {blood.map(p => {
                                    return (<MenuItem key={p} value={p}>
                                        {p}
                                    </MenuItem>)
                                })}
                            </Field>
                            <Field
                                name="religion"
                                select
                                className={sty.textField}
                                error={errors.religion && touched.religion}
                                helperText={(errors.religion && touched.religion) && errors.religion}
                                as={TextField}
                                label="Select Religion"
                            >
                                {Religion.map(p => {
                                    return (<MenuItem key={p} value={p}>
                                        {p}
                                    </MenuItem>)
                                })}
                            </Field>
                            <Field
                                name="nationality"
                                className={sty.textField}
                                error={errors.nationality && touched.nationality}
                                helperText={(errors.nationality && touched.nationality) && errors.nationality}
                                as={TextField}
                                label="Nationality"
                            />
                            <Field
                                name="pwd"
                                className={sty.textField}
                                required

                                select
                                as={TextField}
                                label="Physically Challenged? (Handicapped)"
                            >
                                <MenuItem value='No'>No</MenuItem>
                                <MenuItem value='Yes'>Yes</MenuItem>
                            </Field>

                        </div>
                        <Divider className={sty.divider} />
                        <Typography variant='subtitle1'>Guardian Details</Typography>
                        <div>
                            <Field
                                name="fatherName"
                                label="Applicant Father Name"
                                className={sty.textField}
                                // placeholder="First Name"
                                error={errors.fatherName && touched.fatherName}
                                helperText={(errors.fatherName && touched.fatherName) && errors.fatherName}
                                as={TextField}

                            />
                            <Field
                                name="fatherKaj"
                                label="Applicant Father Occupation"
                                className={sty.textField}
                                // placeholder="First Name"
                                error={errors.fatherKaj && touched.fatherKaj}
                                helperText={(errors.fatherKaj && touched.fatherKaj) && errors.fatherName}
                                as={TextField}

                            />
                            <Field
                                name="motherName"
                                label="Applicant Mother Name"
                                className={sty.textField}
                                // placeholder="First Name"
                                error={errors.motherName && touched.motherName}
                                helperText={(errors.motherName && touched.motherName) && errors.motherName}
                                as={TextField}

                            />
                            <Field
                                name="motherKaj"
                                label="Applicant Mother Occupation"
                                className={sty.textField}
                                // placeholder="First Name"
                                error={errors.motherKaj && touched.motherKaj}
                                helperText={(errors.motherKaj && touched.motherKaj) && errors.motherKaj}
                                as={TextField}

                            />
                            <Field
                                name="guardianName"
                                label="Applicant Guardian's Name"
                                className={sty.textField}
                                error={errors.guardianName && touched.guardianName}
                                helperText={(errors.guardianName && touched.guardianName) && errors.guardianName}
                                as={TextField}
                            />
                            <Field
                                name="guardianRelation"
                                label="Applicant Guardian's Relation"
                                className={sty.textField}
                                error={errors.guardianRelation && touched.guardianRelation}
                                helperText={(errors.guardianRelation && touched.guardianRelation) && errors.guardianRelation}
                                as={TextField}
                            />

                            <Field
                                label="Guardian's Mobile No"
                                name="guardianNo"
                                type='number'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            +91
                                        </InputAdornment>
                                    )
                                }}
                                className={sty.textField}
                                margin="dense"
                                error={errors.guardianNo && touched.guardianNo}
                                helperText={(errors.guardianNo && touched.guardianNo) && errors.guardianNo}
                                as={TextField}
                            />
                            <Field
                                // InputLabelProps={{
                                //     shrink: true,
                                // }}
                                label="Monthly Family Income"
                                name="MIncome"
                                className={sty.textField}
                                type='number'
                                error={errors.MIncome && touched.MIncome}
                                helperText={(errors.MIncome && touched.MIncome) && errors.MIncome}
                                as={TextField}
                            />

                        </div>
                        <Divider className={sty.divider} />
                        <div>
                            <Typography variant='h6'>Address & Communication</Typography>
                            <Typography variant='subtitle1'>Present Address</Typography>
                            <Field
                                label="Address"
                                name="AddressP"
                                fullWidth
                                required
                                className={sty.textField}
                                error={errors.AddressP && touched.AddressP}
                                helperText={(errors.AddressP && touched.AddressP) && errors.AddressP}
                                as={TextField}
                            />
                            <Field
                                error={errors.PSP && touched.PSP}
                                helperText={(errors.PSP && touched.PSP) && errors.PSP}
                                as={TextField}
                                name="PSP"
                                required
                                label="Police Station"
                                className={sty.textField}
                            />
                            <Field
                                name="pinP"
                                type='number'
                                required
                                label="PIN Code"
                                className={sty.textField}
                                error={errors.pinP && touched.pinP}
                                helperText={(errors.pinP && touched.pinP) && errors.pinP}
                                as={TextField}
                            />
                            <Field
                                name="cityP"
                                label="City / District"
                                className={sty.textField}
                                error={errors.cityP && touched.cityP}
                                helperText={(errors.cityP && touched.cityP) && errors.cityP}
                                as={TextField}
                                required
                            />
                            <Field
                                required
                                error={errors.stateP && touched.stateP}
                                helperText={(errors.stateP && touched.stateP) && errors.stateP}
                                as={TextField}
                                name="stateP"
                                label="State"
                                className={sty.textField}
                            />
                            <Field
                                required
                                error={errors.countryP && touched.countryP}
                                helperText={(errors.countryP && touched.countryP) && errors.countryP}
                                as={TextField}
                                name="countryP"
                                label="Country"
                                className={sty.textField}
                            />

                        </div>
                        <Divider className={sty.divider} />
                        <div>
                            <Typography variant='subtitle1'> Permanent Address</Typography>
                            <div style={{ display: 'inline-flex', alignItems: 'center' }}><Field type='checkbox' name='x' /><p> Same as above</p></div><br />
                            {!values.x && <>
                                <Field
                                    label="Address"
                                    name="AddressX"
                                    fullWidth
                                    required
                                    className={sty.textField}
                                    as={TextField}
                                />
                                <Field
                                    as={TextField}
                                    name="PSPX"
                                    required
                                    label="Police Station"
                                    className={sty.textField}
                                />
                                <Field
                                    name="pinPX"
                                    type='number'
                                    required
                                    label="PIN Code"
                                    className={sty.textField}
                                    as={TextField}
                                />
                                <Field
                                    name="cityPX"
                                    required
                                    label="City / District"
                                    className={sty.textField}
                                    as={TextField}
                                />
                                <Field
                                    as={TextField}
                                    required
                                    name="statePX"
                                    label="State"
                                    className={sty.textField}
                                />
                                <Field
                                    as={TextField}
                                    required
                                    name="countryPX"
                                    label="Country"
                                    className={sty.textField}
                                /></>}
                        </div>
                        <br />
                        <Fab style={{ margin: '20px 0' }} color="primary" variant='extended' type='submit' >submit & Next</Fab>
                    </Form>)
            }}
        </Formik >

    )
}
FormMain3.propType = {
    success: PropType.array.isRequired,
    id: PropType.string.isRequired,

}
export default FormMain3