import toast from "react-hot-toast";

export const ShowToast = (title: string, body: string, icon?: any, titleColor: string = "text-gray-900") => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? "fade-down" : ""} max-w-md w-full bg-white shadow-lg rounded-lg 
			pointer-events-auto flex ring-1 ring-black ring-opacity-5 transform-gpu transition-all duration-500`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          {icon && <div className="flex-shrink-0 pt-0.5">{icon}</div>}
          <div className="ml-3 flex-1">
            <p className={`font-medium ${titleColor}`}>{title}</p>
            <p className="mt-1 text-sm text-gray-500">{body}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.remove(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-500 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Close
        </button>
      </div>
    </div>
  ));
};
