import Button from "../button";

function MyCard(props) {
  const {
    imgUrl,
    imgAltText,
    title,
    text,
    btnText,
    creator,
    handleDefaultBtnClick,
    handleEditBtnClick,
    handleDeleteBtnClick,
    id,
  } = props;

  function renderExtraButtons() {
    if (creator === "zachyzon") {
      return (
        <>
          <Button
            btnText="Edit"
            buttonType="edit"
            handleEditBtnClick={handleEditBtnClick}
          />
          <Button
            id={id}
            btnText="Delete"
            buttonType="delete"
            handleDeleteBtnClick={handleDeleteBtnClick}
          />
        </>
      );
    }
  }

  return (
    <div className="card m-2" style={{ width: "18rem" }} id={id}>
      <img className="card-img-top" src={imgUrl} alt={imgAltText} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Button
          btnText={btnText}
          buttonType="default"
          handleDefaultBtnClick={handleDefaultBtnClick}
        />
        {/* {creater === "nellysugu" && (
          <>
            <Button btnText="Edit" buttonType="btn btn-warning m-2" />
            <Button btnText="Delete" buttonType="btn btn-danger" />
          </>
        )} */}
        {renderExtraButtons()}
      </div>
    </div>
  );
}

export default MyCard;
