"use client"
const Modal = ({
  children, 
  props,
  callToAction,
  className,
  id
}: {
  children: any,
  props?: any,
  callToAction?: string
  className?: string
  id?: string
}) => {
  return (
    <div className={className}>
      {/* @ts-ignore */}
      <button className="btn btn-xs" onClick={()=>window[`${id}`].showModal()}>
        {callToAction}
      </button>
      <dialog id={id} className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          {children}
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>

  )
}
export default Modal