import '../mandatory_public_disclosure/table.css';
const data = [
    { info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQR MTR)", details: "8082" },
    { info: "NO. AND SIZE OF THE CLASS ROOMS (IN SQR MTR)",  details: "36 & 48" },
    { info: "NO. AND SIZE OF LABORATRIES INCLUDING COMPUTER LABS (IN SQR MTR)",  details: "06 &  55" },
    { info: "INTERNET FACILITY",  details: "YES" },
    { info: "NO. OF GIRLS TOILETS",  details: "09" },
    { info: "NO. OF BOYS TOILET",  details: "15" },
    { info: "LINK OF THE YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL", details: "https://www.youtube.com/watch?v=ycfc1aAB2hE" },
]

function Infra() {
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

export default Infra;