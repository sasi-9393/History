import './index.css'

const Item = props => {
  const {details, deleteCon} = props
  const {id, logoUrl, timeAccessed, title, domainUrl} = details
  const deleteIcon = () => {
    deleteCon(id)
  }
  return (
    <div className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="details-con">
        <div className="logo-con">
          <img src={logoUrl} className="logo" />
        </div>
        <p className="head">{title}</p>
        <p className="para">{domainUrl}</p>
      </div>
      <div className="delete-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete logo"
          className="delete-logo"
          onClick={deleteIcon}
        />
      </div>
    </div>
  )
}

export default Item
