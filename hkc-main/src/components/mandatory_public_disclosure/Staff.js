import '../mandatory_public_disclosure/table.css';
const data = [
    { info: "PRINCIPAL", details: "Mrs. REENA YADAV" },
    { info: "TOTAL NO. OF TEACHERS",  details: "43" },
    { info: "PGT",  details: "11" },
    { info: "TGT",  details: "15" },
    { info: "PRT",  details: "17" },
    { info: "TEACHERS SECTION RATIO",  details: "1.5" },
    { info: "DETAILS OF SPECIAL EDUCATOR",  details: "Mr. SANDEEP YADAV" },
    { info: "DETAILS OF COUNSELLAR AND WELLNESS TEACHER", details: "Mr. SANDEEP YADAV" },
]

function Staff() {
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

export default Staff;