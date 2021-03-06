import { useState } from "react"
import { useDispatch } from "react-redux"
import { employeeAdd } from "../state/action"
import { employee } from "../state/employeeReducer"
import { v4 as uuidv4 } from 'uuid';

const AddEmployee: React.FC = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('M')
    const [salary, setSalary] = useState ('')
    const _id = parseInt(uuidv4());

    const submitEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !dateOfBirth || !gender || !salary) {
            alert('error please fill all fields!')
            return
        }
        if(isNaN( +(salary))){
            alert('error please enter your salary in number format')
            return
        }
        addEmployee({ _id, name, dateOfBirth, gender, salary });
        setName('');
        setDateOfBirth('');
        setGender('M');
        setSalary('');

    }

    const addEmployee = (emp: employee) => {
        dispatch(employeeAdd(emp))
    }
    return (
        <form className="add-form" onSubmit={submitEmployee} >
            <div className="form-control">
                <label>Name of Employee</label>
                <input
                    type='text'
                    placeholder='Add Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day of Birth</label>
                <input type='date'
                    placeholder='dd-mm-year'
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Gender</label>
                <select 
                    placeholder='Add Gender'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="M">M</option>
                    <option value="F">F</option>

                </select>
            </div>

            <div className="form-control">
                <label>Salary</label>
                <input type='text'
                    placeholder='Add Salary'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </div>
            <input type="submit" value="Save Employee" className="btn btn-block" />
        </form>
    )
}

export default AddEmployee
