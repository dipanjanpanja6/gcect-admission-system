import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import { TextField, Paper, Grid, MenuItem, Typography, Divider, Fab, InputAdornment, Checkbox, } from '@material-ui/core';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

import Form1 from './Form2'
import Form2 from './Form3'
import Form3 from './Form4'
import { url } from '../config/config';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    id: {
        height: 12
    },
    root: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 3,
            paddingRight: 3,

        },
        padding: 50,
        backgroundColor: '#eee'
        // lineHeight:1

    },
    paper: {
        // margin: 30,
        width: '100%',
        padding: 15,
        [theme.breakpoints.down('sm')]: {
            width: 'inherit'
            // overflowX:'auto'
        }

    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
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



function FormMain(props) {
    const history = useHistory()
    const sty = useStyles();
    const [next, setNext] = React.useState(0)
    const [id, setId] = useState()
    const formS = (p) => { setNext(p) }
    useEffect(()=>{
        // var step = localStorage.getItem('step')
        if(props.auth){
        if(localStorage.getItem('id')){
            setId(localStorage.getItem('id'))}
        if(localStorage.getItem('step')){
            setNext(localStorage.getItem('step'))
            console.log(localStorage.getItem('step'));
            console.log(next);}}
    },[])
    const b_tech = [
        "CSE", 'IT', 'CT'
    ]
    const m_tech = [
        'IT', 'CT'
    ]

    function gaterThan(ref, msg) {
        return Yup.mixed().test({
            name: 'gaterThan',
            exclusive: false,
            message: msg || 'total>?',
            params: {
                reference: ref.path,
            },
            test: function (value) {
                return this.resolve(ref) ? value <= this.resolve(ref) : true
            },
        });
    }
    Yup.addMethod(Yup.string, 'gaterThan', gaterThan);

    function isSubject(ref, msg) {
        return Yup.mixed().test({
            name: 'isSubject',
            exclusive: false,
            message: msg || 'required',
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
        applicantName: Yup.string().required('Required'),
        applicantName2: Yup.string(),
        applicantName3: Yup.string().required('Required'),
        studentMobileNo: Yup.string().matches(`^[0-9]{10}$`, "Incorrect Mobile no.").required('Required'),
        dob: Yup.date().required('Required'),
        medium: Yup.string().required('Required'),
        caste: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),


        rollNo12th: Yup.string().max(10, "must be at most 10 digit").required('Required'),
        registrationNo12th: Yup.string().max(10, "must be at most 10 digit").required('Required'),
        board12th: Yup.string().required('Required'),
        passYear12th: Yup.number().max(new Date().getFullYear(), "must be at earlier than current year").required('Required'),
        schName12th: Yup.string().required('Required'),

        rollNo10th: Yup.string().max(10, "must be at most 10 digit").required('Required'),
        registrationNo10th: Yup.string().max(10, "must be at most 10 digit").required('Required'),
        board10th: Yup.string().required('Required'),
        passYear10th: Yup.number().max(new Date().getFullYear(), "must be at earlier than current pass year").required('Required'),
        schName10th: Yup.string().required('Required'),
        percent10th: Yup.number("Must be a number").positive("must be a positive number").max(100).required('Required'),

        IdNo: Yup.string().matches(`^([0-9]{10})|([A-Z]{5}[0-9]{4}[A-Z]{1})|(([a-zA-Z]){3}([0-9]){7}?)$`, "Incorrect ID").required('Required'),
        idType: Yup.string().required('Required'),


        marksPassLastExam: Yup.number().max(100, "must be at most 100%"),
        yearPassLastExam: Yup.number(),
        boardLastExam: Yup.string(),
        nameLastExam: Yup.string(),

        rollNoEE: Yup.string().required('Required'),
        rankEE: Yup.number().required('Required'),
        entranceType: Yup.string().required('Required'),
        passYearEE: Yup.number().max(new Date().getFullYear(), "must be at earlier than current year").required('Required'),

    })

    console.log(next);

    return (
        <Grid container justify='center' alignItems='center' className={sty.root}>
            <Grid className={sty.heading} item>
                <Typography variant='h4'>
                    Government College of Engineering And Ceramic Technology
                </Typography>
                <Typography variant='subtitle1'>
                    Online admission form
                </Typography>
            </Grid>

            <Paper className={sty.paper} elevation={10} >
                {next == 0 && <Formik
                    initialValues={{
                        marksPassLastExam: '',
                        yearPassLastExam: '',
                        boardLastExam: "",
                        nameLastExam: "",

                        rollNoEE: "",
                        rankEE: "",
                        passYearEE: "",
                        entranceType: 'JEE',

                        rollNo12th: "",
                        registrationNo12th: "",
                        board12th: "WEST BENGAL COUNCIL OF HIGHER SECONDARY EDUCATION",
                        passYear12th: "",
                        schName12th: "",

                        rollNo10th: "",
                        registrationNo10th: "",
                        board10th: "WEST BENGAL BOARD OF SECONDARY EDUCATION",
                        passYear10th: "",
                        schName10th: "",
                        percent10th: '',

                        idType: "AADHAAR",
                        IdNo: "",
                        medium: "Bengali",
                        dob: "",
                        studentMobileNo: "",
                        email: "",

                        castes: "",
                        caste: "",
                        applicantName: "",
                        applicantName2: "",
                        applicantName3: "",
                        applicantType: 'General',
                        courseType: 'B.Tech',
                        stream: '',
                        lateral: false




                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        const data = {
                            applicantType: values.applicantType,
                            firstName: values.applicantName,
                            middleName: values.applicantName2,
                            lastName: values.applicantName3,
                            caste: values.castes,//
                            category: values.caste,
                            mobile: values.studentMobileNo,
                            email: values.email,
                            idType: values.idType,
                            idNo: values.IdNo,
                            medium: values.medium,
                            dob: values.dob,
                            course: values.courseType,
                            stream: values.stream,
                            lateral: values.lateral,
                            XII: {
                                roll: values.rollNo12th,
                                registration: values.registrationNo12th,
                                board: values.board12th,
                                year: values.passYear12th,
                                school: values.schName12th,
                            },
                            X: {
                                roll: values.rollNo10th,
                                registration: values.registrationNo10th,
                                board: values.board10th,
                                year: values.passYear10th,
                                school: values.schName10th,
                                marks: values.percent10th,
                            },
                            entranceExam: {
                                roll: values.rollNoEE,
                                rank: values.rankEE,
                                year: values.passYearEE,
                                name: values.entranceType,
                            },
                            lastExam: {
                                marks: values.marksPassLastExam,
                                year: values.yearPassLastExam,
                                board: values.boardLastExam,
                                name: values.nameLastExam,
                            }

                        }
                        console.log(data);
                        // console.log(values);

                        axios.post(`${url}/api/student`,
                            data,
                            {
                                headers: {
                                    // 'Access-Control-Allow-Origin': '*',
                                    'Content-Type': 'application/json',
                                }
                            }
                        ).then((resp) => {
                            console.log(resp);
                            if (resp.data.success === true) {
                                setSubmitting(false);
                                localStorage.setItem('step',2)
                                localStorage.setItem('id',resp.data.id)
                                setId(resp.data.id)
                                setNext(2);
                            }
                            if (resp.data.error === true) {
                                setSubmitting(false);
                                alert(resp.data.message)
                            }
                        }
                        ).catch(r => console.log(r))
                        alert(JSON.stringify(data, null, 2));
                    }
                    }

                    validationSchema={schema}
                >
                    {(props) => {
                        const {
                            values,
                            touched,
                            errors,
                            handleBlur,
                        } = props;
                        return (
                            <Form>
                                <div>
                                    <Field
                                        name="applicantType"
                                        select
                                        label="Select your applicantType"
                                        style={{ margin: 8 }}
                                        required
                                        className={sty.textField}
                                        as={TextField}
                                        // helperText="Select your applicant Type"
                                        onBlur={handleBlur}
                                    >
                                        <MenuItem value='General'>
                                            General
                            </MenuItem>
                                        <MenuItem value='TFW'>
                                            TFW
                            </MenuItem>
                                    </Field>
                                    <Field
                                        name="courseType"
                                        select
                                        className={sty.textField}
                                        style={{ margin: 8 }}
                                        required
                                        as={TextField}
                                        label="Select Course Type"
                                        onBlur={handleBlur}
                                    >
                                        <MenuItem value='B.Tech'>
                                            B.Tech                            </MenuItem>
                                        <MenuItem value='M.Tech'>
                                            M.Tech                            </MenuItem>
                                    </Field>
                                    <Field
                                        name="stream"
                                        select
                                        // label="Please select your applicantType"
                                        style={{ margin: 8 }}
                                        className={sty.textField}
                                        required
                                        as={TextField}
                                        label="Select Stream"
                                        onBlur={handleBlur}
                                    >
                                        {values.courseType ? values.courseType === 'B.Tech' ?
                                            b_tech.map(p => {
                                                return (<MenuItem key={p} value={p}>{p}</MenuItem>)
                                            }) : m_tech.map(p => {
                                                return (<MenuItem key={p} value={p}>{p}</MenuItem>)

                                            }) : ""
                                        }

                                    </Field>
                                    <Grid style={{ display: 'inline-flex' }}>

                                        <Field
                                            onBlur={handleBlur}
                                            name='lateral'
                                            as={Checkbox}
                                        /><p>Lateral Entry</p>
                                    </Grid>
                                </div>
                                <Divider className={sty.divider} />
                                <div>
                                    <Field
                                        name="applicantName"
                                        label="Applicant First Name"
                                        style={{ margin: 8 }}
                                        placeholder="First Name"
                                        margin="normal"
                                        error={errors.applicantName && touched.applicantName}
                                        helperText={(errors.applicantName && touched.applicantName) && errors.applicantName}
                                        as={TextField}
                                    />
                                    <Field
                                        name="applicantName2"
                                        label="Middle Name(if any)"
                                        style={{ margin: 8 }}
                                        placeholder="Middle Name"
                                        margin="normal"
                                        error={errors.applicantName2 && touched.applicantName2}
                                        helperText={(errors.applicantName2 && touched.applicantName2) && errors.applicantName2}
                                        as={TextField}
                                    />
                                    <Field
                                        name="applicantName3"
                                        label="Applicant Last Name"
                                        style={{ margin: 8 }}
                                        placeholder="Last Name"
                                        margin="normal"
                                        error={errors.applicantName3 && touched.applicantName3}
                                        helperText={(errors.applicantName3 && touched.applicantName3) && errors.applicantName3}
                                        as={TextField}
                                    />

                                    <Field
                                        label="Categories"
                                        name="caste"
                                        error={errors.caste && touched.caste}
                                        helperText={(errors.caste && touched.caste) && errors.caste}
                                        select
                                        required
                                        margin='dense'
                                        className={sty.textField}
                                        as={TextField}
                                    >
                                        <MenuItem value='General'>
                                            General
                            </MenuItem>
                                        <MenuItem value='SC'>
                                            SC
                            </MenuItem>
                                        <MenuItem value='ST'>
                                            ST
                            </MenuItem>
                                        <MenuItem value='OBC-A'>
                                            OBC-A
                            </MenuItem>
                                        <MenuItem value='OBC-B'>
                                            OBC-B
                            </MenuItem>
                                    </Field>
                                    {values.caste ? values.caste !== "General" &&
                                        <Field
                                            name="castes"
                                            label="Select Sub caste"
                                            style={{ margin: 8 }}
                                            margin="normal"
                                            required
                                            error={errors.castes && touched.castes}
                                            helperText={(errors.castes && touched.castes) && errors.castes}
                                            as={TextField}
                                        /> : null
                                    }
                                    <Field
                                        label="Student Mobile No"
                                        name="studentMobileNo"
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
                                        error={errors.studentMobileNo && touched.studentMobileNo}
                                        helperText={(errors.studentMobileNo && touched.studentMobileNo) && errors.studentMobileNo}
                                        as={TextField}
                                    />
                                    <Field
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        label="Date of Birth"
                                        name="dob"
                                        className={sty.textField}
                                        // helperText="dd.mm.yyy"
                                        margin='dense'
                                        type='date'
                                        error={errors.dob && touched.dob}
                                        helperText={(errors.dob && touched.dob) && errors.dob}
                                        as={TextField}
                                    />

                                    <Field
                                        label="Medium"
                                        name="medium"
                                        required
                                        className={sty.textField}
                                        defaultValue='Bengali'
                                        margin='dense'
                                        select
                                        error={errors.medium && touched.medium}
                                        helperText={(errors.medium && touched.medium) && errors.medium}
                                        as={TextField}
                                    >
                                        <MenuItem value='Bengali'>
                                            Bengali
                            </MenuItem>
                                        <MenuItem value='English'>
                                            English
                            </MenuItem>
                                    </Field>

                                    <Field
                                        placeholder="Enter ID No"
                                        name="IdNo"
                                        margin='dense'
                                        className={sty.textField}
                                        style={{ width: 'auto' }}
                                        error={errors.IdNo && touched.IdNo}
                                        helperText={(errors.IdNo && touched.IdNo) && errors.IdNo}
                                        as={TextField}
                                        InputProps={{
                                            startAdornment: (
                                                <Field
                                                    label="Select ID"
                                                    variant='filled'
                                                    size="small"
                                                    name="idType"
                                                    style={{ width: '20ch', marginRight: 12 }}
                                                    classes={{ inputBase: sty.id }}
                                                    select
                                                    required
                                                    error={errors.idType && touched.idType}
                                                    helperText={(errors.idType && touched.idType) && errors.idType}
                                                    as={TextField}>
                                                    <MenuItem value='AADHAAR'>
                                                        AADHAAR
                                </MenuItem>
                                                    <MenuItem value='PAN'>
                                                        PAN
                                </MenuItem>
                                                    <MenuItem value='EPIC'>
                                                        EPIC
                                </MenuItem>
                                                </Field>
                                            )
                                        }}
                                    >
                                    </Field>
                                    <Field
                                        name="email"
                                        className={sty.textField}
                                        error={errors.email && touched.email}
                                        helperText={(errors.email && touched.email) && errors.email}

                                        as={TextField}
                                        label="E-mail"
                                    />
                                </div>
                                <Divider className={sty.divider} />
                                <div>
                                    <Typography variant='subtitle1'>Madhyamik (10th Level) details</Typography>
                                    <Field
                                        label="Name of School"
                                        name="schName10th"
                                        fullWidth
                                        style={{ margin: 8 }}
                                        error={errors.schName10th && touched.schName10th}
                                        helperText={(errors.schName10th && touched.schName10th) && errors.schName10th}
                                        as={TextField}
                                    />
                                    <Field
                                        name="passYear10th"
                                        type='number'
                                        label="Year of Passing"
                                        style={{ margin: 8 }}
                                        margin='dense'
                                        error={errors.passYear10th && touched.passYear10th}
                                        helperText={(errors.passYear10th && touched.passYear10th) && errors.passYear10th}
                                        as={TextField}
                                    />

                                    <Field
                                        name="board10th"
                                        select
                                        required
                                        label="Name of Board"
                                        style={{ margin: 8 }}
                                        className={sty.textField}
                                        error={errors.board10th && touched.board10th}
                                        helperText={(errors.board10th && touched.board10th) && errors.board10th}
                                        as={TextField}
                                    >
                                        <MenuItem value='WEST BENGAL BOARD OF SECONDARY EDUCATION'>
                                            WEST BENGAL BOARD OF SECONDARY EDUCATION
                            </MenuItem>
                                        <MenuItem value='CENTRAL BOARD OF SECONDARY EDUCATION'>
                                            CENTRAL BOARD OF SECONDARY EDUCATION
                            </MenuItem>
                                        <MenuItem value='COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATION'>
                                            COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATION
                            </MenuItem>
                                        <MenuItem value='OTHERS'>
                                            OTHERS
                           </MenuItem>
                                    </Field>
                                    <Field
                                        error={errors.registrationNo10th && touched.registrationNo10th}
                                        helperText={(errors.registrationNo10th && touched.registrationNo10th) && errors.registrationNo10th}
                                        as={TextField}

                                        name="registrationNo10th"
                                        label="10th Registration No."
                                        style={{ margin: 8 }}
                                        margin='dense'
                                    />
                                    <Field
                                        error={errors.rollNo10th && touched.rollNo10th}
                                        helperText={(errors.rollNo10th && touched.rollNo10th) && errors.rollNo10th}
                                        as={TextField}

                                        name="rollNo10th"
                                        label="10th Roll No"
                                        style={{ margin: 8 }}
                                        margin='dense'
                                    />
                                    <Field
                                        error={errors.percent10th && touched.percent10th}
                                        helperText={(errors.percent10th && touched.percent10th) && errors.percent10th}
                                        as={TextField}

                                        name="percent10th"
                                        label="Marks %"
                                        style={{ margin: 8 }}
                                        type='number'
                                        margin='dense'
                                    />
                                </div>
                                <Divider className={sty.divider} />
                                <div>
                                    <Typography variant='subtitle1'>Higher Secondary (12th Level) details</Typography>
                                    <Field
                                        label="Name of School"
                                        name="schName12th"
                                        error={errors.schName12th && touched.schName12th}
                                        helperText={(errors.schName12th && touched.schName12th) && errors.schName12th}
                                        as={TextField}
                                        fullWidth
                                        style={{ margin: 8 }}
                                    />
                                    <Field
                                        error={errors.passYear12th && touched.passYear12th}
                                        helperText={(errors.passYear12th && touched.passYear12th) && errors.passYear12th}
                                        as={TextField}

                                        type='number'
                                        name="passYear12th"
                                        label="Year of Passing"
                                        style={{ margin: 8 }}
                                        margin='dense'
                                    />
                                    <Field
                                        name="board12th"
                                        required
                                        error={errors.board12th && touched.board12th}
                                        helperText={(errors.board12th && touched.board12th) && errors.board12th}
                                        as={TextField}
                                        select
                                        label="Name of Board"
                                        style={{ margin: 8 }}
                                        className={sty.textField}
                                    >
                                        <MenuItem value='WEST BENGAL COUNCIL OF HIGHER SECONDARY EDUCATION'>
                                            WEST BENGAL COUNCIL OF HIGHER SECONDARY EDUCATION
                            </MenuItem>
                                        <MenuItem value='CENTRAL BOARD OF SECONDARY EDUCATION'>
                                            CENTRAL BOARD OF SECONDARY EDUCATION
                            </MenuItem>
                                        <MenuItem value='COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATION'>
                                            COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATION
                            </MenuItem>
                                        <MenuItem value='OTHERS'>
                                            OTHERS
                           </MenuItem>


                                    </Field>
                                    <Field
                                        error={errors.registrationNo12th && touched.registrationNo12th}
                                        helperText={(errors.registrationNo12th && touched.registrationNo12th) && errors.registrationNo12th}
                                        as={TextField}

                                        name="registrationNo12th"
                                        label="HS Registration No."
                                        style={{ margin: 8 }}
                                        margin='dense'
                                    />
                                    <Field
                                        error={errors.rollNo12th && touched.rollNo12th}
                                        helperText={(errors.rollNo12th && touched.rollNo12th) && errors.rollNo12th}
                                        as={TextField}

                                        name="rollNo12th"
                                        label="HS Roll No"
                                        style={{ margin: 8 }}
                                        // type='number'
                                        margin='dense'
                                    />

                                </div>
                                <Divider className={sty.divider} />
                                <div>
                                    <Typography variant='subtitle1'> Entrance details</Typography>

                                    <Field
                                        error={errors.entranceType && touched.entranceType}
                                        helperText={(errors.entranceType && touched.entranceType) && errors.entranceType}
                                        as={TextField}
                                        select
                                        name="entranceType"
                                        label="Select Entrance Exam"
                                        className={sty.textField}
                                        margin='dense'
                                    >
                                        <MenuItem value='JEE'>JEE</MenuItem>
                                        <MenuItem value='JELET'>JELET</MenuItem>
                                    </Field>

                                    <Field
                                        error={errors.rankEE && touched.rankEE}
                                        helperText={(errors.rankEE && touched.rankEE) && errors.rankEE}
                                        as={TextField}

                                        name="rankEE"
                                        label={values.entranceType + ` Rank`}
                                        style={{ margin: 8 }}
                                        margin='dense'
                                        type='number'
                                    />
                                    <Field
                                        error={errors.rollNoEE && touched.rollNoEE}
                                        helperText={(errors.rollNoEE && touched.rollNoEE) && errors.rollNoEE}
                                        as={TextField}
                                        name="rollNoEE"
                                        label={values.entranceType + ` Roll Number`}
                                        style={{ margin: 8 }}
                                        margin='dense'
                                    />
                                    <Field
                                        error={errors.passYearEE && touched.passYearEE}
                                        helperText={(errors.passYearEE && touched.passYearEE) && errors.passYearEE}
                                        as={TextField}

                                        type='number'
                                        name="passYearEE"
                                        label={values.entranceType + ` Year of Passing`}
                                        style={{ margin: 8 }}
                                        margin='dense'
                                    />

                                </div>
                                <Divider className={sty.divider} />
                                <div>
                                    <Typography variant='subtitle1'>Details of Last exam / Graduation (if any)</Typography>

                                    <Field
                                        error={errors.nameLastExam && touched.nameLastExam}
                                        helperText={(errors.nameLastExam && touched.nameLastExam) && errors.nameLastExam}
                                        as={TextField}
                                        name="nameLastExam"
                                        label="Name of Exam"
                                        style={{ margin: 8 }}
                                        margin='dense'
                                        type='text'
                                    />
                                    <Field
                                        error={errors.boardLastExam && touched.boardLastExam}
                                        helperText={(errors.boardLastExam && touched.boardLastExam) && errors.boardLastExam}
                                        as={TextField}
                                        name="boardLastExam"
                                        label="Board / University"
                                        style={{ margin: 8 }}
                                        margin='dense'
                                    />
                                    <Field
                                        error={errors.yearPassLastExam && touched.yearPassLastExam}
                                        helperText={(errors.yearPassLastExam && touched.yearPassLastExam) && errors.yearPassLastExam}
                                        as={TextField}
                                        name="yearPassLastExam"
                                        label="Year of Passing"
                                        style={{ margin: 8 }}
                                        type='number'
                                        margin='dense'
                                    />
                                    <Field
                                        error={errors.marksPassLastExam && touched.marksPassLastExam}
                                        helperText={(errors.marksPassLastExam && touched.marksPassLastExam) && errors.marksPassLastExam}
                                        as={TextField}
                                        name="marksPassLastExam"
                                        label="Marks %"
                                        style={{ margin: 8 }}
                                        type='number'
                                        margin='dense'
                                    />
                                </div>
                                <Divider className={sty.divider} />
                                <br />
                                <Fab style={{ margin: '20px 0' }} color="primary" variant='extended' type='submit' >submit & Next</Fab>
                            </Form>)
                    }}
                </Formik>
                }
                {/* {next === 1 && <Form1 success={formS} />} */}
                {next == 2 && <Form2 success={formS} id={id} />}
                {next == 3 && <Form3 id={id}/>}
            </Paper>
        </Grid >
    );
}

export default FormMain