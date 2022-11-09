const SectionHeader = ({
  title, 
  subtitle, 
  ref
}) => {
  ref = (ref == true) || (ref == false) ? ref : false;
  return (
    <div className="PRTFheader">
      <div className={ref ? "boxes active" : "boxes"}>
        <div className="box left"></div>
        <div className="box middle"></div>
        <div className="box right"></div>
      </div>
      <span>{subtitle}</span>
      <p>{title}</p>
    </div>
  )
}
export default SectionHeader;