export default function Profile(props){
    return(
        <>
        <table>
            <tr>
                <td rowspan={7}>
                    <img className='profile' src={requestAnimationFrame('../assests/css/img/1.jpg')} alt="profile picture"/>
                </td>
                <td>ID {props.stu.studentId}</td>
            </tr>
        </table>
        </>
    );
}