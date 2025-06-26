import { FaArrowDown } from 'react-icons/fa';
import '../mandatory_public_disclosure/table.css';
const data = [
    { info: "FEE STRUCTURE OF THE SCHOOL", details: "https://holykrishnascollege.com/mpd/FEE_STRUCTURE.pdf" },
    { info: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",  details: "https://holykrishnascollege.com/mpd/SCHOOL_MANAGEMENT_COMMITTEE.pdf" },
    { info: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",  details: "https://holykrishnascollege.com/mpd/PARENTS_TEACHERS_ASSOCIATION.pdf" },
    { info: "LATEST THREE YEAR RESULT OF BOARD EXAMINATION AS PER APPLICABILITY",  details: "https://holykrishnascollege.com/mpd/LAST_THREE_YEAR_RESULTS.pdf" },
]

function Academics() {
    return (
        <div className="Table">
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>INFORMATION</th>
                    <th>DETAILS</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{val.info}</td>
                            <td>
                                <a href={`${val.details}`} target="_blank" className='download-link'>
                                    {val.details} 
                                </a>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Academics;