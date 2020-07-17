import React from 'react'
import './main.css'
const Test = () => {
    return (
        <>


            {/* <div class="alert alert-danger" role="alert">
                {/* {{ error }} */}
            {/* </div>


            <div class="alert alert-{{ category }}">
                {/* <span>{{ message }}</span> */}
                {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close"> */}
                    {/* <span aria-hidden="true">&times;</span>/ */}
                {/* </button> */}
            {/* </div> */} 


            <div class="x">
                <form  >
                   <p><u><b>Statement of Marks at (10) Level</b></u></p>
                    <table class="table table-sm align-middle small">
                        <thead>
                            <tr>
                                <th rowspan="3">Subjects</th>
                                <th colspan="4">Language Group</th>
                                <th colspan="10">Compulsory Group</th>
                                <th colspan="2">Elective Group</th>
                            </tr>
                            <tr>
                                <td rowspan="2" colspan="2">
                                    <select class="form-control" name="Sub1X" id="Sub1X" required="">
                                        <option value="0">-Subject-</option>
                                        <option value="2">BENGALI</option>
                                        <option value="1">ENGLISH / ENGLISH COMMUNICATION</option>
                                        <option value="3" selected="selected">HINDI</option>
                                    </select>
                                </td>
                                <td rowspan="2" colspan="2">
                                    <select class="form-control" name="Sub2X" id="Sub2X">
                                        <option value="0">-Subject-</option>
                                        <option value="2" selected="selected">BENGALI</option>
                                        <option value="1">ENGLISH / ENGLISH COMMUNICATION</option>
                                        <option value="3">HINDI</option>
                                    </select>
                                </td>
                                <td colspan="2">1st</td>
                                <td colspan="2">2nd</td>
                                <td colspan="2">3rd</td>
                                <td colspan="2">4th</td>
                                <td colspan="2">5th</td>
                                <td rowspan="2" colspan="2">
                                    <select class="form-control" name="Sub8X" id="Sub8X">
                                        <option value="0">-Subject-</option>
                                        <option value="10" selected="selected">COMPUTER APPLICATION</option>
                                        <option value="12">FOUNDATION OF IT</option>
                                        <option value="11">SOCIAL SCIENCE</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <select class="form-control" name="Sub3X" id="Sub3X" required="">
                                        <option value="0">-Subject-</option>
                                        <option value="9">GEOGRAPHY</option>
                                        <option value="8">HISTORY</option>
                                        <option value="14">HISTORY AND GEOGRAPHY</option>
                                        <option value="5">LIFE SCIENCE</option>
                                        <option value="7" selected="selected">MATH</option>
                                        <option value="4">PHYSICAL SCIENCE</option>
                                        <option value="13">SCIENCE</option>
                                    </select>
                                </td>
                                <td colspan="2">
                                    <select class="form-control" name="Sub4X" id="Sub4X" required="">
                                        <option value="0">-Subject-</option>
                                        <option value="9">GEOGRAPHY</option>
                                        <option value="8">HISTORY</option>
                                        <option value="14">HISTORY AND GEOGRAPHY</option>
                                        <option value="5" selected="selected">LIFE SCIENCE</option>
                                        <option value="7">MATH</option>
                                        <option value="4">PHYSICAL SCIENCE</option>
                                        <option value="13">SCIENCE</option>
                                    </select>
                                </td>
                                <td colspan="2">
                                    <select class="form-control" name="Sub5X" id="Sub5X" required="">
                                        <option value="0">-Subject-</option>
                                        <option value="9">GEOGRAPHY</option>
                                        <option value="8">HISTORY</option>
                                        <option value="14">HISTORY AND GEOGRAPHY</option>
                                        <option value="5">LIFE SCIENCE</option>
                                        <option value="7">MATH</option>
                                        <option value="4" selected="selected">PHYSICAL SCIENCE</option>
                                        <option value="13">SCIENCE</option>
                                    </select>
                                </td>
                                <td colspan="2">
                                    <select class="form-control" name="Sub6X" id="Sub6X" required="">
                                        <option value="0">-Subject-</option>
                                        <option value="9">GEOGRAPHY</option>
                                        <option value="8">HISTORY</option>
                                        <option value="14">HISTORY AND GEOGRAPHY</option>
                                        <option value="5">LIFE SCIENCE</option>
                                        <option value="7">MATH</option>
                                        <option value="4">PHYSICAL SCIENCE</option>
                                        <option value="13" selected="selected">SCIENCE</option>
                                    </select>
                                </td>
                                <td colspan="2">
                                    <select class="form-control" name="Sub7X" id="Sub7X" required="">
                                        <option value="0">-Subject-</option>
                                        <option value="9" selected>GEOGRAPHY</option>
                                        <option value="8">HISTORY</option>
                                        <option value="14">HISTORY AND GEOGRAPHY</option>
                                        <option value="5">LIFE SCIENCE</option>
                                        <option value="7">MATH</option>
                                        <option value="4">PHYSICAL SCIENCE</option>
                                        <option value="13">SCIENCE</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total Marks</td>
                                <td><input name="TotalMarksX1" type="number" class="form-control" id="TotalMarksX1" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX1p" type="number" class="form-control" id="TotalMarksX1p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX2" type="number" class="form-control" id="TotalMarksX2" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX2p" type="number" class="form-control" id="TotalMarksX2p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX3" type="number" class="form-control" id="TotalMarksX3" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX3p" type="number" class="form-control" id="TotalMarksX3p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX4" type="number" class="form-control" id="TotalMarksX4" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX4p" type="number" class="form-control" id="TotalMarksX4p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX5" type="number" class="form-control" id="TotalMarksX5" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX5p" type="number" class="form-control" id="TotalMarksX5p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required /></td>
                                <td><input name="TotalMarksX6" type="number" class="form-control" id="TotalMarksX6" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                                <td><input name="TotalMarksX6p" type="number" class="form-control" id="TotalMarksX6p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                                <td><input name="TotalMarksX7" type="number" class="form-control" id="TotalMarksX7" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                                <td><input name="TotalMarksX7p" type="number" class="form-control" id="TotalMarksX7p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                                <td><input name="TotalMarksX8" type="number" class="form-control" id="TotalMarksX8" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                                <td><input name="TotalMarksX8p" type="number" class="form-control" id="TotalMarksX8p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                            </tr>
                            <tr>
                                <td>Marks Obtained</td>
                                <td><input name="MarksObtainedX1" type="number" class="form-control" id="MarksObtainedX1" onblur="isMarksLessThanTotal5()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX1p" type="number" class="form-control" id="MarksObtainedX1p" onblur="isMarksLessThanTotal6()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX2" type="number" class="form-control" id="MarksObtainedX2" onblur="isMarksLessThanTotal7()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX2p" type="number" class="form-control" id="MarksObtainedX2p" onblur="isMarksLessThanTotal8()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX3" type="number" class="form-control" id="MarksObtainedX3" onblur="isMarksLessThanTotal9()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX3p" type="number" class="form-control" id="MarksObtainedX3p" onblur="isMarksLessThanTotal10()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX4" type="number" class="form-control" id="MarksObtainedX4" onblur="isMarksLessThanTotal11()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX4p" type="number" class="form-control" id="MarksObtainedX4p" onblur="isMarksLessThanTotal12()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX5" type="number" class="form-control" id="MarksObtainedX5" onblur="isMarksLessThanTotal13()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" /></td>
                                <td><input name="MarksObtainedX5p" type="number" class="form-control" id="MarksObtainedX5p" onblur="isMarksLessThanTotal14()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" /></td>
                                <td><input name="MarksObtainedX6" type="number" class="form-control" id="MarksObtainedX6" onblur="isMarksLessThanTotal15()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" /></td>
                                <td><input name="MarksObtainedX6p" type="number" class="form-control" id="MarksObtainedX6p" onblur="isMarksLessThanTotal16()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" /></td>
                                <td><input name="MarksObtainedX7" type="number" class="form-control" id="MarksObtainedX7" onblur="isMarksLessThanTotal1()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX7p" type="number" class="form-control" id="MarksObtainedX7p" onblur="isMarksLessThanTotal2()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX8" type="number" class="form-control" id="MarksObtainedX8" onblur="isMarksLessThanTotal3()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedX8p" type="number" class="form-control" id="MarksObtainedX8p" onblur="isMarksLessThanTotal4()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <p><u><b>Statement of Marks at (10+2) Level</b></u></p>
                    <table class="table table-sm small align-middle">
                        <thead>
                            <tr>
                                <td rowspan="3">Subjects</td>
                                <td colspan="4">Language Group</td>
                                <td colspan="6">Compulsory Group</td>
                                <td colspan="2">Elective Group</td>
                            </tr>
                            <tr>
                                <td rowspan="2" colspan="2">
                                    <select class="form-control" name="Sub1XII" id="Sub1XII" required readonly>
                                        <option value="1">ENGLISH</option>
                                    </select>
                                </td>
                                <td rowspan="2" colspan="2">
                                    <select class="form-control" name="Sub2XII" id="Sub2XII">
                                        <option value="0">-Subject-</option>
                                        <option value="2">BENGALI</option>
                                        <option value="3">More to be added</option>
                                    </select>
                                </td>
                                <td colspan="2">1st</td>
                                <td colspan="2">2nd</td>
                                <td colspan="2">3rd</td>
                                <td rowspan="2" colspan="2">
                                    <select class="form-control" name="Sub6XII" id="Sub6XII">
                                        <option value="0">-Subject-</option>
                                        <option value="8">BIOLOGY</option>
                                        <option value="9">COMPUTER APPLICATION</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <select class="form-control" name="Sub3XII" id="Sub3XII" required readonly>
                                        <option value="1">MATH</option>
                                    </select>
                                </td>
                                <td colspan="2">
                                    <select class="form-control" name="Sub4XII" id="Sub4XII" required readonly>
                                        <option value="4">PHYSICS</option>
                                    </select></td>
                                <td colspan="2"  >
                                    <select class="form-control" name="Sub5XII" id="Sub5XII" required readonly>
                                        <option value="10">CHEMISTRY</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                                <td>Th</td>
                                <td>Pr</td>
                                <td >Th</td>
                                <td >Pr</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total Marks</td>
                                <td><input name="TotalMarksXII1" type="number" class="form-control" id="TotalMarksXII1" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required="" /></td>
                                <td><input name="TotalMarksXII1p" type="number" class="form-control" id="TotalMarksXII1p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required="" /></td>
                                <td><input name="TotalMarksXII2" type="number" class="form-control" id="TotalMarksXII2" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required="" /></td>
                                <td><input name="TotalMarksXII2p" type="number" class="form-control" id="TotalMarksXII2p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required="" /></td>
                                <td  ><input name="TotalMarksXII3" type="number" class="form-control" id="TotalMarksXII3" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required="" /></td>
                                <td  ><input name="TotalMarksXII3p" type="number" class="form-control" id="TotalMarksXII3p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required="" /></td>
                                <td  ><input name="TotalMarksXII4" type="number" class="form-control" id="TotalMarksXII4" onkeypress="return isNumberKey(event)" value="0" placeholder="Total" required="" /></td>
                                <td><input name="TotalMarksXII4p" type="number" class="form-control" id="TotalMarksXII5" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                                <td><input name="TotalMarksXII5" type="number" class="form-control" id="TotalMarksXII5" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                                <td><input name="TotalMarksXII5p" type="number" class="form-control" id="TotalMarksXII5p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" /></td>
                                <td><input name="TotalMarksXII6" type="number" class="form-control" id="TotalMarksXII0" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required="" /></td>
                                <td><input name="TotalMarksXII6p" type="number" class="form-control" id="TotalMarksXII0p" onkeypress="return isNumberKey(event)" value="11" placeholder="Total" required="" /></td>
                            </tr> <tr>
                                <td>Marks Obtained</td>
                                <td><input name="MarksObtainedXII1" type="number" class="form-control" id="MarksObtainedXII1" onblur="isMarksLessThanTotal25()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII1p" type="number" class="form-control" id="MarksObtainedXII1p" onblur="isMarksLessThanTotal26()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII2" type="number" class="form-control" id="MarksObtainedXII2" onblur="isMarksLessThanTotal27()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII2p" type="number" class="form-control" id="MarksObtainedXII2p" onblur="isMarksLessThanTotal28()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII3" type="number" class="form-control" id="MarksObtainedXII3" onblur="isMarksLessThanTotal29()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII3p" type="number" class="form-control" id="MarksObtainedXII3p" onblur="isMarksLessThanTotal210()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII4" type="number" class="form-control" id="MarksObtainedXII4" onblur="isMarksLessThanTotal211()" onkeypress="return isNumberKey(event)" value="0" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII4" type="number" class="form-control" id="MarksObtainedXII4" onblur="isMarksLessThanTotal211()" onkeypress="return isNumberKey(event)" value="0" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII5" type="number" class="form-control" id="MarksObtainedXII5" onblur="isMarksLessThanTotal213()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" /></td>
                                <td><input name="MarksObtainedXII5p" type="number" class="form-control" id="MarksObtainedXII5p" onblur="isMarksLessThanTotal214()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" /></td>
                                <td><input name="MarksObtainedXII6" type="number" class="form-control" id="MarksObtainedXII0" onblur="isMarksLessThanTotal23()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                                <td><input name="MarksObtainedXII6p" type="number" class="form-control" id="MarksObtainedXII0p" onblur="isMarksLessThanTotal24()" onkeypress="return isNumberKey(event)" value="9" placeholder="Marks" required="" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Th : Theory ; Pr : Practical</h4>
                    <div class="form-group">
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary">Save &amp; Proceed</button>
                        </div>
                    </div>
                </form>
            </div>



        </>)
}
export default Test;