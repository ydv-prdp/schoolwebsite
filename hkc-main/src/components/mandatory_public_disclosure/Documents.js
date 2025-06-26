import { FaArrowDown } from 'react-icons/fa';
import '../mandatory_public_disclosure/table.css';
const data = [
    { info: "COPIES OF AFFILIATION/ UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY", details: "https://holykrishnascollege.com/mpd/CBSE_AFFILIATION.pdf" },
    { info: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",  details: "https://holykrishnascollege.com/mpd/SOCITIES_RENEWAL_CERTIFICATE.pdf" },
    { info: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE*",  details: "https://holykrishnascollege.com/mpd/RECOGNITION_CERTIFICATE_RTE.pdf" },
    { info: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",  details: "https://holykrishnascollege.com/mpd/BUILDING_SAFETY_CERTIFICATE.pdf" },
    { info: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",  details: "https://holykrishnascollege.com/mpd/FIRE_SAFETY_CERTIFICATE.pdf" },
    { info: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION / UPGRADATION EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL",  details: "https://holykrishnascollege.com/mpd/SELF_CERTIFICATION.pdf" },
    { info: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES", details: "https://holykrishnascollege.com/mpd/WATER_SANITATION_CERTIFICATE.pdf" },
]

function Documents() {
    return (
        <div className="Table">
            <table>
                <tr>
                    <th>S.NO</th>
                    <th className='col2'>INFORMATION</th>
                    <th className='col3'>DETAILS</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{val.info}</td>
                            <td>
                                <a href={`${val.details}`} target="_blank" className='download-link' >
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

export default Documents;