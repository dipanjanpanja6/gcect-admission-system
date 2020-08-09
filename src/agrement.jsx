
import React from 'react'
import { Grid, Paper, Typography, makeStyles,  Checkbox, Fab } from '@material-ui/core'
import {  useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const useStyle = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.background.default,
    },
    paper: {
        padding: 12,
        margin: 20,
        width: '100%'
    },
    banner: {
        backgroundImage: "url(" + require("./component/static/banner.webp") + ")",
        width: '100%',
        height: '267px',
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom',
    
        background: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('xs')]: {
          height: '155px',
        }
      }
}))

const Test = () => {
    const sty = useStyle()
    const history = useHistory()
    const [agree, setAgree] = React.useState(false)

    function processNext() {
        if (agree) {
            history.push('/form', { agree: agree })
        } else {

            toast.warn('You have to agree the terms & conditions to proceed further !!')
        }
    }

    return (
        <Grid className={sty.root}>
    <div className={sty.banner} />

        <Grid  container>
            <Paper className={sty.paper} style={{ textAlign: "justify" }}>
                <Typography align='center' gutterBottom variant='h4'>ADMISSION NOTICE {new Date().getFullYear()}</Typography>
                <Typography variant='subtitle2'>Online application for admission to B. Tech /M. Tech program for the academic session 2019-20 will commence from 04th July 2019 at 10 AM only through web portal of the college website <a target='_blank' rel="noopener noreferrer" href='http://www.gcect.ac.in'>www.gcect.ac.in</a>.</Typography>
                <p><strong>For any online application related issue and queries, please write us to:</strong><a href="mailto:gcectwb@gmail.com?subject=Enquiry">gcectwb@gmail.com</a></p>
                <p><strong>ONLINE ADMISSION PROCEDURE</strong></p>
                <p>1. Visit College website and click&nbsp;Apply Online tab.</p>
                <p>2. Please read the instructions carefully before you proceed.</p>
                <p>3. Next, read the terms &amp; conditions carefully and only after accepting the <strong><em>Terms &amp; Conditions</em></strong>, you can proceed further.</p>
                <p>4. At the next page, choose your admission status as regular or regular with TFW and enter the details including the year of passing of your 10 + 2 Examination.</p>
                <p>5. Now choose whether you belong to SC/ST category or not.</p>
                <p>6. Now enter the marks of different subjects you obtained in the higher secondary examination.</p>
                <p><strong>You must have passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/ Biology/ Technical Vocational subject and Obtained at least 45% marks (40% in case of candidate belonging to reserved category) in the above subjects taken together. You also </strong><strong>have to pass individually both theory and practical in all subjects at 10+2 level for getting admission in any course of our institute.</strong></p>
                <p>7. You must have a valid WBJEE rank along with domicile certificate in proof of permanent residency inthe state of West Bengal.</p>
                <p>8. You must have taken&nbsp;&nbsp; provisional admission attending any Reporting Centre as specified by West Bengal Joint Entrance Board in the year 2019.</p>
                <p>9. Candidates are eligible to take admission in a specific branch of B. Tech program based on the recommendation of West Bengal Joint Entrance e-counselling portal.</p>
                <p>10. An application number will be generated and a SMS will be sent to the registered mobile number with the application number for login.</p>
                <p>11. Login with the application number or registered mobile number and date of birth as password. Now upload your recent colour photo &amp; signature.</p>
                <p>12. Next, download your application form with uploaded photo &amp; signature and take a print out.</p>
                <p>13. Finally goto Payment page &amp; take a print out of generated challan.</p>
                <p>14. Pay Admission and other fees as appeared in the challan in State Bank of India, Beliaghata Branch.</p>
                <p>After remitting the fees, wait for 2 working days and then check by logging in whether your payment status shows successful.</p>
                <p>N.B. Payment can also be made through NEFT in the specified Bank Account and the NEFT transaction slip is to be submitted in original at the time of document verification.</p>
                <p>15. As per the norms of UGC,an affidavit on anti-ragging is to be submitted online (<a target='_blank' rel="noopener noreferrer" href="http://www.antiragging.in/Site/Affidavits_Registration.aspx">here</a>) and hard copy of the anti-ragging affidavit is to be submitted at the time of document verification by the student and his/her guardian.</p>
                <p><strong><em>LAST DATE OF ONLINE APPLICATION AND SUBMISSION OF APPLICATION FEES IS 20th&nbsp;&nbsp;JULY, 2019 UP TO 4.00 P.M.</em></strong></p>
                <p><strong>THE FOLLOWING DOCUMENTS TO BE PRODUCED FOR PHYSICALVERIFICATION</strong></p>
                <p><strong>a. Signed downloaded application form. </strong></p>
                <p><strong>b. Provisional admission letter issued by R.C. in-charge in original.</strong></p>
                <p><strong>c. Original admit card of WBJEE-2019.</strong></p>
                <p><strong>d. Original rank card of WBJEE-2019.</strong></p>
                <p><strong>e. Domicile certificate from the competent authorities as per WBJEEB proforma in original.</strong></p>
                <p><strong>f. Original certificatefor age verification (Birth certificate or certificate/admit card of Madhyamik or equivalent examination where the date of birth is mentioned).</strong></p>
                <p><strong>g. Original marks sheet of 10th and 12thstandard or equivalent examinations from recognised board. </strong></p>
                <p><strong>h. Cast certificate/disability certificate (If any) issued in favour of the candidate (Issued by the competent authority of the Government of West Bengal).</strong></p>
                <p><strong>i. Original bank challan (Candidate&rsquo;s copy)/NEFT Transaction slip [After depositing fees to the Bank]. </strong></p>
                <p><strong>j. Income Certificate in original from the competent authority as uploaded in WBJEE-2019 portal for TFW candidates.</strong></p>
                <p><strong>k. Physical fitness certificate and eyesight certificate from a registered medical practitioner&nbsp;in original. </strong></p>
                <p><strong>l. School leaving/Character certificate issued by the Head of the institute last attended in original.&nbsp; </strong></p>
                <p><strong>m. One passport size colour photo.</strong></p>
                <p><strong>n. Original annual family income certificate from the competent authorities (for other than TFW candidates)</strong></p>
                <p><strong>o. PHOTOCOPIES OF ALL THE DOCUMENTS MENTIONED ABOVE.</strong></p>
                <p>16. Check college website regularly for Commencement of classes and other academic notices and regulations.</p>
                <p><strong>For any Online Application related issue, please write us to:</strong></p>
                <p><a href="mailto:gcectwb@gmail.com">gcectwb@gmail.com</a> or contact Mr. Jayanta Kumar Chowdhury, Registrar (033) 2363-2072.</p>
            </Paper>
            <Paper className={sty.paper} style={{ textAlign: "justify" }}>
                <Typography align="center" variant="h4" gutterBottom>Terms & Conditions</Typography>
                {/* <p> */}
                <p>I have very carefully read the regulation of the institute and have understood that if my class attendance in an academic semester falls&nbsp;<strong><em>below 75%</em></strong> of the total number of classes held in the semester would render me <strong>DIS-QUALIFIED&nbsp;</strong>&nbsp;to seat for the end semester examination of that academic session as per the existing ACADEMIC REGULATION of the institute.</p>

                <p>I further declare that I shall&nbsp;<strong>NOT</strong> request the college authorities for any relaxation/exemption on attendance percentage on any ground whatsoever.</p>

                <p>In the light of the above-mentioned regulations I promise that</p>

                <p>1. I will <strong>NOT&nbsp;</strong>take part in ragging and in the event of any such happening, will &nbsp;intimate&nbsp;&nbsp;the college authority immediately.</p>

                <p>2. I will <strong>NOT</strong> take up any job assignment, in the form of employment or business, during my class-hours of&nbsp;&nbsp;the College.</p>

                <p>3. I will <strong>NOT</strong> attend any coaching centre or private tuition or any training institute, during my class-hours of&nbsp;&nbsp;the College.</p>

                <p>&nbsp;</p>

                <p>In addition to the above-mentioned pledges made by me, I further commit that I will regularly follow the Notices stuck on the college notice board and/or uploaded on the college website.</p>
                {/* </p> */}
            </Paper>

            <Paper className={sty.paper} style={{ textAlign: "center" }}>
                <Typography align='center' variant="h4" gutterBottom>Important Documents</Typography>
                
                    <h3><a href="admin/pages/pic/download/College Brochure.pdf" target="_blank" rel="noopener noreferrer">College Brochure</a></h3>
                    {/* <!--<h3><a href="docs/College Brochure.pdf" target="_blank">College Brochure</a></h3>--> */}
                
            </Paper>

            <Paper className={sty.paper} style={{ color: '#f00' }}>
                <center>
                    <Typography variant="h4" gutterBottom>!!! Notice !!!</Typography>
                    <br />
                    <p >Please Go to Student Login and Update Payment and Upload Photo &amp; Signature to complete the Application Process</p>
                    <p >You will get SMS alert with your Application Id, Username &amp; Password only after completion of the 3rd part of the application form which includes your Photo and signature.</p>
                    <p >If in case SMS with login details will not reach yor mobile use your registered <strong>mobile number (xxxxxxxxxx)</strong> &amp; <strong>Date of Birth (YYYY-MM-DD)</strong> <br />
                          as the <strong>User Id &amp; Password</strong></p>
                </center>
            </Paper>
            <Grid container justify='center' alignItems='center' style={{paddingBottom:50}}>
            <Typography color='textPrimary' style={{ margin: 12, width:'100%', align: 'center',textAlign:'center' }}>I have read the instructions (including  College admission rules) carefully and I shall abide by the decision taken by the college authority in this regard.
             </Typography>
             <Grid container justify='center' alignItems='center'>

                    <Checkbox onChange={() => { setAgree(!agree) }} /><Typography color='textPrimary'>I Agree all terms &amp; conditions</Typography>
             </Grid>
             <br/>
                        <Fab variant='extended' onClick={processNext}  color='primary'>Proceed </Fab>
</Grid>

            {/* </Paper> */}
        </Grid >
</Grid>
    )
}

export default Test