import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Grid, MenuItem, Typography, Divider, Fab, InputAdornment, InputBase } from '@material-ui/core';
import { Form, Field, useFormikContext, Formik } from 'formik';
import * as Yup from 'yup';
import './aplicant details/botstrap.css'
import './aplicant details//hs_mp.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 50,
        // lineHeight:1

    },
    paper: {
        // margin: 30,
        padding: 5,
        overflowX: 'auto'

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
    const sty = useStyles();
    const history = useHistory()

    const [next, setNext] = React.useState(false)

    const langMenuXII = [
        null,
        'BENGALI',
        'ENGLISH',

    ]
    const compMenuXII = [
        null, 'MATH', 'PHYSICS', 'CHEMISTRY'
    ]
    const electMenuXII = [
        null, 'COMPUTER APPLICATION', 'BIOLOGY'
    ]


    const langMenu = [
        null,
        'BENGALI',
        'ENGLISH / ENGLISH COMMUNICATIONS',
        'HINDI',
    ]
    const compMenu = [
        null, 'GEOGRAPHY', 'HISTORY', 'HISTORY AND GEOGRAPHY', 'LIFE SCIENCE', 'MATH', 'PHYSICAL SCIENCE', 'SCIENCE'
    ]
    const electMenu = [
        null, 'COMPUTER APPLICATION', 'FOUNDATION OF IT', 'SOCIAL SCIENCE'
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
                console.log(this.resolve(ref),">=",value);
                console.log(this.resolve(ref) ? this.resolve(ref)>=value : true );
                return this.resolve(ref) ? this.resolve(ref)>=value : true
                // return false
            },
        });
    }
    Yup.addMethod(Yup.string, 'gaterThan', gaterThan);

    function isSubject(ref, msg) {
        return Yup.mixed().test({
            name: 'isSubject',
            exclusive: false,
            message: msg || 'requiredj',
            params: {
                reference: ref.path,
            },
            test: function (value) {
                // console.log(12<=0);
                return this.resolve(ref) ? value>=0 ? true : false : true
            },
        });
    }
    Yup.addMethod(Yup.number, 'isSubject', isSubject);
    const schema = Yup.object().shape({

        // Sub1X: Yup.string().required('required'),
        // Sub2X: Yup.string().nullable(),
        // Sub3X: Yup.string().required('Required'),
        // Sub4X: Yup.string().required('Required'),
        // Sub5X: Yup.string().required('Required'),
        // Sub6X: Yup.string().nullable(),
        // Sub7X: Yup.string().nullable(),
        // Sub8X: Yup.string().nullable(),



        Sub1XII: Yup.string().required('required'),
        Sub2XII: Yup.string().nullable(),
        Sub3XII: Yup.string().required('Required'),
        Sub4XII: Yup.string().required('Required'),
        Sub5XII: Yup.string().required('Required'),
        Sub6XII: Yup.string().nullable(),
        //////



        TotalMarksXII1: Yup.number().required('Required'),
        TotalMarksXII2: Yup.number().isSubject(Yup.ref('Sub2XII')),
        TotalMarksXII3: Yup.number().required('Required'),
        TotalMarksXII4: Yup.number().required('Required'),
        TotalMarksXII5: Yup.number().required('Required'),
        TotalMarksXII6: Yup.number().isSubject(Yup.ref('Sub6XII')),
        

        MarksObtainedXII1: Yup.string().gaterThan(Yup.ref('TotalMarksXII1')),
        MarksObtainedXII2: Yup.string().gaterThan(Yup.ref('TotalMarksXII2')),
        MarksObtainedXII3: Yup.string().gaterThan(Yup.ref('TotalMarksXII3')),
        MarksObtainedXII4: Yup.string().gaterThan(Yup.ref('TotalMarksXII4')),
        MarksObtainedXII5: Yup.string().gaterThan(Yup.ref('TotalMarksXII5')),
        MarksObtainedXII6: Yup.string().gaterThan(Yup.ref('TotalMarksXII6')),





        TotalMarksXII1p: Yup.number().required('required'),
        TotalMarksXII2p: Yup.number().isSubject(Yup.ref('Sub2XII')),
        TotalMarksXII3p: Yup.number().required('Required'),
        TotalMarksXII4p: Yup.number().required('Required'),
        TotalMarksXII5p: Yup.number().isSubject(Yup.ref('Sub5XII')),
        TotalMarksXII6p: Yup.number().isSubject(Yup.ref('Sub6XII')),



        MarksObtainedXII1p: Yup.string().gaterThan(Yup.ref('TotalMarksXII1p')),
        MarksObtainedXII2p: Yup.string().gaterThan(Yup.ref('TotalMarksXII2p')),
        MarksObtainedXII3p: Yup.string().gaterThan(Yup.ref('TotalMarksXII3p')),
        MarksObtainedXII4p: Yup.string().gaterThan(Yup.ref('TotalMarksXII4p')),
        MarksObtainedXII5p: Yup.string().gaterThan(Yup.ref('TotalMarksXII5p')),
        MarksObtainedXII6p: Yup.string().gaterThan(Yup.ref('TotalMarksXII6p')),
        ///









        // TotalMarksX1: Yup.number().required('Required').max(200, 'max200'),
        // MarksObtainedX1: Yup.string().gaterThan(Yup.ref('TotalMarksX1')),

        // TotalMarksX2: Yup.number().positive().max(200, 'max200').isSubject(Yup.ref('Sub2X')),
        // MarksObtainedX2: Yup.string().gaterThan(Yup.ref('TotalMarksX2')),

        // TotalMarksX3: Yup.number().max(200, 'max 200').required('Required'),
        // MarksObtainedX3: Yup.string().gaterThan(Yup.ref('TotalMarksX3')),

        // TotalMarksX4: Yup.number().max(200, 'max 200').required('Required'),
        // MarksObtainedX4: Yup.string().gaterThan(Yup.ref('TotalMarksX4')),

        // TotalMarksX5: Yup.number().max(200, 'max 200').required('Required'),
        // MarksObtainedX5: Yup.string().gaterThan(Yup.ref('TotalMarksX5')),

        // TotalMarksX6: Yup.number().max(200, 'max 200').isSubject(Yup.ref('Sub6X')),
        // MarksObtainedX6: Yup.string().gaterThan(Yup.ref('TotalMarksX6')),

        // TotalMarksX7: Yup.number().max(200, 'max 200').isSubject(Yup.ref('Sub7X')),
        // MarksObtainedX7: Yup.string().gaterThan(Yup.ref('TotalMarksX7')),

        // TotalMarksX8: Yup.number().max(200, 'max 200').isSubject(Yup.ref('Sub8X')),
        // MarksObtainedX8: Yup.string().gaterThan(Yup.ref('TotalMarksX8')),


        // TotalMarksX1p: Yup.number().positive('need positive no').required('required'),
        // MarksObtainedX1p: Yup.string().gaterThan(Yup.ref('TotalMarksX1p')),

        // TotalMarksX2p: Yup.number().positive('need positive no').isSubject(Yup.ref('Sub2X')),
        // MarksObtainedX2p: Yup.string().gaterThan(Yup.ref('TotalMarksX2p')),

        // TotalMarksX3p: Yup.number().positive().max(200, 'max 200').required('Required'),
        // MarksObtainedX3p: Yup.string().gaterThan(Yup.ref('TotalMarksX3p')),

        // TotalMarksX4p: Yup.number().positive().max(200, 'max 200').required('Required'),
        // MarksObtainedX4p: Yup.string().gaterThan(Yup.ref('TotalMarksX4p')),

        // TotalMarksX5p: Yup.number().positive().max(200, 'max 200').required('Required'),
        // MarksObtainedX5p: Yup.string().gaterThan(Yup.ref('TotalMarksX5p')),

        // TotalMarksX6p: Yup.number().positive().max(200, 'max 200').isSubject(Yup.ref('Sub6X')),
        // MarksObtainedX6p: Yup.string().gaterThan(Yup.ref('TotalMarksX6p')),

        // TotalMarksX7p: Yup.number().positive().max(200, 'max 200').isSubject(Yup.ref('Sub7X')),
        // MarksObtainedX7p: Yup.string().gaterThan(Yup.ref('TotalMarksX7p')),

        // TotalMarksX8p: Yup.number().positive().max(200, 'max 200').isSubject(Yup.ref('Sub8X')),
        // MarksObtainedX8p: Yup.string().gaterThan(Yup.ref('TotalMarksX8p')),





    })


    return (

        <Formik
            initialValues={{

                // Sub1X: '',
                // Sub2X: '',
                // Sub3X: '',
                // Sub4X: '',
                // Sub5X: '',
                // Sub6X: '',
                // Sub7X: '',
                // Sub8X: '',

                Sub1XII: '',
                Sub2XII: '',
                Sub3XII: '',
                Sub4XII: '',
                Sub5XII: '',
                Sub6XII: '',


                // TotalMarksX1: '',
                // TotalMarksX1p: '',
                // TotalMarksX2: '',
                // TotalMarksX2p: '',
                // TotalMarksX3: '',
                // TotalMarksX3p: '',
                // TotalMarksX4: '',
                // TotalMarksX4p: "",
                // TotalMarksX5: "",
                // TotalMarksX5p: "",
                // TotalMarksX6: "",
                // TotalMarksX6p: "",
                // TotalMarksX7: "",
                // TotalMarksX7p: "",
                // TotalMarksX8: "",
                // TotalMarksX8p: "",

                // MarksObtainedX1: "",
                // MarksObtainedX1p: "",
                // MarksObtainedX2: "",
                // MarksObtainedX2p: "",
                // MarksObtainedX3: "",
                // MarksObtainedX3p: "",
                // MarksObtainedX4: "",
                // MarksObtainedX4p: "",
                // MarksObtainedX5: "",
                // MarksObtainedX5p: "",
                // MarksObtainedX6: "",
                // MarksObtainedX6p: "",
                // MarksObtainedX7: "",
                // MarksObtainedX7p: "",
                // MarksObtainedX8: "",
                // MarksObtainedX8p: "",



                TotalMarksXII1: "",
                TotalMarksXII1p: "",
                TotalMarksXII2: "",
                TotalMarksXII2p: "",
                TotalMarksXII3: "",
                TotalMarksXII3p: "",
                TotalMarksXII4: "",
                TotalMarksXII4p: "",
                TotalMarksXII5: "",
                TotalMarksXII5p: "",
                TotalMarksXII6: "",
                TotalMarksXII6p: "",

                MarksObtainedXII1: "",
                MarksObtainedXII1p: "",
                MarksObtainedXII2: "",
                MarksObtainedXII2p: "",
                MarksObtainedXII3: "",
                MarksObtainedXII3p: "",
                MarksObtainedXII4: "",
                MarksObtainedXII4: "",
                MarksObtainedXII5: "",
                MarksObtainedXII5p: "",
                MarksObtainedXII6: "",
                MarksObtainedXII6p: "",



            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                console.log(values);
                // const data = {
                //     higherSecondaryDetail: {
                //         firstLanguage: {
                //             name: values.Sub1X,
                //             written: {
                //                 total: values.TotalMarksX1,
                //                 Obtained: values.MarksObtainedX1
                //             },
                //             practical: {
                //                 total: values.TotalMarksX1p,
                //                 Obtained: values.MarksObtainedX1p
                //             }
                //         },
                //         secondLanguage: {

                //             name: values.Sub1X,
                //             written: {
                //                 total: values.TotalMarksX2,
                //                 Obtained: values.MarksObtainedX2
                //             },
                //             practical: {
                //                 total: values.TotalMarksX2p,
                //                 Obtained: values.MarksObtainedX2p
                //             }
                //         },
                //     }
                // }
                // alert(JSON.stringify(values, null, 2));
                // axios.post(window.location.href,
                //     values,
                //     {
                //         headers: {
                //             // 'Access-Control-Allow-Origin': '*',
                //             'Content-Type': 'application/json',
                //         }
                //     },
                //     ).then((resp) => {
                        setSubmitting(false);
                        props.success(2)
                
                // }
                // ).catch(r=>console.log(r);
                // )
            }}

            validationSchema={schema}
        >
            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <Form style={{overflowX:'auto'}}>
                        {/* <Typography variant='h6'>Statement of Marks at (10) Level</Typography>
                        <table className="table table-sm align-middle small">
                            <thead>
                                <tr>
                                    <th rowSpan="3">Subjects</th>
                                    <th colSpan="4">Language Group</th>
                                    <th colSpan="10">Compulsory Group</th>
                                    <th colSpan="2">Elective Group</th>
                                </tr>
                                <tr>
                                    <td rowSpan="2" colSpan="2">
                                        <Field className="form-control"
                                            error={errors.Sub1X && touched.Sub1X}
                                            helperText={(errors.Sub1X && touched.Sub1X) && errors.Sub1X}
                                            as={TextField}
                                            name="Sub1X"

                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {langMenu.map((p, i) => {
                                                return (
                                                    <MenuItem key={p} disabled={p == null} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>
                                    </td>

                                    <td rowSpan="2" colSpan="2">
                                        <Field className="form-control" name="Sub2X" error={errors.Sub2X && touched.Sub2X}
                                            helperText={(errors.Sub2X && touched.Sub2X) && errors.Sub2X}
                                            as={TextField}
                                            select>
                                            {langMenu.filter(f => { return f != values.Sub1X }).map((p, i) => {
                                                return (
                                                    <MenuItem key={p} value={p}>{p == null ? "none" : p}</MenuItem>
                                                )
                                            })}

                                        </Field>

                                    </td>
                                    <td colSpan="2">1st</td>
                                    <td colSpan="2">2nd</td>
                                    <td colSpan="2">3rd</td>
                                    <td colSpan="2">4th</td>
                                    <td colSpan="2">5th</td>

                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub3X && touched.Sub3X}
                                            helperText={(errors.Sub3X && touched.Sub3X) && errors.Sub3X}
                                            as={TextField}
                                            name="Sub3X"
                                            // label="Marks %"
                                            className="form-control"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {compMenu.map((p, i) => {
                                                return (
                                                    <MenuItem key={p} disabled={p == null} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>

                                    </td>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub4X && touched.Sub4X}
                                            helperText={(errors.Sub4X && touched.Sub4X) && errors.Sub4X}
                                            as={TextField}
                                            name="Sub4X"
                                            className="form-control"
                                            // label="Marks %"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {compMenu.filter(f => { return f != values.Sub3X }).map((p, i) => {
                                                return (
                                                    <MenuItem key={p} disabled={p == null} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>

                                    </td>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub5X && touched.Sub5X}
                                            helperText={(errors.Sub5X && touched.Sub5X) && errors.Sub5X}
                                            as={TextField}
                                            name="Sub5X"
                                            className="form-control"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {compMenu.filter(f => { return f != values.Sub3X && f != values.Sub4X }).map((p, i) => {
                                                return (
                                                    <MenuItem key={p} disabled={p == null} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>

                                    </td>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub6X && touched.Sub6X}
                                            helperText={(errors.Sub6X && touched.Sub6X) && errors.Sub6X}
                                            as={TextField}
                                            name="Sub6X"
                                            className="form-control"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {compMenu.filter(f => { return f != values.Sub3X && f != values.Sub4X && f !== values.Sub5X }).map((p, i) => {
                                                return (
                                                    <MenuItem key={p} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>

                                    </td>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub7X && touched.Sub7X}
                                            helperText={(errors.Sub7X && touched.Sub7X) && errors.Sub7X}
                                            as={TextField}
                                            name="Sub7X"
                                            className="form-control"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {compMenu.filter(f => { return f == null || f != values.Sub3X && f != values.Sub4X && f !== values.Sub5X && f !== values.Sub6X }).map((p, i) => {
                                                return (
                                                    <MenuItem key={p} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>

                                    </td>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub8X && touched.Sub8X}
                                            helperText={(errors.Sub8X && touched.Sub8X) && errors.Sub8X}
                                            as={TextField}
                                            name="Sub8X"
                                            className="form-control"
                                            // style={{ margin: 8 }}
                                            type='number'
                                            select
                                            margin='dense'

                                        >
                                            {electMenu.map((p, i) => {
                                                return (
                                                    <MenuItem key={p} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>

                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Total Marks</td>
                                    <td><Field name="TotalMarksX1" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX1 && touched.TotalMarksX1} helperText={(errors.TotalMarksX1 && touched.TotalMarksX1) && errors.TotalMarksX1} /></td>
                                    <td><Field name="TotalMarksX1p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX1p && touched.TotalMarksX1p} helperText={(errors.TotalMarksX1p && touched.TotalMarksX1p) && errors.TotalMarksX1p} /></td>
                                    <td><Field name="TotalMarksX2" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX2 && touched.TotalMarksX2} helperText={(errors.TotalMarksX2 && touched.TotalMarksX2) && errors.TotalMarksX2} /></td>
                                    <td><Field name="TotalMarksX2p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX2p && touched.TotalMarksX2p} helperText={(errors.TotalMarksX2p && touched.TotalMarksX2p) && errors.TotalMarksX2p} /></td>
                                    <td><Field name="TotalMarksX3" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX3 && touched.TotalMarksX3} helperText={(errors.TotalMarksX3 && touched.TotalMarksX3) && errors.TotalMarksX3} /></td>
                                    <td><Field name="TotalMarksX3p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX3p && touched.TotalMarksX3p} helperText={(errors.TotalMarksX3p && touched.TotalMarksX3p) && errors.TotalMarksX3p} /></td>
                                    <td><Field name="TotalMarksX4" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX4 && touched.TotalMarksX4} helperText={(errors.TotalMarksX4 && touched.TotalMarksX4) && errors.TotalMarksX4} /></td>
                                    <td><Field name="TotalMarksX4p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX4p && touched.TotalMarksX4p} helperText={(errors.TotalMarksX4p && touched.TotalMarksX4p) && errors.TotalMarksX4p} /></td>
                                    <td><Field name="TotalMarksX5" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX5 && touched.TotalMarksX5} helperText={(errors.TotalMarksX5 && touched.TotalMarksX5) && errors.TotalMarksX5} /></td>
                                    <td><Field name="TotalMarksX5p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX5p && touched.TotalMarksX5p} helperText={(errors.TotalMarksX5p && touched.TotalMarksX5p) && errors.TotalMarksX5p} /></td>
                                    <td><Field name="TotalMarksX6" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX6 && touched.TotalMarksX6} helperText={(errors.TotalMarksX6 && touched.TotalMarksX6) && errors.TotalMarksX6} /></td>
                                    <td><Field name="TotalMarksX6p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX6p && touched.TotalMarksX6p} helperText={(errors.TotalMarksX6p && touched.TotalMarksX6p) && errors.TotalMarksX6p} /></td>
                                    <td><Field name="TotalMarksX7" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX7 && touched.TotalMarksX7p} helperText={(errors.TotalMarksX7p && touched.TotalMarksX7p) && errors.TotalMarksX7p} /></td>
                                    <td><Field name="TotalMarksX7p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX7p && touched.TotalMarksX7p} helperText={(errors.TotalMarksX7p && touched.TotalMarksX7p) && errors.TotalMarksX7p} /></td>
                                    <td><Field name="TotalMarksX8" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX8 && touched.TotalMarksX8} helperText={(errors.TotalMarksX8 && touched.TotalMarksX8) && errors.TotalMarksX8} /></td>
                                    <td><Field name="TotalMarksX8p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksX8p && touched.TotalMarksX8p} helperText={(errors.TotalMarksX8p && touched.TotalMarksX8p) && errors.TotalMarksX8p} /></td>
                                </tr>
                                <tr>
                                    <td>Marks Obtained</td>
                                    <td><Field name="MarksObtainedX1" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX1 && touched.MarksObtainedX1} helperText={(errors.MarksObtainedX1 && touched.MarksObtainedX1) && errors.MarksObtainedX1} /></td>
                                    <td><Field name="MarksObtainedX1p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX1p && touched.MarksObtainedX1p} helperText={(errors.MarksObtainedX1p && touched.MarksObtainedX1p) && errors.MarksObtainedX1p} /></td>
                                    <td><Field name="MarksObtainedX2" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX2 && touched.MarksObtainedX2} helperText={(errors.MarksObtainedX2 && touched.MarksObtainedX2) && errors.MarksObtainedX2} /></td>
                                    <td><Field name="MarksObtainedX2p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX2p && touched.MarksObtainedX2p} helperText={(errors.MarksObtainedX2p && touched.MarksObtainedX2p) && errors.MarksObtainedX2p} /></td>
                                    <td><Field name="MarksObtainedX3" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX3 && touched.MarksObtainedX3} helperText={(errors.MarksObtainedX3 && touched.MarksObtainedX3) && errors.MarksObtainedX3} /></td>
                                    <td><Field name="MarksObtainedX3p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX3p && touched.MarksObtainedX3p} helperText={(errors.MarksObtainedX3p && touched.MarksObtainedX3p) && errors.MarksObtainedX3p} /></td>
                                    <td><Field name="MarksObtainedX4" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX4 && touched.MarksObtainedX4} helperText={(errors.MarksObtainedX4 && touched.MarksObtainedX4) && errors.MarksObtainedX4} /></td>
                                    <td><Field name="MarksObtainedX4p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX4p && touched.MarksObtainedX4p} helperText={(errors.MarksObtainedX4p && touched.MarksObtainedX4p) && errors.MarksObtainedX4p} /></td>
                                    <td><Field name="MarksObtainedX5" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX5 && touched.MarksObtainedX5} helperText={(errors.MarksObtainedX5 && touched.MarksObtainedX5) && errors.MarksObtainedX5} /></td>
                                    <td><Field name="MarksObtainedX5p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX5p && touched.MarksObtainedX5p} helperText={(errors.MarksObtainedX5p && touched.MarksObtainedX5p) && errors.MarksObtainedX5p} /></td>
                                    <td><Field name="MarksObtainedX6" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX6 && touched.MarksObtainedX6} helperText={(errors.MarksObtainedX6 && touched.MarksObtainedX6) && errors.MarksObtainedX6} /></td>
                                    <td><Field name="MarksObtainedX6p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX6p && touched.MarksObtainedX6p} helperText={(errors.MarksObtainedX6p && touched.MarksObtainedX6p) && errors.MarksObtainedX6p} /></td>
                                    <td><Field name="MarksObtainedX7" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX7 && touched.MarksObtainedX7} helperText={(errors.MarksObtainedX7 && touched.MarksObtainedX7) && errors.MarksObtainedX7} /></td>
                                    <td><Field name="MarksObtainedX7p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX7p && touched.MarksObtainedX7p} helperText={(errors.MarksObtainedX7p && touched.MarksObtainedX7p) && errors.MarksObtainedX7p} /></td>
                                    <td><Field name="MarksObtainedX8" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX8 && touched.MarksObtainedX8} helperText={(errors.MarksObtainedX8 && touched.MarksObtainedX8) && errors.MarksObtainedX8} /></td>
                                    <td><Field name="MarksObtainedX8p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedX8p && touched.MarksObtainedX8p} helperText={(errors.MarksObtainedX8p && touched.MarksObtainedX8p) && errors.MarksObtainedX8p} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <Divider className={sty.divider} /> */}
                        <Typography variant='h6'>Statement of Marks at (10+2) Level</Typography>
                        <table className="table table-sm align-middle small">
                            <thead>
                                <tr>
                                    <th rowSpan="3">Subjects</th>
                                    <th colSpan="4">Language Group</th>
                                    <th colSpan="6">Compulsory Group</th>
                                    <th colSpan="2">Elective Group</th>
                                </tr>
                                <tr>
                                    <td rowSpan="2" colSpan="2">
                                        <Field className="form-control"
                                            error={errors.Sub1XII && touched.Sub1XII}
                                            helperText={(errors.Sub1XII && touched.Sub1XII) && errors.Sub1XII}
                                            as={TextField}
                                            name="Sub1XII"
                                            // label="Marks %"
                                            className="form-control"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {langMenuXII.map((p, i) => {
                                                return (
                                                    <MenuItem key={p} disabled={p == null} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>
                                    </td>

                                    <td rowSpan="2" colSpan="2">
                                        <Field className="form-control" name="Sub2XII" error={errors.Sub2XII && touched.Sub2XII}
                                            helperText={(errors.Sub2XII && touched.Sub2XII) && errors.Sub2XII}
                                            as={TextField}
                                            select>
                                            {langMenuXII.filter(f => { return f != values.Sub1XII }).map((p, i) => {
                                                return (
                                                    <MenuItem key={p} value={p}>{p == null ? "none" : p}</MenuItem>
                                                )
                                            })}

                                        </Field>

                                    </td>
                                    <td colSpan="2">1st</td>
                                    <td colSpan="2">2nd</td>
                                    <td colSpan="2">3rd</td>
                                    <td rowSpan="2" colSpan="2">
                                        <Field
                                            error={errors.Sub6XII && touched.Sub6XII}
                                            helperText={(errors.Sub6XII && touched.Sub6XII) && errors.Sub6XII}
                                            as={TextField}
                                            name="Sub6XII"
                                            className="form-control"
                                            type='number'
                                            select
                                            margin='dense'

                                        >
                                            {electMenuXII.map((p, i) => {
                                                return (
                                                    <MenuItem key={p} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub3XII && touched.Sub3XII}
                                            helperText={(errors.Sub3XII && touched.Sub3XII) && errors.Sub3XII}
                                            as={TextField}
                                            name="Sub3XII"
                                            // label="Marks %"
                                            className="form-control"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {compMenuXII.map((p, i) => {
                                                return (
                                                    <MenuItem key={p} disabled={p == null} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>

                                    </td>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub4XII && touched.Sub4XII}
                                            helperText={(errors.Sub4XII && touched.Sub4XII) && errors.Sub4XII}
                                            as={TextField}
                                            name="Sub4XII"
                                            className="form-control"
                                            // label="Marks %"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {compMenuXII.filter(f => { return f != values.Sub3XII }).map((p, i) => {
                                                return (
                                                    <MenuItem key={p} disabled={p == null} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>

                                    </td>
                                    <td colSpan="2">
                                        <Field
                                            error={errors.Sub5XII && touched.Sub5XII}
                                            helperText={(errors.Sub5XII && touched.Sub5XII) && errors.Sub5XII}
                                            as={TextField}
                                            name="Sub5XII"
                                            className="form-control"
                                            style={{ margin: 8 }}
                                            type='number'
                                            margin='dense'
                                            select
                                        >
                                            {compMenuXII.filter(f => { return f != values.Sub3XII && f != values.Sub4XII }).map((p, i) => {
                                                return (
                                                    <MenuItem key={p} disabled={p == null} value={p}>{p == null ? 'none' : p}</MenuItem>
                                                )
                                            })}
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                    <td>Th</td>
                                    <td>Pr</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Total Marks</td>
                                    <td><Field name="TotalMarksXII1" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII1 && touched.TotalMarksXII1} helperText={(errors.TotalMarksXII1 && touched.TotalMarksXII1) && errors.TotalMarksXII1} /></td>
                                    <td><Field name="TotalMarksXII1p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII1p && touched.TotalMarksXII1p} helperText={(errors.TotalMarksXII1p && touched.TotalMarksXII1p) && errors.TotalMarksXII1p} /></td>
                                    <td><Field name="TotalMarksXII2" type="number" disabled={values.Sub2XII == null} value={values.Sub2XII == null ? values.TotalMarksXII2 = '' : values.TotalMarksXII2} className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII2 && touched.TotalMarksXII2} helperText={(errors.TotalMarksXII2 && touched.TotalMarksXII2) && errors.TotalMarksXII2} /></td>
                                    <td><Field name="TotalMarksXII2p" type="number" disabled={values.Sub2XII == null} value={values.Sub2XII == null ? values.TotalMarksXII2p = '' : values.TotalMarksXII2p} className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII2p && touched.TotalMarksXII2p} helperText={(errors.TotalMarksXII2p && touched.TotalMarksXII2p) && errors.TotalMarksXII2p} /></td>
                                    <td><Field name="TotalMarksXII3" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII3 && touched.TotalMarksXII3} helperText={(errors.TotalMarksXII3 && touched.TotalMarksXII3) && errors.TotalMarksXII3} /></td>
                                    <td><Field name="TotalMarksXII3p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII3p && touched.TotalMarksXII3p} helperText={(errors.TotalMarksXII3p && touched.TotalMarksXII3p) && errors.TotalMarksXII3p} /></td>
                                    <td><Field name="TotalMarksXII4" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII4 && touched.TotalMarksXII4} helperText={(errors.TotalMarksXII4 && touched.TotalMarksXII4) && errors.TotalMarksXII4} /></td>
                                    <td><Field name="TotalMarksXII4p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII4p && touched.TotalMarksXII4p} helperText={(errors.TotalMarksXII4p && touched.TotalMarksXII4p) && errors.TotalMarksXII4p} /></td>
                                    <td><Field name="TotalMarksXII5" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII5 && touched.TotalMarksXII5} helperText={(errors.TotalMarksXII5 && touched.TotalMarksXII5) && errors.TotalMarksXII5} /></td>
                                    <td><Field name="TotalMarksXII5p" type="number" className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII5p && touched.TotalMarksXII5p} helperText={(errors.TotalMarksXII5p && touched.TotalMarksXII5p) && errors.TotalMarksXII5p} /></td>

                                    {/* {!values.Sub6XII == '' && <> */}
                                    <td><Field name="TotalMarksXII6" type="number" disabled={values.Sub6XII == null} value={values.Sub6XII == null ? values.TotalMarksXII6 = '' : values.TotalMarksXII6} className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII6 && touched.TotalMarksXII6} helperText={(errors.TotalMarksXII6 && touched.TotalMarksXII6) && errors.TotalMarksXII6} /></td>
                                    <td><Field name="TotalMarksXII6p" type="number" disabled={values.Sub6XII == null} value={values.Sub6XII == null ? values.TotalMarksXII6p = '' : values.TotalMarksXII6p} className="form-control" placeholder="Total" as={TextField} error={errors.TotalMarksXII6p && touched.TotalMarksXII6p} helperText={(errors.TotalMarksXII6p && touched.TotalMarksXII6p) && errors.TotalMarksXII6p} /></td>
                                    {/* </>} */}
                                </tr>
                                <tr>
                                    <td>Marks Obtained</td>
                                    <td><Field name="MarksObtainedXII1" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII1 && touched.MarksObtainedXII1} helperText={(errors.MarksObtainedXII1 && touched.MarksObtainedXII1) && errors.MarksObtainedXII1} /></td>
                                    <td><Field name="MarksObtainedXII1p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII1p && touched.MarksObtainedXII1p} helperText={(errors.MarksObtainedXII1p && touched.MarksObtainedXII1p) && errors.MarksObtainedXII1p} /></td>
                                    <td><Field name="MarksObtainedXII2" disabled={values.Sub2XII == null} value={values.Sub2XII == null ? values.MarksObtainedXII2 = '' : values.MarksObtainedXII2} type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII2 && touched.MarksObtainedXII2} helperText={(errors.MarksObtainedXII2 && touched.MarksObtainedXII2) && errors.MarksObtainedXII2} /></td>
                                    <td><Field name="MarksObtainedXII2p" disabled={values.Sub2XII == null} value={values.Sub2XII == null ? values.MarksObtainedXII2p = '' : values.MarksObtainedXII2p} type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII2p && touched.MarksObtainedXII2p} helperText={(errors.MarksObtainedXII2p && touched.MarksObtainedXII2p) && errors.MarksObtainedXII2p} /></td>
                                    <td><Field name="MarksObtainedXII3" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII3 && touched.MarksObtainedXII3} helperText={(errors.MarksObtainedXII3 && touched.MarksObtainedXII3) && errors.MarksObtainedXII3} /></td>
                                    <td><Field name="MarksObtainedXII3p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII3p && touched.MarksObtainedXII3p} helperText={(errors.MarksObtainedXII3p && touched.MarksObtainedXII3p) && errors.MarksObtainedXII3p} /></td>
                                    <td><Field name="MarksObtainedXII4" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII4 && touched.MarksObtainedXII4} helperText={(errors.MarksObtainedXII4 && touched.MarksObtainedXII4) && errors.MarksObtainedXII4} /></td>
                                    <td><Field name="MarksObtainedXII4p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII4p && touched.MarksObtainedXII4p} helperText={(errors.MarksObtainedXII4p && touched.MarksObtainedXII4p) && errors.MarksObtainedXII4p} /></td>
                                    <td><Field name="MarksObtainedXII5" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII5 && touched.MarksObtainedXII5} helperText={(errors.MarksObtainedXII5 && touched.MarksObtainedXII5) && errors.MarksObtainedXII5} /></td>
                                    <td><Field name="MarksObtainedXII5p" type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII5p && touched.MarksObtainedXII5p} helperText={(errors.MarksObtainedXII5p && touched.MarksObtainedXII5p) && errors.MarksObtainedXII5p} /></td>
                                    {/* {!values.Sub6XII == '' && <> */}
                                    <td><Field name="MarksObtainedXII6" disabled={values.Sub6XII == null} value={values.Sub6XII == null ? values.MarksObtainedXII6 = '' : values.MarksObtainedXII6} type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII6 && touched.MarksObtainedXII6} helperText={(errors.MarksObtainedXII6 && touched.MarksObtainedXII6) && errors.MarksObtainedXII6} /></td>
                                    <td><Field name="MarksObtainedXII6p" disabled={values.Sub6XII == null} value={values.Sub6XII == null ? values.MarksObtainedXII6p = '' : values.MarksObtainedXII6p} type="number" className="form-control" placeholder="Marks" as={TextField} error={errors.MarksObtainedXII6p && touched.MarksObtainedXII6p} helperText={(errors.MarksObtainedXII6p && touched.MarksObtainedXII6p) && errors.MarksObtainedXII6p} /></td>
                                    {/* </>} */}
                                </tr>

                            </tbody>
                        </table>

                        <Fab style={{ margin: '20px 0' }} color='primary' variant='extended' type='submit' >submit & Next</Fab>
                    </Form>)
            }}
        </Formik>

    )
}
FormMain.propType={
    success:PropType.func.isRequired
}
export default FormMain