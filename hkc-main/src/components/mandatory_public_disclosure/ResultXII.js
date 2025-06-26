import '../mandatory_public_disclosure/table.css';
const data = [
    { year: "2023", total:"53", pass:"50", percent:"98%"},
    { year: "2024", total:"58", pass:"56", percent:"97%"},
    { year: "2025", total:"78", pass:"76", percent:"98%"},
]

function ResultXII() {
    return (
        <div className="Table">
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>YEAR</th>
                    <th>NO. OF REGISTERED STUDENTS</th>
                    <th>NO. OF STUDENTS PASSED</th>
                    <th>PASS PERCENTAGE</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{val.year}</td>
                            <td>{val.total}</td>
                            <td>{val.pass}</td>
                            <td>{val.percent}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default ResultXII;