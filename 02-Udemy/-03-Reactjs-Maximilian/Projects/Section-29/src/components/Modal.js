// function Modal() {
//   return (
//     <div>
//       <p>are you sure </p>
//       <button> cancel</button>
//       <button> confire</button>
//     </div>
//   );
// }

// export default Modal;

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
