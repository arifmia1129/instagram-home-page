import { FaInfoCircle } from "react-icons/fa";

export default function LoginNoticeModal() {
  return (
    <div>
      <dialog id="login-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Login Instruction!</h3>
          <div className="flex justify-center">
            <FaInfoCircle size={100} className="text-primary" />
          </div>
          <p className="py-4">
            Hey, You can login with any information. Bacause of I don't
            implement server side with this login section yet.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
