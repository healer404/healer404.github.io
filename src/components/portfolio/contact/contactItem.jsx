import { Link } from "react-router-dom";

const ContactItem = (props) => {
  const link = props.details.link;
  const icon = props.details.icon;
  const label = props.details.label;
  return(
    <Link href={link} target="_blank" rel="noreferrer">
      <i className={`${icon} fa-lg`}></i>
      <span>{label}</span>
    </Link>
  )
}
export default ContactItem;