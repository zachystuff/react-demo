import "./style.css";

function addClassByBtnType(type) {
  switch (type) {
    case "default":
      return "btn-default";
    case "edit":
      return "btn-warning";
    case "delete":
      return "btn-danger";
    default:
      return;
  }
}

function MyButton(props) {
  const {
    buttonType,
    btnText,
    handleDefaultBtnClick,
    handleEditBtnClick,
    handleDeleteBtnClick,
    id,
  } = props;

  function addhandlerByBtnType() {
    switch (buttonType) {
      case "default":
        return handleDefaultBtnClick;
      case "edit":
        return handleEditBtnClick;
      case "delete":
        return handleDeleteBtnClick;
      default:
        return;
    }
  }

  return (
    <button
      id={id}
      className={`btn ${addClassByBtnType(buttonType)}`}
      onClick={addhandlerByBtnType()}
    >
      {btnText}
    </button>
  );
}

export default MyButton;
