import '../mandatory_public_disclosure/table.css';
const data = [
    { info: "NAME OF SCHOOL", details: "Holy Krishna\'s College" },
    { info: "AFFILIATION NUMBER",  details: "3530522" },
    { info: "SCHOOL CODE",  details: "81746" },
    { info: "COMPLETE ADDRESS PIN CODE",  details: "Ward no. 1, Dineshpur, Udham Singh Nagar, Uttarakhand - 263160" },
    { info: "PRINCIPAL NAME",  details: "Mrs. Reena Yadav" },
    { info: "PRINCIPAL QUALIFICATION",  details: "M.Sc., B.Ed" },
    { info: "SCHOOL EMAIL ID", details: "holykrishna06@gmail.com" },
    { info: "CONTACT DETAILS",  details: "7055307003" },
]

function GeneralInformation() {
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
                            <td>{val.details}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default GeneralInformation;